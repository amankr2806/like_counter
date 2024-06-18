import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string | null;
  username?: string;
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

export const fetchUserById = createAsyncThunk<User, number>(
      "users/fetchUserById",
      async (id) => {
        const response = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
        return response.data;
      }
    );

    
const userIdSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.users = [...state.users.filter(user => user.id !== action.payload.id), action.payload];
        // state.users = [...state.users, action.payload];
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Error fetching user";
      });
    },
  });
  
  export default userIdSlice;