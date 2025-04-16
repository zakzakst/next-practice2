import clsx from "clsx";
import { useId } from "react";
import { Combobox } from "@/components/molecules/Combobox";
import styles from "./styles.module.css";

type Props = {
  title: string;
  selectProps: Omit<React.ComponentProps<typeof Combobox>, "id" | "className">;
  options: {
    value: string;
    label: string;
  }[];
  className?: string;
};

export const SelectFilterOption = ({
  title,
  selectProps,
  options,
  className,
}: Props) => {
  const selectId = useId();

  return (
    <div className={clsx(styles.module, className)}>
      <label className={styles.title} htmlFor={selectId}>
        {title}
      </label>
      <Combobox id={selectId} {...selectProps}>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Combobox>
    </div>
  );
};
