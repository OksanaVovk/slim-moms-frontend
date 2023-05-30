const { createSlice } = require('@reduxjs/toolkit');
const {
  getDiet,
  getDietUser,
  clearState,
  toggleModal,
  changeUserDate,
} = require('./operations');

const initialState = {
  data: {},
  isLoading: false,
  error: false,
  showModal: false,
  userDate: {
    height: '',
    age: '',
    curWeight: '',
    desWeight: '',
    bloodType: '',
  },
};

const bloodDietSlice = createSlice({
  name: 'blood',
  initialState,
  extraReducers: {
    [getDiet.pending](state) {
      state.isLoading = true;
      state.error = false;
    },
    [getDiet.fulfilled](state, action) {
      state.data = action.payload;
      state.isLoading = false;
      state.error = false;
    },
    [getDiet.rejected](state) {
      state.isLoading = false;
      state.error = true;
    },
    [getDietUser.pending](state) {
      state.isLoading = true;
      state.error = false;
    },
    [getDietUser.fulfilled](state, action) {
      state.data = action.payload;
      state.isLoading = false;
      state.error = false;
    },
    [getDietUser.rejected](state) {
      state.isLoading = false;
      state.error = true;
    },
    [clearState](state, _) {
      state.data = {};
    },
    [toggleModal](state, action) {
      state.showModal = action.payload;
    },
    [changeUserDate](state, action) {
      state.userDate = action.payload;
    },
  },
});

export const bloodDietReducer = bloodDietSlice.reducer;
