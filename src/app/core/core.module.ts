import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';

const components = [HeaderComponent, SidebarComponent, FooterComponent, ContentComponent];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: components,
  exports: components
})
export class CoreModule { }
