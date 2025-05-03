"use client";
// https://github.com/streamich/react-use/blob/HEAD/docs/useDrop.md
// TODO: 便利そうなので、別途詳しく試してみる
import { useDropArea } from "react-use";

export const UseDropAreaTest = () => {
  const onFilesDrop = (files: File[]) => {
    console.log("files:", files);
  };

  const [bond, state] = useDropArea({
    onFiles: onFilesDrop,
  });

  return (
    <div>
      <div {...bond}>Drop something here.</div>
      <button onClick={() => console.log(state)}>STATE</button>
    </div>
  );
};
