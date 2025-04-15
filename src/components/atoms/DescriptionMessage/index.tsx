import clsx from "clsx";
import styles from "./styles.module.css";

type Props = React.ComponentPropsWithRef<"p">;

export const DescriptionMessage = ({ className, ref, ...props }: Props) => {
  return <p {...props} ref={ref} className={clsx(className, styles.module)} />;
};
