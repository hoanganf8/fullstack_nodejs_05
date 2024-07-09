"use client";
import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";
import { useEffect, useState } from "react";
import UserAdd from "./UserAdd";
const userApi = process.env.NEXT_PUBLIC_SERVER_API + `/users`;
const userContentApi = process.env.NEXT_PUBLIC_SERVER_API + `/user-content`;
export default function UsersPage() {
  console.log(process.env.APP_NAME);
  const [userId, setUserId] = useState();
  const [showAll, setShowAll] = useState(false);
  const [userContentList, setUserContentList] = useState([]);
  let {
    data: users,
    error,
    isLoading,
  } = useSWR({ url: userApi }, fetcher, { fallbackData: [] });
  const swrKey = userId ? { url: `${userContentApi}?user_id=${userId}` } : null;
  const {
    data: [userContent],
  } = useSWR(swrKey, fetcher, {
    fallbackData: [],
  });
  const handleShowContent = (id) => {
    setUserId(id);
  };
  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    if (!showAll) {
      return;
    }
    const getUserContent = async (id) => {
      return fetch(`${userContentApi}?user_id=${id}`).then((res) => res.json());
    };
    const promiseList = users.map(({ id }) => getUserContent(id));
    Promise.all(promiseList).then((userContent) => {
      setUserContentList(userContent);
    });
    return () => {
      setUserContentList([]);
    };
  }, [showAll]);

  users = users.map((user, index) => {
    user.content =
      userContentList && userContentList[index]
        ? userContentList[index][0].content
        : null;
    return user;
  });
  return (
    <div>
      <h1>
        Danh sách người dùng{" "}
        <button onClick={handleShowAll}>
          {showAll ? "Đóng tất cả" : "Mở tất cả"}
        </button>
      </h1>
      {isLoading && <h4>Loading...</h4>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}{" "}
            <button onClick={() => handleShowContent(user.id)}>Chi tiết</button>
            {!showAll && userContent?.content && userId === user.id && (
              <p>{userContent.content}</p>
            )}
            {showAll && <p>{user.content}</p>}
          </li>
        ))}
      </ul>
      <UserAdd />
    </div>
  );
}
