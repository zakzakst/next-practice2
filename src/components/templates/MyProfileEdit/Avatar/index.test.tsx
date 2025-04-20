import { render, screen } from "@testing-library/react";
import { useForm } from "react-hook-form";
import { PutMyProfileInput } from "@/api/myProfile";
import { Avatar } from "./";

test("「写真を変更する」ボタンがある", async () => {
  const { register, setValue } = useForm<PutMyProfileInput>();
  render(<Avatar register={register} setValue={setValue} name="imageUrl" />);
  expect(
    await screen.findByRole("button", { name: "写真を変更する" })
  ).toBeInTheDocument();
});
