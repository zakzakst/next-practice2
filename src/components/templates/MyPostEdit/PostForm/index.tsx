import { PostFormFooter } from "@/components/molecules/PostFormFooter";
// import { PostFormHeroImage } from "@/components/molecules/PostFormHeroImage";
import { PostFormInfo } from "@/components/molecules/PostFormInfo";
import { TextareaWithInfo } from "@/components/molecules/TextareaWithInfo";
import { PutMyPostInput, PutMyPostInputSchema } from "@/api/myPost";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FieldValues,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import styles from "./styles.module.css";

type Props<T extends FieldValues = PutMyPostInput> = {
  title: string;
  defaultValues?: Partial<T>;
  children?: React.ReactNode;
  onValid: SubmitHandler<T>;
  onInValid?: SubmitErrorHandler<T>;
  onClickSave: (isPublish: boolean) => void;
  onClickDelete?: () => void;
};

export const PostForm = ({
  title,
  defaultValues,
  children,
  onValid,
  onInValid,
  onClickSave,
  onClickDelete,
}: Props) => {
  const {
    register,
    // setValue,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<PutMyPostInput>({
    defaultValues,
    resolver: zodResolver(PutMyPostInputSchema),
  });

  return (
    <form
      aria-label={title}
      className={styles.module}
      onSubmit={handleSubmit(onValid, onInValid)}
    >
      <div className={styles.content}>
        <div className={styles.meta}>
          <PostFormInfo register={register} control={control} errors={errors} />
          {/* <PostFormHeroImage
            register={register}
            setValue={setValue}
            name="imageUrl"
            defaultImageUrl={defaultValues?.imageUrl}
            error={errors.imageUrl?.message}
          /> */}
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
        onClickDelete={onClickDelete}
      />
      {children}
    </form>
  );
};
