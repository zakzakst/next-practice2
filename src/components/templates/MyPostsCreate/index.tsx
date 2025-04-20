import { postMyPost } from "@/api/myPost";
import { useRouter } from "next/navigation";
import { PostForm } from "./PostForm";

export const MyPostsCreate = () => {
  const router = useRouter();

  return (
    <PostForm
      title="新規記事"
      onClickSave={(isPublish) => {
        if (!isPublish) return;
      }}
      onValid={async (input) => {
        // const status = input.published ? '公開' : '保存'
        try {
          // TODO: authorIdのところ見なおす
          const { id } = await postMyPost({ ...input, authorId: 1 });
          await router.push(`/my/posts/${id}`);
        } catch (err) {
          console.error(err);
        }
      }}
    />
  );
};
