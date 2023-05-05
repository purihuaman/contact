import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Contact } from "../contacts/contact.model";

@Injectable({
	providedIn: "root",
})
export class DataService {
	private URL_DATA: string =
		"https://mis-contactos-cc490-default-rtdb.firebaseio.com/datos.json";

	constructor(private http: HttpClient) {}

	saveContacts(contacts: Contact[]) {
		this.http
			.put(this.URL_DATA, contacts)
			.subscribe((resp) => console.log(resp));
	}

	getContacts() {
		return this.http.get<Contact[]>(this.URL_DATA);
	}

	updateContact(index: number, contact: Contact) {
		let url = this.URL_DATA.replace(".json", "/") + index + ".json";

		this.http.put(url, contact).subscribe();
	}

	deleteContact(index: number): void {
		let url = this.URL_DATA.replace(".json", "/") + index + ".json";

		this.http.delete(url).subscribe(
			(respo) => console.log("Se ha eliminado el empleado ", respo),
			(error) => console.log("Error: ", error)
		);
	}
}
