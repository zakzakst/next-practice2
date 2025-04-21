import { SelectFilterOption } from "@/components/molecules/SelectFilterOption";
import {
  // useRouter,
  useSearchParams,
} from "next/navigation";
import styles from "./styles.module.css";

export const OrderBy = () => {
  // const { push } = useRouter();
  const searchParams = useSearchParams();
  const orderBy = searchParams.get("orderBy") || "";

  return (
    <SelectFilterOption
      title="並び順"
      className={styles.module}
      selectProps={{
        defaultValue: orderBy,
        onChange: (event) => {
          // TODO: router.pushの使い方調べる
          // push({query: {orderBy: event.currentTarget.value}})
          console.log(event);
        },
      }}
      options={[
        { value: "updatedAt", label: "更新日時順" },
        { value: "starCount", label: "スター数順" },
      ]}
    />
  );
};
