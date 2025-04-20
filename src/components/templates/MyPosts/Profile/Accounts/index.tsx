import GitHub from "./assets/github.svg";
import Twitter from "./assets/twitter.svg";
import styles from "./styles.module.css";
import Link from "next/link";

type Props = {
  githubAccount?: string;
  twitterAccount?: string;
};

export const Accounts = ({ githubAccount, twitterAccount }: Props) => {
  return (
    <div className={styles.accounts}>
      {githubAccount && (
        <p className={styles.github}>
          <Link
            href={`https://github.com/${githubAccount}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub /> <span>{githubAccount}</span>
          </Link>
        </p>
      )}
      {twitterAccount && (
        <p className={styles.twitter}>
          <Link
            href={`https://twitter.com/${twitterAccount}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter /> <span>{twitterAccount}</span>
          </Link>
        </p>
      )}
    </div>
  );
};
