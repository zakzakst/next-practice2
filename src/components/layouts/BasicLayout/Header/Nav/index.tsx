import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";

const isCurrent = (
  flag: boolean
): React.AnchorHTMLAttributes<HTMLAnchorElement> => {
  if (!flag) return {};
  return { "aria-current": "page" };
};

type Props = {
  onCloseMenu: () => void;
};

export const Nav = ({ onCloseMenu }: Props) => {
  const pathname = usePathname();

  return (
    <nav aria-label="ナビゲーション" className={styles.nav}>
      <button
        aria-label="メニューを閉じる"
        className={styles.closeMenu}
        onClick={onCloseMenu}
      ></button>
      <ul className={styles.list}>
        <li>
          <Link
            href="/my/posts"
            {...isCurrent(
              pathname.startsWith("/my/posts") &&
                pathname !== "/my/posts/create"
            )}
          >
            My Posts
          </Link>
        </li>
        <li>
          <Link
            href="/my/posts/create"
            {...isCurrent(pathname === "/my/posts/create")}
          >
            Create Post
          </Link>
        </li>
      </ul>
    </nav>
  );
};
