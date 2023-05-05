import { Component, Input } from "@angular/core";
import { Contact } from "../contacts/contact.model";

@Component({
	selector: "app-contact",
	templateUrl: "./contact.component.html",
	styleUrls: ["./contact.component.scss"],
})
export class ContactComponent {
	@Input() contacts: Contact | any = [];
}
