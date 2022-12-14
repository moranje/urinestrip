import { useStore } from '@/store/store';

export interface ChoiceOption {
  value: string;
  label: string;
}
export interface JumpFunction {
  (getQuestions: () => FormQuestion[], store: ReturnType<typeof useStore>):
    | string
    | void;
}
export interface JumpObject {
  [key: string]: string;
}

interface SheetOptions {
  type: string;
  id: string;

  tagline?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  helpText?: string;
  helpTextShow?: boolean;
  required?: boolean;
  jump?: JumpFunction | JumpObject;
  navigation?: boolean;
  progressbar?: boolean;
  timer?: boolean;
  options: ChoiceOption[];
  multiple: boolean;
  nextStepOnAnswer: boolean;
  model: string; //| typeof uti;
}
export interface FormQuestion extends SheetOptions {
  answer?: string;
}

// TODO: check if a deconstructed argument can have an intializer eg:
export function sheet({
  id,
  title,
  helpText = '',
  required = true,
  jump,
  options,
}: {
  id: string;
  title: string;
  helpText?: string;
  required?: boolean;
  options: ChoiceOption[];
  jump?: JumpFunction | JumpObject;
}) {
  return function () {
    const question = {
      title,
      helpText,
      required,
      jump,
      options,
    };
    const store: ReturnType<typeof useStore> = useStore();
    store.setQuestion(id, question);
  };
}
