import { parseAsPositiveInt } from "@/lib/util";
import { PaginationProps } from "@/lib/util/pagination";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import styles from "./styles.module.css";

const isCurrent = (
  a: number,
  b: number
): React.AnchorHTMLAttributes<HTMLAnchorElement> => {
  return {
    "aria-current": (a == 0 && b == 1) || a == b ? "page" : undefined,
  };
};

type Props = {
  pathname: string;
  pagination: PaginationProps;
};

export const Pagination = ({ pathname, pagination }: Props) => {
  const searchParams = useSearchParams();
  const pageParam = searchParams?.get("orderBy") || undefined;
  const page = parseAsPositiveInt(pageParam) || 0;
  if (!pagination) return null;
  return (
    <nav aria-label="ページネーション">
      <ul className={styles.pagination}>
        {pagination?.items.map((item, index) => (
          <li key={index}>
            {typeof item === "number" ? (
              <Link
                // TODO: router絡むところきちんとやる
                // href={{ pathname, query: { ...router.query, page: item } }}
                href={{ pathname, query: { page: item } }}
                {...isCurrent(page, item)}
              >
                {item.toString()}
              </Link>
            ) : (
              <span>{item.toString()}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
