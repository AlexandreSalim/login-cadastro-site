import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrl: './pagina1.component.scss'
})
export class Pagina1Component implements OnInit{

  carouselItems: any[] = Array(5).fill(''); // Adicione mais itens conforme necessário
  combinedItems = [...this.carouselItems, ...this.carouselItems]; // Duplica os itens para criar o loop contínuo

  @ViewChild('carouselTrack') carouselTrack!: ElementRef;

  icone: any[] = [
    { nome: 'menu', texto: 'Menu' },
    { nome: 'close', texto: 'Close' },
    { nome: 'settings', texto: 'Settings' },
    { nome: 'favorite', texto: 'Favorite' },
    { nome: 'add', texto: 'Add' }
  ]


  // Métodos para controlar a velocidade
  slowDown() {
    this.carouselTrack.nativeElement.style.animationDuration = '315s'; // Diminui a velocidade ao passar o mouse
    console.log('para')
  }

  speedUp() {
    this.carouselTrack.nativeElement.style.animationDuration = '300s'; // Volta à velocidade original ao remover o mouse
    console.log('para2')
  }

  ngOnInit(): void {
  }

}
