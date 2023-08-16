import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";

@Component({
	selector: "logmine-button",
	templateUrl: "./logmine-button.component.html",
	styleUrls: ["./logmine-button.component.css"],
})
export class LogmineButtonComponent implements OnInit, OnChanges {
	@Input() label: string = "button";
	@Input() active: boolean = false;
	@Input() selectedButton: boolean = false;

	ngOnInit() {}

	ngOnChanges() {
		console.log(this.active);
	}
}
