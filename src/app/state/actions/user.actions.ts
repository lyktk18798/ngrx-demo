import {createAction, props} from "@ngrx/store";
import {User} from "../models/user.models";

enum Action {
  GetUsers = '[User List/API] Retrieve User List',
  GetUsersSuccess = '[User List/API] Retrieve User List success',
  GetUsersError = '[User List/API] Retrieve User List error',
}

const GetUsers = createAction(Action.GetUsers);

const GetUsersSuccess = createAction(Action.GetUsersSuccess, props<{users: User[]}>());

const GetUsersError = createAction(Action.GetUsersError, props<{err: string}>());

export default {
  GetUsers,
  GetUsersError,
  GetUsersSuccess,
}
