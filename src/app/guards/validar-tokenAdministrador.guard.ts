import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, map, Observable, of } from "rxjs";
import Swal from "sweetalert2";
import { AuthService } from "../auth/services/auth.service";

@Injectable({
    providedIn: 'root'
})
export class ValidarRolAdminGuard implements CanActivate {

  constructor( private authService: AuthService, private router: Router ){}

  /**
   * Metodo que se ocupa de validar en siertas paginas si el token es valido y del administrador para permitirle acceder a esas paginas
   * @param route
   * @param state
   * @returns
   */

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean>| any {
    let access=false;

    return this.authService.validarTokenRolAdministrador()
    .pipe(
        map( (resp) => {
          return true;
        }),
        catchError( (err) => {
          Swal.fire('Solo administradores');
          this.router.navigateByUrl('');
          return of(false)
        })
      )
  }

}
