import { GetMyPostResponse } from "@/api/myPost";
import { PostForm } from "./PostForm";
import { useMyPostEdit } from "./useMyPostEdit";

type Props = {
  post: GetMyPostResponse;
};

export const MyPostEdit = ({ post }: Props) => {
  const { onClickSave, onClickDelete, onValid, onInvalid } = useMyPostEdit({
    id: post.id,
  });
  return (
    <PostForm
      title="記事編集"
      defaultValues={{ ...post }}
      onClickSave={onClickSave}
      onClickDelete={onClickDelete}
      onValid={onValid}
      onInValid={onInvalid}
    />
  );
};
