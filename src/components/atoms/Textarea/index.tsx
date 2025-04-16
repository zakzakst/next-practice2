import clsx from "clsx";
import styles from "./styles.module.css";

type Props = React.ComponentPropsWithRef<"textarea">;

export const Textarea = ({ className, ref, ...props }: Props) => {
  return (
    <textarea {...props} ref={ref} className={clsx(className, styles.module)} />
  );
};
