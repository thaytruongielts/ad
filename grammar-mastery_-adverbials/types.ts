
export type QuestionType = 'multiple-choice' | 'text-input' | 'matching';

export interface Question {
  id: number;
  type: QuestionType;
  prompt: string;
  subPrompt?: string;
  options?: string[];
  correctAnswer: string | string[]; // For text input, can be multiple valid variations
  /* category is made optional to fix missing property errors in constants.ts */
  category?: string;
}

export interface Session {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export interface UserAnswer {
  questionId: number;
  answer: string;
  isCorrect?: boolean;
  submitted: boolean;
}