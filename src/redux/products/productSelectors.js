const selectProductsByQuery = state =>
  state.products.productsByQuery.queryProducts;
const selectIsLoadingProductsByQuery = state => state.products.isLoading;

export const productSelectors = {
  selectProductsByQuery,
  selectIsLoadingProductsByQuery,
};
