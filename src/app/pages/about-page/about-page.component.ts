import { Component } from '@angular/core';
import {NgOptimizedImage, NgStyle} from "@angular/common";
import {CardModule} from "primeng/card";
import {ImageModule} from "primeng/image";


@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgStyle,
    CardModule,
    ImageModule
  ],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {

}
