import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { SubmitComponent } from './adminlogin/submit/submit.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ServicesComponent } from './services/services.component';
import { CreataccountComponent } from './userlogin/creataccount/creataccount.component';
import { LoginComponent } from './userlogin/login/login.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'services', component:ServicesComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'userlogin',component:UserloginComponent,children:[
    {path:'creataccount',component:CreataccountComponent},
    {path:'login',component:LoginComponent}
  ]},
  {path:'adminlogin',component:AdminloginComponent,children:[
    {path:'submit',component:SubmitComponent}
  ]},
  {path:'',redirectTo:'home',pathMatch:"full"},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
