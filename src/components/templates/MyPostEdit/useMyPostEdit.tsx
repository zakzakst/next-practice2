import { putMyPost, PutMyPostInput, deleteMyPost } from "@/api/myPost";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useMyPostEdit = ({ id }: { id: number }) => {
  const router = useRouter();
  const [action, setAction] = useState<"delete" | "save">();

  const onClickSave = (isPublish: boolean) => {
    if (!isPublish) return;
    setAction("save");
  };

  const onClickDelete = () => {
    setAction("delete");
  };

  const handleSave = async (input: PutMyPostInput) => {
    // const status = input.published ? '公開' : '保存'
    try {
      await putMyPost(input);
      await router.push(`/my/posts/${id}`);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteMyPost({ id });
      await router.push("/my/posts");
    } catch (err) {
      console.error(err);
    }
  };

  const onValid = async (input: PutMyPostInput) => {
    switch (action) {
      case "delete":
        await handleDelete();
        break;
      case "save":
        await handleSave(input);
        break;
      default:
        if (!input.published) {
          await handleSave(input);
        }
        break;
    }
  };

  const onInvalid = async () => {
    switch (action) {
      case "delete":
        await handleDelete();
        break;
      case "save":
        break;
    }
  };

  return {
    onClickSave,
    onClickDelete,
    onValid,
    onInvalid,
  };
};
