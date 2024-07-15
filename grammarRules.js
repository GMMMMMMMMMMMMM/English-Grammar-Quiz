const grammarRules = [
    // Verb Tenses
    {
        id: 1,
        rule: "Verb tenses: present simple",
        explanation: "The present simple tense is used to describe habits, general truths, and actions that happen regularly or repeatedly.",
        example: "I go to school every day.",
        options: [
            { text: "I go to school every day.", correct: true },
            { text: "I am going to school every day.", correct: false },
            { text: "I goes to school every day.", correct: false },
            { text: "I going to school every day.", correct: false }
        ]
    },
    {
        id: 2,
        rule: "Verb tenses: present continuous",
        explanation: "The present continuous tense is used to describe actions that are happening now or in the near future.",
        example: "I am studying for my exam right now.",
        options: [
            { text: "I study for my exam right now.", correct: false },
            { text: "I am studying for my exam right now.", correct: true },
            { text: "I studies for my exam right now.", correct: false },
            { text: "I studying for my exam right now.", correct: false }
        ]
    },
    {
        id: 3,
        rule: "Verb tenses: past simple",
        explanation: "The past simple tense is used to describe actions that happened at a specific time in the past.",
        example: "I went to the park yesterday.",
        options: [
            { text: "I went to the park yesterday.", correct: true },
            { text: "I go to the park yesterday.", correct: false },
            { text: "I goes to the park yesterday.", correct: false },
            { text: "I going to the park yesterday.", correct: false }
        ]
    },
    {
        id: 4,
        rule: "Verb tenses: past continuous",
        explanation: "The past continuous tense is used to describe actions that were happening at a specific time in the past.",
        example: "I was studying when she called.",
        options: [
            { text: "I was studying when she called.", correct: true },
            { text: "I studied when she called.", correct: false },
            { text: "I studying when she called.", correct: false },
            { text: "I studies when she called.", correct: false }
        ]
    },
    {
        id: 5,
        rule: "Verb tenses: present perfect",
        explanation: "The present perfect tense is used to describe actions that happened at an unspecified time or have relevance to the present.",
        example: "I have seen that movie.",
        options: [
            { text: "I have seen that movie.", correct: true },
            { text: "I seen that movie.", correct: false },
            { text: "I have saw that movie.", correct: false },
            { text: "I has seen that movie.", correct: false }
        ]
    },
    {
        id: 6,
        rule: "Verb tenses: present perfect continuous",
        explanation: "The present perfect continuous tense is used to describe actions that started in the past and continue to the present.",
        example: "I have been studying for two hours.",
        options: [
            { text: "I have been studying for two hours.", correct: true },
            { text: "I have studied for two hours.", correct: false },
            { text: "I been studying for two hours.", correct: false },
            { text: "I have been study for two hours.", correct: false }
        ]
    },
    {
        id: 7,
        rule: "Verb tenses: past perfect",
        explanation: "The past perfect tense is used to describe actions that were completed before another action in the past.",
        example: "I had finished my homework before I went out.",
        options: [
            { text: "I had finished my homework before I went out.", correct: true },
            { text: "I finished my homework before I went out.", correct: false },
            { text: "I has finished my homework before I went out.", correct: false },
            { text: "I had finish my homework before I went out.", correct: false }
        ]
    },
    {
        id: 8,
        rule: "Verb tenses: past perfect continuous",
        explanation: "The past perfect continuous tense is used to describe actions that were happening before another action in the past.",
        example: "I had been studying for two hours when he arrived.",
        options: [
            { text: "I had been studying for two hours when he arrived.", correct: true },
            { text: "I had studied for two hours when he arrived.", correct: false },
            { text: "I have been studying for two hours when he arrived.", correct: false },
            { text: "I had been study for two hours when he arrived.", correct: false }
        ]
    },
    {
        id: 9,
        rule: "Verb tenses: future simple",
        explanation: "The future simple tense is used to describe actions that will happen in the future.",
        example: "I will go to the store tomorrow.",
        options: [
            { text: "I will go to the store tomorrow.", correct: true },
            { text: "I go to the store tomorrow.", correct: false },
            { text: "I goes to the store tomorrow.", correct: false },
            { text: "I going to the store tomorrow.", correct: false }
        ]
    },
    {
        id: 10,
        rule: "Verb tenses: future continuous",
        explanation: "The future continuous tense is used to describe actions that will be happening at a specific time in the future.",
        example: "I will be studying at 8 PM.",
        options: [
            { text: "I will be studying at 8 PM.", correct: true },
            { text: "I am studying at 8 PM.", correct: false },
            { text: "I will study at 8 PM.", correct: false },
            { text: "I will be study at 8 PM.", correct: false }
        ]
    },
    {
        id: 11,
        rule: "Verb tenses: future perfect",
        explanation: "The future perfect tense is used to describe actions that will be completed before a specific time in the future.",
        example: "I will have finished my project by next Monday.",
        options: [
            { text: "I will have finished my project by next Monday.", correct: true },
            { text: "I will finish my project by next Monday.", correct: false },
            { text: "I will have finish my project by next Monday.", correct: false },
            { text: "I will has finished my project by next Monday.", correct: false }
        ]
    },
    {
        id: 12,
        rule: "Verb tenses: future perfect continuous",
        explanation: "The future perfect continuous tense is used to describe actions that will have been happening for a specific duration of time before another action in the future.",
        example: "By next year, I will have been working here for ten years.",
        options: [
            { text: "By next year, I will have been working here for ten years.", correct: true },
            { text: "By next year, I will be working here for ten years.", correct: false },
            { text: "By next year, I will have worked here for ten years.", correct: false },
            { text: "By next year, I will have work here for ten years.", correct: false }
        ]
    },
    // Articles
    {
        id: 13,
        rule: "Articles: definite article (the)",
        explanation: "The definite article (the) is used to refer to specific nouns that have already been mentioned or are easily identifiable.",
        example: "The cat is on the mat.",
        options: [
            { text: "The cat is on the mat.", correct: true },
            { text: "A cat is on the mat.", correct: false },
            { text: "Cat is on the mat.", correct: false },
            { text: "Some cat is on the mat.", correct: false }
        ]
    },
    {
        id: 14,
        rule: "Articles: indefinite articles (a, an)",
        explanation: "Indefinite articles (a, an) are used to refer to non-specific nouns.",
        example: "I saw a dog in the park.",
        options: [
            { text: "I saw a dog in the park.", correct: true },
            { text: "I saw the dog in the park.", correct: false },
            { text: "I saw dog in the park.", correct: false },
            { text: "I saw an dog in the park.", correct: false }
        ]
    },
    // Nouns
    {
        id: 15,
        rule: "Plural nouns",
        explanation: "Most nouns form the plural by adding -s or -es.",
        example: "Dogs, boxes",
        options: [
            { text: "Dogs", correct: true },
            { text: "Doges", correct: false },
            { text: "Boxs", correct: false },
            { text: "Boxies", correct: false }
        ]
    },
    {
        id: 16,
        rule: "Irregular plural nouns",
        explanation: "Some nouns have irregular plural forms.",
        example: "Children, mice",
        options: [
            { text: "Children", correct: true },
            { text: "Childs", correct: false },
            { text: "Mouses", correct: false },
            { text: "Mices", correct: false }
        ]
    },
    {
        id: 17,
        rule: "Possessive nouns",
        explanation: "Possessive nouns show ownership by adding an apostrophe and sometimes an s.",
        example: "Sarah's book",
        options: [
            { text: "Sarah's book", correct: true },
            { text: "Sarah book", correct: false },
            { text: "Sarahs book", correct: false },
            { text: "Sarahs' book", correct: false }
        ]
    },
    // Pronouns
    {
        id: 18,
        rule: "Pronouns: subject pronouns",
        explanation: "Subject pronouns replace the subject of the sentence.",
        example: "He is my friend.",
        options: [
            { text: "He is my friend.", correct: true },
            { text: "Him is my friend.", correct: false },
            { text: "His is my friend.", correct: false },
            { text: "He are my friend.", correct: false }
        ]
    },
    {
        id: 19,
        rule: "Pronouns: object pronouns",
        explanation: "Object pronouns replace the object of the sentence.",
        example: "I gave him the book.",
        options: [
            { text: "I gave him the book.", correct: true },
            { text: "I gave he the book.", correct: false },
            { text: "I gave his the book.", correct: false },
            { text: "I gave he book.", correct: false }
        ]
    },
    {
        id: 20,
        rule: "Pronouns: possessive pronouns",
        explanation: "Possessive pronouns show ownership.",
        example: "This book is mine.",
        options: [
            { text: "This book is mine.", correct: true },
            { text: "This book is my.", correct: false },
            { text: "This book is me.", correct: false },
            { text: "This book is I.", correct: false }
        ]
    },
    // Adjectives
    {
        id: 21,
        rule: "Adjectives",
        explanation: "Adjectives describe or modify nouns.",
        example: "A tall building",
        options: [
            { text: "A tall building", correct: true },
            { text: "A building tall", correct: false },
            { text: "Tall a building", correct: false },
            { text: "Building a tall", correct: false }
        ]
    },
    {
        id: 22,
        rule: "Comparative and superlative adjectives",
        explanation: "Comparative adjectives compare two things; superlative adjectives compare three or more things.",
        example: "Smarter, the smartest",
        options: [
            { text: "Smarter", correct: true },
            { text: "More smart", correct: false },
            { text: "Smartest", correct: false },
            { text: "More smarter", correct: false }
        ]
    },
    // Adverbs
    {
        id: 23,
        rule: "Adverbs",
        explanation: "Adverbs modify verbs, adjectives, or other adverbs.",
        example: "She sings beautifully.",
        options: [
            { text: "She sings beautifully.", correct: true },
            { text: "She sings beautiful.", correct: false },
            { text: "She sing beautifully.", correct: false },
            { text: "She singing beautifully.", correct: false }
        ]
    },
    // Prepositions
    {
        id: 24,
        rule: "Prepositions of time",
        explanation: "Prepositions of time show the relationship of time between nouns and other words.",
        example: "At noon, on Monday",
        options: [
            { text: "At noon", correct: true },
            { text: "In noon", correct: false },
            { text: "On noon", correct: false },
            { text: "By noon", correct: false }
        ]
    },
    {
        id: 25,
        rule: "Prepositions of place",
        explanation: "Prepositions of place show the relationship of place between nouns and other words.",
        example: "In the box, on the table",
        options: [
            { text: "In the box", correct: true },
            { text: "At the box", correct: false },
            { text: "On the box", correct: false },
            { text: "By the box", correct: false }
        ]
    },
    // Conjunctions
    {
        id: 26,
        rule: "Conjunctions: coordinating conjunctions",
        explanation: "Coordinating conjunctions connect words, phrases, or clauses of equal importance.",
        example: "I like tea and coffee.",
        options: [
            { text: "I like tea and coffee.", correct: true },
            { text: "I like tea but coffee.", correct: false },
            { text: "I like tea or coffee.", correct: false },
            { text: "I like tea nor coffee.", correct: false }
        ]
    },
    {
        id: 27,
        rule: "Conjunctions: subordinating conjunctions",
        explanation: "Subordinating conjunctions connect a dependent clause to an independent clause.",
        example: "I will go if it stops raining.",
        options: [
            { text: "I will go if it stops raining.", correct: true },
            { text: "I will go because it stops raining.", correct: false },
            { text: "I will go although it stops raining.", correct: false },
            { text: "I will go since it stops raining.", correct: false }
        ]
    },
    {
        id: 28,
        rule: "Conjunctions: correlative conjunctions",
        explanation: "Correlative conjunctions work in pairs to connect words, phrases, or clauses.",
        example: "Either you or I will go.",
        options: [
            { text: "Either you or I will go.", correct: true },
            { text: "Neither you nor I will go.", correct: false },
            { text: "Both you and I will go.", correct: false },
            { text: "Not only you but also I will go.", correct: false }
        ]
    },
    // Sentence Types
    {
        id: 29,
        rule: "Simple sentences",
        explanation: "A simple sentence consists of a single independent clause.",
        example: "She reads.",
        options: [
            { text: "She reads.", correct: true },
            { text: "She reading.", correct: false },
            { text: "She reads and writes.", correct: false },
            { text: "Reading she is.", correct: false }
        ]
    },
    {
        id: 30,
        rule: "Compound sentences",
        explanation: "A compound sentence consists of two or more independent clauses joined by a coordinating conjunction or a semicolon.",
        example: "She reads, and he writes.",
        options: [
            { text: "She reads, and he writes.", correct: true },
            { text: "She reads and he writes.", correct: false },
            { text: "She reads, but he writes.", correct: false },
            { text: "She reads; he writes.", correct: false }
        ]
    },
    {
        id: 31,
        rule: "Complex sentences",
        explanation: "A complex sentence consists of one independent clause and at least one dependent clause.",
        example: "Although it was raining, we went out.",
        options: [
            { text: "Although it was raining, we went out.", correct: true },
            { text: "Although it was raining, but we went out.", correct: false },
            { text: "Although it was raining; we went out.", correct: false },
            { text: "Although it was raining and we went out.", correct: false }
        ]
    },
    {
        id: 32,
        rule: "Compound-complex sentences",
        explanation: "A compound-complex sentence consists of two or more independent clauses and at least one dependent clause.",
        example: "She reads, and he writes when he has time.",
        options: [
            { text: "She reads, and he writes when he has time.", correct: true },
            { text: "She reads and he writes when he has time.", correct: false },
            { text: "She reads; and he writes when he has time.", correct: false },
            { text: "She reads but he writes when he has time.", correct: false }
        ]
    },
    // Voice
    {
        id: 33,
        rule: "Active voice",
        explanation: "In active voice, the subject performs the action of the verb.",
        example: "The cat chased the mouse.",
        options: [
            { text: "The cat chased the mouse.", correct: true },
            { text: "The mouse was chased by the cat.", correct: false },
            { text: "The cat was chased by the mouse.", correct: false },
            { text: "The mouse chased the cat.", correct: false }
        ]
    },
    {
        id: 34,
        rule: "Passive voice",
        explanation: "In passive voice, the subject receives the action of the verb.",
        example: "The mouse was chased by the cat.",
        options: [
            { text: "The mouse was chased by the cat.", correct: true },
            { text: "The cat chased the mouse.", correct: false },
            { text: "The cat was chased by the mouse.", correct: false },
            { text: "The mouse chased the cat.", correct: false }
        ]
    },
    // Reported Speech
    {
        id: 35,
        rule: "Direct and indirect speech",
        explanation: "Direct speech quotes the exact words spoken; indirect speech paraphrases what was said.",
        example: "He said, 'I am tired.' / He said that he was tired.",
        options: [
            { text: "He said that he was tired.", correct: true },
            { text: "He said, 'I am tired.'", correct: false },
            { text: "He says, 'I am tired.'", correct: false },
            { text: "He said, 'He is tired.'", correct: false }
        ]
    },
    // Conditionals
    {
        id: 36,
        rule: "Zero conditional",
        explanation: "The zero conditional is used for general truths or laws of nature.",
        example: "If you heat water, it boils.",
        options: [
            { text: "If you heat water, it boils.", correct: true },
            { text: "If you heat water, it boil.", correct: false },
            { text: "If you heated water, it boils.", correct: false },
            { text: "If you heat water, it boiled.", correct: false }
        ]
    },
    {
        id: 37,
        rule: "First conditional",
        explanation: "The first conditional is used for real or possible situations in the future.",
        example: "If it rains, we will stay inside.",
        options: [
            { text: "If it rains, we will stay inside.", correct: true },
            { text: "If it rains, we stay inside.", correct: false },
            { text: "If it rained, we will stay inside.", correct: false },
            { text: "If it rains, we stayed inside.", correct: false }
        ]
    },
    {
        id: 38,
        rule: "Second conditional",
        explanation: "The second conditional is used for hypothetical or unlikely situations in the present or future.",
        example: "If I were rich, I would travel the world.",
        options: [
            { text: "If I were rich, I would travel the world.", correct: true },
            { text: "If I am rich, I would travel the world.", correct: false },
            { text: "If I was rich, I would travel the world.", correct: false },
            { text: "If I were rich, I will travel the world.", correct: false }
        ]
    },
    {
        id: 39,
        rule: "Third conditional",
        explanation: "The third conditional is used for hypothetical situations in the past.",
        example: "If I had known, I would have told you.",
        options: [
            { text: "If I had known, I would have told you.", correct: true },
            { text: "If I had known, I will tell you.", correct: false },
            { text: "If I knew, I would have told you.", correct: false },
            { text: "If I had knew, I would have told you.", correct: false }
        ]
    },
    // Clauses
    {
        id: 40,
        rule: "Relative clauses: defining",
        explanation: "Defining relative clauses give essential information about the noun.",
        example: "The book that you gave me is interesting.",
        options: [
            { text: "The book that you gave me is interesting.", correct: true },
            { text: "The book which you gave me is interesting.", correct: false },
            { text: "The book who you gave me is interesting.", correct: false },
            { text: "The book whom you gave me is interesting.", correct: false }
        ]
    },
    {
        id: 41,
        rule: "Relative clauses: non-defining",
        explanation: "Non-defining relative clauses give extra information about the noun.",
        example: "My brother, who lives in France, is visiting us.",
        options: [
            { text: "My brother, who lives in France, is visiting us.", correct: true },
            { text: "My brother who lives in France is visiting us.", correct: false },
            { text: "My brother, which lives in France, is visiting us.", correct: false },
            { text: "My brother, whom lives in France, is visiting us.", correct: false }
        ]
    },
    // Modal Verbs
    {
        id: 42,
        rule: "Modal verbs: can, could",
        explanation: "Modal verbs like 'can' and 'could' express ability, possibility, permission, or requests.",
        example: "Can you help me?",
        options: [
            { text: "Can you help me?", correct: true },
            { text: "Can you helping me?", correct: false },
            { text: "Can you helped me?", correct: false },
            { text: "Can you helps me?", correct: false }
        ]
    },
    {
        id: 43,
        rule: "Modal verbs: may, might",
        explanation: "Modal verbs like 'may' and 'might' express possibility or permission.",
        example: "You may leave now.",
        options: [
            { text: "You may leave now.", correct: true },
            { text: "You might leave now.", correct: false },
            { text: "You may leaving now.", correct: false },
            { text: "You may leaves now.", correct: false }
        ]
    },
    {
        id: 44,
        rule: "Modal verbs: shall, should",
        explanation: "Modal verbs like 'shall' and 'should' express suggestions, obligations, or future actions.",
        example: "You should eat more vegetables.",
        options: [
            { text: "You should eat more vegetables.", correct: true },
            { text: "You shall eat more vegetables.", correct: false },
            { text: "You should eats more vegetables.", correct: false },
            { text: "You should eating more vegetables.", correct: false }
        ]
    },
    {
        id: 45,
        rule: "Modal verbs: will, would",
        explanation: "Modal verbs like 'will' and 'would' express future actions, intentions, or polite requests.",
        example: "I will call you later.",
        options: [
            { text: "I will call you later.", correct: true },
            { text: "I would call you later.", correct: false },
            { text: "I will calling you later.", correct: false },
            { text: "I will called you later.", correct: false }
        ]
    },
    // Questions
    {
        id: 46,
        rule: "Question formation: yes/no questions",
        explanation: "Yes/no questions are formed by placing the auxiliary verb before the subject.",
        example: "Are you coming?",
        options: [
            { text: "Are you coming?", correct: true },
            { text: "You are coming?", correct: false },
            { text: "Is you coming?", correct: false },
            { text: "Are you come?", correct: false }
        ]
    },
    {
        id: 47,
        rule: "Question formation: WH- questions",
        explanation: "WH- questions are formed using question words like what, where, when, why, who, and how.",
        example: "Where are you going?",
        options: [
            { text: "Where are you going?", correct: true },
            { text: "You are going where?", correct: false },
            { text: "Where you are going?", correct: false },
            { text: "Are you going where?", correct: false }
        ]
    },
    // Commands
    {
        id: 48,
        rule: "Imperatives",
        explanation: "Imperative sentences give commands or make requests.",
        example: "Close the door.",
        options: [
            { text: "Close the door.", correct: true },
            { text: "Close you the door.", correct: false },
            { text: "You close the door.", correct: false },
            { text: "To close the door.", correct: false }
        ]
    },
    // Nouns and Determiners
    {
        id: 49,
        rule: "Countable and uncountable nouns",
        explanation: "Countable nouns can be counted and have plural forms; uncountable nouns cannot be counted and do not have plural forms.",
        example: "Apples (countable), Water (uncountable)",
        options: [
            { text: "Apples (countable)", correct: true },
            { text: "Apple (uncountable)", correct: false },
            { text: "Waters (countable)", correct: false },
            { text: "Water (countable)", correct: false }
        ]
    },
    {
        id: 50,
        rule: "Determiners: some, any",
        explanation: "Determiners like 'some' and 'any' are used to indicate an indefinite quantity.",
        example: "I have some friends. / Do you have any money?",
        options: [
            { text: "I have some friends.", correct: true },
            { text: "I have any friends.", correct: false },
            { text: "I has some friends.", correct: false },
            { text: "I have some friend.", correct: false }
        ]
    },
    {
        id: 51,
        rule: "Determiners: much, many",
        explanation: "'Much' is used with uncountable nouns, and 'many' is used with countable nouns.",
        example: "I don't have much time. / I have many books.",
        options: [
            { text: "I don't have much time.", correct: true },
            { text: "I don't have many time.", correct: false },
            { text: "I have much books.", correct: false },
            { text: "I has many books.", correct: false }
        ]
    },
    {
        id: 52,
        rule: "Determiners: few, little",
        explanation: "'Few' is used with countable nouns, and 'little' is used with uncountable nouns.",
        example: "Few people came to the party. / I have little water.",
        options: [
            { text: "Few people came to the party.", correct: true },
            { text: "Few water is left.", correct: false },
            { text: "Little people came to the party.", correct: false },
            { text: "Little waters is left.", correct: false }
        ]
    },
    {
        id: 53,
        rule: "Determiners: this, that, these, those",
        explanation: "Demonstrative pronouns point to specific things.",
        example: "This is my book. / Those are your shoes.",
        options: [
            { text: "This is my book.", correct: true },
            { text: "This are my book.", correct: false },
            { text: "These is my book.", correct: false },
            { text: "This be my book.", correct: false }
        ]
    },
    {
        id: 54,
        rule: "Relative pronouns: who, which, that",
        explanation: "Relative pronouns introduce relative clauses.",
        example: "The person who called was my friend.",
        options: [
            { text: "The person who called was my friend.", correct: true },
            { text: "The person which called was my friend.", correct: false },
            { text: "The person whom called was my friend.", correct: false },
            { text: "The person that called was my friend.", correct: false }
        ]
    },
    // More Verb Tenses
    {
        id: 55,
        rule: "Present Perfect Continuous",
        explanation: "Used to show that an action started in the past and has continued up until now.",
        example: "I have been working here for five years.",
        options: [
            { text: "I have been working here for five years.", correct: true },
            { text: "I have worked here for five years.", correct: false },
            { text: "I been working here for five years.", correct: false },
            { text: "I have work here for five years.", correct: false }
        ]
    },
    {
        id: 56,
        rule: "Past Perfect",
        explanation: "Used to show that an action was completed before another action in the past.",
        example: "She had finished her homework before she watched TV.",
        options: [
            { text: "She had finished her homework before she watched TV.", correct: true },
            { text: "She has finished her homework before she watched TV.", correct: false },
            { text: "She had finish her homework before she watched TV.", correct: false },
            { text: "She had finished her homework before she watches TV.", correct: false }
        ]
    },
    {
        id: 57,
        rule: "Past Perfect Continuous",
        explanation: "Used to show that an action started in the past and continued until another time in the past.",
        example: "I had been studying for two hours when he arrived.",
        options: [
            { text: "I had been studying for two hours when he arrived.", correct: true },
            { text: "I studied for two hours when he arrived.", correct: false },
            { text: "I had been study for two hours when he arrived.", correct: false },
            { text: "I has been studying for two hours when he arrived.", correct: false }
        ]
    },
    {
        id: 58,
        rule: "Future Continuous",
        explanation: "Used to indicate that an action will be happening at a specific time in the future.",
        example: "I will be traveling to Paris this time next week.",
        options: [
            { text: "I will be traveling to Paris this time next week.", correct: true },
            { text: "I will travel to Paris this time next week.", correct: false },
            { text: "I am traveling to Paris this time next week.", correct: false },
            { text: "I will be travel to Paris this time next week.", correct: false }
        ]
    },
    {
        id: 59,
        rule: "Future Perfect",
        explanation: "Used to show that an action will have been completed by a certain future time.",
        example: "I will have finished my project by next Monday.",
        options: [
            { text: "I will have finished my project by next Monday.", correct: true },
            { text: "I will finish my project by next Monday.", correct: false },
            { text: "I will have finish my project by next Monday.", correct: false },
            { text: "I will has finished my project by next Monday.", correct: false }
        ]
    },
    {
        id: 60,
        rule: "Future Perfect Continuous",
        explanation: "Used to show that an action will have been continuing up until a certain future time.",
        example: "By next year, I will have been working here for ten years.",
        options: [
            { text: "By next year, I will have been working here for ten years.", correct: true },
            { text: "By next year, I will be working here for ten years.", correct: false },
            { text: "By next year, I will have worked here for ten years.", correct: false },
            { text: "By next year, I will have work here for ten years.", correct: false }
        ]
    },
    // Advanced Clauses and Sentence Structures
    {
        id: 61,
        rule: "Ellipsis",
        explanation: "Used to omit parts of a sentence when they are not necessary.",
        example: "She can play the piano, and he can too.",
        options: [
            { text: "She can play the piano, and he can too.", correct: true },
            { text: "She can play the piano, and he too.", correct: false },
            { text: "She can play the piano, he can too.", correct: false },
            { text: "She play the piano, and he can too.", correct: false }
        ]
    },
    {
        id: 62,
        rule: "Nominalization",
        explanation: "The process of converting verbs and adjectives into nouns.",
        example: "The analysis was detailed.",
        options: [
            { text: "The analysis was detailed.", correct: true },
            { text: "The analyzing was detailed.", correct: false },
            { text: "The analyzed was detailed.", correct: false },
            { text: "The analyze was detailed.", correct: false }
        ]
    },
    {
        id: 63,
        rule: "Inversion",
        explanation: "Used to make questions, conditional sentences, and for emphasis.",
        example: "Never have I seen such beauty.",
        options: [
            { text: "Never have I seen such beauty.", correct: true },
            { text: "I never have seen such beauty.", correct: false },
            { text: "Never I have seen such beauty.", correct: false },
            { text: "I have never seen such beauty.", correct: false }
        ]
    },
    {
        id: 64,
        rule: "Cleft Sentences: It-cleft",
        explanation: "Used to emphasize a particular part of the sentence.",
        example: "It was John who broke the window.",
        options: [
            { text: "It was John who broke the window.", correct: true },
            { text: "It was John which broke the window.", correct: false },
            { text: "It is John who broke the window.", correct: false },
            { text: "John who broke the window.", correct: false }
        ]
    },
    {
        id: 65,
        rule: "Cleft Sentences: Wh-cleft",
        explanation: "Used to emphasize a particular part of the sentence.",
        example: "What I need is a good rest.",
        options: [
            { text: "What I need is a good rest.", correct: true },
            { text: "That I need is a good rest.", correct: false },
            { text: "What I need a good rest.", correct: false },
            { text: "I need is a good rest.", correct: false }
        ]
    },
    {
        id: 66,
        rule: "Nominal Relative Clauses",
        explanation: "A type of clause that functions as a noun.",
        example: "What he said was interesting.",
        options: [
            { text: "What he said was interesting.", correct: true },
            { text: "That he said was interesting.", correct: false },
            { text: "What he said interesting.", correct: false },
            { text: "What he said is interesting.", correct: false }
        ]
    },
    {
        id: 67,
        rule: "Fronting",
        explanation: "The placement of a sentence element at the beginning to emphasize it.",
        example: "Beautiful are the flowers in spring.",
        options: [
            { text: "Beautiful are the flowers in spring.", correct: true },
            { text: "The flowers in spring are beautiful.", correct: false },
            { text: "Are the flowers beautiful in spring.", correct: false },
            { text: "In spring the flowers are beautiful.", correct: false }
        ]
    },
    // Additional Determiners and Pronouns
    {
        id: 68,
        rule: "Determiners: both, either, neither",
        explanation: "Used to refer to both members of a pair or one of the two.",
        example: "Neither option is suitable.",
        options: [
            { text: "Neither option is suitable.", correct: true },
            { text: "Neither options are suitable.", correct: false },
            { text: "Either option is suitable.", correct: false },
            { text: "Both option is suitable.", correct: false }
        ]
    },
    {
        id: 69,
        rule: "Determiners: all, both",
        explanation: "Used to refer to the whole group or both members of a pair.",
        example: "All students are present.",
        options: [
            { text: "All students are present.", correct: true },
            { text: "All student is present.", correct: false },
            { text: "Both student are present.", correct: false },
            { text: "Both students is present.", correct: false }
        ]
    },
    {
        id: 70,
        rule: "Determiners: few, little",
        explanation: "Used to refer to a small quantity or number.",
        example: "Few people attended the meeting.",
        options: [
            { text: "Few people attended the meeting.", correct: true },
            { text: "Little people attended the meeting.", correct: false },
            { text: "Few person attended the meeting.", correct: false },
            { text: "Little persons attended the meeting.", correct: false }
        ]
    },
    {
        id: 71,
        rule: "Indefinite Pronouns",
        explanation: "Used to refer to people or things without specifying who or what they are.",
        example: "Someone is at the door.",
        options: [
            { text: "Someone is at the door.", correct: true },
            { text: "Someone are at the door.", correct: false },
            { text: "Anyone is at the door.", correct: false },
            { text: "Anyone are at the door.", correct: false }
        ]
    },
    {
        id: 72,
        rule: "Interrogative Pronouns",
        explanation: "Used to ask questions.",
        example: "Who is coming to the party?",
        options: [
            { text: "Who is coming to the party?", correct: true },
            { text: "Who are coming to the party?", correct: false },
            { text: "Whom is coming to the party?", correct: false },
            { text: "Whom are coming to the party?", correct: false }
        ]
    },
    {
        id: 73,
        rule: "Demonstrative Pronouns",
        explanation: "Used to point to specific things.",
        example: "This is my book.",
        options: [
            { text: "This is my book.", correct: true },
            { text: "This my book.", correct: false },
            { text: "These is my book.", correct: false },
            { text: "That is my book.", correct: false }
        ]
    },
    {
        id: 74,
        rule: "Possessive Adjectives",
        explanation: "Used to show ownership.",
        example: "This is my car.",
        options: [
            { text: "This is my car.", correct: true },
            { text: "This is mine car.", correct: false },
            { text: "This is I car.", correct: false },
            { text: "This is me car.", correct: false }
        ]
    },
    // Miscellaneous
    {
        id: 75,
        rule: "Present Perfect",
        explanation: "Used to show that an action started in the past and has continued up until now.",
        example: "I have lived here for five years.",
        options: [
            { text: "I have lived here for five years.", correct: true },
            { text: "I lived here for five years.", correct: false },
            { text: "I have been living here for five years.", correct: false },
            { text: "I has lived here for five years.", correct: false }
        ]
    },
    {
        id: 76,
        rule: "Past Perfect Continuous",
        explanation: "Used to show that an action started in the past and continued until another time in the past.",
        example: "I had been working here for five years when I left.",
        options: [
            { text: "I had been working here for five years when I left.", correct: true },
            { text: "I have been working here for five years when I left.", correct: false },
            { text: "I had been work here for five years when I left.", correct: false },
            { text: "I has been working here for five years when I left.", correct: false }
        ]
    },
    {
        id: 77,
        rule: "Future Continuous",
        explanation: "Used to indicate that an action will be happening at a specific time in the future.",
        example: "I will be traveling to Paris this time next week.",
        options: [
            { text: "I will be traveling to Paris this time next week.", correct: true },
            { text: "I will travel to Paris this time next week.", correct: false },
            { text: "I am traveling to Paris this time next week.", correct: false },
            { text: "I will be travel to Paris this time next week.", correct: false }
        ]
    },
    {
        id: 78,
        rule: "Future Perfect",
        explanation: "Used to show that an action will have been completed by a certain future time.",
        example: "I will have finished my project by next Monday.",
        options: [
            { text: "I will have finished my project by next Monday.", correct: true },
            { text: "I will finish my project by next Monday.", correct: false },
            { text: "I will have finish my project by next Monday.", correct: false },
            { text: "I will has finished my project by next Monday.", correct: false }
        ]
    },
    {
        id: 79,
        rule: "Future Perfect Continuous",
        explanation: "Used to show that an action will have been continuing up until a certain future time.",
        example: "By next year, I will have been working here for ten years.",
        options: [
            { text: "By next year, I will have been working here for ten years.", correct: true },
            { text: "By next year, I will be working here for ten years.", correct: false },
            { text: "By next year, I will have worked here for ten years.", correct: false },
            { text: "By next year, I will have work here for ten years.", correct: false }
        ]
    },
    {
        id: 80,
        rule: "Modal Verbs: Must",
        explanation: "Used to express necessity or obligation.",
        example: "You must finish your homework.",
        options: [
            { text: "You must finish your homework.", correct: true },
            { text: "You has to finish your homework.", correct: false },
            { text: "You have to finish your homework.", correct: false },
            { text: "You should finish your homework.", correct: false }
        ]
    },
    {
        id: 81,
        rule: "Modal Verbs: Shall",
        explanation: "Used to indicate future actions or intentions.",
        example: "I shall return.",
        options: [
            { text: "I shall return.", correct: true },
            { text: "I will return.", correct: false },
            { text: "I might return.", correct: false },
            { text: "I am returning.", correct: false }
        ]
    },
    {
        id: 82,
        rule: "Modal Verbs: Can",
        explanation: "Used to express ability or possibility.",
        example: "She can speak three languages.",
        options: [
            { text: "She can speak three languages.", correct: true },
            { text: "She could speak three languages.", correct: false },
            { text: "She may speak three languages.", correct: false },
            { text: "She will speak three languages.", correct: false }
        ]
    },
    {
        id: 83,
        rule: "Modal Verbs: May",
        explanation: "Used to express possibility or permission.",
        example: "You may leave now.",
        options: [
            { text: "You may leave now.", correct: true },
            { text: "You can leave now.", correct: false },
            { text: "You could leave now.", correct: false },
            { text: "You might leave now.", correct: false }
        ]
    },
    {
        id: 84,
        rule: "Modal Verbs: Might",
        explanation: "Used to express possibility or probability.",
        example: "It might rain tomorrow.",
        options: [
            { text: "It might rain tomorrow.", correct: true },
            { text: "It may rain tomorrow.", correct: false },
            { text: "It could rain tomorrow.", correct: false },
            { text: "It can rain tomorrow.", correct: false }
        ]
    },
    {
        id: 85,
        rule: "Modal Verbs: Should",
        explanation: "Used to give advice or suggestions.",
        example: "You should eat more vegetables.",
        options: [
            { text: "You should eat more vegetables.", correct: true },
            { text: "You must eat more vegetables.", correct: false },
            { text: "You shall eat more vegetables.", correct: false },
            { text: "You might eat more vegetables.", correct: false }
        ]
    },
    {
        id: 86,
        rule: "Modal Verbs: Will",
        explanation: "Used to express future actions or intentions.",
        example: "I will call you tomorrow.",
        options: [
            { text: "I will call you tomorrow.", correct: true },
            { text: "I shall call you tomorrow.", correct: false },
            { text: "I might call you tomorrow.", correct: false },
            { text: "I am calling you tomorrow.", correct: false }
        ]
    },
    {
        id: 87,
        rule: "Modal Verbs: Would",
        explanation: "Used to express future actions in the past or polite requests.",
        example: "I would like a cup of coffee.",
        options: [
            { text: "I would like a cup of coffee.", correct: true },
            { text: "I will like a cup of coffee.", correct: false },
            { text: "I should like a cup of coffee.", correct: false },
            { text: "I shall like a cup of coffee.", correct: false }
        ]
    },
    {
        id: 88,
        rule: "Gerunds",
        explanation: "Gerunds are verbs that function as nouns by adding -ing.",
        example: "Swimming is fun.",
        options: [
            { text: "Swimming is fun.", correct: true },
            { text: "To swim is fun.", correct: false },
            { text: "Swim is fun.", correct: false },
            { text: "Swimmming is fun.", correct: false }
        ]
    },
    {
        id: 89,
        rule: "Infinitives",
        explanation: "Infinitives are the base form of the verb, usually preceded by 'to'.",
        example: "I want to learn.",
        options: [
            { text: "I want to learn.", correct: true },
            { text: "I want learn.", correct: false },
            { text: "I wants to learn.", correct: false },
            { text: "I wanting to learn.", correct: false }
        ]
    },
    {
        id: 90,
        rule: "Phrasal verbs",
        explanation: "Phrasal verbs are verbs combined with prepositions or adverbs that create new meanings.",
        example: "She looked up the word.",
        options: [
            { text: "She looked up the word.", correct: true },
            { text: "She looked the word up.", correct: false },
            { text: "She look up the word.", correct: false },
            { text: "She looks up the word.", correct: false }
        ]
    },
    // More Sentence Types and Structures
    {
        id: 91,
        rule: "Direct and indirect speech",
        explanation: "Direct speech quotes the exact words spoken; indirect speech paraphrases what was said.",
        example: "He said, 'I am tired.' / He said that he was tired.",
        options: [
            { text: "He said that he was tired.", correct: true },
            { text: "He said, 'I am tired.'", correct: false },
            { text: "He says, 'I am tired.'", correct: false },
            { text: "He said, 'He is tired.'", correct: false }
        ]
    },
    {
        id: 92,
        rule: "Conditionals: Zero conditional",
        explanation: "The zero conditional is used for general truths or laws of nature.",
        example: "If you heat water, it boils.",
        options: [
            { text: "If you heat water, it boils.", correct: true },
            { text: "If you heat water, it boil.", correct: false },
            { text: "If you heated water, it boils.", correct: false },
            { text: "If you heat water, it boiled.", correct: false }
        ]
    },
    {
        id: 93,
        rule: "Conditionals: First conditional",
        explanation: "The first conditional is used for real or possible situations in the future.",
        example: "If it rains, we will stay inside.",
        options: [
            { text: "If it rains, we will stay inside.", correct: true },
            { text: "If it rains, we stay inside.", correct: false },
            { text: "If it rained, we will stay inside.", correct: false },
            { text: "If it rains, we stayed inside.", correct: false }
        ]
    },
    {
        id: 94,
        rule: "Conditionals: Second conditional",
        explanation: "The second conditional is used for hypothetical or unlikely situations in the present or future.",
        example: "If I were rich, I would travel the world.",
        options: [
            { text: "If I were rich, I would travel the world.", correct: true },
            { text: "If I am rich, I would travel the world.", correct: false },
            { text: "If I was rich, I would travel the world.", correct: false },
            { text: "If I were rich, I will travel the world.", correct: false }
        ]
    },
    {
        id: 95,
        rule: "Conditionals: Third conditional",
        explanation: "The third conditional is used for hypothetical situations in the past.",
        example: "If I had known, I would have told you.",
        options: [
            { text: "If I had known, I would have told you.", correct: true },
            { text: "If I had known, I will tell you.", correct: false },
            { text: "If I knew, I would have told you.", correct: false },
            { text: "If I had knew, I would have told you.", correct: false }
        ]
    },
    {
        id: 96,
        rule: "Relative clauses: defining",
        explanation: "Defining relative clauses give essential information about the noun.",
        example: "The book that you gave me is interesting.",
        options: [
            { text: "The book that you gave me is interesting.", correct: true },
            { text: "The book which you gave me is interesting.", correct: false },
            { text: "The book who you gave me is interesting.", correct: false },
            { text: "The book whom you gave me is interesting.", correct: false }
        ]
    },
    {
        id: 97,
        rule: "Relative clauses: non-defining",
        explanation: "Non-defining relative clauses give extra information about the noun.",
        example: "My brother, who lives in France, is visiting us.",
        options: [
            { text: "My brother, who lives in France, is visiting us.", correct: true },
            { text: "My brother who lives in France is visiting us.", correct: false },
            { text: "My brother, which lives in France, is visiting us.", correct: false },
            { text: "My brother, whom lives in France, is visiting us.", correct: false }
        ]
    },
    {
        id: 98,
        rule: "Modal verbs: can, could",
        explanation: "Modal verbs like 'can' and 'could' express ability, possibility, permission, or requests.",
        example: "Can you help me?",
        options: [
            { text: "Can you help me?", correct: true },
            { text: "Can you helping me?", correct: false },
            { text: "Can you helped me?", correct: false },
            { text: "Can you helps me?", correct: false }
        ]
    },
    {
        id: 99,
        rule: "Modal verbs: may, might",
        explanation: "Modal verbs like 'may' and 'might' express possibility or permission.",
        example: "You may leave now.",
        options: [
            { text: "You may leave now.", correct: true },
            { text: "You might leave now.", correct: false },
            { text: "You may leaving now.", correct: false },
            { text: "You may leaves now.", correct: false }
        ]
    },
    {
        id: 100,
        rule: "Modal verbs: shall, should",
        explanation: "Modal verbs like 'shall' and 'should' express suggestions, obligations, or future actions.",
        example: "You should eat more vegetables.",
        options: [
            { text: "You should eat more vegetables.", correct: true },
            { text: "You shall eat more vegetables.", correct: false },
            { text: "You should eats more vegetables.", correct: false },
            { text: "You should eating more vegetables.", correct: false }
        ]
    },
    {
        id: 101,
        rule: "Modal verbs: will, would",
        explanation: "Modal verbs like 'will' and 'would' express future actions, intentions, or polite requests.",
        example: "I will call you later.",
        options: [
            { text: "I will call you later.", correct: true },
            { text: "I would call you later.", correct: false },
            { text: "I will calling you later.", correct: false },
            { text: "I will called you later.", correct: false }
        ]
    },
    {
        id: 102,
        rule: "Imperatives",
        explanation: "Imperative sentences give commands or make requests.",
        example: "Close the door.",
        options: [
            { text: "Close the door.", correct: true },
            { text: "Close you the door.", correct: false },
            { text: "You close the door.", correct: false },
            { text: "To close the door.", correct: false }
        ]
    },
    {
        id: 103,
        rule: "Ellipsis",
        explanation: "Used to omit parts of a sentence when they are not necessary.",
        example: "She can play the piano, and he can too.",
        options: [
            { text: "She can play the piano, and he can too.", correct: true },
            { text: "She can play the piano, and he too.", correct: false },
            { text: "She can play the piano, he can too.", correct: false },
            { text: "She play the piano, and he can too.", correct: false }
        ]
    },
    {
        id: 104,
        rule: "Nominalization",
        explanation: "The process of converting verbs and adjectives into nouns.",
        example: "The analysis was detailed.",
        options: [
            { text: "The analysis was detailed.", correct: true },
            { text: "The analyzing was detailed.", correct: false },
            { text: "The analyzed was detailed.", correct: false },
            { text: "The analyze was detailed.", correct: false }
        ]
    },
    {
        id: 105,
        rule: "Inversion",
        explanation: "Used to make questions, conditional sentences, and for emphasis.",
        example: "Never have I seen such beauty.",
        options: [
            { text: "Never have I seen such beauty.", correct: true },
            { text: "I never have seen such beauty.", correct: false },
            { text: "Never I have seen such beauty.", correct: false },
            { text: "I have never seen such beauty.", correct: false }
        ]
    },
    {
        id: 106,
        rule: "Cleft Sentences: It-cleft",
        explanation: "Used to emphasize a particular part of the sentence.",
        example: "It was John who broke the window.",
        options: [
            { text: "It was John who broke the window.", correct: true },
            { text: "It was John which broke the window.", correct: false },
            { text: "It is John who broke the window.", correct: false },
            { text: "John who broke the window.", correct: false }
        ]
    },
    {
        id: 107,
        rule: "Cleft Sentences: Wh-cleft",
        explanation: "Used to emphasize a particular part of the sentence.",
        example: "What I need is a good rest.",
        options: [
            { text: "What I need is a good rest.", correct: true },
            { text: "That I need is a good rest.", correct: false },
            { text: "What I need a good rest.", correct: false },
            { text: "I need is a good rest.", correct: false }
        ]
    },
    {
        id: 108,
        rule: "Nominal Relative Clauses",
        explanation: "A type of clause that functions as a noun.",
        example: "What he said was interesting.",
        options: [
            { text: "What he said was interesting.", correct: true },
            { text: "That he said was interesting.", correct: false },
            { text: "What he said interesting.", correct: false },
            { text: "What he said is interesting.", correct: false }
        ]
    },
    {
        id: 109,
        rule: "Fronting",
        explanation: "The placement of a sentence element at the beginning to emphasize it.",
        example: "Beautiful are the flowers in spring.",
        options: [
            { text: "Beautiful are the flowers in spring.", correct: true },
            { text: "The flowers in spring are beautiful.", correct: false },
            { text: "Are the flowers beautiful in spring.", correct: false },
            { text: "In spring the flowers are beautiful.", correct: false }
        ]
    },
    {
        id: 110,
        rule: "Determiners: both, either, neither",
        explanation: "Used to refer to both members of a pair or one of the two.",
        example: "Neither option is suitable.",
        options: [
            { text: "Neither option is suitable.", correct: true },
            { text: "Neither options are suitable.", correct: false },
            { text: "Either option is suitable.", correct: false },
            { text: "Both option is suitable.", correct: false }
        ]
    },
    {
        id: 111,
        rule: "Determiners: all, both",
        explanation: "Used to refer to the whole group or both members of a pair.",
        example: "All students are present.",
        options: [
            { text: "All students are present.", correct: true },
            { text: "All student is present.", correct: false },
            { text: "Both student are present.", correct: false },
            { text: "Both students is present.", correct: false }
        ]
    },
    {
        id: 112,
        rule: "Determiners: few, little",
        explanation: "Used to refer to a small quantity or number.",
        example: "Few people attended the meeting.",
        options: [
            { text: "Few people attended the meeting.", correct: true },
            { text: "Little people attended the meeting.", correct: false },
            { text: "Few person attended the meeting.", correct: false },
            { text: "Little persons attended the meeting.", correct: false }
        ]
    },
    {
        id: 113,
        rule: "Indefinite Pronouns",
        explanation: "Used to refer to people or things without specifying who or what they are.",
        example: "Someone is at the door.",
        options: [
            { text: "Someone is at the door.", correct: true },
            { text: "Someone are at the door.", correct: false },
            { text: "Anyone is at the door.", correct: false },
            { text: "Anyone are at the door.", correct: false }
        ]
    },
    {
        id: 114,
        rule: "Interrogative Pronouns",
        explanation: "Used to ask questions.",
        example: "Who is coming to the party?",
        options: [
            { text: "Who is coming to the party?", correct: true },
            { text: "Who are coming to the party?", correct: false },
            { text: "Whom is coming to the party?", correct: false },
            { text: "Whom are coming to the party?", correct: false }
        ]
    },
    {
        id: 115,
        rule: "Demonstrative Pronouns",
        explanation: "Used to point to specific things.",
        example: "This is my book.",
        options: [
            { text: "This is my book.", correct: true },
            { text: "This my book.", correct: false },
            { text: "These is my book.", correct: false },
            { text: "That is my book.", correct: false }
        ]
    },
    {
        id: 116,
        rule: "Possessive Adjectives",
        explanation: "Used to show ownership.",
        example: "This is my car.",
        options: [
            { text: "This is my car.", correct: true },
            { text: "This is mine car.", correct: false },
            { text: "This is I car.", correct: false },
            { text: "This is me car.", correct: false }
        ]
    },
    {
        id: 117,
        rule: "Present Perfect",
        explanation: "Used to show that an action started in the past and has continued up until now.",
        example: "I have lived here for five years.",
        options: [
            { text: "I have lived here for five years.", correct: true },
            { text: "I lived here for five years.", correct: false },
            { text: "I have been living here for five years.", correct: false },
            { text: "I has lived here for five years.", correct: false }
        ]
    },
    {
        id: 118,
        rule: "Past Perfect Continuous",
        explanation: "Used to show that an action started in the past and continued until another time in the past.",
        example: "I had been working here for five years when I left.",
        options: [
            { text: "I had been working here for five years when I left.", correct: true },
            { text: "I have been working here for five years when I left.", correct: false },
            { text: "I had been work here for five years when I left.", correct: false },
            { text: "I has been working here for five years when I left.", correct: false }
        ]
    },
    {
        id: 119,
        rule: "Future Continuous",
        explanation: "Used to indicate that an action will be happening at a specific time in the future.",
        example: "I will be traveling to Paris this time next week.",
        options: [
            { text: "I will be traveling to Paris this time next week.", correct: true },
            { text: "I will travel to Paris this time next week.", correct: false },
            { text: "I am traveling to Paris this time next week.", correct: false },
            { text: "I will be travel to Paris this time next week.", correct: false }
        ]
    },
    {
        id: 120,
        rule: "Future Perfect",
        explanation: "Used to show that an action will have been completed by a certain future time.",
        example: "I will have finished my project by next Monday.",
        options: [
            { text: "I will have finished my project by next Monday.", correct: true },
            { text: "I will finish my project by next Monday.", correct: false },
            { text: "I will have finish my project by next Monday.", correct: false },
            { text: "I will has finished my project by next Monday.", correct: false }
        ]
    },
    {
        id: 121,
        rule: "Future Perfect Continuous",
        explanation: "Used to show that an action will have been continuing up until a certain future time.",
        example: "By next year, I will have been working here for ten years.",
        options: [
            { text: "By next year, I will have been working here for ten years.", correct: true },
            { text: "By next year, I will be working here for ten years.", correct: false },
            { text: "By next year, I will have worked here for ten years.", correct: false },
            { text: "By next year, I will have work here for ten years.", correct: false }
        ]
    },
    {
        id: 122,
        rule: "Modal Verbs: Must",
        explanation: "Used to express necessity or obligation.",
        example: "You must finish your homework.",
        options: [
            { text: "You must finish your homework.", correct: true },
            { text: "You has to finish your homework.", correct: false },
            { text: "You have to finish your homework.", correct: false },
            { text: "You should finish your homework.", correct: false }
        ]
    },
    {
        id: 123,
        rule: "Modal Verbs: Shall",
        explanation: "Used to indicate future actions or intentions.",
        example: "I shall return.",
        options: [
            { text: "I shall return.", correct: true },
            { text: "I will return.", correct: false },
            { text: "I might return.", correct: false },
            { text: "I am returning.", correct: false }
        ]
    },
    {
        id: 124,
        rule: "Modal Verbs: Can",
        explanation: "Used to express ability or possibility.",
        example: "She can speak three languages.",
        options: [
            { text: "She can speak three languages.", correct: true },
            { text: "She could speak three languages.", correct: false },
            { text: "She may speak three languages.", correct: false },
            { text: "She will speak three languages.", correct: false }
        ]
    },
    {
        id: 125,
        rule: "Modal Verbs: May",
        explanation: "Used to express possibility or permission.",
        example: "You may leave now.",
        options: [
            { text: "You may leave now.", correct: true },
            { text: "You can leave now.", correct: false },
            { text: "You could leave now.", correct: false },
            { text: "You might leave now.", correct: false }
        ]
    },
    {
        id: 126,
        rule: "Modal Verbs: Might",
        explanation: "Used to express possibility or probability.",
        example: "It might rain tomorrow.",
        options: [
            { text: "It might rain tomorrow.", correct: true },
            { text: "It may rain tomorrow.", correct: false },
            { text: "It could rain tomorrow.", correct: false },
            { text: "It can rain tomorrow.", correct: false }
        ]
    },
    {
        id: 127,
        rule: "Modal Verbs: Should",
        explanation: "Used to give advice or suggestions.",
        example: "You should eat more vegetables.",
        options: [
            { text: "You should eat more vegetables.", correct: true },
            { text: "You must eat more vegetables.", correct: false },
            { text: "You shall eat more vegetables.", correct: false },
            { text: "You might eat more vegetables.", correct: false }
        ]
    },
    {
        id: 128,
        rule: "Modal Verbs: Will",
        explanation: "Used to express future actions or intentions.",
        example: "I will call you tomorrow.",
        options: [
            { text: "I will call you tomorrow.", correct: true },
            { text: "I shall call you tomorrow.", correct: false },
            { text: "I might call you tomorrow.", correct: false },
            { text: "I am calling you tomorrow.", correct: false }
        ]
    },
    {
        id: 129,
        rule: "Modal Verbs: Would",
        explanation: "Used to express future actions in the past or polite requests.",
        example: "I would like a cup of coffee.",
        options: [
            { text: "I would like a cup of coffee.", correct: true },
            { text: "I will like a cup of coffee.", correct: false },
            { text: "I should like a cup of coffee.", correct: false },
            { text: "I shall like a cup of coffee.", correct: false }
        ]
    },
    {
        id: 130,
        rule: "Gerunds",
        explanation: "Gerunds are verbs that function as nouns by adding -ing.",
        example: "Swimming is fun.",
        options: [
            { text: "Swimming is fun.", correct: true },
            { text: "To swim is fun.", correct: false },
            { text: "Swim is fun.", correct: false },
            { text: "Swimmming is fun.", correct: false }
        ]
    },
    {
        id: 131,
        rule: "Infinitives",
        explanation: "Infinitives are the base form of the verb, usually preceded by 'to'.",
        example: "I want to learn.",
        options: [
            { text: "I want to learn.", correct: true },
            { text: "I want learn.", correct: false },
            { text: "I wants to learn.", correct: false },
            { text: "I wanting to learn.", correct: false }
        ]
    },
    {
        id: 132,
        rule: "Phrasal verbs",
        explanation: "Phrasal verbs are verbs combined with prepositions or adverbs that create new meanings.",
        example: "She looked up the word.",
        options: [
            { text: "She looked up the word.", correct: true },
            { text: "She looked the word up.", correct: false },
            { text: "She look up the word.", correct: false },
            { text: "She looks up the word.", correct: false }
        ]
    },
    {
        id: 133,
        rule: "Conjunctions: coordinating conjunctions",
        explanation: "Coordinating conjunctions connect words, phrases, or clauses of equal importance.",
        example: "I like tea and coffee.",
        options: [
            { text: "I like tea and coffee.", correct: true },
            { text: "I like tea but coffee.", correct: false },
            { text: "I like tea or coffee.", correct: false },
            { text: "I like tea nor coffee.", correct: false }
        ]
    },
    {
        id: 134,
        rule: "Conjunctions: subordinating conjunctions",
        explanation: "Subordinating conjunctions connect a dependent clause to an independent clause.",
        example: "I will go if it stops raining.",
        options: [
            { text: "I will go if it stops raining.", correct: true },
            { text: "I will go because it stops raining.", correct: false },
            { text: "I will go although it stops raining.", correct: false },
            { text: "I will go since it stops raining.", correct: false }
        ]
    },
    {
        id: 135,
        rule: "Conjunctions: correlative conjunctions",
        explanation: "Correlative conjunctions work in pairs to connect words, phrases, or clauses.",
        example: "Either you or I will go.",
        options: [
            { text: "Either you or I will go.", correct: true },
            { text: "Neither you nor I will go.", correct: false },
            { text: "Both you and I will go.", correct: false },
            { text: "Not only you but also I will go.", correct: false }
        ]
    },
    {
        id: 136,
        rule: "Simple sentences",
        explanation: "A simple sentence consists of a single independent clause.",
        example: "She reads.",
        options: [
            { text: "She reads.", correct: true },
            { text: "She reading.", correct: false },
            { text: "She reads and writes.", correct: false },
            { text: "Reading she is.", correct: false }
        ]
    },
    {
        id: 137,
        rule: "Compound sentences",
        explanation: "A compound sentence consists of two or more independent clauses joined by a coordinating conjunction or a semicolon.",
        example: "She reads, and he writes.",
        options: [
            { text: "She reads, and he writes.", correct: true },
            { text: "She reads and he writes.", correct: false },
            { text: "She reads, but he writes.", correct: false },
            { text: "She reads; he writes.", correct: false }
        ]
    },
    {
        id: 138,
        rule: "Complex sentences",
        explanation: "A complex sentence consists of one independent clause and at least one dependent clause.",
        example: "Although it was raining, we went out.",
        options: [
            { text: "Although it was raining, we went out.", correct: true },
            { text: "Although it was raining, but we went out.", correct: false },
            { text: "Although it was raining; we went out.", correct: false },
            { text: "Although it was raining and we went out.", correct: false }
        ]
    },
    {
        id: 139,
        rule: "Compound-complex sentences",
        explanation: "A compound-complex sentence consists of two or more independent clauses and at least one dependent clause.",
        example: "She reads, and he writes when he has time.",
        options: [
            { text: "She reads, and he writes when he has time.", correct: true },
            { text: "She reads and he writes when he has time.", correct: false },
            { text: "She reads; and he writes when he has time.", correct: false },
            { text: "She reads but he writes when he has time.", correct: false }
        ]
    },
    {
        id: 140,
        rule: "Active voice",
        explanation: "In active voice, the subject performs the action of the verb.",
        example: "The cat chased the mouse.",
        options: [
            { text: "The cat chased the mouse.", correct: true },
            { text: "The mouse was chased by the cat.", correct: false },
            { text: "The cat was chased by the mouse.", correct: false },
            { text: "The mouse chased the cat.", correct: false }
        ]
    },
    {
        id: 141,
        rule: "Passive voice",
        explanation: "In passive voice, the subject receives the action of the verb.",
        example: "The mouse was chased by the cat.",
        options: [
            { text: "The mouse was chased by the cat.", correct: true },
            { text: "The cat chased the mouse.", correct: false },
            { text: "The cat was chased by the mouse.", correct: false },
            { text: "The mouse chased the cat.", correct: false }
        ]
    },
    {
        id: 142,
        rule: "Direct and indirect speech",
        explanation: "Direct speech quotes the exact words spoken; indirect speech paraphrases what was said.",
        example: "He said, 'I am tired.' / He said that he was tired.",
        options: [
            { text: "He said that he was tired.", correct: true },
            { text: "He said, 'I am tired.'", correct: false },
            { text: "He says, 'I am tired.'", correct: false },
            { text: "He said, 'He is tired.'", correct: false }
        ]
    },
    {
        id: 143,
        rule: "Conditionals: Zero conditional",
        explanation: "The zero conditional is used for general truths or laws of nature.",
        example: "If you heat water, it boils.",
        options: [
            { text: "If you heat water, it boils.", correct: true },
            { text: "If you heat water, it boil.", correct: false },
            { text: "If you heated water, it boils.", correct: false },
            { text: "If you heat water, it boiled.", correct: false }
        ]
    },
    {
        id: 144,
        rule: "Conditionals: First conditional",
        explanation: "The first conditional is used for real or possible situations in the future.",
        example: "If it rains, we will stay inside.",
        options: [
            { text: "If it rains, we will stay inside.", correct: true },
            { text: "If it rains, we stay inside.", correct: false },
            { text: "If it rained, we will stay inside.", correct: false },
            { text: "If it rains, we stayed inside.", correct: false }
        ]
    },
    {
        id: 145,
        rule: "Conditionals: Second conditional",
        explanation: "The second conditional is used for hypothetical or unlikely situations in the present or future.",
        example: "If I were rich, I would travel the world.",
        options: [
            { text: "If I were rich, I would travel the world.", correct: true },
            { text: "If I am rich, I would travel the world.", correct: false },
            { text: "If I was rich, I would travel the world.", correct: false },
            { text: "If I were rich, I will travel the world.", correct: false }
        ]
    },
    {
        id: 146,
        rule: "Conditionals: Third conditional",
        explanation: "The third conditional is used for hypothetical situations in the past.",
        example: "If I had known, I would have told you.",
        options: [
            { text: "If I had known, I would have told you.", correct: true },
            { text: "If I had known, I will tell you.", correct: false },
            { text: "If I knew, I would have told you.", correct: false },
            { text: "If I had knew, I would have told you.", correct: false }
        ]
    },
    {
        id: 147,
        rule: "Relative clauses: defining",
        explanation: "Defining relative clauses give essential information about the noun.",
        example: "The book that you gave me is interesting.",
        options: [
            { text: "The book that you gave me is interesting.", correct: true },
            { text: "The book which you gave me is interesting.", correct: false },
            { text: "The book who you gave me is interesting.", correct: false },
            { text: "The book whom you gave me is interesting.", correct: false }
        ]
    },
    {
        id: 148,
        rule: "Relative clauses: non-defining",
        explanation: "Non-defining relative clauses give extra information about the noun.",
        example: "My brother, who lives in France, is visiting us.",
        options: [
            { text: "My brother, who lives in France, is visiting us.", correct: true },
            { text: "My brother who lives in France is visiting us.", correct: false },
            { text: "My brother, which lives in France, is visiting us.", correct: false },
            { text: "My brother, whom lives in France, is visiting us.", correct: false }
        ]
    },
    {
        id: 149,
        rule: "Modal verbs: can, could",
        explanation: "Modal verbs like 'can' and 'could' express ability, possibility, permission, or requests.",
        example: "Can you help me?",
        options: [
            { text: "Can you help me?", correct: true },
            { text: "Can you helping me?", correct: false },
            { text: "Can you helped me?", correct: false },
            { text: "Can you helps me?", correct: false }
        ]
    },
    {
        id: 150,
        rule: "Modal verbs: may, might",
        explanation: "Modal verbs like 'may' and 'might' express possibility or permission.",
        example: "You may leave now.",
        options: [
            { text: "You may leave now.", correct: true },
            { text: "You might leave now.", correct: false },
            { text: "You may leaving now.", correct: false },
            { text: "You may leaves now.", correct: false }
        ]
    }
];

export default grammarRules;
