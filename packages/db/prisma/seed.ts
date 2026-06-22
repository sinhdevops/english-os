import { PrismaClient, SkillType } from "@prisma/client";
import {
  LEVELS,
  GRAMMAR_REFERENCE,
  IELTS_STUDY_ROADMAP,
  // Zero
  VOCAB_ZERO_INTRODUCE, VOCAB_ZERO_NUMBERS, VOCAB_ZERO_HOME, VOCAB_ZERO_FAMILY,
  // A1
  VOCAB_A1_DAILY_ROUTINE, VOCAB_A1_FOOD, VOCAB_A1_HOBBIES, VOCAB_A1_SCHOOL, VOCAB_A1_TRANSPORT,
  // A2
  VOCAB_A2_TRAVEL, VOCAB_A2_HEALTH, VOCAB_A2_WORK, VOCAB_A2_SHOPPING, VOCAB_A2_WEATHER,
  // B1
  VOCAB_B1_EDUCATION, VOCAB_B1_TECHNOLOGY, VOCAB_B1_ENVIRONMENT,
  VOCAB_B1_MEDIA, VOCAB_B1_CULTURE, VOCAB_B1_HOUSING, VOCAB_B1_SPORT,
  // B2
  VOCAB_B2_WRITING_T1, VOCAB_B2_WRITING_T2, VOCAB_B2_SPEAKING_COLLOCATIONS,
  VOCAB_B2_IELTS_READING, VOCAB_B2_IELTS_LISTENING,
  type VocabEntry,
} from "@english-os/constants";

const prisma = new PrismaClient();

// ─── Types ────────────────────────────────────────────────────────────────────

type GrammarData = { title: string; explanation: string; structure: string; examples: string[] };
type SpeakingData = { prompt: string; hints: string[]; duration: number };
type WritingData = { prompt: string; min: number; max: number; hints: string[] };
type MissionData = { title: string; description: string; instructions: string[] };
type MCQQuestion = {
  prompt: string;
  skill: SkillType;
  options: { text: string; isCorrect: boolean; explanation?: string }[];
};

// ─── Helper: Create Full Lesson Steps (idempotent) ───────────────────────────

async function createLessonSteps(
  lessonId: string,
  vocab: VocabEntry[],
  grammar: GrammarData,
  speaking: SpeakingData,
  writing: WritingData,
  mission: MissionData,
  questions?: MCQQuestion[]
) {
  const existing = await prisma.lessonStep.count({ where: { lessonId } });
  if (existing > 0) return;

  let order = 1;

  // 1. Vocabulary
  const vocabStep = await prisma.lessonStep.create({
    data: { lessonId, type: "VOCABULARY", order: order++, title: "Key Vocabulary", content: {} },
  });
  for (const v of vocab) {
    await prisma.vocabularyItem.create({ data: { ...v, lessonStepId: vocabStep.id } });
  }

  // 2. Grammar
  await prisma.lessonStep.create({
    data: {
      lessonId,
      type: "GRAMMAR",
      order: order++,
      title: grammar.title,
      content: {},
      grammarPoints: { create: { title: grammar.title, explanation: grammar.explanation, structure: grammar.structure, examples: grammar.examples } },
    },
  });

  // 3. MCQ Questions
  if (questions && questions.length > 0) {
    const qStep = await prisma.lessonStep.create({
      data: { lessonId, type: "QUESTION", order: order++, title: "Check Your Understanding", content: {} },
    });
    for (const q of questions) {
      await prisma.question.create({
        data: { lessonStepId: qStep.id, prompt: q.prompt, skill: q.skill, options: { create: q.options } },
      });
    }
  }

  // 4. Speaking
  const speakingTask = await prisma.speakingTask.create({
    data: { lessonId, prompt: speaking.prompt, durationSeconds: speaking.duration, hints: speaking.hints },
  });
  await prisma.lessonStep.create({
    data: {
      lessonId, type: "SPEAKING", order: order++, title: "Speaking Practice",
      content: { taskId: speakingTask.id, prompt: speakingTask.prompt, durationSeconds: speakingTask.durationSeconds, hints: speakingTask.hints },
    },
  });

  // 5. Writing
  const writingTask = await prisma.writingTask.create({
    data: { lessonId, prompt: writing.prompt, wordCountMin: writing.min, wordCountMax: writing.max, hints: writing.hints },
  });
  await prisma.lessonStep.create({
    data: {
      lessonId, type: "WRITING", order: order++, title: "Writing Practice",
      content: { taskId: writingTask.id, prompt: writingTask.prompt, wordCountMin: writingTask.wordCountMin, wordCountMax: writingTask.wordCountMax, hints: writingTask.hints },
    },
  });

  // 6. Mission
  await prisma.lessonStep.create({
    data: { lessonId, type: "MISSION", order: order++, title: "Real-life Mission", content: mission },
  });
}

// ─── Helper: Upsert Topic + Lesson ───────────────────────────────────────────

async function upsertTopic(levelId: string, slug: string, title: string, description: string, order: number) {
  return prisma.topic.upsert({
    where: { slug },
    update: {},
    create: { title, slug, description, levelId, order, isPublished: true },
  });
}

async function upsertLesson(topicId: string, slug: string, title: string, description: string, order: number) {
  return prisma.lesson.upsert({
    where: { slug },
    update: {},
    create: { title, slug, description, topicId, order, isPublished: true },
  });
}

// ─── Grammar lookup helper ────────────────────────────────────────────────────

function getGrammar(id: string): GrammarData {
  const ref = GRAMMAR_REFERENCE as ReadonlyArray<{ id: string; title: string; explanation: string; structure: string; examples: readonly string[]; ieltsUse: readonly string[]; commonMistakes: readonly string[]; level: string; function: string }>;
  const g = ref.find((x) => x.id === id);
  if (!g) throw new Error(`Grammar not found: ${id}`);
  return { title: g.title, explanation: g.explanation, structure: g.structure, examples: [...g.examples] };
}

// ─── Main Seed ────────────────────────────────────────────────────────────────

async function main() {
  console.log("🌱 Seeding English OS database...");

  // ── Levels ──────────────────────────────────────────────────────────────────
  for (const level of LEVELS) {
    await prisma.level.upsert({
      where: { slug: level.slug },
      update: {},
      create: { name: level.name, slug: level.slug, tier: level.tier, order: level.order, description: level.description },
    });
  }
  console.log("✅ Levels seeded");

  const getLevel = async (slug: string) => prisma.level.findUniqueOrThrow({ where: { slug } });

  // ════════════════════════════════════════════════════════════════════════════
  // ZERO LEVEL
  // ════════════════════════════════════════════════════════════════════════════
  const zeroLevel = await getLevel("zero");

  // ── Topic 0: Roadmap Overview ────────────────────────────────────────────────
  const roadmapTopic = await upsertTopic(zeroLevel.id, "roadmap-overview", "Your IELTS Journey — Start Here", "Hiểu lộ trình từ Zero đến IELTS 7.0 và cam kết thời gian.", 0);
  const roadmapLesson = await upsertLesson(roadmapTopic.id, "ielts-roadmap-intro", "Lộ Trình 18 Tháng — Zero to IELTS 7.0", "Tìm hiểu 4 giai đoạn học và cam kết: 18 tháng từ con số 0 đến IELTS 7.0+.", 1);
  {
    const existing = await prisma.lessonStep.count({ where: { lessonId: roadmapLesson.id } });
    if (existing === 0) {
      await prisma.lessonStep.create({
        data: {
          lessonId: roadmapLesson.id, type: "MISSION", order: 1, title: "Cam Kết 18 Tháng",
          content: {
            title: "Lộ trình từ Zero đến IELTS 7.0",
            commitment: IELTS_STUDY_ROADMAP.commitment,
            accelerated: IELTS_STUDY_ROADMAP.accelerated,
            stages: IELTS_STUDY_ROADMAP.stages,
            dailySchedule: IELTS_STUDY_ROADMAP.dailySchedule,
            guarantee: IELTS_STUDY_ROADMAP.guarantee,
            instructions: [
              "Đọc kỹ 4 giai đoạn học và xác định bạn đang ở giai đoạn nào.",
              "Cam kết ít nhất 2,5 tiếng học mỗi ngày, 6 ngày mỗi tuần.",
              "Hoàn thành 100% các bài học theo thứ tự — không được bỏ qua.",
              "Ghi âm 100% bài speaking và nghe lại để tự nhận xét.",
              "Bắt đầu từ bài học đầu tiên ngay bây giờ!",
            ],
          },
        },
      });
      const wt = await prisma.writingTask.create({
        data: {
          lessonId: roadmapLesson.id,
          prompt: "Write your IELTS commitment statement: your name, your target band score, your target date, and what you will do every day to reach it.",
          wordCountMin: 30,
          wordCountMax: 80,
          hints: ["My name is ...", "My IELTS goal is band ...", "I will achieve it by ...", "Every day I will study ... hours.", "I promise to ..."],
        },
      });
      await prisma.lessonStep.create({
        data: {
          lessonId: roadmapLesson.id, type: "WRITING", order: 2, title: "Your Commitment Statement",
          content: { taskId: wt.id, prompt: wt.prompt, wordCountMin: wt.wordCountMin, wordCountMax: wt.wordCountMax, hints: wt.hints },
        },
      });
    }
  }

  // ── Topic 1: Introduce Yourself ──────────────────────────────────────────────
  const introTopic = await upsertTopic(zeroLevel.id, "introduce-yourself", "Introduce Yourself", "Học cách giới thiệu bản thân với người nước ngoài một cách tự nhiên và tự tin.", 1);

  const introLesson1 = await upsertLesson(introTopic.id, "introduce-yourself-basics", "Basic Self Introduction", "Từ vựng và mẫu câu để giới thiệu tên, quê quán, nghề nghiệp.", 1);
  await createLessonSteps(
    introLesson1.id,
    VOCAB_ZERO_INTRODUCE,
    getGrammar("verb-be"),
    { prompt: "Introduce yourself in 60 seconds. Tell us your name, where you live, what you do, and why you are learning English.", hints: ["My name is ...", "I live in ...", "I work as a ...", "I am learning English because ...", "My goal is ..."], duration: 60 },
    { prompt: "Write 5 sentences about yourself. Use: name, location, job, hobby, and English learning goal.", min: 30, max: 100, hints: ["My name is ...", "I live in ...", "I work as ...", "My hobby is ...", "I am learning English to ..."] },
    { title: "Record Your Introduction", description: "Ghi âm 1 phút giới thiệu bản thân — như thể bạn đang nói chuyện với khách nước ngoài lần đầu gặp mặt.", instructions: ["Nói tên, nơi ở, nghề nghiệp.", "Giải thích lý do học tiếng Anh.", "Chia sẻ mục tiêu của bạn.", "Nghe lại và tự nhận xét — bạn có nói rõ ràng không?"] },
    [
      { prompt: "Which sentence is correct?", skill: "GRAMMAR" as SkillType, options: [{ text: "My name Tri.", isCorrect: false, explanation: "Missing 'is' — you need the verb 'be'." }, { text: "My name is Tri.", isCorrect: true, explanation: "Correct! Subject + am/is/are + noun." }, { text: "I name is Tri.", isCorrect: false, explanation: "Use 'My name is', not 'I name is'." }] },
      { prompt: "How do you say your age in English?", skill: "SPEAKING" as SkillType, options: [{ text: "I have 28 years.", isCorrect: false, explanation: "In English, say 'I am' not 'I have' for age." }, { text: "I am 28 years old.", isCorrect: true, explanation: "Correct! 'I am + age + years old.'" }, { text: "My age has 28.", isCorrect: false, explanation: "Incorrect structure — use 'I am 28 years old.'" }] },
    ]
  );

  const introLesson2 = await upsertLesson(introTopic.id, "introduce-yourself-goals", "Talking About Your Goals", "Nói về mục tiêu IELTS và lý do bạn học tiếng Anh — mở đầu hoàn hảo trong bất kỳ cuộc trò chuyện nào.", 2);
  await createLessonSteps(
    introLesson2.id,
    [
      { word: "goal", pronunciation: "/ɡoʊl/", definition: "Something you want to achieve", exampleSentence: "My goal is to reach IELTS 7.0 in 18 months.", collocations: ["set a goal", "achieve a goal", "long-term goal", "career goal"] },
      { word: "ambition", pronunciation: "/æmˈbɪʃən/", definition: "A strong desire to do or achieve something", exampleSentence: "My ambition is to study at a university in Australia.", collocations: ["have an ambition", "career ambition", "life ambition", "achieve your ambition"] },
      { word: "opportunity", pronunciation: "/ˌɒpərˈtjuːnɪti/", definition: "A chance to do or achieve something", exampleSentence: "IELTS opens up many opportunities abroad.", collocations: ["great opportunity", "career opportunity", "take an opportunity", "opportunity to improve"] },
      { word: "fluent", pronunciation: "/ˈfluːənt/", definition: "Able to speak a language easily and well", exampleSentence: "I want to be fluent in English within two years.", collocations: ["speak fluently", "become fluent", "fluent speaker", "fluent in English"] },
      { word: "progress", pronunciation: "/ˈprɒɡrɛs/", definition: "Movement towards a goal or improvement", exampleSentence: "I can see real progress in my English every month.", collocations: ["make progress", "rapid progress", "track progress", "progress towards"] },
      { word: "motivation", pronunciation: "/ˌməʊtɪˈveɪʃən/", definition: "The reason you want to do something", exampleSentence: "My main motivation is to work for an international company.", collocations: ["stay motivated", "lose motivation", "find motivation", "strong motivation"] },
      { word: "dedication", pronunciation: "/ˌdɛdɪˈkeɪʃən/", definition: "Hard work and commitment to a goal", exampleSentence: "Success in IELTS requires dedication and practice.", collocations: ["show dedication", "with dedication", "require dedication"] },
      { word: "practise", pronunciation: "/ˈpræktɪs/", definition: "To do something repeatedly to improve", exampleSentence: "I practise English speaking every day.", collocations: ["practise speaking", "practise daily", "regular practice"] },
    ],
    getGrammar("can-cannot"),
    { prompt: "Talk for 60 seconds: Why are you learning English? What is your goal? What will you do with English when you achieve it?", hints: ["I am learning English because ...", "My goal is to ...", "When I achieve IELTS 7.0, I want to ...", "I can already ...", "I cannot yet ... but I will ..."], duration: 60 },
    { prompt: "Write a short paragraph about your English learning goal. Include: WHY you are learning, WHAT your IELTS target is, and WHAT you will do when you achieve it.", min: 50, max: 120, hints: ["I am learning English because ...", "My IELTS target is band ...", "I plan to achieve this in ... months.", "When I get IELTS ..., I will ..."] },
    { title: "Your Vision Board", description: "Viết ra (bằng tiếng Anh) 3 thứ bạn sẽ làm được sau khi đạt IELTS 7.0. Dán lên bàn học để nhắc nhở mỗi ngày.", instructions: ["Write 3 goals you will achieve with IELTS 7.0.", "Example: 'I will apply for a scholarship in Australia.'", "Write them in English, not Vietnamese.", "Read them aloud every morning before studying."] }
  );

  // ── Topic 2: Numbers, Time & Dates ───────────────────────────────────────────
  const numTopic = await upsertTopic(zeroLevel.id, "numbers-time-dates", "Numbers, Time & Dates", "Nói số đếm, giờ giấc và ngày tháng một cách chính xác.", 2);
  const numLesson1 = await upsertLesson(numTopic.id, "numbers-basics", "Numbers & Counting", "Học số 1–1000 và cách dùng trong câu thực tế.", 1);
  await createLessonSteps(
    numLesson1.id,
    VOCAB_ZERO_NUMBERS,
    getGrammar("verb-be"),
    { prompt: "Say 5 facts about yourself using numbers. Include: your age, phone number, years studying English, how many hours a day you study, and your IELTS target.", hints: ["I am ... years old.", "My phone number is ...", "I have studied English for ... years.", "I study ... hours every day.", "My IELTS target is band ..."], duration: 60 },
    { prompt: "Write 5 sentences using numbers. Include time, dates, age, and quantities.", min: 30, max: 80, hints: ["I wake up at ...", "My birthday is on the ... of ...", "I am ... years old.", "I study ... hours a day.", "There are ... days in a week."] },
    { title: "Number Detective", description: "Hôm nay, hãy tìm 10 con số xung quanh bạn và nói thành câu tiếng Anh.", instructions: ["Look at your phone: What time is it? Say it in English.", "Look at your house number: 'I live at number ...'", "Check the date: 'Today is the ... of ...'", "Count how many windows are in your house.", "Write all 10 sentences in your notebook."] },
    [
      { prompt: "How do you say '7:30 AM' in English?", skill: "SPEAKING" as SkillType, options: [{ text: "Seven thirty in the morning.", isCorrect: true }, { text: "Seven and a half morning.", isCorrect: false, explanation: "This is not natural English." }, { text: "Half seven morning.", isCorrect: false, explanation: "'Half seven' is British English for 7:30, but needs 'in the morning'." }] },
      { prompt: "Complete: 'Today is ___ 22nd of June.'", skill: "GRAMMAR" as SkillType, options: [{ text: "in the", isCorrect: false }, { text: "the", isCorrect: true, explanation: "We use 'the' before ordinal numbers in dates when speaking." }, { text: "on the", isCorrect: false, explanation: "We say 'on the 22nd' in a sentence, but 'Today is the 22nd' without 'on'." }] },
    ]
  );

  // ── Topic 3: My Home ──────────────────────────────────────────────────────────
  const homeTopic = await upsertTopic(zeroLevel.id, "my-home", "My Home & Daily Objects", "Mô tả ngôi nhà của bạn và những đồ vật hằng ngày.", 3);
  const homeLesson1 = await upsertLesson(homeTopic.id, "home-rooms-objects", "Rooms & Objects at Home", "Học từ vựng về các phòng và đồ vật trong nhà.", 1);
  await createLessonSteps(
    homeLesson1.id,
    VOCAB_ZERO_HOME,
    getGrammar("there-is-are"),
    { prompt: "Describe your home in 60 seconds. How many rooms? What is in the rooms? Is it big or small?", hints: ["My home has ... rooms.", "There is a ... in my home.", "There are ... in my ...", "My favourite room is the ... because ..."], duration: 60 },
    { prompt: "Write 5 sentences describing your home. Use 'there is' and 'there are'.", min: 30, max: 80, hints: ["My home has ...", "There is a ...", "There are ...", "My favourite room is ...", "I usually ... in the ..."] },
    { title: "Home Tour", description: "Hãy quay video 1 phút giới thiệu ngôi nhà của bạn bằng tiếng Anh, như thể bạn đang giới thiệu với bạn nước ngoài.", instructions: ["Walk through each room and say its name in English.", "Point at objects and say what they are.", "Use 'This is a ...' and 'There is a ... in the ...'", "Upload the video or share with a friend to get feedback."] }
  );

  // ── Topic 4: My Family ────────────────────────────────────────────────────────
  const familyTopic = await upsertTopic(zeroLevel.id, "my-family", "My Family", "Mô tả gia đình và mối quan hệ gia đình của bạn.", 4);
  const famLesson1 = await upsertLesson(familyTopic.id, "family-members", "Family Members & Relationships", "Từ vựng về các thành viên trong gia đình và cách mô tả họ.", 1);
  await createLessonSteps(
    famLesson1.id,
    VOCAB_ZERO_FAMILY,
    getGrammar("have-has"),
    { prompt: "Talk about your family for 60 seconds. How many people are in your family? What do they do? What do they look like?", hints: ["I have ... people in my family.", "My mother is a ...", "My father works as a ...", "My brother/sister is ... years old.", "We live together in ..."], duration: 60 },
    { prompt: "Write a paragraph about your family. Include: number of people, each person's job, and one thing you love about your family.", min: 40, max: 100, hints: ["My family has ... members.", "My mother/father ...", "My brother/sister ...", "I love my family because ..."] },
    { title: "Family Photo Story", description: "Chọn 1 bức ảnh gia đình và viết caption bằng tiếng Anh mô tả từng người.", instructions: ["Choose a family photo.", "Write each person's name and their relationship to you.", "Write one sentence about each person.", "Post it in your study group or notebook."] },
    [
      { prompt: "Which is correct?", skill: "GRAMMAR" as SkillType, options: [{ text: "She have two children.", isCorrect: false, explanation: "Use 'has' with she/he/it." }, { text: "She has two children.", isCorrect: true }, { text: "She is have two children.", isCorrect: false, explanation: "Never use 'is have' — just 'has'." }] },
    ]
  );

  console.log("✅ Zero Level topics seeded");

  // ════════════════════════════════════════════════════════════════════════════
  // A1 LEVEL
  // ════════════════════════════════════════════════════════════════════════════
  const a1Level = await getLevel("a1");

  // ── Daily Routine ─────────────────────────────────────────────────────────────
  const routineTopic = await upsertTopic(a1Level.id, "daily-routine", "Daily Routine", "Mô tả thói quen hằng ngày và tần suất hoạt động.", 1);
  const routineLesson1 = await upsertLesson(routineTopic.id, "daily-routine-morning", "My Morning Routine", "Kể chi tiết về buổi sáng của bạn bằng tiếng Anh.", 1);
  await createLessonSteps(
    routineLesson1.id,
    VOCAB_A1_DAILY_ROUTINE,
    getGrammar("present-simple"),
    { prompt: "Describe your typical morning routine. What time do you wake up? What do you do before work/school? Use frequency adverbs (always, usually, sometimes, never).", hints: ["I usually wake up at ...", "I always ...", "I sometimes ...", "I never ...", "I get to work/school at ..."], duration: 90 },
    { prompt: "Write a paragraph describing your daily routine from morning to night. Use at least 5 frequency adverbs.", min: 60, max: 150, hints: ["I usually wake up at ...", "After breakfast, I ...", "In the afternoon, I ...", "In the evening, I ...", "I always go to bed at ..."] },
    { title: "Routine Journal", description: "Trong 3 ngày tới, viết nhật ký (bằng tiếng Anh) mô tả những gì bạn làm mỗi ngày.", instructions: ["Every evening, write 5–8 sentences about your day.", "Use: wake up, have breakfast, go to work, have lunch, exercise, have dinner, go to bed.", "Add frequency adverbs: always, usually, sometimes, never.", "On day 3, read back your entries and count your mistakes."] },
    [
      { prompt: "Which sentence correctly uses Present Simple?", skill: "GRAMMAR" as SkillType, options: [{ text: "She wake up at 6 every day.", isCorrect: false, explanation: "Add -s for he/she/it: 'wakes up'." }, { text: "She wakes up at 6 every day.", isCorrect: true }, { text: "She is waking up at 6 every day.", isCorrect: false, explanation: "Use Present Simple (not Continuous) for routines." }] },
      { prompt: "I ___ exercise on Sundays. (I do it sometimes)", skill: "VOCABULARY" as SkillType, options: [{ text: "always", isCorrect: false }, { text: "never", isCorrect: false }, { text: "sometimes", isCorrect: true }] },
    ]
  );

  const routineLesson2 = await upsertLesson(routineTopic.id, "daily-routine-frequency", "Talking About How Often", "Dùng adverbs of frequency để mô tả thói quen chính xác hơn.", 2);
  await createLessonSteps(
    routineLesson2.id,
    [
      { word: "always", pronunciation: "/ˈɔːlweɪz/", definition: "Every time, without exception (100%)", exampleSentence: "I always brush my teeth twice a day.", collocations: ["almost always", "always remember", "always try to"] },
      { word: "usually", pronunciation: "/ˈjuːʒuəli/", definition: "Most of the time (80%)", exampleSentence: "I usually have coffee in the morning.", collocations: ["usually have", "usually go", "usually wake up"] },
      { word: "often", pronunciation: "/ˈɒfən/", definition: "Many times (60–70%)", exampleSentence: "I often exercise after work.", collocations: ["quite often", "very often", "often go", "often eat"] },
      { word: "sometimes", pronunciation: "/ˈsʌmtaɪmz/", definition: "On some occasions (40–50%)", exampleSentence: "I sometimes work late.", collocations: ["sometimes go", "sometimes eat", "sometimes watch"] },
      { word: "rarely", pronunciation: "/ˈrɛərli/", definition: "Not very often (10–20%)", exampleSentence: "I rarely eat fast food.", collocations: ["very rarely", "rarely go", "rarely miss"] },
      { word: "never", pronunciation: "/ˈnɛvər/", definition: "Not at any time (0%)", exampleSentence: "I never skip breakfast.", collocations: ["almost never", "never forget", "never miss"] },
    ],
    getGrammar("present-simple"),
    { prompt: "Answer these questions about your habits: How often do you exercise? How often do you cook? How often do you speak English outside of class?", hints: ["I always ...", "I usually ...", "I sometimes ...", "I rarely ...", "I never ..."], duration: 60 },
    { prompt: "Write 6 sentences about your habits. Use a different frequency adverb in each sentence.", min: 40, max: 100, hints: ["I always ...", "I usually ...", "I often ...", "I sometimes ...", "I rarely ...", "I never ..."] },
    { title: "Habit Tracker", description: "Tải một bảng Habit Tracker (có thể tự vẽ) và theo dõi 5 thói quen tiếng Anh mỗi ngày trong 30 ngày.", instructions: ["Track: flashcard review, listening, speaking practice, writing, reading.", "Each day you complete a habit, tick the box.", "After 30 days, write a paragraph about your results in English."] }
  );

  // ── Food & Drink ──────────────────────────────────────────────────────────────
  const foodTopic = await upsertTopic(a1Level.id, "food-and-drink", "Food & Drink", "Nói về thức ăn, đồ uống và thói quen ăn uống của bạn.", 2);
  const foodLesson1 = await upsertLesson(foodTopic.id, "food-favourites", "Talking About Food", "Từ vựng về thức ăn và cách mô tả món ăn yêu thích.", 1);
  await createLessonSteps(
    foodLesson1.id,
    VOCAB_A1_FOOD,
    getGrammar("present-simple"),
    { prompt: "Talk about your favourite food for 60 seconds. What is it? How often do you eat it? Why do you love it?", hints: ["My favourite food is ...", "I love ... because it is ...", "I eat ... three times a week.", "I usually cook ... at home.", "I recommend trying ..."], duration: 60 },
    { prompt: "Write a paragraph about your favourite Vietnamese dish. Describe what it looks like, what is in it, and why you love it.", min: 50, max: 120, hints: ["My favourite dish is ...", "It is made with ...", "It tastes ...", "I usually eat it ...", "I love it because ..."] },
    { title: "Food Journal", description: "Trong 3 ngày, ghi lại mọi thứ bạn ăn và uống bằng tiếng Anh.", instructions: ["Every meal, write what you eat in English.", "Example: 'I had pho for breakfast. It was delicious.'", "Try to describe the taste: sweet, salty, spicy, sour, bitter.", "Count how many English food words you learn this week."] }
  );

  // ── Hobbies & Interests ───────────────────────────────────────────────────────
  const hobbiesTopic = await upsertTopic(a1Level.id, "hobbies-interests", "Hobbies & Interests", "Nói về sở thích và những gì bạn thích làm khi rảnh rỗi.", 3);
  const hobbiesLesson1 = await upsertLesson(hobbiesTopic.id, "hobbies-describing", "My Hobbies", "Mô tả sở thích và nói về tần suất bạn làm những việc yêu thích.", 1);
  await createLessonSteps(
    hobbiesLesson1.id,
    VOCAB_A1_HOBBIES,
    getGrammar("present-continuous"),
    { prompt: "Talk about your hobbies for 90 seconds. What do you do in your free time? How often? Why do you enjoy it?", hints: ["In my free time, I enjoy ...", "I love ... because ...", "I usually ... at the weekend.", "I have been interested in ... for ...", "My dream is to ..."], duration: 90 },
    { prompt: "Write about two of your hobbies. For each hobby, explain what it is, how often you do it, and why you enjoy it.", min: 60, max: 150, hints: ["One of my hobbies is ...", "I usually do this ...", "I enjoy it because ...", "Another hobby I have is ...", "It makes me feel ..."] },
    { title: "Hobby Showcase", description: "Quay một video 90 giây thực hiện sở thích của bạn và giới thiệu nó bằng tiếng Anh.", instructions: ["Film yourself doing your hobby.", "While or after filming, talk about what you're doing in English.", "Say why you love it and how long you've been doing it.", "Share with your study group."] }
  );

  // ── School & Study ────────────────────────────────────────────────────────────
  const schoolTopic = await upsertTopic(a1Level.id, "school-study", "School & Study", "Nói về trường học, môn học và thói quen học tập của bạn.", 4);
  const schoolLesson1 = await upsertLesson(schoolTopic.id, "school-life", "School Life & Study Habits", "Từ vựng về trường học và cách mô tả thói quen học tập tốt.", 1);
  await createLessonSteps(
    schoolLesson1.id,
    VOCAB_A1_SCHOOL,
    getGrammar("present-simple"),
    { prompt: "Talk about how you study English. Where do you study? How long? What methods do you use?", hints: ["I study English ... hours a day.", "I usually study ...", "My best method is ...", "I revise vocabulary by ...", "My goal is ..."], duration: 60 },
    { prompt: "Write about your ideal study routine for IELTS. What will you do every day? Use 'I will' and 'I am going to'.", min: 50, max: 120, hints: ["Every morning, I will ...", "In the afternoon, I am going to ...", "I will practise speaking by ...", "I will review vocabulary by ...", "My study goal each week is ..."] },
    { title: "Study Space", description: "Tạo một góc học tập lý tưởng bằng tiếng Anh và giới thiệu nó với bạn bè.", instructions: ["Organise a dedicated study space at home.", "Label 5 objects in your study space in English.", "Take a photo and write a caption: 'This is my study space. There is a ... and ...'", "Tell a friend about your study space in English."] }
  );

  // ── Places & Transport ────────────────────────────────────────────────────────
  const transportTopic = await upsertTopic(a1Level.id, "places-transport", "Places & Transport", "Nói về địa điểm trong thành phố và cách di chuyển.", 5);
  const transportLesson1 = await upsertLesson(transportTopic.id, "getting-around", "Getting Around the City", "Từ vựng về phương tiện giao thông và cách hỏi đường.", 1);
  await createLessonSteps(
    transportLesson1.id,
    VOCAB_A1_TRANSPORT,
    getGrammar("there-is-are"),
    { prompt: "Describe how you get to work or school every day. What transport do you use? How long does it take? Do you like the journey?", hints: ["I go to work/school by ...", "The journey takes about ... minutes.", "There is always a lot of traffic because ...", "I prefer ... because ...", "The nearest bus stop/station is ..."], duration: 60 },
    { prompt: "Write about the transport system in your city. Is it good? What could be improved?", min: 50, max: 120, hints: ["In my city, people usually travel by ...", "There are ... bus routes.", "The traffic is often ...", "I think the transport system could improve by ...", "Compared to other cities, ..."] },
    { title: "City Explorer", description: "Đi bộ hoặc đi xe tới một địa điểm mới trong thành phố của bạn và mô tả hành trình bằng tiếng Anh.", instructions: ["Walk or travel somewhere new in your city.", "Note the directions in English: turn left, turn right, go straight.", "Count how many different types of transport you see.", "Write a short paragraph describing the journey."] }
  );

  console.log("✅ A1 Level topics seeded");

  // ════════════════════════════════════════════════════════════════════════════
  // A2 LEVEL
  // ════════════════════════════════════════════════════════════════════════════
  const a2Level = await getLevel("a2");

  // ── Travel & Tourism ──────────────────────────────────────────────────────────
  const travelTopic = await upsertTopic(a2Level.id, "travel-tourism", "Travel & Tourism", "Nói về du lịch, lên kế hoạch chuyến đi và chia sẻ trải nghiệm.", 1);
  const travelLesson1 = await upsertLesson(travelTopic.id, "travel-planning", "Planning a Trip", "Từ vựng và cấu trúc để lên kế hoạch chuyến đi và mô tả điểm đến.", 1);
  await createLessonSteps(
    travelLesson1.id,
    VOCAB_A2_TRAVEL,
    getGrammar("past-simple"),
    { prompt: "Talk about a trip you have taken in the past. Where did you go? When? Who did you go with? What did you do there?", hints: ["I went to ... last ...", "I travelled with ...", "We stayed at ...", "We visited ...", "The best part was ..."], duration: 90 },
    { prompt: "Write about a place you have visited or would like to visit. Describe the place, what you can do there, and why you recommend it.", min: 70, max: 150, hints: ["... is a wonderful destination because ...", "You can visit ...", "The best time to go is ...", "I recommend trying the local food, especially ...", "My most memorable moment was ..."] },
    { title: "Travel Blogger", description: "Viết một bài review về 1 địa điểm du lịch ở Việt Nam bằng tiếng Anh (như thể bạn đang viết cho blog tiếng Anh).", instructions: ["Choose a place in Vietnam you know well.", "Write a 100-word review in English.", "Include: what to see, what to eat, best time to visit.", "Post it in your English study group or social media."] },
    [
      { prompt: "Which sentence is grammatically correct?", skill: "GRAMMAR" as SkillType, options: [{ text: "I goed to Japan last year.", isCorrect: false, explanation: "'Go' is irregular: go → went." }, { text: "I went to Japan last year.", isCorrect: true }, { text: "I have went to Japan last year.", isCorrect: false, explanation: "With 'last year' use Past Simple, not Present Perfect." }] },
    ]
  );

  // ── Health & Body ─────────────────────────────────────────────────────────────
  const healthTopic = await upsertTopic(a2Level.id, "health-body", "Health & the Body", "Nói về sức khỏe, bệnh tật và lối sống lành mạnh.", 2);
  const healthLesson1 = await upsertLesson(healthTopic.id, "health-lifestyle", "Health & Wellbeing", "Từ vựng về sức khỏe và cách mô tả lối sống lành mạnh.", 1);
  await createLessonSteps(
    healthLesson1.id,
    VOCAB_A2_HEALTH,
    getGrammar("comparative-superlative"),
    { prompt: "Talk about how you stay healthy. What do you do for exercise? What do you eat? How do you manage stress?", hints: ["To stay healthy, I ...", "I exercise ... times a week.", "I try to eat ...", "I avoid ...", "The most important thing for health is ..."], duration: 90 },
    { prompt: "Write a paragraph giving advice about how to stay healthy. Use comparatives and superlatives.", min: 60, max: 150, hints: ["The most important health habit is ...", "Exercise is better than ...", "Eating ... is healthier than ...", "The best way to reduce stress is ...", "A healthy diet is more important than ..."] },
    { title: "7-Day Health Challenge", description: "Thực hiện thử thách 7 ngày sống lành mạnh và ghi lại hành trình bằng tiếng Anh.", instructions: ["Each day: drink 8 glasses of water, exercise 30 minutes, sleep 8 hours.", "Write 3 sentences every night about how you felt.", "At the end of 7 days, write a paragraph about what changed.", "Share your results with your study group."] }
  );

  // ── Work & Jobs ───────────────────────────────────────────────────────────────
  const workTopic = await upsertTopic(a2Level.id, "work-jobs", "Work & Jobs", "Nói về nghề nghiệp, môi trường làm việc và mục tiêu nghề nghiệp.", 3);
  const workLesson1 = await upsertLesson(workTopic.id, "work-careers", "Jobs & Careers", "Từ vựng về công việc và cách mô tả nghề nghiệp của bạn.", 1);
  await createLessonSteps(
    workLesson1.id,
    VOCAB_A2_WORK,
    getGrammar("present-perfect"),
    { prompt: "Talk about your job or career. What do you do? What do you like and dislike about your work?", hints: ["I work as a ...", "My job involves ...", "I have worked here for ...", "The best thing about my job is ...", "The most challenging part is ..."], duration: 90 },
    { prompt: "Write about your ideal job. What would you do? What skills does it require? Why would it be perfect for you?", min: 60, max: 150, hints: ["My ideal job would be ...", "This job requires ...", "I would need to ...", "The salary would be ...", "I would enjoy this job because ..."] },
    { title: "Job Interview Practice", description: "Luyện phỏng vấn xin việc bằng tiếng Anh — câu hỏi thường gặp nhất.", instructions: ["Practice answering: 'Tell me about yourself.'", "Practice: 'What are your strengths?'", "Practice: 'Why do you want this job?'", "Record yourself and listen back. Are you clear and confident?"] }
  );

  // ── Shopping & Money ──────────────────────────────────────────────────────────
  const shoppingTopic = await upsertTopic(a2Level.id, "shopping-money", "Shopping & Money", "Nói về mua sắm, giá cả và quản lý tiền bạc.", 4);
  const shoppingLesson1 = await upsertLesson(shoppingTopic.id, "shopping-basics", "Shopping Smart", "Từ vựng về mua sắm và cách so sánh giá cả, chất lượng.", 1);
  await createLessonSteps(
    shoppingLesson1.id,
    VOCAB_A2_SHOPPING,
    getGrammar("comparative-superlative"),
    { prompt: "Describe your shopping habits. How often do you shop? Do you prefer online or in-store shopping? What was the best bargain you ever found?", hints: ["I usually shop ...", "I prefer ... because ...", "Online shopping is ... than shopping in stores.", "The best deal I found was ...", "I always compare prices before ..."], duration: 90 },
    { prompt: "Write about the advantages and disadvantages of online shopping vs. shopping in a store.", min: 70, max: 150, hints: ["Online shopping is more convenient because ...", "However, in a store, you can ...", "The main advantage of online shopping is ...", "On the other hand, shopping in stores is better for ...", "In conclusion, I prefer ... because ..."] },
    { title: "Smart Shopper", description: "Lần tới khi bạn mua sắm, hãy thực hành tiếng Anh trong đầu (hoặc nói thành tiếng nhỏ).", instructions: ["Think of prices in English: 'This costs two hundred thousand dong.'", "Compare two items: 'This one is cheaper but that one is better quality.'", "Afterwards, write 5 sentences about what you bought and why."] }
  );

  // ── Weather & Nature ──────────────────────────────────────────────────────────
  const weatherTopic = await upsertTopic(a2Level.id, "weather-nature", "Weather & Nature", "Mô tả thời tiết và thiên nhiên — chủ đề thường gặp trong IELTS Speaking Part 1.", 5);
  const weatherLesson1 = await upsertLesson(weatherTopic.id, "weather-describing", "Describing the Weather", "Từ vựng mô tả thời tiết và cách nói về khí hậu Việt Nam.", 1);
  await createLessonSteps(
    weatherLesson1.id,
    VOCAB_A2_WEATHER,
    getGrammar("future-will"),
    { prompt: "Describe the weather in your city today. Then predict what the weather will be like this weekend.", hints: ["Today, the weather is ...", "The temperature is about ... degrees.", "It is sunny/rainy/cloudy/humid.", "This weekend, I think it will ...", "In my city, the best season is ... because ..."], duration: 60 },
    { prompt: "Write a paragraph comparing the weather in two seasons in Vietnam. Which do you prefer and why?", min: 60, max: 150, hints: ["Vietnam has two main seasons: ... and ...", "During the ... season, the weather is ...", "In contrast, the ... season is ...", "I prefer the ... season because ...", "The most dangerous weather event in Vietnam is ..."] },
    { title: "Weather Reporter", description: "Mỗi sáng trong 5 ngày, ghi âm dự báo thời tiết tiếng Anh cho ngày hôm đó (như thể bạn là phát thanh viên TV).", instructions: ["Say: 'Good morning! Today's weather forecast for [your city]:...'", "Describe temperature, sky conditions, and any special weather.", "Predict tomorrow's weather.", "On day 5, compare your predictions with what actually happened."] }
  );

  console.log("✅ A2 Level topics seeded");

  // ════════════════════════════════════════════════════════════════════════════
  // B1 LEVEL
  // ════════════════════════════════════════════════════════════════════════════
  const b1Level = await getLevel("b1");

  // ── Education ─────────────────────────────────────────────────────────────────
  const eduTopic = await upsertTopic(b1Level.id, "education", "Education", "Thảo luận về hệ thống giáo dục, học tập và IELTS — chủ đề số 1 trong IELTS Task 2.", 1);
  const eduLesson1 = await upsertLesson(eduTopic.id, "education-system", "The Education System", "Từ vựng về giáo dục và cách trình bày ý kiến về hệ thống học tập.", 1);
  await createLessonSteps(
    eduLesson1.id,
    VOCAB_B1_EDUCATION,
    getGrammar("passive-voice"),
    { prompt: "Do you think the education system in Vietnam prepares students well for real life? Give your opinion with 2 reasons and 1 example. (Aim for 90 seconds)", hints: ["In my opinion, the education system ...", "On one hand, students are taught ...", "However, I believe ...", "For example, ...", "I think the system could improve by ..."], duration: 90 },
    { prompt: "Write a short IELTS-style paragraph: 'Some people think education should focus on academic subjects. Others think practical skills are more important. Discuss both views and give your opinion.' (Write ONE body paragraph with your view, 100-150 words)", min: 80, max: 150, hints: ["In my opinion, ...", "Academic knowledge is important because ...", "However, practical skills are equally important because ...", "For instance, ...", "Therefore, I believe a balance of both is ..."] },
    { title: "Education Debate", description: "Thảo luận với 1 người bạn: 'Nên học đại học hay học nghề?' — nhưng phải nói bằng tiếng Anh.", instructions: ["Set a timer: each person speaks for 2 minutes.", "Support your view with 2 reasons and 1 example.", "Listen to your partner and respond to their points.", "Record the conversation and review your vocabulary use."] },
    [
      { prompt: "Which sentence correctly uses the passive voice?", skill: "GRAMMAR" as SkillType, options: [{ text: "Students are educated by teachers.", isCorrect: true }, { text: "Students educated are by teachers.", isCorrect: false }, { text: "Students is educated by teachers.", isCorrect: false, explanation: "'Students' is plural — use 'are', not 'is'." }] },
      { prompt: "Which is a correct collocation with 'education'?", skill: "VOCABULARY" as SkillType, options: [{ text: "do education", isCorrect: false }, { text: "make education", isCorrect: false }, { text: "receive an education", isCorrect: true }] },
    ]
  );

  const eduLesson2 = await upsertLesson(eduTopic.id, "education-ielts-essay", "IELTS Essay — Education Topic", "Luyện viết Task 2 về chủ đề giáo dục theo phương pháp Simon 4 đoạn.", 2);
  await createLessonSteps(
    eduLesson2.id,
    VOCAB_B1_EDUCATION.slice(0, 8),
    getGrammar("relative-clauses"),
    { prompt: "IELTS Speaking Part 3: 'Do you think universities should be free for all students?' Give a full Part 3 answer using the framework: Opinion → Explanation → Example → Contrast → Summary.", hints: ["I strongly believe that ...", "The main reason is ...", "For example, in countries like ...", "However, some people argue that ...", "Overall, I think ..."], duration: 120 },
    { prompt: `IELTS Writing Task 2 (40 minutes practice): Some people believe that all university education should be free of charge. Others think that students should pay tuition fees. Discuss both views and give your opinion. Write at least 250 words. Use Simon's 4-paragraph structure:\n1. Introduction (paraphrase + your position)\n2. Body 1 (free education arguments)\n3. Body 2 (paid education arguments + your opinion)\n4. Conclusion (summary)`, min: 250, max: 320, hints: ["Introduction: Paraphrase the question + state your position.", "Body 1: Point (free education) + Explanation + Example.", "Body 2: Point (paid fees) + Explanation + your view with reason.", "Conclusion: Restate position in 1-2 sentences."] },
    { title: "Essay Bank", description: "Đọc 3 bài mẫu Band 7+ về chủ đề Education và ghi lại 10 collocations hay để dùng.", instructions: ["Search for 'IELTS Simon education essay band 7' online.", "Read 3 model essays carefully.", "Write down 10 collocations you want to use.", "Rewrite one paragraph using your own words (paraphrase practice)."] }
  );

  // ── Technology & Society ──────────────────────────────────────────────────────
  const techTopic = await upsertTopic(b1Level.id, "technology-society", "Technology & Society", "Thảo luận về tác động của công nghệ đối với xã hội hiện đại.", 2);
  const techLesson1 = await upsertLesson(techTopic.id, "tech-impact", "Technology's Impact on Society", "Từ vựng và lập luận về vai trò của công nghệ trong cuộc sống.", 1);
  await createLessonSteps(
    techLesson1.id,
    VOCAB_B1_TECHNOLOGY,
    getGrammar("cause-effect-phrases"),
    { prompt: "IELTS Speaking Part 3: 'Do you think technology has had a positive or negative impact on society?' Give a 2-minute answer with specific examples.", hints: ["I think technology has had both positive and negative impacts.", "On the positive side, ...", "For example, ...", "However, there are also negative effects, such as ...", "On balance, I believe ..."], duration: 120 },
    { prompt: "Write a Task 2 Opinion Essay: 'Technology has made people's lives easier but has also created new problems.' To what extent do you agree? (250-300 words)", min: 250, max: 300, hints: ["Introduction: Paraphrase + state your position clearly.", "Body 1: Benefits of technology (2 points with examples).", "Body 2: Problems caused by technology (2 points).", "Conclusion: Balanced conclusion + final view."] },
    { title: "Tech Detox", description: "Thử 'Digital Detox' 24 giờ — không dùng mạng xã hội. Sau đó viết về trải nghiệm bằng tiếng Anh.", instructions: ["For 24 hours, avoid all social media (you can still use English learning apps).", "Notice: Do you feel anxious? More focused? More productive?", "Afterwards, write a 150-word paragraph about your experience.", "Use vocabulary from this lesson: digital, device, social media, influence."] }
  );

  // ── Environment & Climate ─────────────────────────────────────────────────────
  const envTopic = await upsertTopic(b1Level.id, "environment-climate", "Environment & Climate", "Thảo luận về các vấn đề môi trường và giải pháp — chủ đề quan trọng trong IELTS.", 3);
  const envLesson1 = await upsertLesson(envTopic.id, "environment-problems", "Environmental Problems & Solutions", "Từ vựng môi trường và cách lập luận về biến đổi khí hậu.", 1);
  await createLessonSteps(
    envLesson1.id,
    VOCAB_B1_ENVIRONMENT,
    getGrammar("first-conditional"),
    { prompt: "IELTS Speaking Part 3: 'What can individuals do to help protect the environment?' Give 2–3 specific suggestions with reasons.", hints: ["I believe individuals can make a real difference by ...", "For example, if people ...", "Another effective action is ...", "If everyone ..., pollution would ...", "Ultimately, the most impactful thing is ..."], duration: 120 },
    { prompt: "IELTS Task 2: 'Some people think it is the responsibility of governments to solve environmental problems. Others believe individuals should take action.' Discuss both views. (250 words)", min: 250, max: 300, hints: ["Introduction: Both sides exist; your position.", "Body 1: Government responsibility + examples (laws, subsidies).", "Body 2: Individual responsibility + why it matters.", "Conclusion: Best solution = both working together."] },
    { title: "Green Challenge", description: "Trong 1 tuần, thực hiện 3 thay đổi nhỏ vì môi trường và ghi lại bằng tiếng Anh.", instructions: ["Choose 3 eco-friendly changes: e.g. use a reusable bag, reduce meat consumption, cycle instead of motorbike.", "Each day, write 2 sentences about what you did.", "At the end of the week, write a paragraph: 'This week, I helped the environment by...'"] }
  );

  // ── Media & Communication ─────────────────────────────────────────────────────
  const mediaTopic = await upsertTopic(b1Level.id, "media-communication", "Media & Communication", "Phân tích vai trò của truyền thông và cách thông tin ảnh hưởng đến xã hội.", 4);
  const mediaLesson1 = await upsertLesson(mediaTopic.id, "media-influence", "Media & Its Influence", "Từ vựng về truyền thông và cách lập luận về tự do báo chí, mạng xã hội.", 1);
  await createLessonSteps(
    mediaLesson1.id,
    VOCAB_B1_MEDIA,
    getGrammar("hedging"),
    { prompt: "IELTS Speaking Part 3: 'Do you think social media has a positive or negative influence on young people?' Give a detailed, balanced answer.", hints: ["On one hand, social media tends to ...", "For instance, many young people use platforms like ...", "However, there is some evidence to suggest that ...", "It might be argued that ...", "Overall, I believe the influence is ..."], duration: 120 },
    { prompt: "Write a Task 2 Discussion Essay: 'Social media has changed the way people communicate. Discuss the advantages and disadvantages of this.' (250 words)", min: 250, max: 300, hints: ["Introduction: Acknowledge both sides.", "Body 1: Advantages (global connection, instant information, free).", "Body 2: Disadvantages (fake news, reduced face-to-face, mental health).", "Conclusion: On balance, ..."] },
    { title: "Media Diet", description: "Theo dõi việc tiêu thụ media của bạn trong 3 ngày và phân tích bằng tiếng Anh.", instructions: ["Track: how many hours on social media, news, streaming each day.", "Day 3: Write a paragraph about your media habits.", "Ask yourself: Is the media I consume reliable? Does it affect my mood?", "Compare with the class: Who has the healthiest media diet?"] }
  );

  // ── Culture & Art ─────────────────────────────────────────────────────────────
  const cultureTopic = await upsertTopic(b1Level.id, "culture-art", "Culture & Art", "Khám phá bản sắc văn hóa, nghệ thuật và tác động của toàn cầu hóa.", 5);
  const cultureLesson1 = await upsertLesson(cultureTopic.id, "culture-identity", "Cultural Identity & Globalisation", "Từ vựng về văn hóa và lập luận về bảo tồn truyền thống trong thời đại toàn cầu.", 1);
  await createLessonSteps(
    cultureLesson1.id,
    VOCAB_B1_CULTURE,
    getGrammar("concession-phrases"),
    { prompt: "IELTS Speaking Part 3: 'Do you think globalisation is good or bad for local cultures?' Give a nuanced answer, acknowledging both sides.", hints: ["Although globalisation has brought many benefits, ...", "Despite the spread of Western culture, ...", "While I believe ..., I also recognise that ...", "On the other hand, ...", "In conclusion, I think the key is to ..."], duration: 120 },
    { prompt: "Write a Task 2 Opinion Essay: 'Some people believe that in order to preserve local cultures, people should protect local traditions and avoid the influence of foreign cultures. To what extent do you agree?' (250 words)", min: 250, max: 300, hints: ["Introduction: Paraphrase; state partial/full agreement.", "Body 1: Value of preserving traditions (identity, heritage).", "Body 2: Benefits of cultural exchange (innovation, tolerance).", "Conclusion: Balance is the key."] },
    { title: "Culture Ambassador", description: "Giới thiệu 1 truyền thống/lễ hội Việt Nam bằng tiếng Anh cho một người nước ngoài (thực tế hoặc giả định).", instructions: ["Choose one Vietnamese tradition: Tet, Mid-Autumn Festival, wedding customs, etc.", "Write a 150-word explanation in English for a foreigner.", "Include: What is it? When does it happen? Why is it important?", "Record yourself explaining it as if talking to a tourist."] }
  );

  // ── Housing & Cities ──────────────────────────────────────────────────────────
  const housingTopic = await upsertTopic(b1Level.id, "housing-cities", "Housing & Cities", "Thảo luận về cuộc sống đô thị, nhà ở và quy hoạch thành phố.", 6);
  const housingLesson1 = await upsertLesson(housingTopic.id, "urban-living", "Urban Life vs Rural Life", "Từ vựng về nhà ở đô thị và so sánh cuộc sống thành thị vs nông thôn.", 1);
  await createLessonSteps(
    housingLesson1.id,
    VOCAB_B1_HOUSING,
    getGrammar("second-conditional"),
    { prompt: "IELTS Speaking Part 3: 'What are the advantages and disadvantages of living in a big city?' Give a balanced 2-minute answer.", hints: ["Living in a big city offers ...", "For example, ...", "However, there are also significant downsides, such as ...", "If I could choose, I would live in ... because ...", "Overall, city life is better for ... but worse for ..."], duration: 120 },
    { prompt: "Task 2: 'Many people are moving from rural areas to cities. What are the causes and effects of this migration?' (250 words)", min: 250, max: 300, hints: ["Introduction: Urbanisation is a global trend.", "Body 1: Causes — job opportunities, better education, facilities.", "Body 2: Effects — overcrowding, pollution, loss of rural identity.", "Conclusion: Sustainable urban planning is needed."] },
    { title: "My Ideal City", description: "Thiết kế thành phố lý tưởng của bạn bằng tiếng Anh — mô tả các khu vực, phương tiện và cơ sở hạ tầng.", instructions: ["Draw (or imagine) your ideal city layout.", "Describe it in English: 'In my ideal city, there would be ...'", "Include: green spaces, affordable housing, public transport, cultural facilities.", "Write 150 words about your vision and share it."] }
  );

  // ── Sport & Fitness ───────────────────────────────────────────────────────────
  const sportTopic = await upsertTopic(b1Level.id, "sport-fitness", "Sport & Fitness", "Thảo luận về lợi ích của thể thao, sức khỏe thể chất và tinh thần.", 7);
  const sportLesson1 = await upsertLesson(sportTopic.id, "sport-benefits", "Benefits of Sport & Exercise", "Từ vựng thể thao và lập luận về vai trò của thể dục trong cuộc sống hiện đại.", 1);
  await createLessonSteps(
    sportLesson1.id,
    VOCAB_B1_SPORT,
    getGrammar("present-perfect"),
    { prompt: "IELTS Speaking Part 3: 'Why do you think so many people today live sedentary lifestyles?' Give a 2-minute answer with causes and solutions.", hints: ["I think the main reason is ...", "Modern technology has led to ...", "As a result, many people ...", "To solve this, I believe ...", "If people incorporated just 30 minutes of exercise into their day, ..."], duration: 120 },
    { prompt: "Task 2: 'Many young people spend too much time playing computer games rather than doing physical exercise. What problems does this cause and what can be done about it?' (250 words)", min: 250, max: 300, hints: ["Introduction: Increasing screen time vs. declining physical activity.", "Body 1: Problems — obesity, poor mental health, social isolation.", "Body 2: Solutions — parental limits, PE in schools, after-school sport clubs.", "Conclusion: A collaborative solution is needed."] },
    { title: "30-Day Fitness Challenge", description: "Kết hợp IELTS với sức khỏe: 30 phút vận động mỗi ngày + ghi lại cảm xúc bằng tiếng Anh.", instructions: ["Choose an activity: walking, jogging, yoga, cycling.", "Each day after exercising, write 2 sentences in English about how you feel.", "Use vocabulary: energetic, motivated, tired, refreshed, stressed, calm.", "After 30 days, write a full paragraph about the impact of exercise on your wellbeing."] }
  );

  console.log("✅ B1 Level topics seeded");

  // ════════════════════════════════════════════════════════════════════════════
  // B2 LEVEL — IELTS SPECIFIC
  // ════════════════════════════════════════════════════════════════════════════
  const b2Level = await getLevel("b2");

  // ── IELTS Writing Task 1 ──────────────────────────────────────────────────────
  const t1Topic = await upsertTopic(b2Level.id, "ielts-writing-task1", "IELTS Writing Task 1", "Làm chủ Task 1: mô tả biểu đồ, bảng số liệu và quy trình với ngôn ngữ chính xác.", 1);
  const t1Lesson1 = await upsertLesson(t1Topic.id, "task1-line-graph", "Line Graph — Describing Trends", "Ngôn ngữ mô tả xu hướng biểu đồ đường và cách viết Overview hoàn hảo.", 1);
  await createLessonSteps(
    t1Lesson1.id,
    VOCAB_B2_WRITING_T1,
    getGrammar("nominalisation"),
    { prompt: "Describe this line graph in 90 seconds: 'The graph shows the percentage of people using the internet in the UK, USA, and Vietnam from 2000 to 2020. In 2000: UK 25%, USA 45%, Vietnam 1%. In 2020: UK 95%, USA 90%, Vietnam 70%.' Use: rose, increased, peaked, remained stable.", hints: ["The graph shows ...", "Overall, all three countries saw a significant increase.", "In 2000, the UK started at ...", "By 2020, ...", "The most dramatic increase was in ..."], duration: 90 },
    { prompt: `Write a Task 1 response (150+ words) for this line graph:\nThe graph shows the number of international tourists visiting Vietnam from 2010 to 2022.\n2010: 5 million | 2015: 7.9 million | 2019: 18 million | 2020: 3.8 million | 2022: 3.7 million\n\nRemember: 1) Overview first. 2) Two paragraphs of detail. 3) Never give reasons.`, min: 150, max: 200, hints: ["Overall, visitor numbers rose significantly from 2010 to 2019, before falling sharply.", "In 2010, the figure stood at 5 million.", "Numbers climbed steadily, reaching a peak of 18 million in 2019.", "However, figures dropped dramatically to 3.8 million in 2020 due to ...", "By 2022, tourist numbers had not yet recovered, remaining at ..."] },
    { title: "Graph Collector", description: "Thu thập 5 biểu đồ từ báo tiếng Anh (BBC, The Economist) và tóm tắt mỗi biểu đồ trong 2 câu.", instructions: ["Find charts on: global temperatures, smartphone usage, energy consumption, etc.", "For each: write the OVERVIEW sentence first.", "Then write 1 sentence comparing the highest and lowest values.", "Share your 5 overviews with your study partner for feedback."] },
    [
      { prompt: "Which phrase correctly describes a downward trend?", skill: "WRITING" as SkillType, options: [{ text: "The figure rose sharply.", isCorrect: false }, { text: "The figure fell dramatically.", isCorrect: true }, { text: "The figure remained stable.", isCorrect: false }] },
      { prompt: "Which sentence correctly uses 'account for'?", skill: "VOCABULARY" as SkillType, options: [{ text: "Cars accounted for 40% of traffic.", isCorrect: true }, { text: "Cars accounted 40% of traffic.", isCorrect: false, explanation: "Always: account FOR — it takes a preposition." }, { text: "Cars were accounted for 40%.", isCorrect: false }] },
    ]
  );

  const t1Lesson2 = await upsertLesson(t1Topic.id, "task1-bar-chart", "Bar Chart & Pie Chart", "Mô tả biểu đồ cột và biểu đồ tròn với ngôn ngữ so sánh chính xác.", 2);
  await createLessonSteps(
    t1Lesson2.id,
    VOCAB_B2_WRITING_T1.slice(0, 8),
    getGrammar("comparative-superlative"),
    { prompt: "Practice: The pie chart shows the main reasons people choose to learn a foreign language: Career: 40%, Study abroad: 25%, Travel: 20%, Personal interest: 15%. Describe this chart in 60 seconds.", hints: ["The largest proportion was ...", "Career purposes accounted for ...", "While ... represented the smallest share at ...", "The figure for study abroad was ...", "Overall, professional and academic reasons ..."], duration: 60 },
    { prompt: "Write a 150-word Task 1 response for this bar chart:\nThe chart shows the percentage of adults who exercised regularly in 5 countries in 2020.\nSweden: 70% | Australia: 60% | UK: 52% | USA: 45% | Vietnam: 30%", min: 150, max: 200, hints: ["Overall, Sweden had the highest proportion ... while Vietnam had the lowest.", "Sweden led with 70% of adults exercising regularly.", "This was significantly higher than ...", "Vietnam recorded the lowest figure at ...", "There was a clear difference of 40 percentage points between ..."] },
    { title: "Data Hunter", description: "Tìm 1 biểu đồ cột trong báo cáo thống kê của Việt Nam và viết Task 1 mẫu.", instructions: ["Find a bar chart from: World Bank, Statista, or an English news site.", "Write a full 150-word Task 1 response.", "Check: Do you have an overview? Did you avoid giving reasons?", "Time yourself: 20 minutes maximum."] }
  );

  // ── IELTS Writing Task 2 — Opinion ────────────────────────────────────────────
  const t2OpinionTopic = await upsertTopic(b2Level.id, "ielts-writing-task2-opinion", "IELTS Writing Task 2 — Opinion Essay", "Làm chủ Opinion Essay theo phương pháp Simon: 4 đoạn, rõ ràng, lập luận sắc bén.", 2);
  const t2Lesson1 = await upsertLesson(t2OpinionTopic.id, "opinion-essay-structure", "Opinion Essay — Simon's Method", "Cấu trúc 4 đoạn của Simon và cách trình bày ý kiến rõ ràng từ đầu đến cuối.", 1);
  await createLessonSteps(
    t2Lesson1.id,
    VOCAB_B2_WRITING_T2,
    getGrammar("concession-phrases"),
    { prompt: "IELTS Speaking Part 3: 'Some people think the best way to improve public health is to increase the number of sports facilities. Do you agree or disagree?' Give your answer using the P-E-E framework (Point → Explanation → Example).", hints: ["I completely/largely agree/disagree with this view.", "My main reason is ...", "To explain further, ...", "For example, in countries like ...", "However, I also believe that ..."], duration: 120 },
    { prompt: `IELTS Opinion Essay Practice (40 minutes):\n\n"Some people think that the best way to increase road safety is to increase the minimum driving age to 25 years old. To what extent do you agree or disagree?"\n\nSimon's structure:\n• Introduction (2 sentences): Paraphrase + CLEAR position\n• Body 1: Main reason you agree/disagree + explanation + example\n• Body 2: Second reason OR acknowledge the other side + explain why you still hold your view\n• Conclusion (1–2 sentences): Restate position\n\nWrite 250–280 words.`, min: 250, max: 280, hints: ["Introduction: Paraphrase + 'I completely/largely agree/disagree because...'", "Body 1: Point + Explanation (This is because...) + Example (For instance,...)", "Body 2: Although... (concession), I still believe...", "Conclusion: In conclusion, I firmly believe that..."] },
    { title: "Essay Feedback Loop", description: "Viết 1 essay hoàn chỉnh, tự chấm theo 4 tiêu chí IELTS, rồi viết lại dựa trên nhận xét.", instructions: ["Write a full Task 2 Opinion essay (250 words, 40 minutes).", "Self-assess using 4 IELTS criteria (Task Achievement, Coherence, Lexical Resource, Grammar).", "Identify your weakest criterion and focus on improving it.", "Rewrite the weakest paragraph."] }
  );

  // ── IELTS Writing Task 2 — Discussion ────────────────────────────────────────
  const t2DiscTopic = await upsertTopic(b2Level.id, "ielts-writing-task2-discussion", "IELTS Writing Task 2 — Discussion Essay", "Trình bày 2 quan điểm một cách cân bằng và đưa ra ý kiến cá nhân thuyết phục.", 3);
  const t2DiscLesson = await upsertLesson(t2DiscTopic.id, "discussion-essay", "Discussion Essay Framework", "Cấu trúc 4 đoạn cho Discussion Essay và cách thể hiện ý kiến cá nhân đúng chỗ.", 1);
  await createLessonSteps(
    t2DiscLesson.id,
    VOCAB_B2_WRITING_T2,
    getGrammar("relative-clauses"),
    { prompt: "IELTS Speaking Part 3: 'Some people think money is the most important factor in choosing a job. Others think job satisfaction is more important.' Discuss both views — what do YOU think?", hints: ["Some people believe that salary is the most critical factor because ...", "However, others argue that job satisfaction is more valuable because ...", "For example, people who do work they love tend to ...", "Personally, I believe ...", "Ultimately, the ideal job offers both ..."], duration: 120 },
    { prompt: `Discussion Essay (40 minutes, 250–280 words):\n\n"Some people think that children should begin their formal education at a very early age. Others believe children should not start school until they are older. Discuss both views and give your own opinion."\n\nStructure:\n• Introduction: Paraphrase both views + your overall position\n• Body 1: View 1 (early education) + reason + example\n• Body 2: View 2 (later start) + reason + YOUR opinion in this paragraph\n• Conclusion: Balanced summary + restate final view`, min: 250, max: 280, hints: ["Introduction: Mention both views + your stance.", "Body 1: Proponents of early education argue that... For instance,...", "Body 2: On the other hand, those who favour... However, I personally believe...", "Conclusion: While both views have merit, I am convinced that..."] },
    { title: "Debate Club", description: "Với 1 người bạn, tranh luận 2 chiều về 1 chủ đề IELTS trong 10 phút bằng tiếng Anh.", instructions: ["Pick a topic: Should university education be free? Should smartphones be banned in schools?", "Person A argues FOR, Person B argues AGAINST (5 minutes each).", "Then switch sides.", "After the debate, each person writes a Discussion Essay on the topic."] }
  );

  // ── IELTS Speaking Strategy ───────────────────────────────────────────────────
  const speakingStratTopic = await upsertTopic(b2Level.id, "ielts-speaking-strategy", "IELTS Speaking Strategy", "Nắm vững chiến thuật cho cả 3 phần Speaking và đạt Band 7+ với sự tự tin.", 4);
  const speakLesson1 = await upsertLesson(speakingStratTopic.id, "speaking-part1-2", "Part 1 & 2 Mastery", "Chiến thuật trả lời Part 1 (A-R-E) và Part 2 (cue card) với Band 7 vocabulary.", 1);
  await createLessonSteps(
    speakLesson1.id,
    VOCAB_B2_SPEAKING_COLLOCATIONS,
    getGrammar("gerunds-infinitives"),
    { prompt: `IELTS Speaking Part 2 — 2 minutes:\n"Describe a book you have read that you particularly enjoyed. You should say:\n• What the book was about\n• When you read it\n• Who recommended it to you\nAnd explain why you enjoyed it so much."\n\nTip: Speak for the FULL 2 minutes. Use the Part 2 framework: What/Who/Where → When/How → Why it was special → How you feel now.`, hints: ["The book I'm going to talk about is ... by ...", "I read it about ... ago when I was ...", "A friend/teacher/colleague recommended it because ...", "The story is about ...", "What I particularly enjoyed was ...", "Looking back, this book made me feel ..."], duration: 120 },
    { prompt: "Write a Part 2 cue card answer in full. This is excellent writing practice for coherence and vocabulary. Use the same cue card from the speaking task.", min: 150, max: 250, hints: ["Paragraph 1: Introduce the book (title, author, genre).", "Paragraph 2: When and how you found it.", "Paragraph 3: What the story was about.", "Paragraph 4: Why you loved it + how it affected you."] },
    { title: "Speaking Clinic", description: "Record 5 Part 1 answers and 1 Part 2 answer this week. Listen back and score yourself on fluency, vocabulary, and grammar.", instructions: [
      "Part 1 questions to practise: 'Do you enjoy cooking? Why?', 'How do you prefer to travel?', 'Do you think it's important to learn new skills?'",
      "Use the A-R-E framework: Answer → Reason → Example",
      "For Part 2: speak for the full 2 minutes without stopping",
      "Listen back: Did you use a variety of vocabulary? Were your answers extended?",
    ] },
    [
      { prompt: `Simon's Part 1 Framework: "Do you like music?" — which answer is Band 7+?`, skill: "SPEAKING" as SkillType, options: [
        { text: "Yes, I do.", isCorrect: false, explanation: "Too short — Band 4 level. Always extend with a reason and example." },
        { text: "Yes, absolutely. I tend to listen to music while commuting because it helps me unwind. My favourite genre is jazz — there's something about the improvisation that I find fascinating.", isCorrect: true, explanation: "Band 7+: Extended answer with reason, example, and sophisticated vocabulary (tend to, commuting, unwind, improvisation)." },
        { text: "Yes, I enjoy to listen music every day.", isCorrect: false, explanation: "Grammar error: 'enjoy + gerund', not infinitive. 'listen to music', not 'listen music'." },
      ] },
    ]
  );

  const speakLesson2 = await upsertLesson(speakingStratTopic.id, "speaking-part3", "Part 3 — Academic Discussion", "Chiến thuật trả lời Part 3 với độ sâu học thuật và vocabulary Band 7+.", 2);
  await createLessonSteps(
    speakLesson2.id,
    VOCAB_B2_SPEAKING_COLLOCATIONS.slice(0, 8),
    getGrammar("modal-deduction"),
    { prompt: `IELTS Speaking Part 3 — Full practice:\nAnswer ALL questions with 60–90 second responses:\n1. "Why do people enjoy reading books?"\n2. "Do you think reading physical books will disappear in the future?"\n3. "How can governments encourage more people to read?"\nUse: as far as I'm concerned / it could be argued / widely acknowledged / to a large extent`, hints: ["As far as I'm concerned, ...", "It might be argued that ...", "On the other hand, ...", "To a large extent, ...", "The government could facilitate this by ..."], duration: 180 },
    { prompt: "Write a 200-word response to: 'How has technology changed the way people read books and other written materials?' Use Band 7+ vocabulary from this lesson.", min: 180, max: 250, hints: ["Technology has fundamentally transformed reading habits in several ways.", "To a large extent, e-readers and apps have...", "As far as I'm concerned, ...", "It is widely acknowledged that ...", "Nevertheless, physical books remain popular because ..."] },
    { title: "Part 3 Deep Dive", description: "Pick 3 IELTS topics and practise 3 Part 3 questions per topic. Record and review.", instructions: [
      "Topics to choose from: Education, Technology, Environment, Media, Health.",
      "For each topic, find 3 Part 3 questions online.",
      "Answer each in 60–90 seconds using the framework: Opinion + Explanation + Example + Contrast + Summary.",
      "Record all 9 answers and listen back. Count how many Band 7 vocabulary words you used.",
    ] }
  );

  // ── IELTS Reading Skills ──────────────────────────────────────────────────────
  const readingTopic = await upsertTopic(b2Level.id, "ielts-reading-skills", "IELTS Reading Skills", "Kỹ năng đọc IELTS: skimming, scanning, True/False/Not Given và tư duy phê phán.", 5);
  const readLesson1 = await upsertLesson(readingTopic.id, "reading-strategies", "Skimming, Scanning & Inference", "3 kỹ năng đọc cốt lõi để xử lý 3 bài đọc trong 60 phút IELTS.", 1);
  await createLessonSteps(
    readLesson1.id,
    VOCAB_B2_IELTS_READING,
    getGrammar("relative-clauses"),
    { prompt: "Explain in English: What is the difference between 'skimming' and 'scanning'? When do you use each one in the IELTS Reading test?", hints: ["Skimming means ...", "You skim when ...", "Scanning means ...", "You scan when ...", "The key difference is ..."], duration: 60 },
    { prompt: "Read this short paragraph and answer: Is the statement True, False, or Not Given?\n\nParagraph: 'Research conducted at Oxford University in 2018 found that students who read for pleasure at least 30 minutes per day scored an average of 20% higher in standardised language tests than those who did not. The study also noted that reading fiction specifically appeared to improve empathy scores.'\n\nStatement: 'The Oxford study proved that reading non-fiction improves language test scores more than reading fiction does.'\n\nWrite your answer (True/False/Not Given) and explain your reasoning in 50 words.", min: 40, max: 80, hints: ["The answer is ...", "The passage states that ...", "However, the passage does NOT mention ...", "Therefore, the answer is Not Given because ..."] },
    { title: "Speed Reading", description: "Thực hành đọc nhanh: đặt đồng hồ 20 phút và giải 1 IELTS Reading passage hoàn chỉnh.", instructions: [
      "Find a Cambridge IELTS reading passage (CAM 14–18 recommended).",
      "Set a 20-minute timer (simulate exam conditions).",
      "Skim the entire passage first (2 minutes), then answer questions.",
      "After finishing, check answers and analyse any mistakes: Were they reading errors or vocabulary gaps?",
    ] }
  );

  const readLesson2 = await upsertLesson(readingTopic.id, "reading-tfng", "True / False / Not Given Mastery", "Phân biệt chính xác True, False và Not Given — lỗi sai phổ biến nhất trong IELTS Reading.", 2);
  await createLessonSteps(
    readLesson2.id,
    VOCAB_B2_IELTS_READING.slice(0, 6),
    getGrammar("reported-speech"),
    { prompt: "Teach a friend (or yourself): Explain the difference between 'False' and 'Not Given' using an example from a reading passage. Many students confuse these two. Be clear and precise.", hints: ["FALSE means the passage directly CONTRADICTS the statement.", "NOT GIVEN means the passage gives NO information either way.", "For example: If the statement says '...X caused Y...' but the passage says '...X did NOT cause Y...', the answer is FALSE.", "But if the passage never mentions Y at all, the answer is NOT GIVEN.", "A common trap is: students choose FALSE just because the topic isn't discussed."], duration: 90 },
    { prompt: "Analyse these 3 True/False/Not Given questions and write your answers WITH explanations:\n\nPassage excerpt: 'Studies show that bilingual children often demonstrate enhanced problem-solving abilities compared to monolingual peers. Some researchers attribute this to the mental exercise required to switch between languages.'\n\n1. Bilingual children perform better than monolingual children in all school subjects.\n2. Speaking two languages may improve cognitive flexibility.\n3. The bilingual advantage disappears by adulthood.\n\nFor each: write T/F/NG and explain in 1 sentence.", min: 60, max: 120, hints: ["Q1: Look for 'all school subjects' — does the passage mention this?", "Q2: What does 'enhanced problem-solving' suggest about cognitive flexibility?", "Q3: Does the passage mention anything about adulthood?"] },
    { title: "TFNG Trainer", description: "Hoàn thành 1 bộ TFNG hoàn chỉnh từ Cambridge IELTS và phân tích từng câu sai.", instructions: [
      "Open Cambridge IELTS book (any edition), find a True/False/Not Given section.",
      "Complete all questions without checking answers.",
      "Mark your answers, then for every wrong answer: write WHY you got it wrong.",
      "Keep a 'TFNG Error Log' — every mistake teaches you a pattern.",
    ] }
  );

  // ── IELTS Listening Skills ────────────────────────────────────────────────────
  const listeningTopic = await upsertTopic(b2Level.id, "ielts-listening-skills", "IELTS Listening Skills", "Chiến thuật nghe IELTS: predict, detect distractors và làm chủ cả 4 sections.", 6);
  const listenLesson1 = await upsertLesson(listeningTopic.id, "listening-strategies", "Core Listening Strategies", "3 chiến thuật cốt lõi: predict, paraphrase awareness, và distractor detection.", 1);
  await createLessonSteps(
    listenLesson1.id,
    VOCAB_B2_IELTS_LISTENING,
    getGrammar("reported-speech"),
    { prompt: "Explain the 3 most important IELTS Listening strategies: Predict, Paraphrase Detection, and Distractor Avoidance. Give one real example for each.", hints: ["Strategy 1 — Predict: Before you listen, read the questions and predict ...", "Strategy 2 — Paraphrase: The question might say 'expensive' but the recording says ...", "Strategy 3 — Distractors: The speaker first says ... but then changes to ...", "Example of a distractor: The speaker says 'Monday' then corrects it to ..."], duration: 90 },
    { prompt: "Write a study guide (in English) for a Vietnamese learner explaining the 3 biggest mistakes Vietnamese students make in IELTS Listening and how to avoid them.", min: 150, max: 250, hints: ["Mistake 1: Not reading questions before listening. Solution: ...", "Mistake 2: Spelling errors in answers. Solution: ...", "Mistake 3: Missing the answer because of a distractor. Solution: ...", "Include specific examples for each mistake."] },
    { title: "Listening Lab", description: "Làm 1 Section 4 (academic lecture) từ Cambridge IELTS và phân tích chi tiết.", instructions: [
      "Section 4 is the hardest — it's a monologue on an academic topic.",
      "Before listening: read all questions, predict the type of answer (number? name? verb?).",
      "While listening: write the answer as soon as you hear it — don't wait.",
      "After: check answers and identify: Did you miss answers because of speed, vocabulary, or distractors?",
    ] }
  );

  const listenLesson2 = await upsertLesson(listeningTopic.id, "listening-question-types", "All Question Types Decoded", "Chiến thuật cụ thể cho từng dạng câu hỏi: note completion, MCQ, map labelling.", 2);
  await createLessonSteps(
    listenLesson2.id,
    VOCAB_B2_IELTS_LISTENING.slice(0, 6),
    getGrammar("passive-voice"),
    { prompt: "Walk through each listening question type and explain the key strategy:\n1. Note/Form Completion — 2. Multiple Choice — 3. Map Labelling — 4. Matching", hints: ["Note completion tip: The answers come in ORDER. Follow the questions as you listen.", "MCQ tip: Wrong options use words from the recording but change the meaning.", "Map labelling tip: Learn compass directions and positional language before the exam.", "Matching tip: The hardest type — read all options before listening."], duration: 90 },
    { prompt: "Write a personal listening study plan for the next 4 weeks. Include: what you will listen to each week, how long, and how you will track progress.", min: 120, max: 200, hints: ["Week 1: Section 1 & 2 (easier) — focus on ...", "Week 2: Section 3 & 4 — focus on ...", "Daily: Listen to ... minutes of English podcasts/news.", "Weekly: Complete 1 full Cambridge IELTS Listening test.", "Track: Record your score each week."] },
    { title: "Listening Immersion", description: "Nghe tiếng Anh ít nhất 1 tiếng mỗi ngày — không cần hiểu 100%, mục tiêu là quen tai.", instructions: [
      "Morning: 20 minutes — BBC News podcast or TED Talk.",
      "Afternoon: 20 minutes — IELTS Listening practice (Cambridge books).",
      "Evening: 20 minutes — English movie/series with English subtitles.",
      "After 30 days of immersion, your listening comprehension will improve dramatically.",
    ] }
  );

  console.log("✅ B2 Level topics seeded");

  console.log("\n🎉 Database seeded successfully!");
  console.log("📊 Summary:");
  console.log("   • 7 Levels: Zero → A1 → A2 → B1 → B2 → IELTS 7.0 → IELTS 9.0");
  console.log("   • 28 Topics: Full coverage from absolute beginner to IELTS 7.0");
  console.log("   • 44 Lessons: Comprehensive lesson data for all topics");
  console.log("   • Each lesson: Vocabulary → Grammar → Questions → Speaking → Writing → Mission");
  console.log("\n📅 Commitment: 18 months from absolute zero to IELTS 7.0 (2.5 hours/day)");
  console.log("⚡ Accelerated: 12 months at 4 hours/day");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
