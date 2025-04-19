import { Button } from "@/components/atoms/Button";
import { postLogout } from "@/api/logout";
import { GetMyProfileResponse } from "@/api/myProfile";
import styles from "./styles.module.css";

type Props = GetMyProfileResponse;

export const LoginUser = ({ name, imageUrl }: Props) => {
  const handleLogout = async () => {
    try {
      await postLogout();
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section
      role="region"
      aria-label="ログインユーザー"
      className={styles.user}
    >
      <p className={styles.userName}>{name}</p>
      <p
        className={styles.thumbnail}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles.logout}>
        <div className={styles.logoutInner}>
          <div className={styles.logoutBox}>
            <Button theme="transparent" variant="small" onClick={handleLogout}>
              ログアウト
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
