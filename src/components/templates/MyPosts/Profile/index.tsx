import { LinkButton } from "@/components/atoms/LinkButton";
import { GetMyProfileResponse } from "@/api/myProfile";
import { Accounts } from "./Accounts";
import Star from "./assets/star.svg";
import styles from "./styles.module.css";

type Props = GetMyProfileResponse;

export const Profile = ({
  name,
  bio,
  twitterAccount,
  githubAccount,
  imageUrl,
  likeCount,
}: Props) => {
  return (
    <div role="region" aria-label="プロフィール" className={styles.module}>
      <div className={styles.profile}>
        <p className={styles.avatar}>
          <img src={imageUrl} alt="" />
        </p>
        <div className={styles.info}>
          <p className={styles.name}>{name}</p>
          <p className={styles.likes}>
            <Star /> {likeCount}
          </p>
          <p className={styles.bio}>{bio}</p>
          <LinkButton href="/my/profile/edit">編集する</LinkButton>
        </div>
      </div>
      <Accounts githubAccount={githubAccount} twitterAccount={twitterAccount} />
    </div>
  );
};
