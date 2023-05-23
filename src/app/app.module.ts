import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { MainMenuComponent } from './Components/main-menu/main-menu.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { ClaimsComponent } from './Components/side-menu-components/claims/claims.component';
import { MembersComponent } from './Components/side-menu-components/members/members.component';
import { ProvidersComponent } from './Components/side-menu-components/providers/providers.component';
import { ClaimAdjustmentsComponent } from './Components/side-menu-components/claim-adjustments/claim-adjustments.component';
import { EncountersComponent } from './Components/side-menu-components/encounters/encounters.component';
import { SharedService } from './services/shared.service';
import { LoginComponent } from './Components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    MainMenuComponent,
    NavBarComponent,
    ClaimsComponent,
    MembersComponent,
    ProvidersComponent,
    ClaimAdjustmentsComponent,
    EncountersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  

  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
