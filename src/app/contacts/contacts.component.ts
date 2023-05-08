import { Component } from "@angular/core";
import { ContactsService } from "../services/contacts.service";
import { Contact } from "./contact.model";
import { v4 as uuidv4 } from "uuid";

@Component({
	selector: "app-contacts",
	templateUrl: "./contacts.component.html",
	styleUrls: ["./contacts.component.scss"],
})
export class ContactsComponent {
	title: string = "Mis contactos";
	contacts: Contact[] = [];

	firstname: string = "";
	surname: string = "";
	email: string = "";
	phoneNumber: number = 0;

	constructor(private contactsService: ContactsService) {}

	ngOnInit(): void {
		this.contactsService.loadContacts().subscribe((contact) => {
			this.contacts = Object.values(contact);
			this.contactsService.setContacts(this.contacts);
		});
	}

	saveContact(): void {
		if (
			this.firstname === "" ||
			this.surname === "" ||
			this.email === "" ||
			this.phoneNumber === 0
		) {
			console.log("Falta rellenar los datos");
		} else {
			const myContact: Contact = new Contact(
				this.firstname.toLowerCase(),
				this.surname.toLowerCase(),
				this.email.toLowerCase(),
				this.phoneNumber
			);

			this.contactsService.saveContact(myContact);
			this.cleanFields();
		}
	}

	cleanFields(): void {
		this.firstname = "";
		this.surname = "";
		this.email = "";
		this.phoneNumber = 0;
	}
}
