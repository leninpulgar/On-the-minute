import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HeaderBlankComponent } from './header-blank/header-blank.component';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { HeaderPurpleComponent } from './header-purple/header-purple.component';
import { ProgramsComponent } from './programs/programs.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { PlansComponent } from './create-account/plans/plans.component';
import { PaymentComponent } from './create-account/payment/payment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderDashboardComponent } from './header-dashboard/header-dashboard.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { AboutComponent } from './about/about.component';

import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog-post', component: BlogPostComponent },
  { path: 'programs', component: ProgramsComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'choose-plan', component: PlansComponent },
  { path: 'payment-method', component: PaymentComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: AboutComponent }
];

export const appRoutingModule = RouterModule.forRoot(appRoutes);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HeaderBlankComponent,
    LoginComponent,
    BlogComponent,
    BlogPostComponent,
    HeaderPurpleComponent,
    ProgramsComponent,
    CreateAccountComponent,
    PlansComponent,
    PaymentComponent,
    DashboardComponent,
    HeaderDashboardComponent,
    MyAccountComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
