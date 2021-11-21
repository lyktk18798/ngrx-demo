import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MainComponent} from "./main/main.component";

const routes = [
  {
    path: '',
    component: MainComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
