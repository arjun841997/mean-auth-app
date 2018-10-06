  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';

  import { FormsModule } from '@angular/forms';
  import { HttpModule } from '@angular/http';
  import {RouterModule, Routes} from '@angular/router';

  import { AppComponent } from './app.component';
  import { NavbarComponent } from './components/navbar/navbar.component';
  import { LoginComponent } from './components/login/login.component';
  import { RegisterComponent } from './components/register/register.component';
  import { HomeComponent } from './components/home/home.component';
  import { DashboardComponent } from './components/dashboard/dashboard.component';
  import { AddProductComponent } from './components/add-product/add-product.component';
  import { InventoryComponent } from './components/inventory/inventory.component';

  import { ProfileComponent } from './components/profile/profile.component';
  import { DataTablesModule } from 'angular-datatables';

  import { ValidateService } from './services/validate.service';
  import { AuthService } from './services/auth.service';
  import { ProductService } from './services/product.service';
  import { FlashMessagesModule } from 'angular2-flash-messages';
  import { AuthGuard } from './guards/auth.guard';
  import { AngularFontAwesomeModule } from 'angular-font-awesome';


  const appRoutes: Routes =  [
    {path:'', component: HomeComponent},
    {path:'register', component: RegisterComponent},
    {path:'login', component: LoginComponent},
    {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
    {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
    {path:'add-product', component: AddProductComponent, canActivate:[AuthGuard]},
    {path:'inventory', component: InventoryComponent}
  ]

  @NgModule({
    declarations: [
      AppComponent,
      NavbarComponent,
      LoginComponent,
      RegisterComponent,
      HomeComponent,
      DashboardComponent,
      ProfileComponent,
      AddProductComponent,
      InventoryComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      DataTablesModule,
      AngularFontAwesomeModule,
      RouterModule.forRoot(appRoutes),
      FlashMessagesModule.forRoot()
    ],
    providers: [ValidateService, AuthService, AuthGuard, ProductService ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
