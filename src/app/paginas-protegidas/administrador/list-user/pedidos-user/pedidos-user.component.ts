import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PedidosUsuarioService } from '../../services/pedidos-user-componente.service';

@Component({
  selector: 'app-pedidos-user',
  templateUrl: './pedidos-user.component.html',
  styleUrls: ['./pedidos-user.component.css']
})
export class PedidosUserComponent implements OnInit {

  constructor(private route: ActivatedRoute,private pedidoUserService:PedidosUsuarioService) { }

  ngOnInit(): void {

  }

  idUsuario:string=this.route.snapshot.paramMap.get('id')!;

}
