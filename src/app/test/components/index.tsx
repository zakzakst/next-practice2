"use client";

import { postLike, PostLikeRequest } from "@/api/like";
import { postLogin, PostLoginRequest } from "@/api/login";
import { postLogout } from "@/api/logout";
import { getPost } from "@/api/post";
import { getPosts, GetPostsParams } from "@/api/posts";
import {
  getMyPost,
  GetMyPostParams,
  postMyPost,
  PostMyPostRequest,
  putMyPost,
  PutMyPostRequest,
  deleteMyPost,
} from "@/api/myPost";
import { getMyPost2 } from "@/api/myPost2";
import { getMyPosts, GetMyPostsParams } from "@/api/myPosts";
import {
  getMyProfile,
  putMyProfile,
  PutMyProfileRequest,
} from "@/api/myProfile";

const PostLikeRequestBase: PostLikeRequest = {
  postId: 10,
  userId: 1,
};

const PostLoginRequestBase: PostLoginRequest = {
  email: "yamada@mail.com",
  password: "password10",
};

const GetPostsParamsBase: GetPostsParams = { page: 10, orderBy: "starCount" };

const GetMyPostParamsBase: GetMyPostParams = {
  id: 10,
  authorId: 1,
};

const PostMyPostRequestBase: PostMyPostRequest = {
  title: "10",
  description: "概要",
  body: "内容",
  published: false,
  imageUrl: "画像URL",
  authorId: 1,
};

const PutMyPostRequestBase: PutMyPostRequest = {
  title: "10",
  description: "概要",
  body: "内容",
  published: false,
  imageUrl: "画像URL",
};

const GetMyPostsParamsBase: GetMyPostsParams = {
  page: 10,
  authorId: 1,
  published: true,
};

const PutMyProfileRequestBase: PutMyProfileRequest = {
  id: 10,
  name: "山田太郎",
  bio: "フロントエンドエンジニア。TypeScript と UIコンポーネントのテストに興味があります。",
  twitterAccount: "taro-yamada",
  githubAccount: "taro-yamada",
  imageUrl: "https://picsum.photos/id/237/300/300",
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

  const handlePostLogout = async () => {
    try {
      const data = await postLogout();
      console.log(data.message);
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

  const handlePutMyPost = async (num: number) => {
    try {
      const data = await putMyPost({
        ...PutMyPostRequestBase,
        title: num.toString(),
      });
      console.log(data.id);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteMyPost = async (num: number) => {
    try {
      const data = await deleteMyPost({
        id: num,
      });
      console.log(data.id);
    } catch (err) {
      console.error(err);
    }
  };

  const handleGetMyPost2 = async (num: number) => {
    try {
      const data = await getMyPost2(num);
      console.log(data.id);
    } catch (err) {
      console.error(err);
    }
  };

  const handleGetMyPosts = async (num: number) => {
    try {
      const data = await getMyPosts({ ...GetMyPostsParamsBase, page: num });
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleGetMyProfile = async (num: number) => {
    try {
      const data = await getMyProfile({ id: num });
      console.log(data.id);
    } catch (err) {
      console.error(err);
    }
  };

  const handlePutMyProfile = async (num: number) => {
    try {
      const data = await putMyProfile({
        ...PutMyProfileRequestBase,
        id: num,
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
        <button onClick={() => handlePostLogout()}>Logout</button>
      </div>
      <div>
        <button onClick={() => handleGetPost(10)}>Get Post</button>
        <button onClick={() => handleGetPost(404)}>Get Post 404</button>
        <button onClick={() => handleGetPost(503)}>Get Post 503</button>
      </div>
      <div>
        <button onClick={() => handleGetPosts(10)}>Get Posts</button>
        <button onClick={() => handleGetPosts(404)}>Get Posts 404</button>
        <button onClick={() => handleGetPosts(503)}>Get Posts 503</button>
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
      <div>
        <button onClick={() => handlePutMyPost(10)}>Put MyPost</button>
        <button onClick={() => handlePutMyPost(404)}>Put MyPost 404</button>
        <button onClick={() => handlePutMyPost(503)}>Put MyPost 503</button>
      </div>
      <div>
        <button onClick={() => handleDeleteMyPost(10)}>Delete MyPost</button>
        <button onClick={() => handleDeleteMyPost(404)}>
          Delete MyPost 404
        </button>
        <button onClick={() => handleDeleteMyPost(503)}>
          Delete MyPost 503
        </button>
      </div>
      <div>
        <button onClick={() => handleGetMyPost2(10)}>Get MyPost2</button>
        <button onClick={() => handleGetMyPost2(404)}>Get MyPost2 404</button>
        <button onClick={() => handleGetMyPost2(503)}>Get MyPost2 503</button>
      </div>
      <div>
        <button onClick={() => handleGetMyPosts(10)}>Get MyPosts</button>
        <button onClick={() => handleGetMyPosts(404)}>Get MyPosts 404</button>
        <button onClick={() => handleGetMyPosts(503)}>Get MyPosts 503</button>
      </div>
      <div>
        <button onClick={() => handleGetMyProfile(10)}>Get MyProfile</button>
        <button onClick={() => handleGetMyProfile(404)}>
          Get MyProfile 404
        </button>
        <button onClick={() => handleGetMyProfile(503)}>
          Get MyProfile 503
        </button>
      </div>
      <div>
        <button onClick={() => handlePutMyProfile(10)}>Put MyProfile</button>
        <button onClick={() => handlePutMyProfile(404)}>
          Put MyProfile 404
        </button>
        <button onClick={() => handlePutMyProfile(503)}>
          Put MyProfile 503
        </button>
      </div>
    </div>
  );
};
