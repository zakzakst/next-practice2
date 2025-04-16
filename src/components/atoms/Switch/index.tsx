import clsx from "clsx";
import styles from "./styles.module.css";

type Props = {
  variant?: "small";
} & Omit<React.ComponentPropsWithRef<"input">, "type" | "role">;

export const Switch = ({ className, ref, ...props }: Props) => {
  return (
    <span className={clsx(className, styles.module)}>
      <input {...props} ref={ref} type="checkbox" role="switch" />
      <span />
    </span>
  );
};
