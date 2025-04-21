import { parseAsPositiveInt } from "@/lib/util";
import { postLike } from "@/api/like";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Props } from "./";

export const useLikeButton = ({
  likeCount,
  liked,
  isMyPost,
  isLoggedIn,
}: Props) => {
  const [isLiked, setIsLiked] = useState(liked);
  const [localLikeCount, setLocalLikeCount] = useState(likeCount);
  const { handleSubmit, formState } = useForm();
  const searchParams = useSearchParams();
  const postIdStr = searchParams.get("postId") || undefined;
  const postId = Number(parseAsPositiveInt(postIdStr));
  const isDisabled =
    formState.isSubmitting || isLiked || isMyPost || !isLoggedIn;
  const onSubmit = handleSubmit(async () => {
    try {
      await postLike({ postId, userId: 1 });
      setIsLiked(true);
      setLocalLikeCount((prev) => prev + 1);
    } catch (err) {
      console.error(err);
    }
  });
  return { isLiked, isDisabled, localLikeCount, onSubmit };
};
