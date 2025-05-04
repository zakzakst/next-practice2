import { GetPostsResponseMock } from "@/mocks/posts";
import { PCStory, SPStory } from "@/tests/storybook";
import type { Meta, StoryObj } from "@storybook/react";
import { Posts } from "./";
// import mockRouter from "next-router-mock";

// import * as nextNavigation from "next/navigation";

// Object.defineProperty(nextNavigation, "useSearchParams", {
//   writable: true,
//   value: () => ({
//     get: (key: string) => {
//       if (key === "page") return "2";
//       if (key === "keyword") return "nextjs";
//       return null;
//     },
//   }),
// });

const meta = {
  title: "Templates/Posts",
  component: Posts,
  args: GetPostsResponseMock,
  parameters: {
    nextjs: {
      appDirectory: true, // 👈 Set this
    },
  },
} satisfies Meta<typeof Posts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  ...PCStory,
  // beforeEach: () => {
  //   // ページの URL を設定
  //   mockRouter.setCurrentUrl("/home");
  // },

  // parameters: {
  //   nextjs: {
  //     router: {
  //       pathname: "/profile/[id]",
  //       asPath: "/profile/1",
  //       query: {
  //         id: "1",
  //       },
  //     },
  //   },
  // },
};
export const SP: Story = { ...SPStory };
