import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, OnDestroy {
  currentIndex = 0; // Índice do slide atual
  loginData = {
    email: '',
    senha: '',
    site: '',
  }

  icone: any[] = [
    { nome: 'menu', texto: 'Menu' },
    { nome: 'close', texto: 'Close' },
    { nome: 'settings', texto: 'Settings' },
  ];

  timeoutId: any; // Para armazenar o ID do timeout

  constructor(private router: Router) { }

  ngOnInit() {
    this.addClassWithTimeout();
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearInterval(this.timeoutId); // Corrigido para clearInterval
    }
  }

  addClassWithTimeout() {
    this.timeoutId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  // Navegação para o próximo slide
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.icone.length;
  }

  // Navegação para o slide anterior
  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.icone.length) % this.icone.length;
  }

  login() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);

      if (user.email === this.loginData.email && user.senha === this.loginData.senha) {
        alert("login realizado");
        this.router.navigate(['/site'])
      } else {
        alert('senha ou nome errado');
      }
    } else {
      alert('Usuário não encotrado. Por favor, cadastre-se.')
    }
  }
}
