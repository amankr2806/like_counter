import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string | null;
}

interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const Users = createAsyncThunk<User[], void>("Users", async () => {
  try {
    const response = await axios.get<User[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  } catch (error) {
    throw Error("Error fetching users");
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Users.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(Users.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.users = action.payload;
      })
      .addCase(Users.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Error fetching users";
      });
  },
});

export default userSlice;
