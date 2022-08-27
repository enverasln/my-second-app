import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AddFormComponent } from './add-form/add-form.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { ServiceComponent } from './service.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    AddFormComponent,
    SuccessComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
