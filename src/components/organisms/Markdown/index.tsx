import ReactMarkdown from "react-markdown";
import styles from "./styles.module.css";

type Props = {
  body: string;
};

export const Markdown = ({ body }: Props) => {
  return (
    <div className={styles.markdown}>
      <ReactMarkdown>{body}</ReactMarkdown>
    </div>
  );
};
