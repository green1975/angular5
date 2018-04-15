import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MzButtonModule, MzInputModule } from 'ng2-materialize';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InformationComponent } from './information/information.component';
import { RouterModule, Routes } from '@angular/router';
import { AnnonceComponent } from './annonce/annonce.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { ForumComponent } from './forum/forum.component';
import { PanierComponent } from './panier/panier.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';


const appRoutes: Routes = [
  { path: 'information', component: InformationComponent },
  { path: 'forum',       component: ForumComponent },
  { path: 'annonce',     component: AnnonceComponent },
  { path: 'boutique',    component: BoutiqueComponent},
  { path: 'panier',      component: PanierComponent},
  { path: 'login',       component: LoginComponent},
  { path: 'admin',       component: AdminComponent},
  { path: '',
    redirectTo: '/information',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    InformationComponent,
    AnnonceComponent,
    BoutiqueComponent,
    ForumComponent,
    PanierComponent,
    LoginComponent,
    PageNotFoundComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MzButtonModule,
    MzInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
