import type {
  GrammarStepContent,
  ListeningStepContent,
  MissionStepContent,
  QuestionStepContent,
  SpeakingStepContent,
  VocabularyStepContent,
  WritingStepContent,
} from "@english-os/types";
import { LESSON_STEP_TYPES } from "@english-os/constants";
import { BookOpen, CheckCircle2, Headphones, HelpCircle, ListChecks, Mic, PenLine, Sparkles } from "lucide-react";

type Step = { id: string; type: string; title: string | null; content: unknown };

type StepMeta = { label: string; icon: React.ComponentType<{ className?: string }>; color: string; bg: string };

const defaultMeta: StepMeta = { label: "Nhiệm vụ", icon: ListChecks, color: "#10B981", bg: "bg-emerald-50" };

const stepMeta: Record<string, StepMeta> = {
  [LESSON_STEP_TYPES.VOCABULARY]: { label: "Từ vựng", icon: BookOpen, color: "#10B981", bg: "bg-emerald-50" },
  [LESSON_STEP_TYPES.GRAMMAR]: { label: "Ngữ pháp", icon: Sparkles, color: "#8B5CF6", bg: "bg-violet-50" },
  [LESSON_STEP_TYPES.LISTENING]: { label: "Listening", icon: Headphones, color: "#2563EB", bg: "bg-blue-50" },
  [LESSON_STEP_TYPES.SPEAKING]: { label: "Speaking", icon: Mic, color: "#06B6D4", bg: "bg-cyan-50" },
  [LESSON_STEP_TYPES.WRITING]: { label: "Writing", icon: PenLine, color: "#F59E0B", bg: "bg-amber-50" },
  [LESSON_STEP_TYPES.QUESTION]: { label: "Quiz", icon: HelpCircle, color: "#2563EB", bg: "bg-blue-50" },
  [LESSON_STEP_TYPES.MISSION]: defaultMeta,
};

export function LessonStepRenderer({ step }: { step: Step }) {
  const meta = stepMeta[step.type] ?? defaultMeta;
  const Icon = meta.icon;

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className={`grid size-14 shrink-0 place-items-center rounded-2xl ${meta.bg}`} style={{ color: meta.color }}>
          <Icon className="size-7" />
        </div>
        <div>
          <span className="rounded-full px-3 py-1 text-xs font-black" style={{ backgroundColor: `${meta.color}16`, color: meta.color }}>{meta.label}</span>
          <h2 className="mt-3 text-2xl font-black text-[#0F172A]">{step.title ?? meta.label}</h2>
        </div>
      </div>

      {renderContent(step)}
    </div>
  );
}

function renderContent(step: Step) {
  switch (step.type) {
    case LESSON_STEP_TYPES.VOCABULARY:
      return <VocabularyContent content={step.content as VocabularyStepContent} />;
    case LESSON_STEP_TYPES.GRAMMAR:
      return <GrammarContent content={step.content as GrammarStepContent} />;
    case LESSON_STEP_TYPES.LISTENING:
      return <ListeningContent content={step.content as ListeningStepContent} />;
    case LESSON_STEP_TYPES.SPEAKING:
      return <SpeakingContent content={step.content as SpeakingStepContent} />;
    case LESSON_STEP_TYPES.WRITING:
      return <WritingContent content={step.content as WritingStepContent} />;
    case LESSON_STEP_TYPES.QUESTION:
      return <QuestionContent content={step.content as QuestionStepContent} />;
    case LESSON_STEP_TYPES.MISSION:
      return <MissionContent content={step.content as MissionStepContent} />;
    default:
      return <EmptyContent />;
  }
}

function VocabularyContent({ content }: { content: VocabularyStepContent }) {
  if (!content.items?.length) return <EmptyContent />;

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {content.items.map((item) => (
        <div key={item.id} className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xl font-black text-[#0F172A]">{item.word}</p>
              {item.pronunciation ? <p className="mt-1 text-sm font-bold text-[#2563EB]">{item.pronunciation}</p> : null}
            </div>
            {item.audioUrl ? <audio controls src={item.audioUrl} className="h-8 w-28" /> : null}
          </div>
          <p className="mt-3 text-sm font-medium leading-6 text-[#334155]">{item.definition}</p>
          {item.exampleSentence ? <p className="mt-3 rounded-xl bg-white p-3 text-sm italic leading-6 text-[#64748B]">"{item.exampleSentence}"</p> : null}
          {item.collocations?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {item.collocations.map((collocation) => (
                <span key={collocation} className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-[#10B981]">{collocation}</span>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function GrammarContent({ content }: { content: GrammarStepContent }) {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-violet-100 bg-violet-50 p-5">
        <h3 className="font-black text-[#0F172A]">{content.title}</h3>
        <p className="mt-2 text-sm font-medium leading-7 text-[#334155]">{content.explanation}</p>
        {content.structure ? <p className="mt-4 rounded-xl bg-white p-3 font-mono text-sm text-[#2563EB]">{content.structure}</p> : null}
      </div>
      <div className="grid gap-3">
        {content.examples?.map((example) => (
          <div key={example} className="rounded-2xl border border-[#E2E8F0] bg-white p-4 text-sm font-semibold text-[#334155]">
            {example}
          </div>
        ))}
      </div>
    </div>
  );
}

function ListeningContent({ content }: { content: ListeningStepContent }) {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
        <p className="mb-3 text-sm font-black text-[#2563EB]">Nghe audio và trả lời câu hỏi</p>
        <audio controls src={content.audioUrl} className="w-full" />
      </div>
      {content.transcript ? (
        <details className="rounded-2xl border border-[#E2E8F0] bg-white p-4">
          <summary className="cursor-pointer font-black text-[#0F172A]">Xem transcript</summary>
          <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-[#64748B]">{content.transcript}</p>
        </details>
      ) : null}
      <QuestionContent content={{ questions: content.questions ?? [] }} />
    </div>
  );
}

function SpeakingContent({ content }: { content: SpeakingStepContent }) {
  return (
    <PromptCard
      title={content.prompt}
      meta={`${content.durationSeconds} giây luyện nói`}
      hints={content.hints}
      color="#06B6D4"
    />
  );
}

function WritingContent({ content }: { content: WritingStepContent }) {
  const meta = [content.wordCountMin ? `Tối thiểu ${content.wordCountMin} từ` : null, content.wordCountMax ? `Tối đa ${content.wordCountMax} từ` : null].filter(Boolean).join(" - ");
  return <PromptCard title={content.prompt} meta={meta || "Viết câu trả lời ngắn"} hints={content.hints} color="#F59E0B" />;
}

function QuestionContent({ content }: { content: QuestionStepContent }) {
  if (!content.questions?.length) return null;

  return (
    <div className="space-y-4">
      {content.questions.map((question, index) => (
        <div key={question.id} className="rounded-2xl border border-[#E2E8F0] bg-white p-4">
          <p className="font-black text-[#0F172A]">{index + 1}. {question.prompt}</p>
          <div className="mt-3 grid gap-2">
            {question.options.map((option) => (
              <button key={option.id} className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-3 text-left text-sm font-semibold text-[#334155] transition-colors hover:border-blue-200 hover:bg-blue-50">
                {option.text}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function MissionContent({ content }: { content: MissionStepContent }) {
  return (
    <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
      <h3 className="text-xl font-black text-[#0F172A]">{content.title}</h3>
      <p className="mt-2 text-sm font-medium leading-7 text-[#334155]">{content.description}</p>
      <div className="mt-4 space-y-2">
        {content.instructions?.map((instruction) => (
          <div key={instruction} className="flex items-start gap-2 rounded-xl bg-white p-3 text-sm font-semibold text-[#334155]">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#10B981]" />
            {instruction}
          </div>
        ))}
      </div>
    </div>
  );
}

function PromptCard({ title, meta, hints, color }: { title: string; meta: string; hints: string[]; color: string }) {
  return (
    <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
      <p className="text-sm font-black" style={{ color }}>{meta}</p>
      <p className="mt-3 text-lg font-black leading-7 text-[#0F172A]">{title}</p>
      {hints?.length ? (
        <div className="mt-4 grid gap-2">
          {hints.map((hint) => (
            <div key={hint} className="rounded-xl bg-white p-3 text-sm font-semibold text-[#334155]">{hint}</div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function EmptyContent() {
  return (
    <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 text-sm font-medium text-[#64748B]">
      Nội dung bài học đang được cập nhật.
    </div>
  );
}
