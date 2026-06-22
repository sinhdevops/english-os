# Codex Prompt — English OS Frontend

> Copy paste prompt này cho Codex để làm FE.

---

Bạn là senior frontend engineer + UI/UX designer.

## Dự án
**English OS** — nền tảng học tiếng Anh từ số 0 đến IELTS 7.0.
Monorepo Turborepo. App nằm trong `apps/web/` (Next.js 14 App Router).

## Tech stack của bạn
- Next.js 14 App Router + TypeScript
- Tailwind CSS
- shadcn/ui (components đã có trong `src/components/ui/`)
- lucide-react (icons chính)
- react-icons (chỉ dùng khi cần brand icon)
- framer-motion (animation nhẹ)
- react-hook-form + zod (form)

## Design system
```
Background: #07111F    (brand-bg)
Surface:    #0E1C31    (brand-surface)
Card:       #111F35    (brand-card)
Primary:    #4F8CFF    (brand-primary)
Accent:     #00D4FF    (brand-accent)
Gold:       #F5C76B    (brand-gold)
Text:       #F8FAFC    (brand-text)
Muted:      #94A3B8    (brand-muted)
Border:     rgba(255,255,255,0.08)
```

Utility classes đã có:
- `.glass-card` → glassmorphism card
- `.gradient-border` → gradient border pseudo-element

## Những gì bạn ĐƯỢC làm
- Mọi file trong `src/app/(marketing)/`, `src/app/(auth)/`, `src/app/(student)/`, `src/app/admin/`
- Mọi file trong `src/features/`
- Mọi file trong `src/components/`
- Mọi file trong `src/hooks/`
- Mọi file trong `src/styles/`

## Những gì bạn KHÔNG được sửa
- `src/app/api/` — API routes của Claude
- `src/server/` — backend services/repositories
- `packages/db/` — Prisma schema
- `packages/validators/` — zod schemas (chỉ import, không sửa)

## Rules quan trọng

1. **Page phải mỏng** — chỉ import view:
```tsx
export default function DashboardPage() {
  return <DashboardView />;
}
```

2. **Tách component nhỏ** — 1 component < 150 dòng nếu có thể

3. **Logic trong hook** — không viết state/effect trong view lớn

4. **Server Component mặc định** — chỉ `"use client"` khi cần state/event/browser API

5. **Form dùng react-hook-form + zod** — không dùng controlled state thuần

6. **Icon**: dùng lucide-react. Cần brand icon thì dùng react-icons.

7. **Responsive mobile-first** — breakpoint `md:` cho tablet, `lg:` cho desktop

8. **Skeleton loading** cho mọi page fetch data

9. **Không gọi Prisma/Supabase trực tiếp trong component**

10. **Không tự fetch từ server component sang Prisma** — gọi qua `/api/...`

## API đã có (xem docs/api-contract.md để biết chi tiết)
- `GET /api/topics` → list topics
- `GET /api/topics/:id` → topic detail
- `POST /api/lessons/:id/complete` → complete lesson
- `POST /api/practice/answer` → submit answer
- `POST /api/practice/writing` → submit writing
- `GET /api/review` → due review items
- `POST /api/review` → complete review item
- `GET /api/progress` → dashboard data
- `GET /api/uploads/image/sign` → Cloudinary signature
- `POST /api/uploads/audio/presign` → R2 presign URL
- `POST /api/uploads/audio/complete` → save audio metadata
- `GET /api/admin/topics` → admin topic list
- `POST /api/admin/topics` → create topic
- `PATCH /api/admin/topics/:id` → update topic
- `DELETE /api/admin/topics/:id` → delete topic

## Các màn cần implement

### Priority 1 — MVP
- [ ] Landing page đẹp, có hero + feature sections
- [ ] Dashboard layout + skeleton
- [ ] Topic card (đã có skeleton) — cải thiện animation
- [ ] Lesson player — implement từng step type (Vocabulary, Grammar, Listening, Speaking, Writing, Question, Mission)
- [ ] Speaking Room — waveform khi recording, đẹp hơn
- [ ] Writing Lab — split layout đẹp hơn
- [ ] Review card — flip card animation
- [ ] Login + Register form

### Priority 2
- [ ] Roadmap page — timeline đẹp với animation
- [ ] Topic detail — lesson list với progress
- [ ] Progress page — charts kỹ năng
- [ ] Admin CMS — CRUD topics, lessons

## Folder structure cho mỗi feature
```
features/[name]/
├── views/       → composed page views
├── components/  → smaller UI pieces
├── hooks/       → custom hooks
├── api/         → fetch helpers
└── types/       → local types
```

## Style nên hướng đến
Premium dark mode SaaS + Học thuật hiện đại.
Không quá colorful. Clean, dễ tập trung học.
Tham khảo: Linear app, Vercel dashboard, Raycast.
