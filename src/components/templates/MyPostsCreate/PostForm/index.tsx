import { PostFormFooter } from "@/components/molecules/PostFormFooter";
import { PostFormInfo } from "@/components/molecules/PostFormInfo";
import { TextareaWithInfo } from "@/components/molecules/TextareaWithInfo";
import { PostMyPostInputSchema, PostMyPostInput } from "@/api/myPost";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FieldValues,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import styles from "./styles.module.css";

type Props<T extends FieldValues = PostMyPostInput> = {
  title: string;
  children?: React.ReactNode;
  onClickSave: (isPublish: boolean) => void;
  onValid: SubmitHandler<T>;
  onInvalid?: SubmitErrorHandler<T>;
};

export const PostForm = ({
  title,
  children,
  onClickSave,
  onValid,
  onInvalid,
}: Props) => {
  const {
    register,
    // setValue,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<PostMyPostInput>({
    resolver: zodResolver(PostMyPostInputSchema),
  });

  return (
    <form
      aria-label={title}
      className={styles.module}
      onSubmit={handleSubmit(onValid, onInvalid)}
    >
      <div className={styles.content}>
        <div className={styles.meta}>
          <PostFormInfo register={register} control={control} errors={errors} />
        </div>
        <TextareaWithInfo
          {...register("body")}
          title="本文"
          rows={20}
          error={errors.body?.message}
        />
      </div>
      <PostFormFooter
        isSubmitting={isSubmitting}
        register={register}
        control={control}
        onClickSave={onClickSave}
      />
      {children}
    </form>
  );
};
