import { Button } from "@/components/atoms/Button";
import { TextboxWithError } from "@/components/molecules/TextboxWithError";
import { PostLoginInput, PostLoginInputSchema, postLogin } from "@/api/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import styles from "./styles.module.css";

const defaultValues: PostLoginInput = {
  email: "",
  password: "",
};

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: zodResolver(PostLoginInputSchema),
  });

  return (
    <form
      className={styles.module}
      onSubmit={handleSubmit(async (values) => {
        try {
          const data = await postLogin(values);
          console.log(data);
        } catch (err) {
          console.error(err);
        }
      })}
    >
      <div className={styles.image} />
      <div className={styles.inputs}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>ログイン</legend>
          <div className={styles.email}>
            <label htmlFor="email">メールアドレス</label>
            <TextboxWithError
              {...register("email")}
              id="email"
              type="text"
              placeholder="example@test.com"
              error={errors.email?.message}
            />
          </div>
          <div className={styles.password}>
            <label htmlFor="password">パスワード</label>
            <TextboxWithError
              {...register("password")}
              id="password"
              type="password"
              placeholder="8文字以上で入力"
              error={errors.password?.message}
            />
          </div>
        </fieldset>
        <Button variant="large" className={styles.button}>
          ログイン
        </Button>
      </div>
    </form>
  );
};
