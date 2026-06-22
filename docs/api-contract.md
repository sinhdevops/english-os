# API Contract — English OS

> Tất cả response đều theo format: `{ data: T | null, error: { code, message } | null, meta? }`

---

## Auth

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | `/auth/callback` | — | Supabase OAuth callback, creates Profile |

---

## Topics

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | `/api/topics` | Optional | List published topics với progress nếu có session |
| GET | `/api/topics/:id` | — | Topic detail |

**GET /api/topics — Response:**
```json
{
  "data": [
    {
      "id": "cuid",
      "title": "Introduce Yourself",
      "slug": "introduce-yourself",
      "description": "...",
      "thumbnailUrl": null,
      "levelName": "Zero",
      "levelSlug": "zero",
      "lessonCount": 5,
      "progress": 40
    }
  ],
  "error": null
}
```

---

## Lessons

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| POST | `/api/lessons/:id/complete` | Required | Mark lesson complete |

**POST /api/lessons/:id/complete — Body:**
```json
{ "score": 85 }
```

---

## Practice

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| POST | `/api/practice/answer` | Required | Submit question answer |
| POST | `/api/practice/writing` | Required | Submit writing |

**POST /api/practice/answer — Body:**
```json
{
  "questionId": "cuid",
  "selectedOptionId": "cuid"
}
```
**Response:**
```json
{
  "data": {
    "answerId": "cuid",
    "isCorrect": true,
    "explanation": "Because...",
    "correctOptionId": "cuid"
  },
  "error": null
}
```

---

## Review (Spaced Repetition)

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | `/api/review` | Required | Get due review items |
| POST | `/api/review` | Required | Complete a review item (SM-2) |

**POST /api/review — Body:**
```json
{
  "reviewItemId": "cuid",
  "quality": 4
}
```
SM-2 quality: 0=quên hoàn toàn, 1-2=khó, 3=ok, 4-5=dễ

---

## Progress / Dashboard

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | `/api/progress` | Required | Full dashboard data |

---

## Uploads — Image (Cloudinary)

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | `/api/uploads/image/sign` | Required | Get signed upload params |

**Response:**
```json
{
  "data": {
    "signature": "...",
    "timestamp": 1726000000,
    "cloudName": "your-cloud",
    "apiKey": "...",
    "folder": "english-os/topics"
  },
  "error": null
}
```

---

## Uploads — Audio (Cloudflare R2)

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| POST | `/api/uploads/audio/presign` | Required | Get presigned PUT URL |
| POST | `/api/uploads/audio/complete` | Required | Save submission metadata |

**POST /api/uploads/audio/presign — Body:**
```json
{
  "fileName": "recording.webm",
  "contentType": "audio/webm",
  "fileSize": 345000,
  "purpose": "speaking_submission"
}
```
**Response:**
```json
{
  "data": {
    "uploadUrl": "https://...",
    "objectKey": "audio/users/uid/speaking_submission/abc.webm",
    "expiresAt": "2024-01-01T00:05:00Z"
  },
  "error": null
}
```

**POST /api/uploads/audio/complete — Body:**
```json
{
  "objectKey": "audio/users/uid/speaking_submission/abc.webm",
  "speakingTaskId": "cuid",
  "durationSeconds": 45,
  "mimeType": "audio/webm",
  "fileSizeBytes": 345000
}
```

---

## Admin (ADMIN role required)

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/admin/topics` | List all topics |
| POST | `/api/admin/topics` | Create topic |
| PATCH | `/api/admin/topics/:id` | Update topic |
| DELETE | `/api/admin/topics/:id` | Delete topic |
