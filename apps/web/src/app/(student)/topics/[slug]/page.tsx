import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TopicDetailView } from "@/features/topics/views/topic-detail-view";
import { topicRepository } from "@/server/repositories/topic.repository";
import { PROGRESS_STATUS } from "@english-os/constants";
import type { TopicDetail } from "@english-os/types";

type Props = { params: Promise<{ slug: string }> };
type RawLesson = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  order: number;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = await topicRepository.findBySlug(slug);
  if (!topic) return { title: "Topic not found" };
  return { title: topic.title };
}

export default async function TopicDetailPage({ params }: Props) {
  const { slug } = await params;
  const raw = await topicRepository.findBySlugWithLessons(slug);
  if (!raw) notFound();

  const topicDetail: TopicDetail = {
    id: raw.id,
    title: raw.title,
    slug: raw.slug,
    description: raw.description,
    thumbnailUrl: raw.thumbnailUrl,
    levelName: raw.level.name,
    levelSlug: raw.level.slug,
    lessonCount: raw.lessons.length,
    progress: 0,
    lessons: raw.lessons.map((lesson: RawLesson) => ({
      id: lesson.id,
      title: lesson.title,
      slug: lesson.slug,
      description: lesson.description,
      order: lesson.order,
      status: PROGRESS_STATUS.NOT_STARTED,
      skills: [],
    })),
  };

  return <TopicDetailView topic={topicDetail} />;
}
