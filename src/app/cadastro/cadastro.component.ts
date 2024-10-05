import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  user = {
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
    confirmaSenha: '',
  }

  constructor(private router: Router) {}


  cadastrarse(){
    if(this.user.nome && this.user.sobrenome && this.user.email && this.user.senha && this.user.confirmaSenha){
      localStorage.setItem('user', JSON.stringify(this.user));
      alert('cadastrado');
      this.router.navigate(['/login']);

    }else {
    alert('por favor, preencha todos os campos');
    }
  }

}