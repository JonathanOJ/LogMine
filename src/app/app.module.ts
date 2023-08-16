import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LogmineHeaderComponent } from "./logmine-header/logmine-header.component";
import { LogmineBodyComponent } from "./logmine-body/logmine-body.component";
import { LogmineFooterComponent } from "./logmine-footer/logmine-footer.component";
import { LogmineButtonComponent } from './logmine-button/logmine-button.component';

@NgModule({
	declarations: [AppComponent, LogmineHeaderComponent, LogmineBodyComponent, LogmineFooterComponent, LogmineButtonComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
