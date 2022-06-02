import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TaskPageComponent } from './task-page/task-page.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const appRoutes: Routes = [
    { path: '', component: MainComponent },
    { path: 'task/:id', component: TaskPageComponent },
    { path: 'create', component: CreateComponent },
    { path: 'edit', component: EditComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {

}