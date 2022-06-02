import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CreateComponent } from './create/create.component';

import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LocalStorage } from './local-storage.service';
import { EditComponent } from './edit/edit.component';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';

const appRoutes: Routes = [
    //localhosh:4200/main
    { path: '', component: MainComponent },
    { path: 'create', component: CreateComponent },
    { path: 'edit', component: EditComponent }
];

@NgModule({
    imports:      [ 
        BrowserModule, 
        FormsModule, 
        ReactiveFormsModule, 
        RouterModule.forRoot(appRoutes)
    
    ],
    declarations: [ AppComponent, HeaderComponent, MainComponent, CreateComponent, EditComponent, CardComponent ],
    bootstrap:    [ AppComponent ],
    providers: [ LocalStorage ]
})
export class AppModule { }