const selectBloodByDate = state => state.bloodDiet.data;
const selectBloodIsLoading = state => state.bloodDiet.isLoading;
const selectBloodError = state => state.bloodDiet.error;
const selectShowModal = state => state.bloodDiet.showModal;
const selectUserDate = state => state.bloodDiet.userDate;

export const bloodSelectors = {
  selectBloodByDate,
  selectBloodError,
  selectBloodIsLoading,
  selectShowModal,
  selectUserDate,
};
