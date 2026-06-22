# Database Design — English OS

## Connection Setup (Prisma + Supabase)

```env
# Pooler (used by Prisma at runtime — Supavisor)
DATABASE_URL="postgresql://postgres.[ref]:[pw]@aws-0-[region].pooler.supabase.com:6543/postgres?pgbouncer=true"

# Direct (used by prisma migrate)
DIRECT_URL="postgresql://postgres.[ref]:[pw]@aws-0-[region].pooler.supabase.com:5432/postgres"
```

In `schema.prisma`:
```prisma
datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
```

---

## Schema Summary

| Model | Purpose |
|-------|---------|
| `Profile` | User profile, links to Supabase Auth via `userId` |
| `Level` | Zero → A1 → A2 → B1 → B2 → IELTS 6.5 → 7.0 |
| `Topic` | Topic grouped by Level |
| `Lesson` | Lesson inside a Topic |
| `LessonStep` | Individual step in a Lesson (vocab / grammar / speaking / writing / question / mission) |
| `VocabularyItem` | Vocabulary word attached to a LessonStep |
| `GrammarPoint` | Grammar explanation attached to a LessonStep |
| `Question` | Multiple choice question |
| `QuestionOption` | Answer options for Question |
| `UserAnswer` | Student's answer to a Question |
| `UserLessonProgress` | Tracks completion of each lesson per user |
| `ReviewItem` | SM-2 spaced repetition item per vocabulary word per user |
| `SpeakingTask` | Speaking prompt attached to a Lesson |
| `SpeakingSubmission` | Audio file metadata (key in R2) per submission |
| `WritingTask` | Writing prompt attached to a Lesson |
| `WritingSubmission` | Student's written answer |
| `Streak` | Daily streak counter per user |

---

## Key Relationships

```
Level → Topic → Lesson → LessonStep
                       → SpeakingTask → SpeakingSubmission
                       → WritingTask → WritingSubmission

LessonStep → VocabularyItem → ReviewItem
           → GrammarPoint
           → Question → QuestionOption → UserAnswer

Profile → UserLessonProgress
        → UserAnswer
        → ReviewItem
        → SpeakingSubmission
        → WritingSubmission
        → Streak
```

---

## Storage Guidelines (keep Supabase free tier healthy)

| Data | Storage |
|------|---------|
| Text content (lessons, vocab, grammar) | Supabase PostgreSQL |
| User progress, answers, review | Supabase PostgreSQL |
| Images (thumbnails) | Cloudinary (store URL in DB only) |
| Audio recordings (speaking) | Cloudflare R2 (store `audioKey` in DB) |
| Lesson audio files | Cloudflare R2 (store URL in DB) |

**Never store:**
- Base64 images in DB
- Audio binary in DB
- Large JSON blobs in `content` field
- Unlimited user answers without cleanup policy

---

## Spaced Repetition (SM-2)

`ReviewItem` uses SM-2 algorithm:
- `interval`: days until next review
- `easeFactor`: starts at 2.5, adjusted by quality rating
- `repetitions`: number of successful reviews
- `nextReviewAt`: calculated date for next review

Quality scale (0-5):
- 0 = hoàn toàn quên (reset to 1 day)
- 1-2 = khó khăn
- 3 = ok, nhớ được
- 4-5 = dễ dàng (increase interval)

---

## Commands

```bash
# Generate Prisma client after schema change
pnpm db:generate

# Create and apply migration
pnpm db:migrate

# Seed database with initial data
pnpm db:seed

# Open Prisma Studio
pnpm db:studio
```
