import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import userActions from "../state/actions/user.actions";
import userSelectors from "../state/selectors/user.selectors";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  users$ = this.store.select(userSelectors.selectUsers);

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(userActions.GetUsers());
  }

}
