import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [NgOptimizedImage],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  @Input() path: string = '';
  @Input() alt: string= '';
  @Input() navBarMenuItens: Array<string> = []

}
