import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponent } from './ui/input/input.component';
import { LoginComponent } from './Pages/login/login.component';
import { ForgotComponent } from './Pages/forgot/forgot.component';
import { DraggableComponent } from './ui/draggable/draggable.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    LoginComponent,
    ForgotComponent,
    DraggableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
