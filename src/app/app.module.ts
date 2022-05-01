import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FooterComponent} from './layout/footer/footer.component';
import {HeaderComponent} from './layout/header/header.component';
import {LoginComponent} from './layout/login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {AsideComponent} from './layout/aside/aside.component';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import {UserComponent} from './model/user/user.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { BanksComponent } from './views/banks/banks.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: '/bank/list', component: BanksComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    AsideComponent,
    DashboardComponent,
    UserComponent,
    BanksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
