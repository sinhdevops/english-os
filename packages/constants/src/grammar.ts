// ─── Grammar Reference — Organized by Function ────────────────────────────────
// Each entry describes WHEN to use the grammar point, not just what it is.
// Used to build grammar lessons and writing/speaking prompts.

export type GrammarEntry = {
  id: string;
  title: string;
  level: string; // A0 | A1 | A2 | B1 | B2 | C1 | C2
  function: string; // what this grammar DOES
  explanation: string;
  structure: string;
  examples: string[];
  ieltsUse: string[]; // when to use in IELTS
  commonMistakes: string[];
};

export const GRAMMAR_REFERENCE: GrammarEntry[] = [
  // ─── A0 ────────────────────────────────────────────────────────────────
  {
    id: "verb-be",
    title: "Verb 'be': am / is / are",
    level: "A0",
    function: "Describe people, things and states",
    explanation: "Use 'am' with I, 'is' with he/she/it, and 'are' with you/we/they. This verb connects a subject to a description or identity.",
    structure: "Subject + am/is/are + (noun/adjective)",
    examples: [
      "I am a student.",
      "She is a teacher.",
      "They are from Vietnam.",
      "It is very cold today.",
      "We are ready.",
    ],
    ieltsUse: [
      "Speaking Part 1: describing yourself and your life.",
      "Writing Task 2: making general statements.",
    ],
    commonMistakes: [
      "He am a student. ✗ → He is a student. ✓",
      "I is happy. ✗ → I am happy. ✓",
      "They is my friends. ✗ → They are my friends. ✓",
    ],
  },
  {
    id: "have-has",
    title: "Have / Has",
    level: "A0",
    function: "Talk about possession or attributes",
    explanation: "Use 'have' with I/you/we/they and 'has' with he/she/it to express possession.",
    structure: "Subject + have/has + noun",
    examples: [
      "I have a sister and a brother.",
      "She has a good job.",
      "They have a big house.",
      "He has dark hair.",
    ],
    ieltsUse: [
      "Speaking Part 1: talking about family and possessions.",
      "Writing Task 2: describing features or situations.",
    ],
    commonMistakes: [
      "She have a car. ✗ → She has a car. ✓",
      "He have two children. ✗ → He has two children. ✓",
    ],
  },
  {
    id: "can-cannot",
    title: "Can / Cannot (can't)",
    level: "A0",
    function: "Express ability or possibility",
    explanation: "Use 'can' to say what you are able to do. Use 'cannot' (can't) for things you are unable to do. The base verb stays the same for all subjects.",
    structure: "Subject + can/can't + base verb",
    examples: [
      "I can speak English.",
      "She can swim very fast.",
      "He cannot drive a car.",
      "Can you help me?",
      "They can't come to the party.",
    ],
    ieltsUse: [
      "Speaking Part 1: talking about your abilities.",
      "Writing Task 2: suggesting what governments/people can do.",
    ],
    commonMistakes: [
      "She cans speak French. ✗ → She can speak French. ✓",
      "I can to swim. ✗ → I can swim. ✓",
    ],
  },

  // ─── A1 ────────────────────────────────────────────────────────────────
  {
    id: "present-simple",
    title: "Present Simple",
    level: "A1",
    function: "Talk about habits, routines and general truths",
    explanation: "Use the Present Simple to describe things that happen regularly, always, or are generally true. Add -s or -es to the verb for he/she/it.",
    structure: "I/You/We/They + base verb | He/She/It + verb + s/es",
    examples: [
      "I study English every morning.",
      "She works at a hospital.",
      "People use smartphones every day.",
      "Water boils at 100°C.",
      "He goes to the gym three times a week.",
    ],
    ieltsUse: [
      "Speaking Part 1: talking about your daily life and habits.",
      "Writing Task 2: making general statements about society.",
      "Reading: understanding factual texts.",
    ],
    commonMistakes: [
      "She study English every day. ✗ → She studies English every day. ✓",
      "He don't like coffee. ✗ → He doesn't like coffee. ✓",
      "I am work at a school. ✗ → I work at a school. ✓",
    ],
  },
  {
    id: "present-continuous",
    title: "Present Continuous",
    level: "A1",
    function: "Talk about actions happening now or temporary situations",
    explanation: "Use the Present Continuous for things happening at this moment, or for current temporary situations or changes.",
    structure: "Subject + am/is/are + verb-ing",
    examples: [
      "I am studying English right now.",
      "She is working from home this week.",
      "More people are choosing to use public transport.",
      "What are you doing?",
      "Prices are rising every year.",
    ],
    ieltsUse: [
      "Speaking Part 1: talking about what is happening now.",
      "Writing Task 2: describing current social trends.",
      "Writing Task 1: describing a current trend on a graph.",
    ],
    commonMistakes: [
      "I am study right now. ✗ → I am studying right now. ✓",
      "She is work at home today. ✗ → She is working at home today. ✓",
    ],
  },
  {
    id: "there-is-are",
    title: "There is / There are",
    level: "A1",
    function: "State the existence of something",
    explanation: "Use 'there is' with singular nouns and 'there are' with plural nouns to say that something exists in a place.",
    structure: "There is + singular noun | There are + plural noun",
    examples: [
      "There is a park near my house.",
      "There are many restaurants in my city.",
      "There is a problem with this plan.",
      "There are several solutions we can consider.",
    ],
    ieltsUse: [
      "Writing Task 2: introducing arguments.",
      "Speaking Part 2: describing a place.",
      "Writing Task 1: describing maps and diagrams.",
    ],
    commonMistakes: [
      "There is many parks. ✗ → There are many parks. ✓",
      "There are a school near here. ✗ → There is a school near here. ✓",
    ],
  },

  // ─── A2 ────────────────────────────────────────────────────────────────
  {
    id: "past-simple",
    title: "Past Simple",
    level: "A2",
    function: "Describe completed actions in the past",
    explanation: "Use the Past Simple for actions that started and finished in the past. Regular verbs add -ed. Many common verbs are irregular (go → went, see → saw).",
    structure: "Subject + verb-ed (regular) / irregular past (go→went)",
    examples: [
      "I visited Da Nang last summer.",
      "She graduated from university in 2020.",
      "The figure increased sharply in 2015.",
      "We went to a great restaurant yesterday.",
      "They didn't agree with the plan.",
    ],
    ieltsUse: [
      "Speaking Part 2: telling a story about past experience.",
      "Writing Task 1: describing past data with time markers.",
      "Writing Task 2: referring to historical examples.",
    ],
    commonMistakes: [
      "I goed to school yesterday. ✗ → I went to school yesterday. ✓",
      "She didn't went home. ✗ → She didn't go home. ✓",
      "The figure increased in last year. ✗ → The figure increased last year. ✓",
    ],
  },
  {
    id: "comparative-superlative",
    title: "Comparative & Superlative",
    level: "A2",
    function: "Compare people, things and ideas",
    explanation: "Use comparative (-er/more) to compare two things. Use superlative (-est/most) to say which is the highest degree in a group.",
    structure: "adj + -er than | more adj than | the adj + -est | the most adj",
    examples: [
      "Urban areas are more crowded than rural areas.",
      "Cars are faster than bicycles.",
      "The figure for 2020 was higher than that for 2015.",
      "Education is the most important factor in reducing poverty.",
      "This is the cheapest option available.",
    ],
    ieltsUse: [
      "Writing Task 1: comparing data from charts and graphs.",
      "Writing Task 2: comparing different views or approaches.",
      "Speaking Part 3: comparing trends or ideas.",
    ],
    commonMistakes: [
      "She is more tall than her sister. ✗ → She is taller than her sister. ✓",
      "This is the more important issue. ✗ → This is the most important issue. ✓",
    ],
  },
  {
    id: "future-will",
    title: "Future with 'will'",
    level: "A2",
    function: "Make predictions and express decisions made in the moment",
    explanation: "Use 'will' for future predictions, spontaneous decisions, offers and promises. Use 'be going to' for plans already decided.",
    structure: "Subject + will + base verb",
    examples: [
      "I think technology will change education significantly.",
      "The population will reach 10 billion by 2050.",
      "I'll help you with that.",
      "In the future, cars will use electric power.",
    ],
    ieltsUse: [
      "Speaking Part 3: making predictions about the future.",
      "Writing Task 2: discussing future impacts or solutions.",
      "Writing Task 1: predicting future trends.",
    ],
    commonMistakes: [
      "I will to go there tomorrow. ✗ → I will go there tomorrow. ✓",
      "She wills study harder. ✗ → She will study harder. ✓",
    ],
  },

  // ─── B1 ────────────────────────────────────────────────────────────────
  {
    id: "present-perfect",
    title: "Present Perfect",
    level: "B1",
    function: "Connect past experiences to the present moment",
    explanation: "Use the Present Perfect when a past action is relevant to now. Do not use it with a specific past time (yesterday, in 2010). Use it with: just, already, yet, ever, never, for, since.",
    structure: "Subject + have/has + past participle",
    examples: [
      "Technology has transformed the way people work.",
      "I have studied English for three years.",
      "She has never been to Europe.",
      "Scientists have discovered a new treatment.",
      "The situation has improved significantly.",
    ],
    ieltsUse: [
      "Speaking Part 1 & 3: talking about experiences relevant to today.",
      "Writing Task 2: describing social changes that affect the present.",
      "Writing Task 1: summarising overall changes from a graph.",
    ],
    commonMistakes: [
      "I have visited Japan last year. ✗ → I visited Japan last year. ✓",
      "She has work here for five years. ✗ → She has worked here for five years. ✓",
    ],
  },
  {
    id: "passive-voice",
    title: "Passive Voice",
    level: "B1",
    function: "Focus on what was done rather than who did it",
    explanation: "Use the passive when the action is more important than who did it, when you don't know who did it, or in formal writing.",
    structure: "Subject + be (conjugated) + past participle (+ by agent)",
    examples: [
      "This law was introduced in 2010.",
      "Millions of products are sold online every day.",
      "Children are often influenced by what they see on television.",
      "A new hospital will be built in the city centre.",
    ],
    ieltsUse: [
      "Writing Task 1: describing processes.",
      "Writing Task 2: formal, academic style.",
      "Avoiding repetition of 'people' or 'governments'.",
    ],
    commonMistakes: [
      "The book was wrote by the author. ✗ → The book was written by the author. ✓",
      "A new school is build every year. ✗ → A new school is built every year. ✓",
    ],
  },
  {
    id: "relative-clauses",
    title: "Relative Clauses",
    level: "B1",
    function: "Add information about a noun without starting a new sentence",
    explanation: "Use relative clauses to define or give extra information about a noun. Use 'who' for people, 'which/that' for things, 'where' for places, 'whose' for possession.",
    structure: "Noun + who/which/that/where/whose + clause",
    examples: [
      "Students who study regularly tend to perform better.",
      "Social media, which is used by billions of people, can affect mental health.",
      "The city where I grew up is now very modern.",
      "People whose income is low may struggle to access quality education.",
    ],
    ieltsUse: [
      "Writing Task 2: adding detail to arguments without using short sentences.",
      "Speaking Part 3: developing complex ideas naturally.",
    ],
    commonMistakes: [
      "The person which called me is my boss. ✗ → The person who called me is my boss. ✓",
      "The school where I study it is very good. ✗ → The school where I study is very good. ✓",
    ],
  },
  {
    id: "first-conditional",
    title: "First Conditional",
    level: "B1",
    function: "Express real or likely future conditions and results",
    explanation: "Use First Conditional for situations that are possible in the future. The 'if' clause uses Present Simple; the result clause uses 'will'.",
    structure: "If + Present Simple, will + base verb",
    examples: [
      "If governments invest in education, standards will improve.",
      "If you practise every day, you will improve quickly.",
      "If pollution continues to rise, the environment will suffer.",
      "If children spend too much time online, they will have fewer social skills.",
    ],
    ieltsUse: [
      "Writing Task 2: proposing solutions and their effects.",
      "Speaking Part 3: discussing consequences.",
    ],
    commonMistakes: [
      "If they will invest in schools, students will improve. ✗ → If they invest in schools, students will improve. ✓",
    ],
  },

  // ─── B2 ────────────────────────────────────────────────────────────────
  {
    id: "cause-effect-phrases",
    title: "Cause & Effect Phrases",
    level: "B2",
    function: "Show how one thing leads to another — essential for Task 2",
    explanation: "Use these phrases to connect causes and results. They vary in formality and sentence position.",
    structure: "[cause], which leads to [effect] | [cause] results in [effect] | Due to [cause], [effect]",
    examples: [
      "Air pollution can lead to serious respiratory diseases.",
      "The rise in unemployment has resulted in higher levels of poverty.",
      "Due to advances in technology, many manual jobs have disappeared.",
      "A lack of investment in infrastructure contributes to traffic congestion.",
      "As a result, many young people are choosing to delay marriage.",
    ],
    ieltsUse: [
      "Writing Task 2 problem-solution essays.",
      "Writing Task 2 cause-effect questions.",
      "Speaking Part 3: explaining why something happens.",
    ],
    commonMistakes: [
      "Due to technology, it leads to changes. ✗ → Due to technology, many things have changed. ✓",
      "Result from poor diet leads to obesity. ✗ → A poor diet can lead to obesity. ✓",
    ],
  },
  {
    id: "concession-phrases",
    title: "Concession & Contrast",
    level: "B2",
    function: "Acknowledge the other side of an argument — shows balanced thinking",
    explanation: "Use concession phrases to show you understand both sides. This is essential for Discussion and Opinion essays. Band 7+ requires this.",
    structure: "Although/Even though + clause, clause | Despite/In spite of + noun/gerund, clause",
    examples: [
      "Although online learning is flexible, it may reduce social interaction.",
      "Even though technology creates new jobs, it also destroys many others.",
      "Despite the high cost, electric cars are becoming more popular.",
      "In spite of government efforts, pollution remains a serious problem.",
      "While some argue that social media is harmful, others believe it has many benefits.",
    ],
    ieltsUse: [
      "Writing Task 2 Discussion essays (both sides).",
      "Writing Task 2 Opinion essays (acknowledging the other view).",
      "Speaking Part 3: giving balanced, nuanced answers.",
    ],
    commonMistakes: [
      "Although it is expensive, but it is worth it. ✗ → Although it is expensive, it is worth it. ✓",
      "Despite of the problem, we can solve it. ✗ → Despite the problem, we can solve it. ✓",
    ],
  },
  {
    id: "hedging",
    title: "Hedging Language",
    level: "B2",
    function: "Make claims cautious and academic — avoids overgeneralisation",
    explanation: "Hedging makes statements sound more careful and academic. Avoid absolute statements like 'Technology always causes problems.' Use hedging to sound measured.",
    structure: "may/might/could + verb | tend to | appear to | is likely to | seem to",
    examples: [
      "Social media may lead to increased anxiety in young people.",
      "Children who watch too much television tend to have lower academic performance.",
      "This approach is likely to be more effective in the long term.",
      "Urbanisation appears to have contributed to a rise in mental health issues.",
      "There is some evidence to suggest that diet can affect mood.",
    ],
    ieltsUse: [
      "Writing Task 2: making claims without sounding too absolute.",
      "Speaking Part 3: giving careful, academic-sounding opinions.",
    ],
    commonMistakes: [
      "Technology always makes people lazy. ✗ → Technology may contribute to a more sedentary lifestyle. ✓",
      "Everyone know that smoking causes cancer. ✗ → It is widely known that smoking causes cancer. ✓",
    ],
  },
  {
    id: "nominalisation",
    title: "Nominalisation",
    level: "B2",
    function: "Write in an academic, formal style by using nouns instead of verbs",
    explanation: "Academic writing uses noun phrases instead of verb phrases. This makes writing more compact and formal. This is one of the key differences between band 6 and band 7+ writing.",
    structure: "verb → noun (investigate → investigation, develop → development)",
    examples: [
      "People are educated. → Education is widespread. [more academic]",
      "The economy is growing. → Economic growth is accelerating.",
      "Society has developed quickly. → Rapid social development has occurred.",
      "The government decided to invest. → The government's decision to invest...",
    ],
    ieltsUse: [
      "Writing Task 2: achieving higher Lexical Resource score.",
      "Writing Task 1: describing trends in a formal tone.",
    ],
    commonMistakes: [
      "Overuse — don't nominalise every sentence, it can become unnatural.",
      "The increase of temperatures → The increase IN temperatures. ✓",
    ],
  },

  // ─── C1 ────────────────────────────────────────────────────────────────
  // ─── A2 Additional ─────────────────────────────────────────────────────────
  {
    id: "reported-speech",
    title: "Reported Speech",
    level: "A2",
    function: "Report what someone said without quoting their exact words",
    explanation: "Use reported speech to say what someone told you. Tense shifts one step back: say → said, is → was, will → would. 'Say' does not need an object; 'tell' must have one.",
    structure: "Subject + said (that) + clause (past tense) | Subject + told + person + (that) + clause",
    examples: [
      "Direct: 'I am tired.' → Reported: She said she was tired.",
      "Direct: 'I will help you.' → Reported: He said he would help me.",
      "Direct: 'I live in Hanoi.' → Reported: She told me she lived in Hanoi.",
      "Direct: 'Can you come tomorrow?' → Reported: She asked if I could come the next day.",
    ],
    ieltsUse: [
      "Reading: understanding what experts claim or argue.",
      "Writing Task 2: referring to opinions without quoting directly.",
      "Speaking Part 3: reporting what people generally think.",
    ],
    commonMistakes: [
      "She said me she was tired. ✗ → She told me she was tired. ✓",
      "He said that he is hungry. ✗ → He said that he was hungry. ✓",
      "She asked where do I live. ✗ → She asked where I lived. ✓",
    ],
  },

  // ─── B1 Additional ─────────────────────────────────────────────────────────
  {
    id: "gerunds-infinitives",
    title: "Gerunds vs Infinitives",
    level: "B1",
    function: "Know which verb form to use after specific verbs — a key accuracy point",
    explanation: "Some verbs are followed by gerunds (-ing), others by infinitives (to + verb), and some by both with different meanings. Knowing these patterns avoids common errors.",
    structure: "enjoy/avoid/consider + gerund | want/decide/plan + infinitive | stop + gerund (= no longer) | stop + infinitive (= stop in order to)",
    examples: [
      "I enjoy learning English. (enjoy + gerund)",
      "She decided to study abroad. (decide + infinitive)",
      "I avoid making the same mistake twice. (avoid + gerund)",
      "He stopped smoking last year. (stopped doing it)",
      "She stopped to check her phone. (stopped in order to check)",
      "I recommend taking notes during lectures.",
    ],
    ieltsUse: [
      "Writing Task 2: using a variety of verb patterns correctly for GRA score.",
      "Speaking Part 1 & 3: fluently using gerunds and infinitives in discussion.",
    ],
    commonMistakes: [
      "I enjoy to swim. ✗ → I enjoy swimming. ✓",
      "She decided studying abroad. ✗ → She decided to study abroad. ✓",
      "I suggest to take a break. ✗ → I suggest taking a break. ✓",
    ],
  },
  {
    id: "modal-deduction",
    title: "Modal Verbs for Deduction",
    level: "B1",
    function: "Express how certain or uncertain you are about something",
    explanation: "Use must, can't, might/could to make deductions. 'Must' = you are almost certain it is true; 'can't' = you are almost certain it is not true; 'might/could' = it is possible.",
    structure: "must/can't/might/could + base verb (present deduction) | must/can't/might + have + past participle (past deduction)",
    examples: [
      "He must be tired — he worked 12 hours today.",
      "She can't be at home — her light is off.",
      "They might have missed the train.",
      "This must have taken a long time to build.",
      "The answer could be correct, but I'm not sure.",
    ],
    ieltsUse: [
      "Speaking Part 2 & 3: speculating about causes and solutions.",
      "Writing Task 2: making careful, hedged arguments.",
      "Reading: inferring meaning from context.",
    ],
    commonMistakes: [
      "He must is tired. ✗ → He must be tired. ✓",
      "She can't be arrived yet. ✗ → She can't have arrived yet. ✓",
    ],
  },

  // ─── C1 ────────────────────────────────────────────────────────────────
  {
    id: "third-conditional",
    title: "Third Conditional",
    level: "C1",
    function: "Discuss hypothetical situations in the past that did not happen",
    explanation: "Use Third Conditional to talk about situations that DIDN'T happen in the past and their imaginary results. It expresses regret, criticism or a different outcome.",
    structure: "If + Past Perfect (had + pp), would have + past participle",
    examples: [
      "If I had studied harder, I would have passed the exam.",
      "If governments had acted sooner, climate change would have been less severe.",
      "Had she invested in education, the country would have developed faster.",
      "If the project had been better planned, it would not have failed.",
    ],
    ieltsUse: [
      "Writing Task 2: discussing historical causes and counterfactual outcomes.",
      "Speaking Part 3: reflecting on past events and what should have been done.",
    ],
    commonMistakes: [
      "If I would have studied, I would have passed. ✗ → If I had studied, I would have passed. ✓",
      "If she had worked harder, she would pass. ✗ → If she had worked harder, she would have passed. ✓",
    ],
  },
  {
    id: "inversion",
    title: "Inversion for Emphasis",
    level: "C1",
    function: "Make writing more formal and emphatic — signals band 7+ sophistication",
    explanation: "In formal academic writing, inversion (putting the auxiliary before the subject) adds emphasis and variety. It is used after negative adverbs or restrictive expressions at the start of a sentence.",
    structure: "Negative adverb + auxiliary + subject + main verb",
    examples: [
      "Never before has the world faced such environmental challenges.",
      "Not only does social media spread information, it also shapes public opinion.",
      "Rarely do governments take decisive action without public pressure.",
      "Only by investing in education can a country ensure long-term prosperity.",
      "Hardly had the policy been introduced when critics began to object.",
    ],
    ieltsUse: [
      "Writing Task 2: demonstrating sophisticated grammatical range for band 7+.",
      "Use sparingly — one or two per essay maximum.",
    ],
    commonMistakes: [
      "Overuse — inverted sentences should be rare and well-placed, not constant.",
      "Never before the world has faced. ✗ → Never before has the world faced. ✓",
    ],
  },

  {
    id: "cleft-sentences",
    title: "Cleft Sentences (It is… that…)",
    level: "C1",
    function: "Emphasise a specific part of a sentence for rhetorical effect",
    explanation: "Cleft sentences allow you to put extra focus on one element. Overuse makes writing sound mechanical, so use sparingly for emphasis.",
    structure: "It is/was + emphasised element + that/who + rest of clause",
    examples: [
      "It is education that plays the most crucial role in reducing poverty.",
      "It was the rapid growth of cities that led to serious infrastructure problems.",
      "It is the lack of parental guidance that is most concerning.",
    ],
    ieltsUse: [
      "Writing Task 2: emphasising a key argument.",
      "Speaking Part 3: adding rhetorical emphasis.",
    ],
    commonMistakes: [
      "Do not overuse — one cleft sentence per essay is enough.",
    ],
  },
  {
    id: "second-conditional",
    title: "Second Conditional",
    level: "B1",
    function: "Discuss hypothetical or unlikely present/future situations",
    explanation: "Use Second Conditional for imaginary or unlikely scenarios. The if-clause uses Past Simple; the result uses 'would'.",
    structure: "If + Past Simple, would + base verb",
    examples: [
      "If governments invested more in education, outcomes would improve dramatically.",
      "If everyone recycled, we would produce less waste.",
      "If I were a teacher, I would make learning more enjoyable.",
      "If public transport were free, fewer people would use their cars.",
    ],
    ieltsUse: [
      "Writing Task 2: proposing hypothetical solutions.",
      "Speaking Part 3: discussing what would happen in an ideal world.",
    ],
    commonMistakes: [
      "If they would invest, it would improve. ✗ → If they invested, it would improve. ✓",
      "If I was the president… (formal writing: If I were the president…)",
    ],
  },
];

// ─── IELTS Speaking Answer Frameworks ────────────────────────────────────

export const SPEAKING_FRAMEWORKS = {
  part1: {
    name: "Part 1 Framework",
    structure: "Answer → Reason → Example/Detail",
    example: {
      question: "Do you like reading?",
      bad: "Yes, I do.",
      good: "Yes, I do. I usually read articles about technology because they help me learn new ideas and improve my vocabulary at the same time.",
    },
  },
  part2: {
    name: "Part 2 Framework",
    structure: "What/Who/Where → When/How → Why it was special → How you feel now",
    timeTarget: "1 minute 30 seconds to 2 minutes",
  },
  part3: {
    name: "Part 3 Framework",
    structure: "Opinion → Explanation → Example → Contrast → Summary",
    example: {
      question: "Why do people move to big cities?",
      answer: "I think the main reason is better job opportunities. Large cities usually offer higher salaries and more career options. For example, in Vietnam, most technology companies are based in Hanoi or Ho Chi Minh City. However, this migration can also lead to problems such as overcrowding and higher living costs. So while cities are attractive, they are not always easy places to live.",
    },
  },
} as const;

// ─── IELTS Writing Task 2 Essay Frameworks ───────────────────────────────

export const WRITING_T2_FRAMEWORKS = {
  opinion: {
    name: "Opinion Essay",
    prompt: "To what extent do you agree or disagree?",
    structure: [
      "Introduction: Paraphrase + clear position",
      "Body 1: First reason + explanation + example",
      "Body 2: Second reason + explanation + example",
      "Conclusion: Restate position + summary",
    ],
    bandTip: "State your opinion clearly in the introduction. Do not sit on the fence.",
  },
  discussion: {
    name: "Discussion Essay",
    prompt: "Discuss both views and give your own opinion.",
    structure: [
      "Introduction: Paraphrase + note both views + your stance",
      "Body 1: View 1 + reason + example",
      "Body 2: View 2 + reason + example",
      "Conclusion: Balanced conclusion + your final opinion",
    ],
    bandTip: "Cover both sides equally. Your opinion should be stated in the conclusion.",
  },
  problemSolution: {
    name: "Problem-Solution Essay",
    prompt: "What are the causes? What solutions can you suggest?",
    structure: [
      "Introduction: Paraphrase + overview of the issue",
      "Body 1: Causes (2–3) with explanation",
      "Body 2: Solutions (2–3) with explanation",
      "Conclusion: Summary + optimistic or realistic final thought",
    ],
    bandTip: "Causes and solutions must clearly match each other.",
  },
  advantageDisadvantage: {
    name: "Advantage/Disadvantage Essay",
    prompt: "Discuss the advantages and disadvantages.",
    structure: [
      "Introduction: Paraphrase + statement about both sides",
      "Body 1: Advantages with detail",
      "Body 2: Disadvantages with detail",
      "Conclusion: Overall assessment",
    ],
    bandTip: "Cover both sides equally. Do not evaluate which is greater unless asked.",
  },
} as const;

// ─── IELTS Band Descriptors (Writing & Speaking) ─────────────────────────

export const IELTS_BAND_DESCRIPTORS = {
  writing: {
    criteria: ["Task Achievement (TA)", "Coherence & Cohesion (CC)", "Lexical Resource (LR)", "Grammatical Range & Accuracy (GRA)"],
    band6: {
      TA: "Addresses the task but may be too general or incomplete.",
      CC: "Organises ideas with some linking; cohesive devices may be faulty.",
      LR: "Adequate but limited vocabulary; some errors in word choice.",
      GRA: "Mix of simple and complex sentences; frequent errors in complex structures.",
    },
    band7: {
      TA: "Covers the task clearly with a clear position and well-developed ideas.",
      CC: "Logically organised with clear progression; cohesive devices used well.",
      LR: "Sufficient vocabulary to discuss topics flexibly; some uncommon words used.",
      GRA: "A variety of complex structures used with good control; occasional errors.",
    },
    band8: {
      TA: "Fully addresses the task with well-developed, relevant ideas.",
      CC: "Skilfully organised; cohesive devices used naturally and precisely.",
      LR: "Wide range of vocabulary used fluently and flexibly; rare errors.",
      GRA: "Wide range of structures used accurately; very rare errors.",
    },
  },
  speaking: {
    criteria: ["Fluency & Coherence (FC)", "Lexical Resource (LR)", "Grammatical Range & Accuracy (GRA)", "Pronunciation (P)"],
    band6: {
      FC: "Some hesitation; some repetition; generally coherent but may lose focus.",
      LR: "Uses a range of vocabulary but with some lapses in precision.",
      GRA: "A mix of structures; errors do not impede communication.",
      P: "Generally clear pronunciation; L1 accent present but understandable.",
    },
    band7: {
      FC: "Speaks at length without effort; some repetition but self-corrects.",
      LR: "Uses vocabulary flexibly; uses less common words with awareness of style.",
      GRA: "Uses a range of complex structures; most sentences are error-free.",
      P: "Flexible pronunciation; easy to understand throughout.",
    },
  },
} as const;

// ─── IELTS Study Roadmap ──────────────────────────────────────────────────

export const IELTS_STUDY_ROADMAP = {
  commitment: "18 months from absolute zero to IELTS 7.0+ (2–3 hours/day, 6 days/week)",
  accelerated: "12 months achievable at 4 hours/day with daily speaking practice",
  stages: [
    {
      stage: 1,
      name: "Foundation Builder",
      levelRange: "Zero → A2",
      duration: "4–5 months",
      hoursTotal: "320–400 hours",
      focus: ["Alphabet, basic sounds, phonics", "500–800 core vocabulary words", "Present Simple, Past Simple, key modals", "Short self-introductions and basic conversations"],
      milestone: "Can introduce yourself, describe your daily life, and understand simple conversations",
      ieltsEquivalent: "Band 2.5–3.5",
    },
    {
      stage: 2,
      name: "Communication Breakthrough",
      levelRange: "A2 → B1",
      duration: "3–4 months",
      hoursTotal: "300–400 hours",
      focus: ["800–1,500 vocabulary words", "Past tenses, Present Perfect, Conditionals", "Giving opinions with reasons and examples", "Speaking 60–90 second responses"],
      milestone: "Can discuss familiar topics, give opinions, and write structured paragraphs",
      ieltsEquivalent: "Band 4.0–5.0",
    },
    {
      stage: 3,
      name: "IELTS Foundations",
      levelRange: "B1 → B2",
      duration: "4–5 months",
      hoursTotal: "400–500 hours",
      focus: ["Academic Word List (AWL) — 570 key word families", "Cause & effect, concession, hedging language", "Task 2 essay structure (Simon's 4-paragraph method)", "Task 1 data description language"],
      milestone: "Can write a structured 250-word essay; speak for 2 minutes on any topic",
      ieltsEquivalent: "Band 5.5–6.5",
    },
    {
      stage: 4,
      name: "IELTS 7.0 Target",
      levelRange: "B2 → IELTS 7.0",
      duration: "3–4 months",
      hoursTotal: "300–400 hours",
      focus: ["Collocations and lexical resource (LR) for band 7", "Grammatical range: inversion, cleft sentences, mixed conditionals", "Reading: True/False/Not Given, headings matching", "Listening: all 4 section types, distractor awareness", "2 full mock tests per week with timed conditions"],
      milestone: "Consistent IELTS 7.0 in all four skills under exam conditions",
      ieltsEquivalent: "Band 7.0–7.5+",
    },
  ],
  dailySchedule: {
    hours: "2.5 hours per day (minimum), 6 days per week",
    breakdown: [
      "30 min — Vocabulary (review flashcards + learn 10 new words)",
      "30 min — Grammar (one structure, practise in sentences)",
      "30 min — Speaking (record yourself, listen back, improve)",
      "30 min — Listening or Reading (IELTS practice material)",
      "30 min — Writing (one paragraph or full essay, timed)",
    ],
    weeklyMission: "1 full writing task + 1 speaking mock every week from Stage 2 onwards",
  },
  guarantee: {
    condition: "Complete every lesson in order, record every speaking task, submit every writing task, maintain 80%+ lesson completion rate",
    result: "IELTS 7.0 minimum within the stated timeline",
    note: "Most students exceed 7.0 when they follow the full roadmap. The roadmap is designed so that 7.0 is the floor, not the ceiling.",
  },
} as const;

// ─── IELTS Task 1 Language ────────────────────────────────────────────────

export const WRITING_T1_LANGUAGE = {
  overview: "The first sentence of the overview is the most important — it should summarise the main trend or key feature, NOT list all the data.",
  overviewTemplates: [
    "Overall, it is clear that [main trend].",
    "In general, [subject] [verb] significantly over the period.",
    "Overall, the most striking feature is that [key observation].",
  ],
  trendLanguage: {
    upward: ["rose sharply", "increased significantly", "climbed steadily", "surged", "grew rapidly", "more than doubled"],
    downward: ["fell dramatically", "dropped sharply", "declined steadily", "plummeted", "decreased significantly"],
    stable: ["remained relatively stable", "stayed constant", "showed little change", "levelled off"],
    fluctuating: ["fluctuated between X and Y", "varied considerably", "oscillated"],
    peak: ["reached a peak of", "hit a high of", "peaked at"],
    trough: ["fell to a low of", "hit a trough of", "dropped to a minimum of"],
  },
  adverbs: ["sharply", "dramatically", "significantly", "steadily", "gradually", "slightly", "marginally", "considerably"],
  timeExpressions: ["from 2010 to 2020", "between 2010 and 2020", "over the 10-year period", "by 2020", "in 2015", "throughout the period"],
  comparison: ["while", "whereas", "in contrast to", "compared with", "unlike", "on the other hand"],
} as const;

// ─── Vietnamese Learner Error System ─────────────────────────────────────

export const COMMON_VIETNAMESE_ERRORS = [
  { error: "Subject-verb agreement", example: "She go to school every day.", correction: "She goes to school every day.", explanation: "Add -s/-es to the verb for he/she/it in Present Simple." },
  { error: "Missing article", example: "I am student at university.", correction: "I am a student at a university.", explanation: "Use 'a/an' before singular countable nouns used for the first time." },
  { error: "Wrong preposition", example: "I depend of my family.", correction: "I depend on my family.", explanation: "'Depend' always uses 'on', not 'of'." },
  { error: "Direct Vietnamese translation", example: "I very like English.", correction: "I really like English.", explanation: "In English, adverbs come after the verb 'like', not before." },
  { error: "Overuse of 'very'", example: "It is very very important.", correction: "It is extremely important.", explanation: "Use stronger adverbs: extremely, incredibly, highly, remarkably." },
  { error: "Missing final consonant sounds", example: "I wan' to improv' my English.", correction: "I want to improve my English.", explanation: "Vietnamese words rarely end in consonant clusters. Practise /t/, /d/, /s/, /z/, /k/ endings." },
  { error: "Confusing /iː/ and /ɪ/", example: "She is leaving in the ship. [ship vs sheep]", correction: "Practise: ship /ɪ/ vs sheep /iː/.", explanation: "/ɪ/ is short and relaxed. /iː/ is long and tense." },
  { error: "Short Speaking answers", example: "Q: Do you like travelling? A: Yes, I do.", correction: "Yes, I love travelling. I usually go on a short trip once or twice a year because I enjoy learning about different cultures.", explanation: "IELTS Part 1 answers should be 2–4 sentences." },
  { error: "Writing without a thesis", example: "Introduction that just explains the topic with no opinion stated.", correction: "End your introduction with a clear thesis: 'I strongly believe that...' or 'This essay will argue that...'", explanation: "IELTS Task 2 requires a clear position from the start." },
  { error: "Reading: translating word by word", example: "Reading slowly, translating each word to Vietnamese.", correction: "Skim for main idea → scan for specific information → read for evidence.", explanation: "You have 60 minutes for 40 questions. Translation is too slow." },
  { error: "Listening: writing what you hear, not what is asked", example: "The answer is 'John Smith' but you write 'John'.", correction: "Read the question carefully — names often need first and last name.", explanation: "Follow instructions exactly: 'ONE WORD AND/OR A NUMBER'." },
  { error: "False/Not Given confusion", example: "Choosing False when the text simply doesn't mention it.", correction: "NOT GIVEN = the passage gives no information either way. FALSE = the passage says the opposite.", explanation: "Only choose FALSE if the passage directly contradicts the statement." },
] as const;
