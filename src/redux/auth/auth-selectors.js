export const selectIsLoading = state => state.auth.isLoading;
export const selectUser = state => state.auth.user;
export const selectToken = state => state.auth.token;
export const selectRefreshToken = state => state.auth.refreshToken;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectIsErrorGoogle = state => state.auth.isErrorGoogle;
