// import { setUser, setStatus } from "../slice/userSlice";
// export const getUsers = () => {
//   const userApi = `https://api.escuelajs.co/api/v1/users`;
//   return async (dispatch) => {
//     try {
//       dispatch(setStatus("pending"));
//       const response = await fetch(userApi);
//       const data = await response.json();
//       dispatch(setUser(data));
//       dispatch(setStatus("success"));
//     } catch (e) {
//       dispatch(setStatus("failed"));
//     }
//   };
// };

import { createAsyncThunk } from "@reduxjs/toolkit";

/*
Tồn tại trạng thái
- idle
- pending
- success
- failed
*/

export const getUsers = createAsyncThunk(
  "getUsers",
  async (_, { rejectWithValue }) => {
    const userApi = `${import.meta.env.VITE_SERVER_API}/v1/users`;
    try {
      const response = await fetch(userApi);
      if (!response.ok) {
        throw new Error("Error");
      }
      const data = await response.json();
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const getUser = createAsyncThunk(
  "getUser",
  async (id, { rejectWithValue }) => {
    //Code
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_API}/v1/users/${id}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

/*
- pending
- fulfilled
- reject
*/
