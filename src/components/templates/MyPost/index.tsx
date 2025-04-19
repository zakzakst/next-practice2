import { LinkButton } from "@/components/atoms/LinkButton";
import { ContentHeader } from "@/components/molecules/ContentHeader";
import { Markdown } from "@/components/organisms/Markdown";
import { GetMyPostResponse } from "@/api/myPost";
import styles from "./styles.module.css";

type Props = {
  post: GetMyPostResponse;
};

export const MyPost = ({ post }: Props) => {
  return (
    <>
      <p
        className={styles.image}
        style={{ backgroundImage: `url(${post.imageUrl})` }}
      />
      <div className={styles.module}>
        <div className={styles.headGroup}>
          <ContentHeader
            title={post.title}
            description={post.description}
            className={styles.header}
          />
          <LinkButton href={`/my/posts/${post.id}/edit`}>編集する</LinkButton>
        </div>
        <Markdown body={post.body} />
      </div>
    </>
  );
};
