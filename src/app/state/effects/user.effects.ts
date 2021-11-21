import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {UserServices} from "../../shared/services/user.services";
import {createEffect, Actions, ofType} from "@ngrx/effects";
import userActions from "../actions/user.actions";
import {catchError, map, switchMap} from "rxjs/operators";
import {of} from "rxjs";

@Injectable()
export class UserEffects {
  loadUser$ = createEffect(() => {
    return this.action$.pipe(
      ofType(userActions.GetUsers),
      switchMap(() =>
        this.userServices.getUsers().pipe(
        map((users) => userActions.GetUsersSuccess({users})),
        catchError(err => of(userActions.GetUsersError({err})))
        ),
      ),
    )
  });

  constructor(
    private action$: Actions,
    private store: Store,
    private userServices: UserServices
  ) {}
}
