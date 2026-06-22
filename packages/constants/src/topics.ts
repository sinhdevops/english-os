// ─── Foundation Topics (A0–A2) ─────────────────────────────────────────────

export const ZERO_TOPICS = [
  { order: 1, slug: "introduce-yourself", title: "Introduce Yourself", titleVi: "Giới thiệu bản thân" },
  { order: 2, slug: "numbers-time-dates", title: "Numbers, Time & Dates", titleVi: "Số, giờ & ngày tháng" },
  { order: 3, slug: "my-home", title: "My Home & Daily Objects", titleVi: "Nhà & đồ vật hằng ngày" },
  { order: 4, slug: "my-family", title: "My Family", titleVi: "Gia đình tôi" },
] as const;

export const A1_TOPICS = [
  { order: 1, slug: "daily-routine", title: "Daily Routine", titleVi: "Thói quen hằng ngày" },
  { order: 2, slug: "food-and-drink", title: "Food & Drink", titleVi: "Ăn uống" },
  { order: 3, slug: "hobbies-interests", title: "Hobbies & Interests", titleVi: "Sở thích" },
  { order: 4, slug: "school-study", title: "School & Study", titleVi: "Trường học & học tập" },
  { order: 5, slug: "places-transport", title: "Places & Transport", titleVi: "Địa điểm & phương tiện" },
] as const;

export const A2_TOPICS = [
  { order: 1, slug: "travel-tourism", title: "Travel & Tourism", titleVi: "Du lịch" },
  { order: 2, slug: "health-body", title: "Health & the Body", titleVi: "Sức khỏe & cơ thể" },
  { order: 3, slug: "work-jobs", title: "Work & Jobs", titleVi: "Công việc" },
  { order: 4, slug: "shopping-money", title: "Shopping & Money", titleVi: "Mua sắm & tiền bạc" },
  { order: 5, slug: "weather-nature", title: "Weather & Nature", titleVi: "Thời tiết & thiên nhiên" },
] as const;

// ─── IELTS Foundation Topics (B1–B2) ───────────────────────────────────────

export const B1_TOPICS = [
  { order: 1, slug: "education", title: "Education", titleVi: "Giáo dục" },
  { order: 2, slug: "technology-society", title: "Technology & Society", titleVi: "Công nghệ & xã hội" },
  { order: 3, slug: "environment-climate", title: "Environment & Climate", titleVi: "Môi trường & khí hậu" },
  { order: 4, slug: "media-communication", title: "Media & Communication", titleVi: "Truyền thông & giao tiếp" },
  { order: 5, slug: "culture-art", title: "Culture & Art", titleVi: "Văn hóa & nghệ thuật" },
  { order: 6, slug: "housing-cities", title: "Housing & Cities", titleVi: "Nhà ở & đô thị" },
  { order: 7, slug: "sport-fitness", title: "Sport & Fitness", titleVi: "Thể thao & sức khỏe" },
] as const;

export const B2_TOPICS = [
  { order: 1, slug: "ielts-writing-task1", title: "IELTS Writing Task 1", titleVi: "Viết Task 1 — Biểu đồ & bảng" },
  { order: 2, slug: "ielts-writing-task2-opinion", title: "IELTS Writing Task 2 — Opinion", titleVi: "Viết Task 2 — Quan điểm cá nhân" },
  { order: 3, slug: "ielts-writing-task2-discussion", title: "IELTS Writing Task 2 — Discussion", titleVi: "Viết Task 2 — Thảo luận 2 chiều" },
  { order: 4, slug: "ielts-speaking-strategy", title: "IELTS Speaking Strategy", titleVi: "Chiến thuật Speaking" },
  { order: 5, slug: "ielts-reading-skills", title: "IELTS Reading Skills", titleVi: "Kỹ năng Reading" },
  { order: 6, slug: "ielts-listening-skills", title: "IELTS Listening Skills", titleVi: "Kỹ năng Listening" },
] as const;

// ─── Advanced IELTS Topics (C1–C2) ─────────────────────────────────────────

export const C1_TOPICS = [
  { order: 1, slug: "globalisation", title: "Globalisation", titleVi: "Toàn cầu hóa" },
  { order: 2, slug: "government-society", title: "Government & Society", titleVi: "Chính phủ & xã hội" },
  { order: 3, slug: "crime-justice", title: "Crime & Justice", titleVi: "Tội phạm & pháp luật" },
  { order: 4, slug: "science-research", title: "Science & Research", titleVi: "Khoa học & nghiên cứu" },
  { order: 5, slug: "advanced-writing", title: "Advanced Writing", titleVi: "Viết nâng cao — Band 7+" },
  { order: 6, slug: "advanced-speaking", title: "Advanced Speaking", titleVi: "Nói nâng cao — Band 7+" },
] as const;

export const C2_TOPICS = [
  { order: 1, slug: "band9-writing", title: "Band 8–9 Writing", titleVi: "Viết Band 8–9" },
  { order: 2, slug: "band9-speaking", title: "Band 8–9 Speaking", titleVi: "Nói Band 8–9" },
  { order: 3, slug: "full-mock-tests", title: "Full Mock Tests", titleVi: "Thi thử toàn bộ" },
  { order: 4, slug: "error-elimination", title: "Error Elimination", titleVi: "Loại bỏ lỗi sai" },
  { order: 5, slug: "exam-strategy", title: "Exam Strategy", titleVi: "Chiến thuật thi IELTS" },
] as const;

// ─── All 30 IELTS Topic Banks ───────────────────────────────────────────────

export const IELTS_TOPIC_BANKS = [
  { slug: "tb-education", title: "Education", titleVi: "Giáo dục" },
  { slug: "tb-work", title: "Work", titleVi: "Công việc" },
  { slug: "tb-technology", title: "Technology", titleVi: "Công nghệ" },
  { slug: "tb-environment", title: "Environment", titleVi: "Môi trường" },
  { slug: "tb-health", title: "Health", titleVi: "Sức khỏe" },
  { slug: "tb-transport", title: "Transport", titleVi: "Giao thông" },
  { slug: "tb-housing", title: "Housing", titleVi: "Nhà ở" },
  { slug: "tb-cities", title: "Cities", titleVi: "Đô thị" },
  { slug: "tb-countryside", title: "Countryside", titleVi: "Nông thôn" },
  { slug: "tb-tourism", title: "Tourism", titleVi: "Du lịch" },
  { slug: "tb-culture", title: "Culture", titleVi: "Văn hóa" },
  { slug: "tb-media", title: "Media", titleVi: "Truyền thông" },
  { slug: "tb-family", title: "Family", titleVi: "Gia đình" },
  { slug: "tb-friends", title: "Friends & Relationships", titleVi: "Bạn bè & quan hệ" },
  { slug: "tb-sports", title: "Sports", titleVi: "Thể thao" },
  { slug: "tb-food", title: "Food", titleVi: "Thức ăn" },
  { slug: "tb-shopping", title: "Shopping", titleVi: "Mua sắm" },
  { slug: "tb-money", title: "Money & Finance", titleVi: "Tài chính" },
  { slug: "tb-government", title: "Government", titleVi: "Chính phủ" },
  { slug: "tb-public-services", title: "Public Services", titleVi: "Dịch vụ công" },
  { slug: "tb-crime", title: "Crime & Safety", titleVi: "Tội phạm & an toàn" },
  { slug: "tb-art", title: "Art", titleVi: "Nghệ thuật" },
  { slug: "tb-music", title: "Music", titleVi: "Âm nhạc" },
  { slug: "tb-science", title: "Science", titleVi: "Khoa học" },
  { slug: "tb-globalisation", title: "Globalisation", titleVi: "Toàn cầu hóa" },
  { slug: "tb-history", title: "History", titleVi: "Lịch sử" },
  { slug: "tb-language", title: "Language Learning", titleVi: "Học ngoại ngữ" },
  { slug: "tb-childhood", title: "Childhood", titleVi: "Tuổi thơ" },
  { slug: "tb-lifestyle", title: "Lifestyle", titleVi: "Lối sống" },
  { slug: "tb-future", title: "Future Society", titleVi: "Xã hội tương lai" },
] as const;

// Legacy alias
export const FOUNDATION_TOPICS = A1_TOPICS;
export const REAL_ESTATE_TOPICS = [] as const;
