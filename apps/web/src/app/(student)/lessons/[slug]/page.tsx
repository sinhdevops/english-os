import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LessonPlayerView } from "@/features/lessons/views/lesson-player-view";
import { lessonRepository } from "@/server/repositories/lesson.repository";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lesson = await lessonRepository.findBySlug(slug);
  if (!lesson) return { title: "Lesson not found" };
  return { title: lesson.title };
}

export default async function LessonPage({ params }: Props) {
  const { slug } = await params;
  const lesson = await lessonRepository.findBySlugWithSteps(slug);
  if (!lesson) notFound();

  return <LessonPlayerView lesson={lesson} />;
}
