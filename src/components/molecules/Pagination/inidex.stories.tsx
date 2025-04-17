import type { Meta, StoryObj } from "@storybook/react";
import { generatePagination } from "@/lib/util/pagination";
import { Pagination } from "./";

const meta = {
  title: "Molecules/Pagination",
  component: Pagination,
  args: { pathname: "/posts", pagination: generatePagination(1, 9) },
  // TODO: router絡むところきちんとやる
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
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
