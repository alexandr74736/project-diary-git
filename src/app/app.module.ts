import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }   from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CreateComponent } from './create/create.component';
import { LocalStorage } from './local-storage.service';
import { EditComponent } from './edit/edit.component';
import { CardComponent } from './card/card.component';


@NgModule({
    imports:      [ 
        BrowserModule, 
        FormsModule, 
        ReactiveFormsModule,
        AppRoutingModule
    ],
    declarations: [ AppComponent, HeaderComponent, MainComponent, CreateComponent, EditComponent, CardComponent ],
    bootstrap:    [ AppComponent ],
    providers: [ LocalStorage ]
})

export class AppModule { }
