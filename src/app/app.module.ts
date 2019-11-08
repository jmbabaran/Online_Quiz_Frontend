import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule, 
  MatListModule, 
  MatToolbarModule, 
  MatExpansionModule, 
  MatRadioModule,
  MatDialogModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { QuestionsComponent } from './questions.component';
import { RouterModule } from '@angular/router'
import { HomeComponent } from './home.component'
import { NavComponent } from './nav.component'
import { QuizComponent } from './quiz.component'
import { QuizzesComponent } from './quizzes.component'
import { RegisterComponent } from './register.component'
import { AuthService } from './auth.service'
import { AuthInterceptor } from './auth.interceptor'
import { LoginComponent } from './login.component'
import { PlayComponent } from './play.component'
import { PlayQuizComponent } from './playQuiz.component'
import { FinishComponent } from './finished.component'

const routes = [
  { path: '', component: HomeComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'question/:quizId', component: QuestionComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'quizzes', component: QuizComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'play', component: PlayComponent },
  { path: 'playQuiz/:quizId', component: PlayQuizComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsComponent,
    HomeComponent,
    NavComponent,
    QuizComponent,
    QuizzesComponent,
    RegisterComponent,
    LoginComponent,
    PlayComponent,
    PlayQuizComponent,
    FinishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatListModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatExpansionModule,
    MatRadioModule,
    MatDialogModule


  ],
  providers: [
    ApiService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents : [FinishComponent]
})
export class AppModule { }
