import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {User} from "../../state/models/user.models";

@Injectable()
export class UserServices {
  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    return of([
      {
        email: "lilly@gmail.com",
        name: "Lilly"
      }
    ])
  }
}
