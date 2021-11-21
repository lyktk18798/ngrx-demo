import {UserState} from "../app.state";
import {createReducer, on} from "@ngrx/store";
import userActions from "../actions/user.actions"
const initialUserState : UserState = {
  error: "",
  isLoading: false,
  users: []
}

export const userReducer = createReducer(initialUserState,
  on(userActions.GetUsers,
    (state) => ({
      ...state,
      isLoading: true
  })),

  on(userActions.GetUsersSuccess,
    (state, {users}) => ({...state, users: users, isLoading: false})),

  on(userActions.GetUsersError,
    (state, {err}) => ({...state, error:err})),
);
