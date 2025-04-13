"use client";

import { postLike, PostLikeRequest } from "@/api/like";
import { postLogin, PostLoginRequest } from "@/api/login";
import { getPost } from "@/api/post";
import { getPosts, GetPostsParams } from "@/api/posts";
import {
  getMyPost,
  GetMyPostParams,
  postMyPost,
  PostMyPostRequest,
} from "@/api/myPost";

const PostLikeRequestBase: PostLikeRequest = {
  postId: 10,
  userId: 1,
};

const PostLoginRequestBase: PostLoginRequest = {
  email: "yamada@mail.com",
  password: "password10",
};

const GetPostsParamsBase: GetPostsParams = { page: 10, orderBy: "starCount" };

const PostMyPostRequestBase: PostMyPostRequest = {
  title: "10",
  description: "概要",
  body: "内容",
  published: false,
  imageUrl: "画像URL",
};

const GetMyPostParamsBase: GetMyPostParams = {
  id: 10,
  authorId: 1,
};

export const TestComponent = () => {
  const handlePostLike = async (num: number) => {
    try {
      const data = await postLike({ ...PostLikeRequestBase, postId: num });
      console.log(data.id);
    } catch (err) {
      console.error(err);
    }
  };

  const handlePostLogin = async (num: number) => {
    try {
      const data = await postLogin({
        ...PostLoginRequestBase,
        password: `password${num}`,
      });
      console.log(data.name);
    } catch (err) {
      console.error(err);
    }
  };

  const handleGetPost = async (num: number) => {
    try {
      const data = await getPost({ postId: num });
      console.log(data.title);
    } catch (err) {
      console.error(err);
    }
  };

  const handleGetPosts = async (num: number) => {
    try {
      const data = await getPosts({ ...GetPostsParamsBase, page: num });
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleGetMyPost = async (num: number) => {
    try {
      const data = await getMyPost({
        ...GetMyPostParamsBase,
        id: num,
      });
      console.log(data.id);
    } catch (err) {
      console.error(err);
    }
  };

  const handlePostMyPost = async (num: number) => {
    try {
      const data = await postMyPost({
        ...PostMyPostRequestBase,
        title: num.toString(),
      });
      console.log(data.id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => handlePostLike(10)}>Post Like</button>
        <button onClick={() => handlePostLike(404)}>Post Like 404</button>
        <button onClick={() => handlePostLike(503)}>Post Like 503</button>
      </div>
      <div>
        <button onClick={() => handlePostLogin(10)}>Login</button>
        <button onClick={() => handlePostLogin(404)}>Login 404</button>
        <button onClick={() => handlePostLogin(503)}>Login 503</button>
      </div>
      <div>
        <button onClick={() => handleGetPost(10)}>Get Post</button>
        <button onClick={() => handleGetPost(404)}>Get Post 404</button>
        <button onClick={() => handleGetPost(503)}>Get Post 503</button>
      </div>
      <div>
        <button onClick={() => handleGetPosts(10)}>Get Post</button>
        <button onClick={() => handleGetPosts(404)}>Get Post 404</button>
        <button onClick={() => handleGetPosts(503)}>Get Post 503</button>
      </div>
      <div>
        <button onClick={() => handleGetMyPost(10)}>Get MyPost</button>
        <button onClick={() => handleGetMyPost(404)}>Get MyPost 404</button>
        <button onClick={() => handleGetMyPost(503)}>Get MyPost 503</button>
      </div>
      <div>
        <button onClick={() => handlePostMyPost(10)}>Post MyPost</button>
        <button onClick={() => handlePostMyPost(404)}>Post MyPost 404</button>
        <button onClick={() => handlePostMyPost(503)}>Post MyPost 503</button>
      </div>
    </div>
  );
};
