import { createSlice } from "@reduxjs/toolkit";
import { getRequest } from "../../config/apiRequests";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: true,
    errors: {},
    users: [],
    isBlockedChanged: false,
    paginationInfo: {
      currentPage: 1,
      pages: 0,
      totalRecords: 0,
      perPage: 10,
    },
    quizesData: {},
    quizSuccessModal: false,
    quizResultModal: false,
  },
  reducers: {
    usersUpdate: (state, action) => {
      if (action.payload.success) {
        state.users = action.payload.data.users.records;
        state.paginationInfo = action.payload.data.users.paginationInfo;
      }
      state.isLoading = false;
    },

    updateLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setQuizSuccessModal: (state, action) => {
      state.quizSuccessModal = action.payload;
    },
    setQuizResultModal: (state, action) => {
      state.quizResultModal = action.payload;
    },
    setQuizesData: (state, action) => {
      state.quizesData = action.payload;
    },
    isFeaturedUserUpdate: (state, action) => {
      if (action.payload.success) {
        const users = state.users;
        users[action.payload.index] = {
          ...users[action.payload.index],
          isFeatured: action.payload.data.user?.isFeatured,
        };
        state.users = [...users];
      }
      state.isLoading = false;
    },
    isBlockedUserUpdate: (state, action) => {
      if (action.payload.success) {
        const users = state.users;
        users[action.payload.index] = {
          ...users[action.payload.index],
          isBlocked: action.payload.data.user.isBlocked,
        };
        state.users = [...users];
      }
      state.isLoading = false;
      state.isBlockedChanged = !state.isBlockedChanged;
    },
  },
});

export const {
  updateLoading,
  usersUpdate,
  setQuizesData,
  setQuizResultModal,
  setQuizSuccessModal,
  isFeaturedUserUpdate,
  isBlockedUserUpdate,
} = userSlice.actions;

export const selectUser = (state) => state.user;
export const selectUsersPaginationInfo = (state) => state.user.paginationInfo;

export const getUsers = (params) => (dispatch) => {
  dispatch(updateLoading(true));
  getRequest(
    "/user",
    {
      "Content-Type": "application/json",
    },
    params
  ).then((res) => {
    dispatch(usersUpdate(res));
  });
};

export default userSlice.reducer;
