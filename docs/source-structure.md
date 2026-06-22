# Source Structure — English OS

## Monorepo Overview

```
english-learning-os/
├── apps/web/          → Next.js full-stack app (FE + BE API)
├── packages/
│   ├── db/            → Prisma schema + client
│   ├── validators/    → Zod schemas (used by both FE form + BE route)
│   ├── types/         → Shared TypeScript types
│   ├── constants/     → Levels, skills, lesson types, topics
│   └── config/        → tsconfig, tailwind presets, eslint
└── docs/              → API contract, database docs
```

---

## apps/web Structure

```
src/
├── app/
│   ├── (marketing)/           → Public pages — layout: MarketingNav + Footer
│   ├── (auth)/                → Login/Register — layout: centering only
│   ├── (student)/             → Protected student app — layout: Sidebar + Nav
│   ├── admin/                 → Admin CMS — layout: AdminSidebar + AdminNav
│   └── api/                   → Route handlers (thin — delegate to services)
│
├── features/                  → Feature modules — each has:
│   ├── [feature]/
│   │   ├── views/             → Page-level view components (composed)
│   │   ├── components/        → Smaller UI pieces for this feature
│   │   ├── hooks/             → Custom hooks (state, data, form logic)
│   │   ├── api/               → fetch helpers for this feature's endpoints
│   │   └── types/             → Feature-local types (re-exports from packages/types)
│
├── components/
│   ├── ui/                    → shadcn/ui components
│   ├── layout/                → Nav, sidebar, footer, theme-provider
│   ├── common/                → Reusable non-feature-specific components
│   └── motion/                → Framer Motion wrappers
│
├── server/                    → Backend logic — NEVER import in client components
│   ├── auth/                  → getServerSession, requireAdmin
│   ├── services/              → Business logic
│   ├── repositories/          → Database queries (Prisma)
│   ├── storage/               → Cloudinary + R2
│   └── errors/                → AppError class
│
├── hooks/                     → Global shared hooks
├── lib/
│   ├── utils.ts               → cn(), formatDuration()
│   └── supabase/              → server.ts, client.ts
└── styles/globals.css
```

---

## Data Flow

```
Client Component / Page
  → feature/hooks/         (useState, fetch)
  → feature/api/           (fetch /api/...)
  → app/api/route.ts       (thin: validate + delegate)
  → server/services/       (business logic)
  → server/repositories/   (Prisma queries)
  → packages/db            (Prisma client → Supabase PostgreSQL)
```

---

## Rules

### Page must be thin
```tsx
// ✅
export default function DashboardPage() {
  return <DashboardView />;
}

// ❌ Never put hooks/logic in page.tsx
```

### route.ts must be thin
```tsx
// ✅
export async function POST(req: Request) {
  const input = schema.parse(await req.json());
  const result = await service.doSomething(input);
  return NextResponse.json({ data: result, error: null });
}

// ❌ Never put DB queries in route.ts
```

### Component responsibility
- `views/` — compose multiple components, may have one useXxx hook call
- `components/` — pure presentational or small interactive units
- `hooks/` — all state/effect/async logic
- `server/` — never import in `"use client"` files

### Upload flow
- **Image** → Cloudinary signed upload (client uploads directly, no proxy through server)
- **Audio** → Cloudflare R2 presigned PUT (client uploads directly, server only generates URL)
- **Never** pipe file uploads through Next.js route handlers

---

## Claude owns
- `packages/db/prisma/schema.prisma`
- `packages/validators/src/`
- `packages/types/src/`
- `packages/constants/src/`
- `apps/web/src/app/api/`
- `apps/web/src/server/`

## Codex owns
- `apps/web/src/app/(marketing)/`
- `apps/web/src/app/(student)/`
- `apps/web/src/app/admin/`
- `apps/web/src/features/`
- `apps/web/src/components/`
- `apps/web/src/hooks/`
- `apps/web/src/styles/`
