import {createSelector} from "@ngrx/store";
import {selectUserState} from "./app.selectos";

const selectUsers = createSelector(
  selectUserState,
  (state) => {
    console.log(state);
    return state.users
  }
);

const selectIsLoading = createSelector(
  selectUserState,
  (state) => state.isLoading
);

export default {
  selectUsers,
  selectIsLoading,
}
