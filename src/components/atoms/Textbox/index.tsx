import clsx from "clsx";
import styles from "./styles.module.css";

type Props = React.ComponentPropsWithRef<"input">;

export const Textbox = ({ className, ref, ...props }: Props) => {
  return (
    <input
      type="text"
      {...props}
      ref={ref}
      className={clsx(className, styles.module)}
    />
  );
};
