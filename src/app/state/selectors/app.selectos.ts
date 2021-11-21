import {createFeatureSelector} from "@ngrx/store";
import {UserState} from "../app.state";

export const selectUserState = createFeatureSelector<UserState>('user');
