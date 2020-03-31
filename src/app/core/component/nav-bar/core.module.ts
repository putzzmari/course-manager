import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from '../error-404/error-404.component';

@NgModule({
    declarations: [
        NavBarComponent,
        Error404Component
    ],
    imports: [
        RouterModule.forChild([
            // redireciona quando n encontra o a pagina
            {
                path: '**',
                component: Error404Component
            }
        ])
    ],
    exports: [
        NavBarComponent
    ]
})

export class CoreModule {

}