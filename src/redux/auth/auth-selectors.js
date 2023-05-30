// const getIsLoggedIn = state => state.auth.isLoggedIn;

// const getUsername = state => state.auth.user.data.user.name;

// export const authSelectors = {
//   getIsLoggedIn,
//   getUsername,
// };

export const selectIsLoading = state => state.auth.isLoading;

export const selectUser = state => state.auth.user;
export const selectToken = state => state.auth.token;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;