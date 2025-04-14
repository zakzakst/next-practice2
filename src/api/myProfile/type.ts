// GET
export type GetMyProfileParams = {
  id: number;
};

export type GetMyProfileResponse = {
  id: number;
  name: string;
  bio: string;
  twitterAccount: string;
  githubAccount: string;
  imageUrl: string;
  email: string;
  likeCount: number;
};

export type GetMyProfileError = {
  message: string;
};
