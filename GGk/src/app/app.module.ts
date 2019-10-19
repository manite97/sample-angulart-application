import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule,routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnrollmentService} from'./enrollment.service'
import {HttpClientModule} from '@angular/common/http';
import { ViewComponent } from './view/view.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
      routingComponent,
      ViewComponent,
      SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [EnrollmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
