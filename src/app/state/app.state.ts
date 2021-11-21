import {User} from "./models/user.models";

export interface UserState {
  isLoading: boolean;
  users: User[];
  error: string;
}
