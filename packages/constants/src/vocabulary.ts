// ─── Vocabulary Banks by Level & Topic ────────────────────────────────────────
// Each entry: word, pronunciation (IPA), definition (EN), exampleSentence, collocations[]

export type VocabEntry = {
  word: string;
  pronunciation: string;
  definition: string;
  exampleSentence: string;
  collocations: string[];
};

// ─── ZERO Level ────────────────────────────────────────────────────────────

export const VOCAB_ZERO_INTRODUCE: VocabEntry[] = [
  { word: "name", pronunciation: "/neɪm/", definition: "The word that identifies a person or thing", exampleSentence: "My name is Tri.", collocations: ["first name", "last name", "full name", "What is your name?"] },
  { word: "live", pronunciation: "/lɪv/", definition: "To have your home in a place", exampleSentence: "I live in Da Nang.", collocations: ["live in", "live with", "live near", "live alone"] },
  { word: "work", pronunciation: "/wɜːrk/", definition: "To do a job to earn money", exampleSentence: "I work at a company.", collocations: ["work at", "work for", "work hard", "work from home"] },
  { word: "study", pronunciation: "/ˈstʌdi/", definition: "To learn about a subject", exampleSentence: "I study English every morning.", collocations: ["study English", "study hard", "study at university", "study abroad"] },
  { word: "hobby", pronunciation: "/ˈhɒbi/", definition: "Something you enjoy doing in your free time", exampleSentence: "My hobby is playing football.", collocations: ["hobby is", "have a hobby", "enjoy as a hobby"] },
  { word: "goal", pronunciation: "/ɡoʊl/", definition: "Something you want to achieve", exampleSentence: "My goal is to speak English fluently.", collocations: ["set a goal", "achieve a goal", "long-term goal", "main goal"] },
  { word: "age", pronunciation: "/eɪdʒ/", definition: "How old a person is", exampleSentence: "My age is 28.", collocations: ["at the age of", "age group", "What is your age?"] },
  { word: "country", pronunciation: "/ˈkʌntri/", definition: "A nation with its own government and land", exampleSentence: "I am from Vietnam.", collocations: ["home country", "foreign country", "country of origin"] },
  { word: "speak", pronunciation: "/spiːk/", definition: "To say words; to talk", exampleSentence: "I want to speak English well.", collocations: ["speak English", "speak clearly", "speak fluently", "speak with confidence"] },
  { word: "learn", pronunciation: "/lɜːrn/", definition: "To gain knowledge or a skill", exampleSentence: "I learn English every day.", collocations: ["learn English", "learn from", "learn how to", "learn quickly"] },
];

export const VOCAB_ZERO_NUMBERS: VocabEntry[] = [
  { word: "number", pronunciation: "/ˈnʌmbər/", definition: "A mathematical value used for counting", exampleSentence: "My phone number is 0905 123 456.", collocations: ["phone number", "house number", "large number", "small number"] },
  { word: "time", pronunciation: "/taɪm/", definition: "The point when something happens; hours and minutes", exampleSentence: "What time is it? It is 8 o'clock.", collocations: ["on time", "What time is it?", "free time", "spend time"] },
  { word: "morning", pronunciation: "/ˈmɔːrnɪŋ/", definition: "The part of the day before midday", exampleSentence: "I wake up every morning at 6.", collocations: ["in the morning", "every morning", "this morning", "early morning"] },
  { word: "afternoon", pronunciation: "/ˌɑːftərˈnuːn/", definition: "The part of the day from midday to evening", exampleSentence: "I have lunch in the afternoon.", collocations: ["in the afternoon", "every afternoon", "this afternoon"] },
  { word: "evening", pronunciation: "/ˈiːvnɪŋ/", definition: "The part of the day from late afternoon to bedtime", exampleSentence: "I study English in the evening.", collocations: ["in the evening", "every evening", "this evening"] },
  { word: "week", pronunciation: "/wiːk/", definition: "A period of seven days", exampleSentence: "There are seven days in a week.", collocations: ["last week", "next week", "this week", "every week"] },
  { word: "today", pronunciation: "/təˈdeɪ/", definition: "The current day", exampleSentence: "Today is Monday.", collocations: ["today is", "earlier today", "later today"] },
  { word: "tomorrow", pronunciation: "/təˈmɒrəʊ/", definition: "The day after today", exampleSentence: "Tomorrow is Tuesday.", collocations: ["tomorrow morning", "tomorrow afternoon", "see you tomorrow"] },
  { word: "date", pronunciation: "/deɪt/", definition: "The day, month and year of something", exampleSentence: "What is the date today? It is 22 June.", collocations: ["What is the date?", "date of birth", "closing date"] },
  { word: "year", pronunciation: "/jɪər/", definition: "A period of twelve months", exampleSentence: "I have studied English for two years.", collocations: ["this year", "last year", "next year", "every year"] },
];

export const VOCAB_ZERO_HOME: VocabEntry[] = [
  { word: "house", pronunciation: "/haʊs/", definition: "A building where people live", exampleSentence: "I live in a small house.", collocations: ["big house", "small house", "my house", "at home"] },
  { word: "room", pronunciation: "/ruːm/", definition: "A separate area inside a building", exampleSentence: "My bedroom is on the second floor.", collocations: ["bedroom", "bathroom", "living room", "dining room"] },
  { word: "kitchen", pronunciation: "/ˈkɪtʃɪn/", definition: "The room where you cook food", exampleSentence: "My mother cooks in the kitchen.", collocations: ["in the kitchen", "kitchen table", "open kitchen"] },
  { word: "table", pronunciation: "/ˈteɪbəl/", definition: "A piece of furniture with a flat top and legs", exampleSentence: "We eat at the table.", collocations: ["dining table", "coffee table", "at the table", "kitchen table"] },
  { word: "chair", pronunciation: "/tʃɛər/", definition: "A piece of furniture to sit on", exampleSentence: "Please sit on the chair.", collocations: ["office chair", "sit on a chair", "comfortable chair"] },
  { word: "bed", pronunciation: "/bɛd/", definition: "A piece of furniture for sleeping", exampleSentence: "I sleep in my bed at night.", collocations: ["go to bed", "make the bed", "in bed", "single bed"] },
  { word: "window", pronunciation: "/ˈwɪndəʊ/", definition: "An opening in a wall covered with glass", exampleSentence: "Please open the window.", collocations: ["open the window", "close the window", "look out the window"] },
  { word: "door", pronunciation: "/dɔːr/", definition: "A movable barrier for entering a room", exampleSentence: "Please close the door.", collocations: ["open the door", "close the door", "front door", "back door"] },
  { word: "floor", pronunciation: "/flɔːr/", definition: "The bottom surface of a room", exampleSentence: "The cat is on the floor.", collocations: ["ground floor", "first floor", "on the floor"] },
  { word: "wall", pronunciation: "/wɔːl/", definition: "The vertical surfaces of a room", exampleSentence: "There is a picture on the wall.", collocations: ["on the wall", "brick wall", "paint the wall"] },
];

export const VOCAB_ZERO_FAMILY: VocabEntry[] = [
  { word: "family", pronunciation: "/ˈfæməli/", definition: "A group of people related to each other", exampleSentence: "I love my family very much.", collocations: ["my family", "family member", "start a family", "family home"] },
  { word: "mother", pronunciation: "/ˈmʌðər/", definition: "A female parent", exampleSentence: "My mother is a teacher.", collocations: ["my mother", "mother's day", "working mother"] },
  { word: "father", pronunciation: "/ˈfɑːðər/", definition: "A male parent", exampleSentence: "My father works at a hospital.", collocations: ["my father", "father's day", "single father"] },
  { word: "brother", pronunciation: "/ˈbrʌðər/", definition: "A male sibling", exampleSentence: "I have one brother and one sister.", collocations: ["older brother", "younger brother", "my brother"] },
  { word: "sister", pronunciation: "/ˈsɪstər/", definition: "A female sibling", exampleSentence: "My sister is 20 years old.", collocations: ["older sister", "younger sister", "my sister"] },
  { word: "son", pronunciation: "/sʌn/", definition: "A male child", exampleSentence: "They have two sons.", collocations: ["my son", "only son", "eldest son"] },
  { word: "daughter", pronunciation: "/ˈdɔːtər/", definition: "A female child", exampleSentence: "Their daughter is three years old.", collocations: ["my daughter", "only daughter", "eldest daughter"] },
  { word: "husband", pronunciation: "/ˈhʌzbənd/", definition: "A married man", exampleSentence: "Her husband is a doctor.", collocations: ["my husband", "future husband", "ex-husband"] },
  { word: "wife", pronunciation: "/waɪf/", definition: "A married woman", exampleSentence: "His wife is an engineer.", collocations: ["my wife", "future wife", "ex-wife"] },
  { word: "grandparents", pronunciation: "/ˈɡrændˌpɛərənts/", definition: "The parents of your mother or father", exampleSentence: "I visit my grandparents every weekend.", collocations: ["my grandparents", "live with grandparents", "grandfather", "grandmother"] },
];

// ─── A1 Level ──────────────────────────────────────────────────────────────

export const VOCAB_A1_DAILY_ROUTINE: VocabEntry[] = [
  { word: "wake up", pronunciation: "/weɪk ʌp/", definition: "To stop sleeping and become alert", exampleSentence: "I wake up at 6 every morning.", collocations: ["wake up early", "wake up at", "wake up feeling"] },
  { word: "get up", pronunciation: "/ɡɛt ʌp/", definition: "To rise from bed", exampleSentence: "I get up at 6:30.", collocations: ["get up early", "get up late", "get up at"] },
  { word: "brush teeth", pronunciation: "/brʌʃ tiːθ/", definition: "To clean your teeth with a toothbrush", exampleSentence: "I brush my teeth twice a day.", collocations: ["brush teeth twice a day", "brush teeth after meals"] },
  { word: "have breakfast", pronunciation: "/hæv ˈbrɛkfəst/", definition: "To eat the first meal of the day", exampleSentence: "I have breakfast at 7 a.m.", collocations: ["have breakfast at", "skip breakfast", "eat breakfast"] },
  { word: "go to work", pronunciation: "/ɡəʊ tuː wɜːrk/", definition: "To travel to your workplace", exampleSentence: "I go to work by motorbike.", collocations: ["go to work by bus", "go to work early", "drive to work"] },
  { word: "have lunch", pronunciation: "/hæv lʌntʃ/", definition: "To eat the midday meal", exampleSentence: "I have lunch with my colleagues.", collocations: ["have lunch at", "have lunch with", "eat lunch", "lunch break"] },
  { word: "finish work", pronunciation: "/ˈfɪnɪʃ wɜːrk/", definition: "To stop working for the day", exampleSentence: "I finish work at 5:30 p.m.", collocations: ["finish work at", "finish work early"] },
  { word: "have dinner", pronunciation: "/hæv ˈdɪnər/", definition: "To eat the evening meal", exampleSentence: "We have dinner together every evening.", collocations: ["have dinner at", "cook dinner", "eat dinner"] },
  { word: "go to bed", pronunciation: "/ɡəʊ tuː bɛd/", definition: "To go and sleep for the night", exampleSentence: "I go to bed at 11 p.m.", collocations: ["go to bed at", "go to bed early", "stay up late"] },
  { word: "usually", pronunciation: "/ˈjuːʒuəli/", definition: "Most of the time; generally", exampleSentence: "I usually have coffee in the morning.", collocations: ["usually have", "usually go", "usually wake up"] },
  { word: "always", pronunciation: "/ˈɔːlweɪz/", definition: "Every time, without exception", exampleSentence: "I always brush my teeth before bed.", collocations: ["almost always", "always remember", "always try to"] },
  { word: "sometimes", pronunciation: "/ˈsʌmtaɪmz/", definition: "On some occasions but not always", exampleSentence: "I sometimes go for a walk after dinner.", collocations: ["sometimes go", "sometimes eat", "sometimes watch"] },
  { word: "never", pronunciation: "/ˈnɛvər/", definition: "Not at any time", exampleSentence: "I never skip breakfast.", collocations: ["almost never", "never forget", "never miss"] },
  { word: "exercise", pronunciation: "/ˈɛksərsaɪz/", definition: "Physical activity done to keep fit", exampleSentence: "I exercise three times a week.", collocations: ["regular exercise", "do exercise", "go for exercise", "morning exercise"] },
  { word: "routine", pronunciation: "/ruːˈtiːn/", definition: "A set of regular activities done in a fixed order", exampleSentence: "My morning routine starts at 6 a.m.", collocations: ["daily routine", "morning routine", "evening routine", "stick to a routine"] },
];

export const VOCAB_A1_FOOD: VocabEntry[] = [
  { word: "eat", pronunciation: "/iːt/", definition: "To put food in your mouth and swallow it", exampleSentence: "I eat rice every day.", collocations: ["eat rice", "eat out", "eat healthy", "something to eat"] },
  { word: "drink", pronunciation: "/drɪŋk/", definition: "To take liquid into your mouth and swallow it", exampleSentence: "I drink water eight times a day.", collocations: ["drink water", "drink coffee", "have a drink"] },
  { word: "cook", pronunciation: "/kʊk/", definition: "To prepare food using heat", exampleSentence: "My mother cooks delicious food.", collocations: ["cook dinner", "cook meals", "learn to cook", "home-cooked"] },
  { word: "hungry", pronunciation: "/ˈhʌŋɡri/", definition: "Feeling the need to eat", exampleSentence: "I am very hungry after exercise.", collocations: ["feel hungry", "very hungry", "a little hungry"] },
  { word: "delicious", pronunciation: "/dɪˈlɪʃəs/", definition: "Having a very pleasant taste", exampleSentence: "This food is absolutely delicious.", collocations: ["taste delicious", "smell delicious", "look delicious"] },
  { word: "meal", pronunciation: "/miːl/", definition: "Food that is eaten at one time", exampleSentence: "Three meals a day is healthy.", collocations: ["three meals a day", "big meal", "light meal", "prepare a meal"] },
  { word: "vegetable", pronunciation: "/ˈvɛdʒtəbəl/", definition: "A plant eaten as food", exampleSentence: "I eat vegetables every day.", collocations: ["fresh vegetables", "eat vegetables", "green vegetables", "grow vegetables"] },
  { word: "fruit", pronunciation: "/fruːt/", definition: "A sweet food that grows on trees or plants", exampleSentence: "I eat fruit for breakfast.", collocations: ["fresh fruit", "tropical fruit", "eat fruit", "piece of fruit"] },
  { word: "meat", pronunciation: "/miːt/", definition: "Food from animals", exampleSentence: "I eat meat twice a week.", collocations: ["red meat", "white meat", "eat meat", "raw meat", "cooked meat"] },
  { word: "restaurant", pronunciation: "/ˈrɛstrɒnt/", definition: "A place where you pay to eat meals", exampleSentence: "We went to a restaurant last weekend.", collocations: ["eat at a restaurant", "go to a restaurant", "restaurant menu", "open a restaurant"] },
];

export const VOCAB_A1_HOBBIES: VocabEntry[] = [
  { word: "enjoy", pronunciation: "/ɪnˈdʒɔɪ/", definition: "To like doing something; to get pleasure from it", exampleSentence: "I enjoy reading books in the evening.", collocations: ["enjoy doing", "really enjoy", "enjoy yourself"] },
  { word: "sport", pronunciation: "/spɔːrt/", definition: "A physical activity with rules that people do for fun or competition", exampleSentence: "I love playing sport after work.", collocations: ["play sport", "watch sport", "favourite sport", "do sport"] },
  { word: "music", pronunciation: "/ˈmjuːzɪk/", definition: "Sounds arranged in a pleasant way", exampleSentence: "I listen to music on the way to work.", collocations: ["listen to music", "play music", "love music", "music lover"] },
  { word: "read", pronunciation: "/riːd/", definition: "To look at and understand written words", exampleSentence: "I read books every night before bed.", collocations: ["read books", "read news", "read a lot"] },
  { word: "watch", pronunciation: "/wɒtʃ/", definition: "To look at something for a period of time", exampleSentence: "I watch movies at the weekend.", collocations: ["watch TV", "watch movies", "watch carefully"] },
  { word: "travel", pronunciation: "/ˈtrævəl/", definition: "To go from one place to another", exampleSentence: "I love to travel to new places.", collocations: ["travel abroad", "love to travel", "travel by plane", "travel around"] },
  { word: "paint", pronunciation: "/peɪnt/", definition: "To create a picture using paint", exampleSentence: "She paints beautiful landscapes.", collocations: ["paint pictures", "love painting", "paint a wall"] },
  { word: "cook", pronunciation: "/kʊk/", definition: "To prepare food; also a hobby", exampleSentence: "He loves cooking traditional Vietnamese food.", collocations: ["love cooking", "enjoy cooking", "cooking class"] },
  { word: "photograph", pronunciation: "/ˈfəʊtəɡrɑːf/", definition: "To take pictures with a camera", exampleSentence: "My hobby is photographing nature.", collocations: ["take photographs", "love photography", "professional photographer"] },
  { word: "free time", pronunciation: "/friː taɪm/", definition: "Time when you are not working or studying", exampleSentence: "In my free time, I play the guitar.", collocations: ["in my free time", "spend free time", "use free time"] },
];

// ─── A2 Level ──────────────────────────────────────────────────────────────

export const VOCAB_A2_TRAVEL: VocabEntry[] = [
  { word: "journey", pronunciation: "/ˈdʒɜːrni/", definition: "The act of travelling from one place to another", exampleSentence: "The journey from Hanoi to HCMC takes two hours by plane.", collocations: ["long journey", "start a journey", "journey by train"] },
  { word: "destination", pronunciation: "/ˌdɛstɪˈneɪʃən/", definition: "The place you are travelling to", exampleSentence: "My favourite destination is Japan.", collocations: ["travel destination", "popular destination", "final destination", "reach your destination"] },
  { word: "accommodation", pronunciation: "/əˌkɒməˈdeɪʃən/", definition: "A place to stay when travelling", exampleSentence: "We booked accommodation in a hotel.", collocations: ["book accommodation", "cheap accommodation", "find accommodation", "hotel accommodation"] },
  { word: "holiday", pronunciation: "/ˈhɒlədeɪ/", definition: "A period of time when you do not work or study", exampleSentence: "I went on holiday to Thailand last year.", collocations: ["go on holiday", "summer holiday", "family holiday", "holiday destination"] },
  { word: "tourist", pronunciation: "/ˈtʊərɪst/", definition: "A person who visits a place for pleasure", exampleSentence: "Many tourists visit Da Nang every year.", collocations: ["foreign tourist", "tourist attraction", "tourist area", "attract tourists"] },
  { word: "luggage", pronunciation: "/ˈlʌɡɪdʒ/", definition: "Bags and cases you take when travelling", exampleSentence: "Please check your luggage before the flight.", collocations: ["carry luggage", "hand luggage", "check your luggage", "luggage allowance"] },
  { word: "passport", pronunciation: "/ˈpɑːspɔːrt/", definition: "An official document for international travel", exampleSentence: "Don't forget your passport!", collocations: ["check your passport", "valid passport", "apply for a passport"] },
  { word: "flight", pronunciation: "/flaɪt/", definition: "A journey by aeroplane", exampleSentence: "The flight from Da Nang to Singapore is four hours.", collocations: ["book a flight", "take a flight", "long-haul flight", "flight delay"] },
  { word: "book", pronunciation: "/bʊk/", definition: "To arrange in advance to have or use something", exampleSentence: "I booked a hotel room online.", collocations: ["book a room", "book a table", "book in advance", "book online"] },
  { word: "culture", pronunciation: "/ˈkʌltʃər/", definition: "The ideas, customs and social behaviour of a people", exampleSentence: "I enjoy learning about local culture when I travel.", collocations: ["local culture", "learn about culture", "cultural experience", "different cultures"] },
];

export const VOCAB_A2_HEALTH: VocabEntry[] = [
  { word: "health", pronunciation: "/hɛlθ/", definition: "The condition of your body and mind", exampleSentence: "Good food is important for your health.", collocations: ["good health", "health problem", "improve your health", "public health"] },
  { word: "doctor", pronunciation: "/ˈdɒktər/", definition: "A person trained to treat illness and injury", exampleSentence: "I saw a doctor about my headache.", collocations: ["see a doctor", "visit the doctor", "family doctor", "doctor's appointment"] },
  { word: "hospital", pronunciation: "/ˈhɒspɪtəl/", definition: "A place where sick or injured people are treated", exampleSentence: "She was taken to hospital after the accident.", collocations: ["go to hospital", "local hospital", "leave hospital", "hospital treatment"] },
  { word: "medicine", pronunciation: "/ˈmɛdɪsɪn/", definition: "A substance you take to treat illness", exampleSentence: "The doctor prescribed medicine for my cold.", collocations: ["take medicine", "prescribed medicine", "traditional medicine"] },
  { word: "exercise", pronunciation: "/ˈɛksərsaɪz/", definition: "Physical activity done to keep healthy", exampleSentence: "Regular exercise keeps you healthy.", collocations: ["regular exercise", "do exercise", "daily exercise", "lack of exercise"] },
  { word: "diet", pronunciation: "/ˈdaɪət/", definition: "The food you regularly eat", exampleSentence: "A balanced diet is important for good health.", collocations: ["healthy diet", "balanced diet", "go on a diet", "poor diet"] },
  { word: "stress", pronunciation: "/strɛs/", definition: "A feeling of worry caused by difficulties", exampleSentence: "Too much work can cause stress.", collocations: ["feel stressed", "reduce stress", "high stress", "stress levels"] },
  { word: "sleep", pronunciation: "/sliːp/", definition: "The natural state of rest for the body", exampleSentence: "Adults need eight hours of sleep every night.", collocations: ["get enough sleep", "lack of sleep", "fall asleep", "deep sleep"] },
  { word: "fit", pronunciation: "/fɪt/", definition: "Healthy and physically strong", exampleSentence: "I go to the gym to stay fit.", collocations: ["keep fit", "stay fit", "physically fit", "get fit"] },
  { word: "symptom", pronunciation: "/ˈsɪmptəm/", definition: "A sign that shows a person is ill", exampleSentence: "A fever is a common symptom of the flu.", collocations: ["common symptom", "show symptoms", "symptom of", "mild symptoms"] },
];

// ─── B1 Level ──────────────────────────────────────────────────────────────

export const VOCAB_B1_EDUCATION: VocabEntry[] = [
  { word: "education", pronunciation: "/ˌɛdjʊˈkeɪʃən/", definition: "The process of teaching and learning", exampleSentence: "Education is the key to success.", collocations: ["higher education", "quality education", "education system", "receive an education"] },
  { word: "knowledge", pronunciation: "/ˈnɒlɪdʒ/", definition: "Information and understanding you have gained", exampleSentence: "Reading books helps you gain knowledge.", collocations: ["gain knowledge", "share knowledge", "background knowledge", "general knowledge"] },
  { word: "skill", pronunciation: "/skɪl/", definition: "The ability to do something well through practice", exampleSentence: "Communication is an important skill in the workplace.", collocations: ["develop skills", "language skills", "practical skills", "key skill"] },
  { word: "curriculum", pronunciation: "/kəˈrɪkjʊləm/", definition: "The subjects taught at a school or university", exampleSentence: "The school updated its curriculum to include coding.", collocations: ["school curriculum", "national curriculum", "design a curriculum", "follow a curriculum"] },
  { word: "academic", pronunciation: "/ˌækəˈdɛmɪk/", definition: "Relating to education and learning at school", exampleSentence: "She has excellent academic results.", collocations: ["academic performance", "academic year", "academic qualifications", "achieve academically"] },
  { word: "degree", pronunciation: "/dɪˈɡriː/", definition: "A qualification from a university", exampleSentence: "He has a degree in engineering.", collocations: ["university degree", "earn a degree", "degree in", "postgraduate degree"] },
  { word: "graduation", pronunciation: "/ˌɡrædʒuˈeɪʃən/", definition: "The ceremony when you complete your studies", exampleSentence: "Her graduation ceremony was last month.", collocations: ["graduation ceremony", "graduation day", "after graduation"] },
  { word: "tuition", pronunciation: "/tjuːˈɪʃən/", definition: "Teaching given to one person or a small group", exampleSentence: "Private tuition helped me improve my grades.", collocations: ["private tuition", "tuition fees", "online tuition"] },
  { word: "assignment", pronunciation: "/əˈsaɪnmənt/", definition: "A piece of work given to students", exampleSentence: "I need to submit my assignment by Friday.", collocations: ["complete an assignment", "hand in an assignment", "group assignment", "written assignment"] },
  { word: "scholarship", pronunciation: "/ˈskɒlərʃɪp/", definition: "Money given to students to help pay for education", exampleSentence: "She won a scholarship to study abroad.", collocations: ["win a scholarship", "apply for a scholarship", "full scholarship", "scholarship programme"] },
  { word: "performance", pronunciation: "/pərˈfɔːrməns/", definition: "How well you do something", exampleSentence: "Her academic performance improved a lot this year.", collocations: ["academic performance", "improve performance", "strong performance", "measure performance"] },
  { word: "critical thinking", pronunciation: "/ˈkrɪtɪkəl ˈθɪŋkɪŋ/", definition: "The ability to analyse information carefully", exampleSentence: "Universities value critical thinking skills.", collocations: ["develop critical thinking", "critical thinking skills", "encourage critical thinking"] },
];

export const VOCAB_B1_TECHNOLOGY: VocabEntry[] = [
  { word: "technology", pronunciation: "/tɛkˈnɒlədʒi/", definition: "Scientific knowledge applied to practical purposes", exampleSentence: "Technology has changed the way we communicate.", collocations: ["modern technology", "use technology", "technology advances", "digital technology"] },
  { word: "internet", pronunciation: "/ˈɪntərˌnɛt/", definition: "The global network connecting computers", exampleSentence: "The internet gives us access to information worldwide.", collocations: ["use the internet", "internet connection", "internet access", "browse the internet"] },
  { word: "device", pronunciation: "/dɪˈvaɪs/", definition: "A machine designed for a particular purpose", exampleSentence: "Smartphones are the most popular electronic devices.", collocations: ["mobile device", "electronic device", "smart device", "use a device"] },
  { word: "application", pronunciation: "/ˌæplɪˈkeɪʃən/", definition: "A computer programme designed for a task (app)", exampleSentence: "This application helps you learn English.", collocations: ["mobile application", "download an app", "useful application", "develop an app"] },
  { word: "social media", pronunciation: "/ˈsəʊʃəl ˈmiːdiə/", definition: "Websites and apps for sharing content with others", exampleSentence: "Many people spend hours on social media every day.", collocations: ["use social media", "social media platform", "social media post", "avoid social media"] },
  { word: "digital", pronunciation: "/ˈdɪdʒɪtəl/", definition: "Using or relating to computers and electronic systems", exampleSentence: "We live in a digital age.", collocations: ["digital age", "digital technology", "digital skills", "go digital"] },
  { word: "online", pronunciation: "/ˈɒnlaɪn/", definition: "Connected to or available through the internet", exampleSentence: "I take online classes every evening.", collocations: ["online shopping", "online learning", "go online", "online course"] },
  { word: "artificial intelligence", pronunciation: "/ˌɑːtɪˈfɪʃəl ɪnˈtɛlɪdʒəns/", definition: "Computer systems that can perform human-like tasks", exampleSentence: "Artificial intelligence is changing many industries.", collocations: ["use AI", "AI technology", "develop AI", "AI systems"] },
  { word: "data", pronunciation: "/ˈdeɪtə/", definition: "Facts and information collected for analysis", exampleSentence: "Companies collect data about their customers.", collocations: ["collect data", "personal data", "data privacy", "large amounts of data"] },
  { word: "innovation", pronunciation: "/ˌɪnəˈveɪʃən/", definition: "A new idea or method that is better than before", exampleSentence: "Innovation in technology improves our lives.", collocations: ["technological innovation", "drive innovation", "latest innovation", "encourage innovation"] },
];

export const VOCAB_B1_ENVIRONMENT: VocabEntry[] = [
  { word: "environment", pronunciation: "/ɪnˈvaɪrənmənt/", definition: "The natural world around us", exampleSentence: "We must protect the environment for future generations.", collocations: ["protect the environment", "damage the environment", "natural environment", "environmental issue"] },
  { word: "pollution", pronunciation: "/pəˈluːʃən/", definition: "The process of making the environment dirty", exampleSentence: "Air pollution is a serious problem in big cities.", collocations: ["air pollution", "water pollution", "reduce pollution", "cause pollution"] },
  { word: "climate change", pronunciation: "/ˈklaɪmɪt tʃeɪndʒ/", definition: "Long-term changes in global temperatures and weather", exampleSentence: "Climate change is one of the biggest challenges of our time.", collocations: ["fight climate change", "effects of climate change", "address climate change"] },
  { word: "renewable energy", pronunciation: "/rɪˈnjuːəbəl ˈɛnərʒi/", definition: "Energy from natural sources that can be replaced", exampleSentence: "Solar power is a type of renewable energy.", collocations: ["use renewable energy", "switch to renewable energy", "invest in renewable energy"] },
  { word: "recycle", pronunciation: "/ˌriːˈsaɪkəl/", definition: "To process used materials so they can be used again", exampleSentence: "We should recycle plastic bottles and paper.", collocations: ["recycle waste", "recycle materials", "encourage recycling"] },
  { word: "carbon emission", pronunciation: "/ˈkɑːbən ɪˈmɪʃən/", definition: "The release of carbon dioxide into the atmosphere", exampleSentence: "Carbon emissions from cars contribute to global warming.", collocations: ["reduce carbon emissions", "carbon emission levels", "cut carbon emissions"] },
  { word: "deforestation", pronunciation: "/dɪˌfɒrɪˈsteɪʃən/", definition: "The clearing of forests by cutting down trees", exampleSentence: "Deforestation destroys the homes of many animals.", collocations: ["cause deforestation", "stop deforestation", "tropical deforestation"] },
  { word: "biodiversity", pronunciation: "/ˌbaɪəʊdaɪˈvɜːrsɪti/", definition: "The variety of plant and animal life in the world", exampleSentence: "Rainforests have incredible biodiversity.", collocations: ["protect biodiversity", "loss of biodiversity", "rich in biodiversity"] },
  { word: "sustainable", pronunciation: "/səˈsteɪnəbəl/", definition: "Able to continue without damaging the environment", exampleSentence: "We need sustainable solutions to environmental problems.", collocations: ["sustainable development", "sustainable energy", "sustainable living", "more sustainable"] },
  { word: "global warming", pronunciation: "/ˈɡləʊbəl ˈwɔːrmɪŋ/", definition: "The gradual heating of the Earth's surface", exampleSentence: "Global warming is causing sea levels to rise.", collocations: ["fight global warming", "effects of global warming", "contribute to global warming"] },
];

// ─── B2 Level — IELTS Writing Vocabulary ──────────────────────────────────

export const VOCAB_B2_WRITING_T1: VocabEntry[] = [
  { word: "increase", pronunciation: "/ɪnˈkriːs/", definition: "To become or make larger in number or amount", exampleSentence: "The number of students increased significantly from 2010 to 2020.", collocations: ["increase significantly", "increase gradually", "sharp increase", "increase from X to Y", "increase by 20%"] },
  { word: "decrease", pronunciation: "/dɪˈkriːs/", definition: "To become or make smaller in number or amount", exampleSentence: "The figure decreased sharply after 2015.", collocations: ["decrease significantly", "decrease gradually", "sharp decrease", "decrease in"] },
  { word: "rise", pronunciation: "/raɪz/", definition: "To move upward in amount or level", exampleSentence: "Temperatures are expected to rise by 2 degrees.", collocations: ["rise sharply", "rise gradually", "steady rise", "rise to"] },
  { word: "fall", pronunciation: "/fɔːl/", definition: "To decrease or drop in amount", exampleSentence: "The price of oil fell dramatically last year.", collocations: ["fall sharply", "fall dramatically", "gradual fall", "fall below"] },
  { word: "fluctuate", pronunciation: "/ˈflʌktʃueɪt/", definition: "To change frequently between one level and another", exampleSentence: "The figures fluctuated between 30% and 50% over five years.", collocations: ["fluctuate between", "fluctuate slightly", "wildly fluctuate"] },
  { word: "remain stable", pronunciation: "/rɪˈmeɪn ˈsteɪbəl/", definition: "To stay at the same level without changing", exampleSentence: "The unemployment rate remained stable throughout the year.", collocations: ["remain relatively stable", "remain constant", "stay stable"] },
  { word: "peak", pronunciation: "/piːk/", definition: "To reach the highest point", exampleSentence: "The figure peaked at 80% in 2015.", collocations: ["reach a peak", "peak at", "hit a peak", "highest peak"] },
  { word: "account for", pronunciation: "/əˈkaʊnt fɔːr/", definition: "To represent a certain proportion of something", exampleSentence: "Cars accounted for 40% of total transport.", collocations: ["account for X%", "account for the majority", "account for nearly half"] },
  { word: "proportion", pronunciation: "/prəˈpɔːrʃən/", definition: "A part or share of a whole", exampleSentence: "A larger proportion of young people use social media.", collocations: ["a large proportion", "a small proportion", "proportion of", "growing proportion"] },
  { word: "respectively", pronunciation: "/rɪˈspɛktɪvli/", definition: "In the order in which they were mentioned", exampleSentence: "Cars and buses accounted for 40% and 30% respectively.", collocations: ["respectively", "X and Y respectively"] },
  { word: "overall", pronunciation: "/ˌəʊvərˈɔːl/", definition: "Considering everything together", exampleSentence: "Overall, car use increased while public transport decreased.", collocations: ["overall trend", "overall figure", "taken overall"] },
  { word: "trend", pronunciation: "/trɛnd/", definition: "A general direction in which something changes", exampleSentence: "The overall trend shows an increase in online shopping.", collocations: ["overall trend", "upward trend", "downward trend", "emerging trend"] },
];

export const VOCAB_B2_WRITING_T2: VocabEntry[] = [
  { word: "argue", pronunciation: "/ˈɑːɡjuː/", definition: "To give reasons to support a point of view", exampleSentence: "I would argue that education should be free for everyone.", collocations: ["argue that", "argue for/against", "some argue that"] },
  { word: "benefit", pronunciation: "/ˈbɛnɪfɪt/", definition: "An advantage or good thing", exampleSentence: "One major benefit of online learning is flexibility.", collocations: ["major benefit", "key benefit", "benefit from", "provide benefits"] },
  { word: "disadvantage", pronunciation: "/ˌdɪsədˈvɑːntɪdʒ/", definition: "A negative aspect or problem", exampleSentence: "A major disadvantage of this approach is the high cost.", collocations: ["major disadvantage", "key disadvantage", "have disadvantages"] },
  { word: "contribute to", pronunciation: "/kənˈtrɪbjuːt tuː/", definition: "To help cause or produce something", exampleSentence: "Technology contributes to economic growth.", collocations: ["contribute significantly to", "contribute to the problem", "major contributor"] },
  { word: "lead to", pronunciation: "/liːd tuː/", definition: "To result in or cause something", exampleSentence: "Poor diet can lead to serious health problems.", collocations: ["lead to problems", "lead to an increase", "inevitably lead to"] },
  { word: "address", pronunciation: "/əˈdrɛs/", definition: "To deal with or find a solution to a problem", exampleSentence: "Governments must address the problem of climate change.", collocations: ["address the issue", "address the problem", "effectively address"] },
  { word: "impact", pronunciation: "/ˈɪmpækt/", definition: "A strong effect or influence on something", exampleSentence: "Social media has a significant impact on young people.", collocations: ["have an impact", "significant impact", "negative impact", "positive impact"] },
  { word: "solution", pronunciation: "/səˈluːʃən/", definition: "A way to solve a problem", exampleSentence: "One possible solution is to invest in renewable energy.", collocations: ["find a solution", "possible solution", "long-term solution", "practical solution"] },
  { word: "however", pronunciation: "/haʊˈɛvər/", definition: "Despite what was just said; in contrast", exampleSentence: "Online learning is convenient. However, it can feel isolating.", collocations: ["however, this", "however, it is important"] },
  { word: "furthermore", pronunciation: "/ˈfɜːrðərmɔːr/", definition: "In addition to what was said before", exampleSentence: "Furthermore, research shows that exercise improves mental health.", collocations: ["furthermore, it is", "furthermore, this shows"] },
  { word: "consequently", pronunciation: "/ˈkɒnsɪkwəntli/", definition: "As a result of what was just mentioned", exampleSentence: "Pollution is increasing. Consequently, the number of health problems is rising.", collocations: ["consequently, the", "as a consequence"] },
  { word: "perspective", pronunciation: "/pərˈspɛktɪv/", definition: "A particular way of thinking about something", exampleSentence: "From an environmental perspective, nuclear energy has risks.", collocations: ["from my perspective", "from a different perspective", "wider perspective"] },
];

// ─── A1 Level (additional) ─────────────────────────────────────────────────

export const VOCAB_A1_SCHOOL: VocabEntry[] = [
  { word: "school", pronunciation: "/skuːl/", definition: "A place where children go to learn", exampleSentence: "I go to school from Monday to Friday.", collocations: ["go to school", "secondary school", "school subjects", "school uniform"] },
  { word: "classroom", pronunciation: "/ˈklɑːsruːm/", definition: "A room where students learn", exampleSentence: "Our classroom has 30 students.", collocations: ["in the classroom", "classroom activities", "classroom environment"] },
  { word: "teacher", pronunciation: "/ˈtiːtʃər/", definition: "A person whose job is to teach", exampleSentence: "My English teacher is very helpful.", collocations: ["English teacher", "maths teacher", "favourite teacher"] },
  { word: "subject", pronunciation: "/ˈsʌbdʒɪkt/", definition: "A topic that is studied in school", exampleSentence: "My favourite subject is English.", collocations: ["school subject", "favourite subject", "study a subject"] },
  { word: "homework", pronunciation: "/ˈhəʊmwɜːrk/", definition: "School work that students do at home", exampleSentence: "I do my homework after dinner.", collocations: ["do homework", "finish homework", "hand in homework"] },
  { word: "exam", pronunciation: "/ɪɡˈzæm/", definition: "A formal test of knowledge", exampleSentence: "I have an English exam next week.", collocations: ["take an exam", "pass an exam", "fail an exam", "exam preparation"] },
  { word: "grade", pronunciation: "/ɡreɪd/", definition: "A mark given for a piece of work", exampleSentence: "I got a good grade on my test.", collocations: ["get a grade", "improve grades", "good grades", "top grade"] },
  { word: "university", pronunciation: "/ˌjuːnɪˈvɜːrsɪti/", definition: "A place of higher education", exampleSentence: "I want to study at a university abroad.", collocations: ["go to university", "university degree", "university campus"] },
  { word: "revise", pronunciation: "/rɪˈvaɪz/", definition: "To study again before an exam", exampleSentence: "I revise my notes every evening.", collocations: ["revise for an exam", "revise notes", "revise vocabulary"] },
  { word: "notebook", pronunciation: "/ˈnəʊtbʊk/", definition: "A small book for writing notes", exampleSentence: "I write new words in my notebook.", collocations: ["write in a notebook", "vocabulary notebook", "keep a notebook"] },
];

export const VOCAB_A1_TRANSPORT: VocabEntry[] = [
  { word: "bus", pronunciation: "/bʌs/", definition: "A large vehicle for carrying passengers", exampleSentence: "I take the bus to work every day.", collocations: ["take the bus", "catch a bus", "bus stop", "bus route"] },
  { word: "motorbike", pronunciation: "/ˈməʊtərbaɪk/", definition: "A two-wheeled vehicle powered by an engine", exampleSentence: "Many Vietnamese people ride motorbikes.", collocations: ["ride a motorbike", "park a motorbike", "motorbike helmet"] },
  { word: "taxi", pronunciation: "/ˈtæksi/", definition: "A car with a driver that you hire to travel", exampleSentence: "I took a taxi to the airport.", collocations: ["take a taxi", "call a taxi", "taxi driver", "taxi fare"] },
  { word: "train", pronunciation: "/treɪn/", definition: "A vehicle that travels on rails", exampleSentence: "The train from Hanoi to HCMC takes 30 hours.", collocations: ["take the train", "train station", "catch a train", "train ticket"] },
  { word: "walk", pronunciation: "/wɔːk/", definition: "To travel on foot", exampleSentence: "I walk to the market every morning.", collocations: ["go for a walk", "walk to work", "walking distance"] },
  { word: "far", pronunciation: "/fɑːr/", definition: "A long distance away", exampleSentence: "Is the school far from here?", collocations: ["far from", "how far", "not far", "too far"] },
  { word: "near", pronunciation: "/nɪər/", definition: "A short distance away", exampleSentence: "The supermarket is near my house.", collocations: ["near here", "nearby", "live near"] },
  { word: "traffic", pronunciation: "/ˈtræfɪk/", definition: "Vehicles moving on the road", exampleSentence: "Traffic is very heavy at rush hour.", collocations: ["heavy traffic", "traffic jam", "traffic lights", "rush-hour traffic"] },
  { word: "direction", pronunciation: "/dɪˈrɛkʃən/", definition: "The way you need to go to reach a place", exampleSentence: "Can you give me directions to the station?", collocations: ["give directions", "ask for directions", "in the direction of"] },
  { word: "map", pronunciation: "/mæp/", definition: "A drawing showing roads, areas and places", exampleSentence: "I use Google Maps on my phone.", collocations: ["read a map", "use a map", "look at a map", "Google Maps"] },
];

// ─── A2 Level (additional) ─────────────────────────────────────────────────

export const VOCAB_A2_WORK: VocabEntry[] = [
  { word: "job", pronunciation: "/dʒɒb/", definition: "Work that you do regularly to earn money", exampleSentence: "I have a full-time job at a company.", collocations: ["find a job", "lose a job", "full-time job", "part-time job", "apply for a job"] },
  { word: "career", pronunciation: "/kəˈrɪər/", definition: "The work someone does throughout their life", exampleSentence: "She has had a successful career in medicine.", collocations: ["career path", "career change", "build a career", "successful career"] },
  { word: "salary", pronunciation: "/ˈsæləri/", definition: "The fixed amount of money you earn each month", exampleSentence: "My salary is paid on the 25th of each month.", collocations: ["earn a salary", "high salary", "low salary", "monthly salary", "salary increase"] },
  { word: "colleague", pronunciation: "/ˈkɒliːɡ/", definition: "A person you work with", exampleSentence: "I have lunch with my colleagues every day.", collocations: ["work colleague", "my colleagues", "friendly colleagues"] },
  { word: "manager", pronunciation: "/ˈmænɪdʒər/", definition: "A person who is in charge of a team", exampleSentence: "My manager gave me a lot of good feedback.", collocations: ["direct manager", "project manager", "senior manager"] },
  { word: "meeting", pronunciation: "/ˈmiːtɪŋ/", definition: "A time when people come together to discuss something", exampleSentence: "We have a team meeting every Monday morning.", collocations: ["attend a meeting", "hold a meeting", "team meeting", "business meeting"] },
  { word: "deadline", pronunciation: "/ˈdɛdlaɪn/", definition: "A time by which something must be done", exampleSentence: "I need to submit this report before the deadline.", collocations: ["meet a deadline", "miss a deadline", "tight deadline", "set a deadline"] },
  { word: "promotion", pronunciation: "/prəˈməʊʃən/", definition: "Moving to a higher position at work", exampleSentence: "She got a promotion after two years in the company.", collocations: ["get a promotion", "earn a promotion", "work towards promotion"] },
  { word: "resign", pronunciation: "/rɪˈzaɪn/", definition: "To voluntarily leave your job", exampleSentence: "He resigned to start his own business.", collocations: ["resign from a job", "letter of resignation", "hand in your resignation"] },
  { word: "interview", pronunciation: "/ˈɪntəvjuː/", definition: "A meeting where someone is asked questions for a job", exampleSentence: "I have a job interview tomorrow.", collocations: ["job interview", "attend an interview", "pass an interview", "interview questions"] },
];

export const VOCAB_A2_SHOPPING: VocabEntry[] = [
  { word: "price", pronunciation: "/praɪs/", definition: "The amount of money you pay for something", exampleSentence: "The price of this jacket is too high.", collocations: ["high price", "low price", "price tag", "ask the price", "at a reasonable price"] },
  { word: "discount", pronunciation: "/ˈdɪskaʊnt/", definition: "A reduction in the usual price", exampleSentence: "I got a 20% discount on this bag.", collocations: ["get a discount", "offer a discount", "student discount", "discount code"] },
  { word: "receipt", pronunciation: "/rɪˈsiːt/", definition: "A piece of paper showing what you bought and paid", exampleSentence: "Always keep your receipt in case you want to return an item.", collocations: ["keep a receipt", "ask for a receipt", "show a receipt"] },
  { word: "refund", pronunciation: "/ˈriːfʌnd/", definition: "Money returned to you when you take something back", exampleSentence: "I got a full refund when the item was broken.", collocations: ["get a refund", "ask for a refund", "full refund", "process a refund"] },
  { word: "queue", pronunciation: "/kjuː/", definition: "A line of people waiting for something", exampleSentence: "There was a long queue at the checkout.", collocations: ["stand in a queue", "join the queue", "skip the queue", "long queue"] },
  { word: "afford", pronunciation: "/əˈfɔːrd/", definition: "To have enough money to buy something", exampleSentence: "I cannot afford a new phone right now.", collocations: ["can't afford", "afford to buy", "afford a house"] },
  { word: "bargain", pronunciation: "/ˈbɑːrɡɪn/", definition: "Something sold at a lower price than usual", exampleSentence: "This coat was a bargain — only 200,000 VND.", collocations: ["get a bargain", "a real bargain", "bargain price", "bargain hunter"] },
  { word: "sale", pronunciation: "/seɪl/", definition: "A time when things are sold at reduced prices", exampleSentence: "The sale starts on Friday.", collocations: ["on sale", "summer sale", "end-of-season sale", "50% off sale"] },
  { word: "cash", pronunciation: "/kæʃ/", definition: "Physical money in coins and notes", exampleSentence: "Do you pay by cash or card?", collocations: ["pay in cash", "cash only", "cash payment", "have cash"] },
  { word: "brand", pronunciation: "/brænd/", definition: "A name that identifies a company's products", exampleSentence: "She prefers buying international brands.", collocations: ["brand name", "luxury brand", "well-known brand", "popular brand"] },
];

export const VOCAB_A2_WEATHER: VocabEntry[] = [
  { word: "weather", pronunciation: "/ˈwɛðər/", definition: "The condition of the atmosphere at a given time", exampleSentence: "The weather in Da Nang is usually sunny.", collocations: ["hot weather", "cold weather", "bad weather", "weather forecast", "weather conditions"] },
  { word: "temperature", pronunciation: "/ˈtɛmprɪtʃər/", definition: "A measurement of how hot or cold something is", exampleSentence: "The temperature today is 38 degrees Celsius.", collocations: ["high temperature", "low temperature", "temperature drops", "room temperature"] },
  { word: "sunny", pronunciation: "/ˈsʌni/", definition: "Bright with a lot of sunshine", exampleSentence: "It is sunny and warm today.", collocations: ["sunny day", "sunny weather", "sunny and warm"] },
  { word: "rainy", pronunciation: "/ˈreɪni/", definition: "With a lot of rain falling", exampleSentence: "The rainy season in Vietnam starts in May.", collocations: ["rainy day", "rainy season", "rainy weather"] },
  { word: "humid", pronunciation: "/ˈhjuːmɪd/", definition: "Warm and containing a lot of water vapour in the air", exampleSentence: "Ho Chi Minh City is very humid in the summer.", collocations: ["hot and humid", "humid weather", "humid climate"] },
  { word: "wind", pronunciation: "/wɪnd/", definition: "Air that moves horizontally", exampleSentence: "There is a strong wind today.", collocations: ["strong wind", "wind speed", "light wind", "gusty wind"] },
  { word: "flood", pronunciation: "/flʌd/", definition: "When an area that is usually dry is covered in water", exampleSentence: "Heavy rain caused flooding in the city.", collocations: ["flash flood", "flood warning", "cause flooding", "flood damage"] },
  { word: "typhoon", pronunciation: "/taɪˈfuːn/", definition: "A violent tropical storm in East Asia", exampleSentence: "A typhoon hit central Vietnam last month.", collocations: ["typhoon warning", "typhoon season", "category 5 typhoon"] },
  { word: "season", pronunciation: "/ˈsiːzən/", definition: "One of the four main periods of the year", exampleSentence: "Vietnam has two main seasons: wet and dry.", collocations: ["rainy season", "dry season", "summer/winter season", "change of season"] },
  { word: "forecast", pronunciation: "/ˈfɔːrkæst/", definition: "A statement about what the weather will be like", exampleSentence: "The weather forecast says it will rain tomorrow.", collocations: ["weather forecast", "check the forecast", "accurate forecast"] },
];

// ─── B1 Level (additional) ─────────────────────────────────────────────────

export const VOCAB_B1_MEDIA: VocabEntry[] = [
  { word: "broadcast", pronunciation: "/ˈbrɔːdkɑːst/", definition: "To send a programme on television or radio", exampleSentence: "The news is broadcast at 7pm every evening.", collocations: ["live broadcast", "news broadcast", "broadcast a programme", "radio broadcast"] },
  { word: "journalist", pronunciation: "/ˈdʒɜːrnəlɪst/", definition: "A person who writes news stories", exampleSentence: "Journalists must report the facts accurately.", collocations: ["investigative journalist", "newspaper journalist", "experienced journalist"] },
  { word: "headline", pronunciation: "/ˈhɛdlaɪn/", definition: "The title of a newspaper article, printed in large letters", exampleSentence: "The story made the front-page headline.", collocations: ["newspaper headline", "make the headlines", "read the headlines"] },
  { word: "fake news", pronunciation: "/feɪk njuːz/", definition: "False stories presented as real news", exampleSentence: "Fake news spreads quickly on social media.", collocations: ["spread fake news", "identify fake news", "fake news story"] },
  { word: "influence", pronunciation: "/ˈɪnfluəns/", definition: "The power to affect people's ideas or behaviour", exampleSentence: "Social media has a huge influence on young people.", collocations: ["have influence", "negative influence", "positive influence", "under the influence of"] },
  { word: "audience", pronunciation: "/ˈɔːdiəns/", definition: "The people who watch or listen to something", exampleSentence: "The programme attracts a young audience.", collocations: ["target audience", "large audience", "reach a wide audience", "mass audience"] },
  { word: "subscription", pronunciation: "/səbˈskrɪpʃən/", definition: "Paying regularly to access content", exampleSentence: "I have a monthly subscription to an English learning app.", collocations: ["monthly subscription", "subscription fee", "cancel a subscription", "streaming subscription"] },
  { word: "censorship", pronunciation: "/ˈsɛnsərʃɪp/", definition: "Government control over what can be published", exampleSentence: "Media censorship limits freedom of speech.", collocations: ["government censorship", "internet censorship", "impose censorship"] },
  { word: "reliable", pronunciation: "/rɪˈlaɪəbəl/", definition: "Can be trusted to be correct or honest", exampleSentence: "It is important to use reliable sources for news.", collocations: ["reliable source", "reliable information", "reliable news", "not reliable"] },
  { word: "platform", pronunciation: "/ˈplætfɔːrm/", definition: "A website or service where content is shared", exampleSentence: "TikTok is one of the most popular media platforms.", collocations: ["social media platform", "digital platform", "online platform", "streaming platform"] },
];

export const VOCAB_B1_CULTURE: VocabEntry[] = [
  { word: "tradition", pronunciation: "/trəˈdɪʃən/", definition: "A custom or belief passed down over generations", exampleSentence: "Tet is the most important tradition in Vietnam.", collocations: ["cultural tradition", "follow a tradition", "long-standing tradition", "break with tradition"] },
  { word: "heritage", pronunciation: "/ˈhɛrɪtɪdʒ/", definition: "The history, buildings, and culture passed from older generations", exampleSentence: "Hoi An is a UNESCO World Heritage site.", collocations: ["cultural heritage", "world heritage", "protect heritage", "national heritage"] },
  { word: "festival", pronunciation: "/ˈfɛstɪvəl/", definition: "A time of celebration, often with cultural or religious meaning", exampleSentence: "The Mid-Autumn Festival is celebrated every year.", collocations: ["celebrate a festival", "music festival", "religious festival", "cultural festival"] },
  { word: "diversity", pronunciation: "/daɪˈvɜːrsɪti/", definition: "Having many different types of people or things", exampleSentence: "Cultural diversity makes a society stronger.", collocations: ["cultural diversity", "ethnic diversity", "celebrate diversity", "lack of diversity"] },
  { word: "custom", pronunciation: "/ˈkʌstəm/", definition: "A traditional way of behaving in a society", exampleSentence: "It is a custom to remove your shoes when entering a Vietnamese home.", collocations: ["local custom", "social custom", "respect customs", "traditional custom"] },
  { word: "identity", pronunciation: "/aɪˈdɛntɪti/", definition: "Who or what a person or group is", exampleSentence: "Language is a key part of cultural identity.", collocations: ["cultural identity", "national identity", "sense of identity", "preserve identity"] },
  { word: "contemporary", pronunciation: "/kənˈtɛmpərəri/", definition: "Belonging to the present time; modern", exampleSentence: "The gallery shows contemporary Vietnamese art.", collocations: ["contemporary art", "contemporary music", "contemporary culture", "contemporary society"] },
  { word: "preserve", pronunciation: "/prɪˈzɜːrv/", definition: "To keep something in its original state or condition", exampleSentence: "We must preserve traditional arts for future generations.", collocations: ["preserve culture", "preserve heritage", "preserve traditions", "well-preserved"] },
  { word: "globalisation", pronunciation: "/ˌɡləʊbəlaɪˈzeɪʃən/", definition: "The process by which the world becomes more connected", exampleSentence: "Globalisation has spread Western culture worldwide.", collocations: ["impact of globalisation", "economic globalisation", "cultural globalisation"] },
  { word: "indigenous", pronunciation: "/ɪnˈdɪdʒɪnəs/", definition: "Native or naturally occurring in a place", exampleSentence: "Vietnam has 54 indigenous ethnic groups.", collocations: ["indigenous people", "indigenous culture", "indigenous language", "indigenous community"] },
];

export const VOCAB_B1_HOUSING: VocabEntry[] = [
  { word: "urban", pronunciation: "/ˈɜːrbən/", definition: "Relating to a town or city", exampleSentence: "Urban areas offer more job opportunities than rural ones.", collocations: ["urban area", "urban development", "urban life", "urban planning"] },
  { word: "suburb", pronunciation: "/ˈsʌbɜːrb/", definition: "A residential area outside the city centre", exampleSentence: "Many families move to the suburbs for a quieter life.", collocations: ["live in the suburbs", "outer suburb", "suburban area", "move to the suburbs"] },
  { word: "apartment", pronunciation: "/əˈpɑːrtmənt/", definition: "A set of rooms for living in, inside a larger building", exampleSentence: "I rent a two-bedroom apartment in the city centre.", collocations: ["rent an apartment", "studio apartment", "apartment block", "affordable apartment"] },
  { word: "landlord", pronunciation: "/ˈlændlɔːrd/", definition: "A person who rents property to tenants", exampleSentence: "My landlord lives on the ground floor.", collocations: ["contact the landlord", "good landlord", "landlord and tenant"] },
  { word: "rent", pronunciation: "/rɛnt/", definition: "A regular payment for using someone's property", exampleSentence: "The rent for this apartment is 5 million VND per month.", collocations: ["pay rent", "monthly rent", "increase rent", "affordable rent", "rent-free"] },
  { word: "infrastructure", pronunciation: "/ˈɪnfrəˌstrʌktʃər/", definition: "Basic systems and structures a country needs to function", exampleSentence: "Good infrastructure is essential for economic growth.", collocations: ["transport infrastructure", "invest in infrastructure", "poor infrastructure", "improve infrastructure"] },
  { word: "overcrowding", pronunciation: "/ˌəʊvərˈkraʊdɪŋ/", definition: "Too many people in one place", exampleSentence: "Overcrowding in cities leads to poor living conditions.", collocations: ["urban overcrowding", "school overcrowding", "problem of overcrowding"] },
  { word: "facilities", pronunciation: "/fəˈsɪlɪtɪz/", definition: "Buildings or equipment provided for a purpose", exampleSentence: "The area has excellent sports and healthcare facilities.", collocations: ["public facilities", "leisure facilities", "healthcare facilities", "lack of facilities"] },
  { word: "affordable", pronunciation: "/əˈfɔːrdəbəl/", definition: "Cheap enough for most people to buy or rent", exampleSentence: "Finding affordable housing in big cities is becoming harder.", collocations: ["affordable housing", "affordable price", "affordable for families"] },
  { word: "commute", pronunciation: "/kəˈmjuːt/", definition: "To travel regularly between home and work", exampleSentence: "My daily commute takes one hour each way.", collocations: ["daily commute", "long commute", "commute to work", "reduce commuting time"] },
];

export const VOCAB_B1_SPORT: VocabEntry[] = [
  { word: "athlete", pronunciation: "/ˈæθliːt/", definition: "A person who is trained in sport or physical exercise", exampleSentence: "She is a professional athlete who trains every day.", collocations: ["professional athlete", "elite athlete", "world-class athlete"] },
  { word: "compete", pronunciation: "/kəmˈpiːt/", definition: "To take part in a race or contest", exampleSentence: "He competes in international swimming competitions.", collocations: ["compete in", "compete against", "compete for a medal", "compete at the highest level"] },
  { word: "championship", pronunciation: "/ˈtʃæmpiənʃɪp/", definition: "A competition to find the best team or player", exampleSentence: "Vietnam won the AFF Championship in 2018.", collocations: ["win the championship", "national championship", "host a championship"] },
  { word: "discipline", pronunciation: "/ˈdɪsɪplɪn/", definition: "The ability to control your behaviour; also a sport category", exampleSentence: "Sport teaches children discipline and hard work.", collocations: ["physical discipline", "mental discipline", "require discipline", "self-discipline"] },
  { word: "stamina", pronunciation: "/ˈstæmɪnə/", definition: "The ability to keep doing something difficult for a long time", exampleSentence: "Long-distance runners need enormous stamina.", collocations: ["build stamina", "increase stamina", "physical stamina", "mental stamina"] },
  { word: "teamwork", pronunciation: "/ˈtiːmwɜːrk/", definition: "Working together as a group to achieve a goal", exampleSentence: "Football is a great example of the importance of teamwork.", collocations: ["good teamwork", "promote teamwork", "teamwork skills", "spirit of teamwork"] },
  { word: "performance", pronunciation: "/pərˈfɔːrməns/", definition: "How well someone does in an activity or sport", exampleSentence: "Her performance in the race was outstanding.", collocations: ["sporting performance", "peak performance", "improve performance", "outstanding performance"] },
  { word: "injury", pronunciation: "/ˈɪndʒəri/", definition: "Physical damage to part of the body", exampleSentence: "He suffered a knee injury during training.", collocations: ["sports injury", "serious injury", "recover from injury", "prevent injury"] },
  { word: "wellbeing", pronunciation: "/ˈwɛlˌbiːɪŋ/", definition: "The state of being healthy, happy and comfortable", exampleSentence: "Regular exercise improves both physical and mental wellbeing.", collocations: ["mental wellbeing", "physical wellbeing", "promote wellbeing", "sense of wellbeing"] },
  { word: "sedentary", pronunciation: "/ˈsɛdəntəri/", definition: "Involving a lot of sitting and little physical activity", exampleSentence: "A sedentary lifestyle increases the risk of heart disease.", collocations: ["sedentary lifestyle", "sedentary job", "sedentary behaviour", "too sedentary"] },
];

// ─── B2 Level (additional) ─────────────────────────────────────────────────

export const VOCAB_B2_SPEAKING_COLLOCATIONS: VocabEntry[] = [
  { word: "to be honest", pronunciation: "/tuː biː ˈɒnɪst/", definition: "Used to introduce a frank, sincere opinion", exampleSentence: "To be honest, I think working from home is more productive.", collocations: ["to be perfectly honest", "honestly speaking", "if I'm being honest"] },
  { word: "as far as I'm concerned", pronunciation: "/æz fɑːr æz aɪm kənˈsɜːrnd/", definition: "Used to give your personal opinion on a topic", exampleSentence: "As far as I'm concerned, social media does more harm than good.", collocations: ["as far as I can tell", "from my perspective", "in my view"] },
  { word: "pose a challenge", pronunciation: "/pəʊz ə ˈtʃælɪndʒ/", definition: "To present a difficult problem or situation", exampleSentence: "Climate change poses a significant challenge to governments worldwide.", collocations: ["pose a threat", "pose a risk", "pose a problem", "pose a serious challenge"] },
  { word: "draw a distinction", pronunciation: "/drɔː ə dɪˈstɪŋkʃən/", definition: "To identify a difference between two things", exampleSentence: "We should draw a clear distinction between education and training.", collocations: ["make a distinction", "clear distinction", "sharp distinction"] },
  { word: "bear in mind", pronunciation: "/bɛər ɪn maɪnd/", definition: "To remember a piece of information when making a decision", exampleSentence: "Bear in mind that this is only one possible interpretation.", collocations: ["keep in mind", "always bear in mind", "it is worth bearing in mind"] },
  { word: "to a large extent", pronunciation: "/tuː ə lɑːrdʒ ɪkˈstɛnt/", definition: "To a great degree; mostly", exampleSentence: "Success in IELTS depends, to a large extent, on consistent practice.", collocations: ["to a great extent", "to some extent", "to a certain extent", "to a lesser extent"] },
  { word: "strike a balance", pronunciation: "/straɪk ə ˈbæləns/", definition: "To find a middle point between two extremes", exampleSentence: "It is important to strike a balance between work and leisure.", collocations: ["achieve a balance", "maintain a balance", "find a balance", "the right balance"] },
  { word: "a growing trend", pronunciation: "/ə ˈɡrəʊɪŋ trɛnd/", definition: "Something that is becoming more common over time", exampleSentence: "Working from home is a growing trend across many industries.", collocations: ["emerging trend", "global trend", "worrying trend", "upward trend"] },
  { word: "widely acknowledged", pronunciation: "/ˈwaɪdli ˈæknɒlɪdʒd/", definition: "Accepted or recognised by most people", exampleSentence: "It is widely acknowledged that exercise improves mental health.", collocations: ["widely recognised", "widely accepted", "generally acknowledged", "commonly acknowledged"] },
  { word: "on the other hand", pronunciation: "/ɒn ðə ˈʌðər hænd/", definition: "Used to introduce a contrasting point of view", exampleSentence: "Technology saves time. On the other hand, it can be addictive.", collocations: ["on one hand... on the other hand", "conversely", "in contrast"] },
];

export const VOCAB_B2_IELTS_READING: VocabEntry[] = [
  { word: "skim", pronunciation: "/skɪm/", definition: "To read quickly to get the main idea", exampleSentence: "Skim the passage in 60 seconds to understand the topic.", collocations: ["skim-read", "skim through", "skim for main ideas"] },
  { word: "scan", pronunciation: "/skæn/", definition: "To look quickly for specific information", exampleSentence: "Scan the text for the name of the scientist.", collocations: ["scan for", "scan quickly", "scan the text"] },
  { word: "paraphrase", pronunciation: "/ˈpærəfreɪz/", definition: "To express the same meaning using different words", exampleSentence: "IELTS answers often paraphrase the original text.", collocations: ["paraphrase the question", "paraphrase vocabulary", "paraphrase in your own words"] },
  { word: "distractor", pronunciation: "/dɪˈstræktər/", definition: "Wrong answer options that look correct to confuse you", exampleSentence: "Watch out for distractors — they use similar words but wrong meaning.", collocations: ["common distractor", "identify a distractor", "avoid distractors"] },
  { word: "inference", pronunciation: "/ˈɪnfərəns/", definition: "A conclusion reached based on evidence in the text", exampleSentence: "Some questions require inference — the answer is not stated directly.", collocations: ["make an inference", "draw an inference", "inference skill"] },
  { word: "signpost", pronunciation: "/ˈsaɪnpəʊst/", definition: "A word or phrase that signals the structure of a text", exampleSentence: "Signpost words like 'however' and 'therefore' help you follow the argument.", collocations: ["signpost words", "discourse signpost", "textual signpost"] },
  { word: "topic sentence", pronunciation: "/ˈtɒpɪk ˈsɛntəns/", definition: "The main idea sentence, usually at the start of a paragraph", exampleSentence: "Find the topic sentence to understand what each paragraph is about.", collocations: ["identify the topic sentence", "paragraph topic sentence"] },
  { word: "Not Given", pronunciation: "/nɒt ˈɡɪvən/", definition: "The passage does not provide information either way", exampleSentence: "'Not Given' means the text neither confirms nor denies the statement.", collocations: ["True/False/Not Given", "NG answer", "not mentioned in the text"] },
  { word: "reference word", pronunciation: "/ˈrɛfrəns wɜːrd/", definition: "A pronoun or phrase that refers back to something mentioned earlier", exampleSentence: "'They' in line 3 refers back to 'scientists' in line 1 — track reference words.", collocations: ["pronoun reference", "this/that/these/those", "he/she/it/they"] },
  { word: "time pressure", pronunciation: "/taɪm ˈprɛʃər/", definition: "The stress caused by limited time to complete tasks", exampleSentence: "Manage time pressure by spending max 20 minutes per reading passage.", collocations: ["work under time pressure", "handle time pressure", "60-minute time limit"] },
];

export const VOCAB_B2_IELTS_LISTENING: VocabEntry[] = [
  { word: "predict", pronunciation: "/prɪˈdɪkt/", definition: "To say what you think will happen before it does", exampleSentence: "Before you listen, predict what kind of word fits the blank.", collocations: ["predict the answer", "predict vocabulary", "predict the topic"] },
  { word: "distractor", pronunciation: "/dɪˈstræktər/", definition: "Information that sounds correct but is the wrong answer", exampleSentence: "The speaker first mentions Monday, but then corrects it to Tuesday — Monday is a distractor.", collocations: ["listening distractor", "distractor in Part 3", "change of mind distractor"] },
  { word: "note completion", pronunciation: "/nəʊt kəmˈpliːʃən/", definition: "A question type where you fill in missing words from listening", exampleSentence: "Write no more than three words and/or a number for each answer.", collocations: ["note completion task", "word limit", "fill in the blank"] },
  { word: "paraphrase", pronunciation: "/ˈpærəfreɪz/", definition: "Same meaning expressed with different words — common in listening", exampleSentence: "The speaker says 'expensive' but the question uses 'costly' — same meaning.", collocations: ["paraphrase the question", "synonym paraphrase", "listen for paraphrases"] },
  { word: "section", pronunciation: "/ˈsɛkʃən/", definition: "One of the four parts of the IELTS Listening test", exampleSentence: "Section 1 is a conversation; Section 4 is an academic lecture.", collocations: ["Section 1–4", "listening section", "each section has 10 questions"] },
  { word: "spelling", pronunciation: "/ˈspɛlɪŋ/", definition: "Writing letters correctly to form a word", exampleSentence: "You lose marks for incorrect spelling in listening answers.", collocations: ["check spelling", "correct spelling", "lose marks for spelling"] },
  { word: "key word", pronunciation: "/kiː wɜːrd/", definition: "The most important word to listen for in a question", exampleSentence: "Underline key words before listening to guide your attention.", collocations: ["underline key words", "focus on key words", "key vocabulary"] },
  { word: "multiple choice", pronunciation: "/ˈmʌltɪpəl tʃɔɪs/", definition: "A question type where you choose the correct option (A, B, or C)", exampleSentence: "Multiple choice questions appear in Sections 1–4.", collocations: ["MCQ", "choose the correct answer", "multiple choice question"] },
  { word: "map labelling", pronunciation: "/mæp ˈleɪbəlɪŋ/", definition: "A task where you identify locations on a map from listening", exampleSentence: "Map labelling tests your understanding of directions and locations.", collocations: ["label the map", "map task", "directions vocabulary"] },
  { word: "number", pronunciation: "/ˈnʌmbər/", definition: "A figure written as a digit, important in listening answers", exampleSentence: "Write numbers as digits: 42, not forty-two, unless instructed otherwise.", collocations: ["phone number", "price", "date", "floor number"] },
];

// ─── C1 Level (additional) ─────────────────────────────────────────────────

export const VOCAB_C1_AWL_CORE: VocabEntry[] = [
  { word: "analyse", pronunciation: "/ˈænəlaɪz/", definition: "To examine something carefully to understand it", exampleSentence: "The essay analyses the impact of social media on mental health.", collocations: ["analyse data", "critically analyse", "analyse the causes", "analyse in detail"] },
  { word: "constitute", pronunciation: "/ˈkɒnstɪtjuːt/", definition: "To form or make up something", exampleSentence: "Women constitute 52% of the population.", collocations: ["constitute a problem", "constitute evidence", "what constitutes"] },
  { word: "demonstrate", pronunciation: "/ˈdɛmənstreɪt/", definition: "To clearly show or prove something", exampleSentence: "The data demonstrates a clear link between diet and health.", collocations: ["demonstrate clearly", "demonstrate the need", "demonstrate ability"] },
  { word: "facilitate", pronunciation: "/fəˈsɪlɪteɪt/", definition: "To make a process easier or more likely to happen", exampleSentence: "Technology can facilitate learning both inside and outside the classroom.", collocations: ["facilitate communication", "facilitate learning", "facilitate change"] },
  { word: "implement", pronunciation: "/ˈɪmplɪmɛnt/", definition: "To put a plan or decision into action", exampleSentence: "The government plans to implement new environmental laws.", collocations: ["implement a policy", "implement changes", "fully implement"] },
  { word: "significant", pronunciation: "/sɪɡˈnɪfɪkənt/", definition: "Important or large enough to be noticed", exampleSentence: "There has been a significant increase in online learning.", collocations: ["statistically significant", "highly significant", "significant impact", "significant change"] },
  { word: "consequent", pronunciation: "/ˈkɒnsɪkwənt/", definition: "Happening as a result of something", exampleSentence: "The rise in obesity and the consequent health problems are alarming.", collocations: ["consequent effects", "consequent rise", "and the consequent"] },
  { word: "derive", pronunciation: "/dɪˈraɪv/", definition: "To get something from a source", exampleSentence: "Students can derive great benefit from reading widely.", collocations: ["derive from", "derive benefit", "derive meaning", "derive income"] },
  { word: "hypothesis", pronunciation: "/haɪˈpɒθɪsɪs/", definition: "An idea that is suggested as a possible explanation", exampleSentence: "Scientists test a hypothesis before drawing conclusions.", collocations: ["test a hypothesis", "support a hypothesis", "research hypothesis", "prove/disprove a hypothesis"] },
  { word: "inherent", pronunciation: "/ɪnˈhɪərənt/", definition: "A natural or basic part of something that cannot be separated", exampleSentence: "There are inherent risks in any new technology.", collocations: ["inherent risk", "inherent problem", "inherent weakness", "inherently flawed"] },
  { word: "criteria", pronunciation: "/kraɪˈtɪəriə/", definition: "Standards used to judge or decide something (plural)", exampleSentence: "IELTS uses four criteria to mark writing: TA, CC, LR, GRA.", collocations: ["meet the criteria", "selection criteria", "strict criteria", "judge by criteria"] },
  { word: "dimension", pronunciation: "/dɪˈmɛnʃən/", definition: "An aspect or feature of a situation", exampleSentence: "The social dimension of education is often overlooked.", collocations: ["social dimension", "economic dimension", "add a new dimension", "key dimension"] },
  { word: "modify", pronunciation: "/ˈmɒdɪfaɪ/", definition: "To make changes to improve something", exampleSentence: "You may need to modify your writing style for academic essays.", collocations: ["modify behaviour", "modify a plan", "significantly modify", "genetically modify"] },
  { word: "notion", pronunciation: "/ˈnəʊʃən/", definition: "An idea or belief about something", exampleSentence: "The notion that success comes from effort is widely accepted.", collocations: ["the notion that", "challenge the notion", "popular notion", "vague notion"] },
  { word: "pursue", pronunciation: "/pəˈsjuː/", definition: "To continue doing something or try hard to achieve something", exampleSentence: "Many students pursue higher education abroad.", collocations: ["pursue a career", "pursue a goal", "pursue further studies", "actively pursue"] },
];

// ─── C1 Level — Advanced Academic Vocabulary ──────────────────────────────

export const VOCAB_C1_ADVANCED: VocabEntry[] = [
  { word: "undermine", pronunciation: "/ˌʌndəˈmaɪn/", definition: "To weaken or damage something gradually", exampleSentence: "Social media can undermine face-to-face communication.", collocations: ["undermine confidence", "undermine democracy", "seriously undermine"] },
  { word: "exacerbate", pronunciation: "/ɪɡˈzæsərbeɪt/", definition: "To make a bad situation worse", exampleSentence: "Poverty can exacerbate health problems.", collocations: ["exacerbate the problem", "further exacerbate", "exacerbate inequalities"] },
  { word: "inevitably", pronunciation: "/ɪnˈɛvɪtəbli/", definition: "In a way that cannot be avoided or prevented", exampleSentence: "Rapid urbanisation inevitably leads to traffic congestion.", collocations: ["inevitably lead to", "inevitably result in", "this will inevitably"] },
  { word: "predominantly", pronunciation: "/prɪˈdɒmɪnəntli/", definition: "Mainly; mostly", exampleSentence: "This is predominantly an urban problem.", collocations: ["predominantly urban", "predominantly young", "predominantly male"] },
  { word: "substantial", pronunciation: "/səbˈstænʃəl/", definition: "Large in size, value or importance", exampleSentence: "There is substantial evidence that exercise improves mental health.", collocations: ["substantial evidence", "substantial increase", "substantial change", "make a substantial difference"] },
  { word: "advocate", pronunciation: "/ˈædvəkɪt/", definition: "To publicly support or recommend something", exampleSentence: "Many experts advocate stricter environmental regulations.", collocations: ["advocate for", "strong advocate", "advocate stricter laws"] },
  { word: "controversy", pronunciation: "/ˈkɒntrəvɜːrsi/", definition: "A lot of disagreement or argument about something", exampleSentence: "Nuclear energy remains a source of controversy.", collocations: ["cause controversy", "surrounding the controversy", "a matter of controversy"] },
  { word: "alleviate", pronunciation: "/əˈliːvieɪt/", definition: "To make a problem less severe", exampleSentence: "Public transport can alleviate traffic congestion.", collocations: ["alleviate the problem", "alleviate poverty", "help alleviate"] },
  { word: "detrimental", pronunciation: "/ˌdɛtrɪˈmɛntəl/", definition: "Causing harm or damage", exampleSentence: "Excessive screen time can be detrimental to children's development.", collocations: ["detrimental effect", "detrimental to", "have a detrimental impact"] },
  { word: "phenomenon", pronunciation: "/fɪˈnɒmɪnən/", definition: "A remarkable or impressive fact or event", exampleSentence: "Social media addiction is a modern phenomenon.", collocations: ["natural phenomenon", "growing phenomenon", "global phenomenon"] },
  { word: "mitigate", pronunciation: "/ˈmɪtɪɡeɪt/", definition: "To make something less harmful or severe", exampleSentence: "Governments should take steps to mitigate the effects of climate change.", collocations: ["mitigate the effects", "mitigate the risk", "help mitigate"] },
  { word: "proliferation", pronunciation: "/prəˌlɪfəˈreɪʃən/", definition: "A rapid increase in the number of something", exampleSentence: "The proliferation of smartphones has changed daily life.", collocations: ["rapid proliferation", "proliferation of technology", "nuclear proliferation"] },
];
