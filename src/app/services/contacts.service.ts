import { Injectable } from "@angular/core";
import { Contact } from "../contacts/contact.model";
import { DataService } from "./data.service";

@Injectable({
	providedIn: "root",
})
export class ContactsService {
	constructor(private httpData: DataService) {}

	// contacts: Contact[] = [
	// 	new Contact(
	// 		uuidv4(),
	// 		"pedro",
	// 		"purihuaman",
	// 		"purihuaman@gmail.com",
	// 		"000999888"
	// 	),
	// 	new Contact(
	// 		uuidv4(),
	// 		"alison",
	// 		"purihuaman",
	// 		"alison@gmail.com",
	// 		"111333222"
	// 	),
	// 	new Contact(
	// 		uuidv4(),
	// 		"hailee",
	// 		"steinfeld",
	// 		"haileesteinfeld@gmail.com",
	// 		"111333222"
	// 	),
	// ];

	contacts: Contact[] = [];

	findContact(index: number): Contact {
		const myContact: Contact = this.contacts[index];

		return myContact;
	}

	saveContact(contact: Contact): void {
		this.contacts.push(contact);
		this.httpData.saveContacts(this.contacts);
	}

	updateContact(index: number, contact: Contact) {
		const updatedContact: Contact = this.contacts[index];

		updatedContact.firstname = contact.firstname;
		updatedContact.surname = contact.surname;
		updatedContact.email = contact.email;
		updatedContact.phoneNumber = contact.phoneNumber;

		this.httpData.updateContact(index, contact);
	}

	deleteContact(index: number): void {
		if (confirm("¿Desea eliminar el contacto?")) {
			this.contacts.splice(index, 1);
			this.httpData.deleteContact(index);

			if (this.contacts !== null) this.httpData.saveContacts(this.contacts);
		}
	}

	loadContacts() {
		return this.httpData.getContacts();
	}

	setContacts(myContacts: Contact[]): void {
		this.contacts = myContacts;
	}
}
