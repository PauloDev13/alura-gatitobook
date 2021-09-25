export interface ComentarioInterface {
  date: Date;
  text: string;
  userName: string;
}

export type Comentarios = ComentarioInterface[];
export type Comentario = ComentarioInterface;
