import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactsComponent } from "./contacts/contacts.component";
import { UpdateContactComponent } from "./update-contact/update-contact.component";

const routes: Routes = [
	{ path: "", component: ContactsComponent },
	{ path: "update/:id", component: UpdateContactComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
