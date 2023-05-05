import { Component } from "@angular/core";
import { Contact } from "../contacts/contact.model";
import { ActivatedRoute, Router } from "@angular/router";
import { ContactsService } from "../services/contacts.service";

@Component({
	selector: "app-update-contact",
	templateUrl: "./update-contact.component.html",
	styleUrls: ["./update-contact.component.scss"],
})
export class UpdateContactComponent {
	title: string = "";
	contacts: Contact[] = [];

	firstname: string = "";
	surname: string = "";
	email: string = "";
	phoneNumber: number = 0;

	idParam: number = 0;
	queryParam: string = "";
	action: string = "";

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private contactService: ContactsService
	) {}

	ngOnInit(): void {
		this.contacts = this.contactService.contacts;
		this.idParam = parseInt(this.route.snapshot.params["id"]);

		const myContact: Contact = this.contactService.findContact(this.idParam);

		this.firstname = myContact?.firstname;
		this.surname = myContact?.surname;
		this.email = myContact?.email;
		this.phoneNumber = myContact?.phoneNumber;

		// Changing the text and class of the button
		this.queryParam = this.route.snapshot.queryParams["accion"];
		this.queryParam === Actions.eliminar && (this.action = "eliminar");
		this.queryParam === Actions.actualizar && (this.action = "actualizar");

		this.title = this.action + " contacto";
	}

	updateContact(): void {
		const myContact = new Contact(
			this.firstname,
			this.surname,
			this.email,
			this.phoneNumber
		);

		this.contactService.updateContact(this.idParam, myContact);
		this.router.navigate([""]);
	}

	deleteContact(): void {
		this.contactService.deleteContact(this.idParam);

		this.router.navigate([""]);
	}

	deleteAndUpdateAction(): void {
		switch (this.queryParam) {
			case Actions.eliminar:
				this.deleteContact();
				break;
			case Actions.actualizar:
				this.updateContact();
				break;
		}
	}
}

enum Actions {
	"eliminar" = "0",
	"actualizar" = "1",
}
