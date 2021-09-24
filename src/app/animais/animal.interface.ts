export interface AnimalInterface {
  id: number;
  postDate: Date;
  url: string;
  description: string;
  allowComments: boolean;
  comments: number;
  userId: number;
}

export type Animais = AnimalInterface[];
