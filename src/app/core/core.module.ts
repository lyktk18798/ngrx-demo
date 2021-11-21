import {NgModule} from "@angular/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {userReducer} from "../state/reducers/user.reducers";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../../environments/environment";
import {EffectsModule} from "@ngrx/effects";
import {UserServices} from "../shared/services/user.services";
import {UserEffects} from "../state/effects/user.effects";

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({
      user: userReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
    EffectsModule.forRoot([
      UserEffects,
    ])
  ],
  providers: [
    UserServices
  ],
})
export class CoreModule {}
