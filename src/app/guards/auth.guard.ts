import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { VariousRoutingsComponent } from "../components/prep-routing/various-routings/various-routings.component";

export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<VariousRoutingsComponent>, CanLoad {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (route.url.toString() !== 'random') {
      return true;
    }
    return false;
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // if(childRoute.url.toString() === 'childA') {
    //   return false;
    // }
    return true;
  }
  canDeactivate(component: VariousRoutingsComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(component.selectedComp.name.toLowerCase() === 'forms') {
      return false;
    }
    return true;
  }
  canLoad(route2: Route, segments: UrlSegment[]): Observable<boolean>|Promise<boolean>|boolean {
    return false;
  }
}