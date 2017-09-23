import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BodyComponent } from './body/body.component'
import { ContactusComponent } from './contactus/contactus.component'
import { GalleryComponent } from './gallery/gallery.component'
    
const routes: Routes = [
    { path: '', component: BodyComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }