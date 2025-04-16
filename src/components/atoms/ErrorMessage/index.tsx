import clsx from "clsx";
import styles from "./styles.module.css";

type Props = React.ComponentPropsWithRef<"p">;

export const ErrorMessage = ({ className, ref, ...props }: Props) => {
  return (
    <p
      {...props}
      role="alert"
      aria-live="off"
      ref={ref}
      className={clsx(className, styles.module)}
    />
  );
};
