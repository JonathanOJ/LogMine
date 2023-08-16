import { Component } from "@angular/core";

@Component({
	selector: "logmine-header",
	templateUrl: "./logmine-header.component.html",
	styleUrls: ["./logmine-header.component.css"],
})
export class LogmineHeaderComponent {
	activeEntrar: boolean = true;
	activeForum: boolean = false;
	activeSobre: boolean = false;
	activeMojang: boolean = false;
	activePerguntas: boolean = false;

	selectButton(labelButton: string) {
		this.activeEntrar = false;
		this.activeForum = false;
		this.activeSobre = false;
		this.activeMojang = false;
		this.activePerguntas = false;

		switch (labelButton) {
			case "ENTRAR":
				this.activeEntrar = true;
				break;
			case "FORUM":
				this.activeForum = true;
				break;
			case "SOBRE":
				this.activeSobre = true;
				break;
			case "MOJANG":
				this.activeMojang = true;
				break;
			case "PERGUNTAS":
				this.activePerguntas = true;
				break;
		}
	}
}
