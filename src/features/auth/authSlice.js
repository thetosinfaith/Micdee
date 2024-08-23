import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    users: [],
    isLoggedIn: false,
  },
  reducers: {
    signUpUser: (state, action) => {
      state.users.push(action.payload);
    },
    loginUser: (state, action) => {
      const user = state.users.find((e) => e.email === action.payload.email);
      if (!user) {
        alert('User not found: check email');
      } else {
        const checkPassword = user.password === action.payload.password;
        if (!checkPassword) {
          alert('Password incorrect');
        } else {
          state.isLoggedIn = true;
        }
      }
    },
    logout: (state) => {
      state.isLoggedIn = false;
    }
  }
});

export const { signUpUser, loginUser, logout } = authSlice.actions;
export default authSlice.reducer;
