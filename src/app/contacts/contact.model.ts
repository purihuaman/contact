import { v4 as uuidv4 } from "uuid";

export class Contact {
	id: string = "";
	firstname: string = "";
	surname: string = "";
	email: string = "";
	phoneNumber: number = 0;

	constructor(
		firstname: string,
		surname: string,
		email: string,
		phoneNumber: number
	) {
		this.id = uuidv4();
		this.firstname = firstname;
		this.surname = surname;
		this.email = email;
		this.phoneNumber = phoneNumber;
	}
}
