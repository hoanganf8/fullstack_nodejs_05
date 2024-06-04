import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsers,
  getUser,
} from "../../redux_toolkit/middlewares/userMiddleware";
import { resetUser } from "../../redux_toolkit/slice/userSlice";

export default function UserLists() {
  const [userId, setUserId] = useState(0);
  const dispatch = useDispatch();
  const { data: users, status } = useSelector((state) => state.user.users);
  let { data: user, status: statusUser } = useSelector(
    (state) => state.user.user
  );
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    console.log(
      "user id thay đổi ==> cần phải dispatch tới middleware getUser",
      userId
    );
    if (userId) {
      dispatch(getUser(userId));
    }

    return () => {
      //Cleanup
      dispatch(resetUser());
    };
  }, [userId, dispatch]);

  const handleShowUser = (id) => {
    setUserId(id); //Cập nhật state để thay đổi giao diện
  };
  const handleCloseDetail = () => {
    setUserId(0);
  };

  if (status === "failed" || statusUser === "failed") {
    return <h3>Đã có lỗi xảy ra</h3>;
  }
  return (
    <div>
      {!userId ? (
        <>
          <h2>Danh sách người dùng</h2>
          {status === "pending" ? (
            <h3>Loading...</h3>
          ) : (
            status === "success" &&
            users.map(({ id, name, email }) => (
              <div key={id} style={{ borderBottom: "1px solid black" }}>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <button onClick={() => handleShowUser(id)}>Xem</button>
              </div>
            ))
          )}
        </>
      ) : (
        <>
          <h2>
            Chi tiết người dùng{" "}
            <button onClick={handleCloseDetail}>&times;</button>
          </h2>
          {statusUser === "pending" ? (
            <p>Loading...</p>
          ) : (
            statusUser === "success" && (
              <>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Role: {user.role}</p>
                <img src={user.avatar} width={200} alt="" />
              </>
            )
          )}
        </>
      )}
    </div>
  );
}
