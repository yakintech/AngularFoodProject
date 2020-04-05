import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ContactComponent } from './contact/contact.component';
import { PersonalComponent } from './personal/personal.component';
import { FooddetailComponent } from './fooddetail/fooddetail.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddfoodComponent } from './addfood/addfood.component';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { PersonaldetailComponent } from './personaldetail/personaldetail.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fooddetail/:id', component: FooddetailComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin/addfood', component: AddfoodComponent },
  { path: 'admin/foodlist', component: FoodlistComponent },
  { path: 'personaldetail/:id', component: PersonaldetailComponent },
  { path: '**', component: PagenotfoundComponent }


];


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopmenuComponent,
    AboutComponent,
    FooterComponent,
    ContentComponent,
    ContactComponent,
    PersonalComponent,
    FooddetailComponent,
    HomeComponent,
    PagenotfoundComponent,
    AddfoodComponent,
    FoodlistComponent,
    PersonaldetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
    ]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
