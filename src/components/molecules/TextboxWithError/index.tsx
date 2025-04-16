import { ErrorMessage } from "@/components/atoms/ErrorMessage";
import { Textbox } from "@/components/atoms/Textbox";
import { useId } from "react";
import styles from "./styles.module.css";

type Props = {
  error?: string;
} & React.ComponentPropsWithRef<typeof Textbox>;

export const TextboxWithError = ({ error, ref, ...props }: Props) => {
  const errorMessageId = useId();
  return (
    <>
      <Textbox
        {...props}
        ref={ref}
        aria-invalid={!!error}
        aria-errormessage={errorMessageId}
      />
      {error && (
        <ErrorMessage id={errorMessageId} className={styles.error}>
          {error}
        </ErrorMessage>
      )}
    </>
  );
};
