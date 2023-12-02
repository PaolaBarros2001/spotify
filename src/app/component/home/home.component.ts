import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private spotify:SpotifyService){
    this.spotify.getNewReleases();

  }
}
