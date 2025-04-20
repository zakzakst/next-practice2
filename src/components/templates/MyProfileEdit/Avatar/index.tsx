import { InputFileButton } from "@/components/atoms/InputFileButton";
import { PutMyProfileInput } from "@/api/myProfile";
import {
  FieldValues,
  Path,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import styles from "./styles.module.css";

type Props<T extends FieldValues = PutMyProfileInput> = {
  register: UseFormRegister<T>;
  setValue: UseFormSetValue<T>;
  name: Path<T>;
  defaultImageUrl?: string;
};

export const Avatar = ({}: Props) => {
  return (
    <div className={styles.module}>
      <p className={styles.avatar}>{/* <img src={} alt="" /> */}</p>
      <InputFileButton
        buttonProps={{
          children: "写真を変更する",
          type: "button",
        }}
        inputProps={{
          "data-testid": "file",
          accept: "image/png, image/jpeg",
        }}
      />
    </div>
  );
};
