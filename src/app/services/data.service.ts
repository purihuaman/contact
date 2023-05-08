import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Contact } from "../contacts/contact.model";
import { LoginService } from "../login/login.service";

@Injectable({
	providedIn: "root",
})
export class DataService {
	private URL_DATA: string =
		"https://mis-contactos-cc490-default-rtdb.firebaseio.com/datos.json";

	constructor(private http: HttpClient, private loginService: LoginService) {}

	saveContacts(contacts: Contact[]) {
		const token = this.loginService.getIdToken();

		this.http
			.put(`${this.URL_DATA}?auth=${token}`, contacts)
			.subscribe((resp) => console.log(resp));
	}

	getContacts() {
		const token = this.loginService.getIdToken();

		return this.http.get<Contact[]>(`${this.URL_DATA}?auth=${token}`);
	}

	updateContact(index: number, contact: Contact) {
		const token = this.loginService.getIdToken();
		let url =
			this.URL_DATA.replace(".json", "/") + index + ".json?auth=" + token;

		this.http.put(url, contact).subscribe();
	}

	deleteContact(index: number): void {
		const token = this.loginService.getIdToken();
		let url =
			this.URL_DATA.replace(".json", "/") + index + ".json?auth=" + token;

		this.http.delete(url).subscribe(
			(respo) => console.log("Se ha eliminado el empleado ", respo),
			(error) => console.log("Error: ", error)
		);
	}
}
