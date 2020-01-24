import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './User/user-list/user-list.component';
import { UserCreateComponent } from './User/user-create/user-create.component';
import { UserEditComponent } from './User/user-edit/user-edit.component';
import { LoanListComponent } from './Loan/loan-list/loan-list.component';
import { LoanCreateComponent } from './Loan/loan-create/loan-create.component';
import { BookListComponent } from './Book/book-list/book-list.component';
import { BookCreateComponent } from './Book/book-create/book-create.component';
import { BookEditComponent } from './Book/book-edit/book-edit.component';
import { HomeComponent } from './home/home.component';
import { TopNavVarComponent } from './top-nav-var/top-nav-var.component';
import { FormsModule } from '@angular/forms';
import { UserDetailsComponent } from './User/user-details/user-details.component';
import { BookDetailsComponent } from './Book/book-details/book-details.component';
import { TestValidatorComponent } from './test-validator/test-validator.component';
import { UserValidatorComponent } from './User/user-validator/user-validator.component';
import { UserValidatorDebtsComponent } from './User/user-validator-debts/user-validator-debts.component';



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserCreateComponent,
    UserEditComponent,
    LoanListComponent,
    LoanCreateComponent,
    BookListComponent,
    BookCreateComponent,
    BookEditComponent,
    HomeComponent,
    TopNavVarComponent,
    UserDetailsComponent,
    BookDetailsComponent,
    TestValidatorComponent,
    UserValidatorComponent,
    UserValidatorDebtsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,

    RouterModule.forRoot([
      { path: 'Validator', component: TestValidatorComponent },
      { path: 'User', component: UserListComponent },
      { path: 'User/Create', component: UserCreateComponent },
      { path: 'User/Edit/:id', component: UserEditComponent },
      { path: 'User/Details/:id', component: UserDetailsComponent },

      { path: 'User/Details/UserValidator/:id', component: UserValidatorComponent },
      { path: 'User/Details/Debts/:id', component: UserValidatorDebtsComponent },

      { path: 'Book', component: BookListComponent },
      { path: 'Book/Create', component: BookCreateComponent },
      { path: 'Book/Edit/:id', component: BookEditComponent },
      { path: 'Book/Detail/:id', component: BookDetailsComponent },

      { path: 'Loan', component: LoanListComponent },
      { path: 'Loan/Create', component: LoanCreateComponent },

      { path: 'Home', component: HomeComponent },
      { path: '', component: HomeComponent }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
