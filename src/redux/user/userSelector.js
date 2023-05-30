const selectUserDailyCalorie = state => state.user.dailyCalorie;
const selectUserNotRecProducts = state => state.user.notRecProducts;
const selectUserSavedData = state => state.user.userDate;

export const userSelector = {
  selectUserDailyCalorie,
  selectUserNotRecProducts,
  selectUserSavedData,
};
