import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {FullWidthComponent} from './full-width/full-width.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    FullWidthComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    CovalentLayoutModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    FullWidthComponent,
    HeaderComponent,
    FooterComponent,
  ]
})
export class LayoutsModule {
}
