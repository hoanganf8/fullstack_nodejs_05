"use client";

// import { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());
export default function PostsPage() {
  const {
    data: posts,
    error,
    isLoading,
    // mutate,
  } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher, {
    fallbackData: [],
    // refreshInterval: 1000,
  });
  if (error) {
    return <h2>Đã có lỗi xảy ra</h2>;
  }
  console.log(posts);
  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <button
        onClick={() => mutate("https://jsonplaceholder.typicode.com/posts")}
      >
        ReFetch
      </button>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        posts.map((post) => <h3 key={post.id}>{post.title}</h3>)
      )}
    </div>
  );
}
