import { putMyProfile, PutMyProfileInput } from "@/api/myProfile";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Props } from "./";

export const useMyProfileEdit = ({ profile }: Props) => {
  const router = useRouter();
  const {
    register,
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PutMyProfileInput>({
    defaultValues: profile,
  });
  const onSubmit = handleSubmit(async (input) => {
    try {
      await putMyProfile({ ...input, id: 1 });
      await router.push("/my/posts");
    } catch (err) {
      console.error(err);
    }
  });
  return {
    register,
    setValue,
    onSubmit,
    control,
    errors,
  };
};
