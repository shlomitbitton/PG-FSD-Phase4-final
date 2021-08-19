import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
// import { ListCustomersComponent } from './list-customers/list-customers.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { ResultComponent } from './result/result.component';
import { QuizComponent } from './quiz/quiz.component';
import { ReviewComponent } from './review/review.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
// import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, //canActivated , RouteGuardService
  { path: 'login', component: LoginComponent},
  { path: 'result', component: ResultComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'user', component: UserComponent },
  { path: 'home', component: HomeComponent , canActivate:[RouteGuardService]},
  // { path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService]},
  // { path: 'customers', component: ListCustomersComponent, canActivate:[RouteGuardService] },
  { path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService]},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }