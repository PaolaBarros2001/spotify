import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { PlaylistComponent } from './component/playlist/playlist.component';
import { AlbumComponent } from './component/album/album.component';*/
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SpotifyService } from './services/spotify.service';

@NgModule({
  declarations: [
    AppComponent
   
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule,
    NgModule,
    FontAwesomeModule,
    HttpClientModule,
    HttpClient,
    FormsModule
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }