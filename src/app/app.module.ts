import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent }   from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CreateComponent } from './create/create.component';
import { LocalStorage } from './local-storage.service';
import { TasksService } from './tasks.service'; // test
import { EditComponent } from './edit/edit.component';
import { TaskPageComponent } from './task-page/task-page.component';


@NgModule({
    imports:      [ 
        BrowserModule, 
        FormsModule, 
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule
    ],
    declarations: [ AppComponent, HeaderComponent, MainComponent, CreateComponent, EditComponent, TaskPageComponent ],
    bootstrap:    [ AppComponent ],
    providers: [ LocalStorage, TasksService ]
})

export class AppModule { }
