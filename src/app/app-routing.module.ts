import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { MainMenuComponent } from './Components/main-menu/main-menu.component';
import { ClaimsComponent } from './Components/side-menu-components/claims/claims.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';

const routes: Routes = [
   { path: '', component: LoginComponent },
  // { path: 'main', component: MainMenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
