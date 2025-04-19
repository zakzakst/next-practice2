// GET
export type GetMyPost2Response = {
  id: number;
  title: string;
  description: string;
  body: string;
  imageUrl: string;
  published: boolean;
  authorId: number;
};

export type GetMyPost2Error = {
  message: string;
};
