import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RuleListComponent } from './rules/rule-list.component';
import { FormsModule} from '@angular/forms';
import { FactComponent } from './facts/fact.component';

@NgModule({
  declarations: [
    AppComponent,
    RuleListComponent,
    FactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
