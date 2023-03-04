import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RegisterEncadrantComponent } from './register-encadrant/register-encadrant.component';
import { RegisterEtudiantComponent } from './register-etudiant/register-etudiant.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { ExampleComponent } from './example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RegisterEncadrantComponent,
    RegisterEtudiantComponent,
    FooterComponent,
    ExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      toastClass: 'toast-dark',
      titleClass: 'toast-title-white',
      timeOut: 5000,
      progressBar: true,
      progressAnimation: 'decreasing',
      closeButton: true,
      easing: 'ease-in-out',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
