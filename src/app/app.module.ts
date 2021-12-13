import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRippleModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ViewstockComponent } from './viewstock/viewstock.component';
import { TokenInterceptorService } from './services/token.service';
import { AuthGuard } from './auth.guard';
import { DescDialogComponent } from './edit-dialog/desc-dialog/desc-dialog.component';
import { PacksizeDialogComponent } from './edit-dialog/packsize-dialog/packsize-dialog.component';
import { QuantityDialogComponent } from './edit-dialog/quantity-dialog/quantity-dialog.component';
import { MeasurementDialogComponent } from './edit-dialog/measurement-dialog/measurement-dialog.component';
import { SpecificGravityDialogComponent } from './edit-dialog/specific-gravity-dialog/specific-gravity-dialog.component';
import { AddstockComponent } from './addstock/addstock.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { FilterPipe } from './filter-pipe/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    LoginComponent,
    FooterComponent,
    ViewstockComponent,
    DescDialogComponent,
    PacksizeDialogComponent,
    QuantityDialogComponent,
    MeasurementDialogComponent,
    SpecificGravityDialogComponent,
    AddstockComponent,
    AddCompanyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDividerModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatSelectModule,
    MatToolbarModule,
    MatRippleModule,
    MatTabsModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,

    MatTableModule,
    MatDialogModule,
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
