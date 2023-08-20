import { NgModule } from "@angular/core";
import { BrowserModule, DomSanitizer } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LogmineHeaderComponent } from "./logmine-header/logmine-header.component";
import { LogmineBodyComponent } from "./logmine-body/logmine-body.component";
import { LogmineFooterComponent } from "./logmine-footer/logmine-footer.component";
import { LogmineButtonComponent } from "./logmine-button/logmine-button.component";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
	declarations: [
		AppComponent,
		LogmineHeaderComponent,
		LogmineBodyComponent,
		LogmineFooterComponent,
		LogmineButtonComponent,
	],
	imports: [BrowserModule, AppRoutingModule, MatIconModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {
	constructor(private sanitizer: DomSanitizer, private matIconRegistry: MatIconRegistry) {
		matIconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl("./assets/mdi.svg"));
	}
}
