import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AddstockComponent } from './addstock/addstock.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { ViewstockComponent } from './viewstock/viewstock.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path:'view-stock',
    component: ViewstockComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'add-stock',
    component:AddstockComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'add-company',
    component:AddCompanyComponent,
    canActivate: [AuthGuard]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
