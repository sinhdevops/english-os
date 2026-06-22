import { LESSON_STEP_TYPES } from "@english-os/constants";

type Step = { id: string; type: string; title: string | null; content: unknown };

export function LessonStepRenderer({ step }: { step: Step }) {
  return (
    <div className="space-y-4">
      {step.title && <h2 className="text-lg font-semibold text-brand-text">{step.title}</h2>}
      <div className="text-brand-muted text-sm">
        {/* Codex sẽ implement từng step type ở đây */}
        <StepTypeTag type={step.type} />
        <pre className="mt-4 text-xs overflow-auto rounded-xl bg-white/5 p-4">
          {JSON.stringify(step.content, null, 2)}
        </pre>
      </div>
    </div>
  );
}

function StepTypeTag({ type }: { type: string }) {
  const labels: Record<string, string> = {
    [LESSON_STEP_TYPES.VOCABULARY]: "Từ vựng",
    [LESSON_STEP_TYPES.GRAMMAR]: "Ngữ pháp",
    [LESSON_STEP_TYPES.LISTENING]: "Nghe",
    [LESSON_STEP_TYPES.SPEAKING]: "Nói",
    [LESSON_STEP_TYPES.WRITING]: "Viết",
    [LESSON_STEP_TYPES.QUESTION]: "Câu hỏi",
    [LESSON_STEP_TYPES.MISSION]: "Nhiệm vụ",
  };

  return (
    <span className="inline-block rounded-full bg-brand-primary/10 px-3 py-1 text-xs text-brand-primary">
      {labels[type] ?? type}
    </span>
  );
}
