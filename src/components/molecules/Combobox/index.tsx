import clsx from "clsx";
import styles from "./styles.module.css";

type Props = {
  theme?: "dark" | "light";
  variant?: "small" | "medium" | "large";
} & React.ComponentPropsWithRef<"select">;

export const Combobox = ({
  className,
  theme = "dark",
  variant = "medium",
  ref,
  ...props
}: Props) => {
  return (
    <select
      {...props}
      ref={ref}
      className={clsx(className, styles.module)}
      data-theme={theme}
      data-variant={variant}
    />
  );
};
