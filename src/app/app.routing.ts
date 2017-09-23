import { RouterModule  }     from '@angular/router';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

export const routing = RouterModule.forRoot([
    { path: '', component: BodyComponent},
    { path: 'home', component: BodyComponent},
    { path: 'contactus', component: FooterComponent},
    { path: '**', redirectTo: 'home' }
]);

