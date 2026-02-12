
import { Session } from './types';

export const SESSIONS: Session[] = [
  {
    id: 'session-1',
    title: 'Phần I: Only & Even',
    description: 'Luyện tập vị trí đặt câu (trọng tâm chủ ngữ, trang trọng vs thân mật, thông báo chính thức).',
    questions: [
      // Bài 1: Rewriting
      { id: 1, type: 'text-input', prompt: 'He plays golf in the rain. (Even - Informal focus)', correctAnswer: 'He even plays golf in the rain.' },
      { id: 2, type: 'text-input', prompt: 'He plays golf in the rain. (Even - Formal focus on the phrase "in the rain")', correctAnswer: 'He plays golf even in the rain.' },
      { id: 3, type: 'text-input', prompt: 'The beginners knew the answer. (Even - Subject focus)', correctAnswer: 'Even the beginners knew the answer.' },
      { id: 4, type: 'text-input', prompt: 'I asked for a glass of water. (Only - Informal focus)', correctAnswer: 'I only asked for a glass of water.' },
      { id: 5, type: 'text-input', prompt: 'Employees are allowed in this area. (Only - Official notice style)', correctAnswer: 'Employees only are allowed in this area.' },
      { id: 6, type: 'text-input', prompt: 'She eats organic food. (Only - Focus on "organic food" - Formal)', correctAnswer: 'She eats only organic food.' },
      { id: 7, type: 'text-input', prompt: 'My brother remembered my birthday. (Even - Subject focus)', correctAnswer: 'Even my brother remembered my birthday.' },
      { id: 8, type: 'text-input', prompt: 'We have time for a quick coffee. (Only - Informal)', correctAnswer: 'We only have time for a quick coffee.' },
      { id: 9, type: 'text-input', prompt: 'Tickets are valid for this day. (Only - Official notice style)', correctAnswer: 'Tickets valid for this day only.' },
      { id: 10, type: 'text-input', prompt: 'He didn\'t say goodbye. (Even - Mid-position)', correctAnswer: 'He didn\'t even say goodbye.' },
      // Bài 2: MCQ
      { id: 11, type: 'multiple-choice', prompt: '(Formal) He lent money _____ to his closest friends.', options: ['even', 'only'], correctAnswer: 'only' },
      { id: 12, type: 'multiple-choice', prompt: '(Informal) I _____ asked for five minutes of your time.', options: ['only', 'even'], correctAnswer: 'only' },
      { id: 13, type: 'multiple-choice', prompt: '(Subject Focus) _____ the teacher was confused by the question.', options: ['Even', 'Just'], correctAnswer: 'Even' },
      { id: 14, type: 'multiple-choice', prompt: '(Official Notice) Parking for residents _____.', options: ['only', 'merely'], correctAnswer: 'only' },
      { id: 15, type: 'multiple-choice', prompt: '(Emphasis) She runs 10km _____ on Sundays.', options: ['even', 'only'], correctAnswer: 'even' },
      { id: 16, type: 'multiple-choice', prompt: 'My dog is so smart, he _____ watches TV.', options: ['even', 'only'], correctAnswer: 'even' },
      { id: 17, type: 'multiple-choice', prompt: '(Official Notice) Reduced speed _____ ahead.', options: ['only', 'merely'], correctAnswer: 'only' },
      { id: 18, type: 'multiple-choice', prompt: '(Subject Focus) _____ a child could understand this simple puzzle.', options: ['Only', 'Even'], correctAnswer: 'Even' },
      { id: 19, type: 'multiple-choice', prompt: 'I _____ wanted to help, but I made it worse.', options: ['only', 'even'], correctAnswer: 'only' },
      { id: 20, type: 'multiple-choice', prompt: '(Formal) The offer is available _____ to new customers.', options: ['only', 'just'], correctAnswer: 'only' },
    ]
  },
  {
    id: 'session-2',
    title: 'Phần II: Truth & Viewpoint Adverbs',
    description: 'Phân biệt trạng từ quan điểm (Viewpoint) và sự thật (Truth), đặc biệt chú ý vị trí trong câu phủ định.',
    questions: [
      // Bài 3: Viewpoint
      { id: 21, type: 'text-input', prompt: 'From an architectural point of view, the church is magnificent.', correctAnswer: 'Architecturally, the church is magnificent.' },
      { id: 22, type: 'text-input', prompt: 'From a political point of view, this decision is risky.', correctAnswer: 'Politically, this decision is risky.' },
      { id: 23, type: 'text-input', prompt: 'Looking at it scientifically, there is no proof.', correctAnswer: 'Scientifically, there is no proof.' },
      { id: 24, type: 'text-input', prompt: 'Regarding the geography, the area is difficult to access.', correctAnswer: 'Geographically, the area is difficult to access.' },
      { id: 25, type: 'text-input', prompt: 'In terms of logic, your argument makes no sense.', correctAnswer: 'Logically, your argument makes no sense.' },
      { id: 26, type: 'text-input', prompt: 'From a technical aspect, the device works perfectly.', correctAnswer: 'Technically, the device works perfectly.' },
      { id: 27, type: 'text-input', prompt: 'From an environmental perspective, we need to reduce waste.', correctAnswer: 'Environmentally, we need to reduce waste.' },
      { id: 28, type: 'text-input', prompt: 'Ideally, we should leave early. (Rewrite: From an ideal point of view...)', correctAnswer: 'From an ideal point of view, we should leave early.' },
      { id: 29, type: 'text-input', prompt: 'Theoretically, it should work. (Rewrite: In theory...)', correctAnswer: 'In theory, it should work.' },
      { id: 30, type: 'text-input', prompt: 'Economically, the country is recovering. (Rewrite: From an economic...)', correctAnswer: 'From an economic point of view, the country is recovering.' },
      // Bài 4: Reordering
      { id: 31, type: 'text-input', prompt: 'Reorder: She / has / certainly / forgotten / the appointment.', correctAnswer: 'She has certainly forgotten the appointment.' },
      { id: 32, type: 'text-input', prompt: 'Reorder: They / definitely / won’t / come / to the party.', correctAnswer: 'They definitely won\'t come to the party.' },
      { id: 33, type: 'text-input', prompt: 'Reorder: You / haven’t / probably / heard / the news.', correctAnswer: 'You probably haven\'t heard the news.' },
      { id: 34, type: 'text-input', prompt: 'Reorder: The matter / clearly / is / urgent.', correctAnswer: 'The matter clearly is urgent.' },
      { id: 35, type: 'text-input', prompt: 'Reorder: Service / isn’t / presumably / included.', correctAnswer: 'Service presumably isn\'t included.' },
      { id: 36, type: 'text-input', prompt: 'Reorder: He / undoubtedly / has / made / a mistake.', correctAnswer: 'He undoubtedly has made a mistake.' },
      { id: 37, type: 'text-input', prompt: 'Reorder: I / certainly / don’t / agree / with you.', correctAnswer: 'I certainly don\'t agree with you.' },
      { id: 38, type: 'text-input', prompt: 'Reorder: She / will / probably / be / late.', correctAnswer: 'She will probably be late.' },
      { id: 39, type: 'text-input', prompt: 'Reorder: They / definitely / didn’t / steal / the car.', correctAnswer: 'They definitely didn\'t steal the car.' },
      { id: 40, type: 'text-input', prompt: 'Reorder: Perhaps / missed / Mandy / has / the bus.', correctAnswer: 'Perhaps Mandy has missed the bus.' },
      // Bài 5: Structures
      { id: 41, type: 'text-input', prompt: 'Perhaps someone has fused the lights. (Use: I expect...)', correctAnswer: 'Someone\'s fused the lights, I expect.' },
      { id: 42, type: 'text-input', prompt: 'Certainly, I will pay you back. (Use: Of course...)', correctAnswer: 'Of course I\'ll pay you back.' },
      { id: 43, type: 'text-input', prompt: 'Generally, we get on well together. (Use: ...on the whole)', correctAnswer: 'We get on quite well together on the whole.' },
      { id: 44, type: 'text-input', prompt: 'Personally, I think it is ridiculous. (Use: In my...)', correctAnswer: 'The whole thing is ridiculous in my opinion.' },
      { id: 45, type: 'text-input', prompt: 'Surely you have made a mistake. (Use: I\'m sure...)', correctAnswer: 'I\'m sure you\'ve made a mistake.' },
    ]
  },
  {
    id: 'session-3',
    title: 'Phần III: Comment Adverbs',
    description: 'Phân biệt trạng từ nhận xét hành vi (behavior) và nhận xét tình huống (situation), cách dùng "To my + noun".',
    questions: [
      { id: 46, type: 'multiple-choice', prompt: '"I stupidly left the door open."', options: ['I left the door open in a stupid manner (gazing blankly).', 'It was stupid of me to leave the door open.'], correctAnswer: 'It was stupid of me to leave the door open.' },
      { id: 47, type: 'multiple-choice', prompt: '"The man stared stupidly."', options: ['It was stupid of the man to stare.', 'He stared in a stupid manner.'], correctAnswer: 'He stared in a stupid manner.' },
      { id: 48, type: 'multiple-choice', prompt: '"Dick wisely didn\'t interfere."', options: ['Dick didn\'t interfere in a wise manner.', 'It was wise of Dick not to interfere.'], correctAnswer: 'It was wise of Dick not to interfere.' },
      { id: 49, type: 'multiple-choice', prompt: '"Frankly, I don\'t care."', options: ['I am telling you the truth/my honest opinion.', 'I don\'t care in a frank way.'], correctAnswer: 'I am telling you the truth/my honest opinion.' },
      { id: 50, type: 'multiple-choice', prompt: '"Surprisingly, the newspaper wasn\'t interested."', options: ['The newspaper showed surprise.', 'It was surprising that the newspaper wasn\'t interested.'], correctAnswer: 'It was surprising that the newspaper wasn\'t interested.' },
      { id: 51, type: 'text-input', prompt: 'It was lucky that no one was hurt. -> Luckily, ...', correctAnswer: 'Luckily, no one was hurt.' },
      { id: 52, type: 'text-input', prompt: 'I was surprised that he passed the exam. -> To my ...', correctAnswer: 'To my surprise, he passed the exam.' },
      { id: 53, type: 'text-input', prompt: 'It was disappointing for Phil that his plan failed. -> To Phil\'s ...', correctAnswer: 'To Phil\'s disappointment, his plan failed.' },
      { id: 54, type: 'text-input', prompt: 'I am afraid that we didn\'t win. -> Unfortunately, ...', correctAnswer: 'Unfortunately, we didn\'t win.' },
      { id: 55, type: 'text-input', prompt: 'I am being honest when I say you are wrong. -> Honestly, ...', correctAnswer: 'Honestly, I think you\'re wrong.' },
      { id: 56, type: 'text-input', prompt: 'It was kind of her to help us. -> She kindly ...', correctAnswer: 'She kindly helped us.' },
      { id: 57, type: 'text-input', prompt: 'It was brave of him to fight the lion. -> He bravely ...', correctAnswer: 'He bravely fought the lion.' },
      { id: 58, type: 'text-input', prompt: 'It was surprising that the shop was closed. -> Surprisingly, ...', correctAnswer: 'Surprisingly, the shop was closed.' },
      { id: 59, type: 'text-input', prompt: 'I was delighted that she accepted the offer. -> To my ...', correctAnswer: 'To my delight, she accepted the offer.' },
      { id: 60, type: 'text-input', prompt: 'It was careless of me to lose the keys. -> I carelessly ...', correctAnswer: 'I carelessly lost the keys.' },
      { id: 61, type: 'text-input', prompt: '_____, parents want the best for their children. (Of course)', correctAnswer: 'Naturally' },
      { id: 62, type: 'text-input', prompt: 'He _____ decided to save the money instead of spending it. (Smart decision)', correctAnswer: 'wisely' },
      { id: 63, type: 'text-input', prompt: '_____, the expensive new player scored no goals. (Bad outcome)', correctAnswer: 'Disappointingly' },
      { id: 64, type: 'text-input', prompt: 'I _____ assumed you knew the way. (Foolish action by speaker)', correctAnswer: 'stupidly' },
      { id: 65, type: 'text-input', prompt: '_____, she lifted the car to save the child. (Very surprising/Hard to believe)', correctAnswer: 'Astonishingly' },
    ]
  },
  {
    id: 'session-4',
    title: 'Phần IV: Linking Adverbs',
    description: 'Sử dụng đúng từ nối để chỉ thứ tự, tóm tắt, sửa lỗi, đưa ví dụ, chuyển chủ đề.',
    questions: [
      { id: 66, type: 'multiple-choice', prompt: 'The rent is expensive. _____, the location is perfect.', options: ['However', 'Therefore'], correctAnswer: 'However' },
      { id: 67, type: 'multiple-choice', prompt: 'You must pay by Friday. _____, you will be fined.', options: ['Otherwise', 'Furthermore'], correctAnswer: 'Otherwise' },
      { id: 68, type: 'multiple-choice', prompt: 'He is a great pianist. _____, he paints beautifully.', options: ['Consequently', 'Also'], correctAnswer: 'Also' },
      { id: 69, type: 'multiple-choice', prompt: 'I don\'t like the color. _____, it\'s too expensive.', options: ['Firstly', 'In conclusion'], correctAnswer: 'Firstly' },
      { id: 70, type: 'multiple-choice', prompt: 'The baby grows bigger. _____, its proportions change.', options: ['Instead', 'Likewise'], correctAnswer: 'Likewise' },
      { id: 71, type: 'multiple-choice', prompt: 'I forgot my wallet. _____, I didn\'t have enough money.', options: ['Therefore', 'However'], correctAnswer: 'Therefore' },
      { id: 72, type: 'multiple-choice', prompt: 'She studied hard. _____, she got an A.', options: ['As a result', 'On the other hand'], correctAnswer: 'As a result' },
      { id: 73, type: 'multiple-choice', prompt: 'We could drive. _____, we could take the train.', options: ['Alternatively', 'In conclusion'], correctAnswer: 'Alternatively' },
      { id: 74, type: 'multiple-choice', prompt: 'I\'ll see you on Tuesday. Or _____, Wednesday.', options: ['rather', 'better'], correctAnswer: 'rather' },
      { id: 75, type: 'multiple-choice', prompt: 'The government sold the phone service. Gas was privatized in the _____ way.', options: ['same', 'similar'], correctAnswer: 'same' },
      // Matching (Represented as Fill-in for simplicity)
      { id: 76, type: 'text-input', prompt: '"Talking of holidays, have you booked yours yet?" (A. Ordering, B. Summing up, C. Rephrasing, D. Correcting, E. Giving examples, F. Picking up a topic, G. Changing the subject, H. Supporting a statement, I. Dismissing something)', correctAnswer: 'F' },
      { id: 77, type: 'text-input', prompt: '"There are two reasons. Firstly, I\'m tired..."', correctAnswer: 'A' },
      { id: 78, type: 'text-input', prompt: '"We need more equipment. Diggers, for example."', correctAnswer: 'E' },
      { id: 79, type: 'text-input', prompt: '"It\'s late. Anyway, I\'m not hungry."', correctAnswer: 'I' },
      { id: 80, type: 'text-input', prompt: '"The matter is under consideration. In other words, they are thinking about it."', correctAnswer: 'C' },
      { id: 81, type: 'text-input', prompt: '"I\'ll have tea. Or rather coffee."', correctAnswer: 'D' },
      { id: 82, type: 'text-input', prompt: '"By the way, did you see the match?"', correctAnswer: 'G' },
      { id: 83, type: 'text-input', prompt: '"In conclusion, it was a good year."', correctAnswer: 'B' },
      { id: 84, type: 'text-input', prompt: '"I should go home. It\'s midnight, after all."', correctAnswer: 'H' },
      { id: 85, type: 'text-input', prompt: '"He didn\'t study. Consequently, he failed."', correctAnswer: 'H' }, // Supporting/Result
      // Fill-ins
      { id: 86, type: 'text-input', prompt: 'Gold is a very valuable metal. __________, it is very soft and easy to shape. (Contrast)', correctAnswer: 'However' },
      { id: 87, type: 'text-input', prompt: 'You need to wear a helmet. __________, you might get a head injury. (Condition/Warning)', correctAnswer: 'Otherwise' },
      { id: 88, type: 'text-input', prompt: 'He didn\'t wake up on time. __________, he missed the bus. (Result)', correctAnswer: 'Therefore' },
      { id: 89, type: 'text-input', prompt: 'The job pays well. __________, the hours are very long. (Contrast)', correctAnswer: 'On the other hand' },
      { id: 90, type: 'text-input', prompt: 'The hotel has a pool. __________, there is a free gym for guests. (Adding info)', correctAnswer: 'In addition' },
      // Rewrites
      { id: 91, type: 'text-input', prompt: 'The car is too old. Also, it is too expensive. (Furthermore)', correctAnswer: 'The car is too old; furthermore, it is too expensive.' },
      { id: 92, type: 'text-input', prompt: 'He is very old, but he is healthy. (Nevertheless)', correctAnswer: 'He is very old. Nevertheless, he is healthy.' },
      { id: 93, type: 'text-input', prompt: 'I don\'t like apples. I don\'t like pears either. (Likewise - Positive structure)', correctAnswer: 'I don\'t like apples; likewise, I dislike pears.' },
      { id: 94, type: 'text-input', prompt: 'I didn\'t have a pen, so I used a pencil. (Instead)', correctAnswer: 'I didn\'t have a pen. Instead, I used a pencil.' },
      { id: 95, type: 'text-input', prompt: 'Prices are rising. Wages are rising too. (Similarly)', correctAnswer: 'Prices are rising. Similarly, wages are rising.' },
      // Conversation
      { id: 96, type: 'multiple-choice', prompt: 'I didn\'t get the job. ~ _____, you tried your best.', options: ['Anyway', 'However'], correctAnswer: 'Anyway' },
      { id: 97, type: 'multiple-choice', prompt: 'I love pizza. ~ _____, there\'s a new Italian place opening soon.', options: ['Talking of pizza', 'In conclusion'], correctAnswer: 'Talking of pizza' },
      { id: 98, type: 'multiple-choice', prompt: 'I think he\'s lying. _____, he\'s done it before.', options: ['After all', 'Or rather'], correctAnswer: 'After all' },
      { id: 99, type: 'multiple-choice', prompt: 'Can we meet at 5? No, let\'s say 6, _____.', options: ['actually', 'finally'], correctAnswer: 'actually' },
      { id: 100, type: 'multiple-choice', prompt: 'It\'s a difficult issue. _____, we need to solve it.', options: ['But', 'Clearly'], correctAnswer: 'Clearly' },
    ]
  }
];