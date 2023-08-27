import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SeoService } from '../../shared/services/seo.service';
import { videos } from 'src/assets/files/galerie';

@Component({
  selector: 'app-galerievideo',
  templateUrl: './galerievideo.component.html',
  styleUrls: ['./galerievideo.component.css']
})
export class GalerievideoComponent {
  videos = videos;
  constructor(private seo: SeoService, private sanitizer: DomSanitizer) { }
  getEmbedUrl(video: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video)
  }
}