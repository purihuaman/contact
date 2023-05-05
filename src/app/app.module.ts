import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { DataService } from "./services/data.service";
import { HttpClientModule } from "@angular/common/http";
import { ContactsComponent } from "./contacts/contacts.component";
import { ContactComponent } from './contact/contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';

@NgModule({
	declarations: [AppComponent, ContactsComponent, ContactComponent, UpdateContactComponent],
	imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
	providers: [DataService],
	bootstrap: [AppComponent],
})
export class AppModule {}
