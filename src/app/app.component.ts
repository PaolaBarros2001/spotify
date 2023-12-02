import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SpotifyService } from './services/spotify.service';
///import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularspotify';
  constructor(private spotify:SpotifyService){
    this.spotify.getNewReleases();
  
  }
}

