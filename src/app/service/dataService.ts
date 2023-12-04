import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../interface/User";

@Injectable({
  providedIn: 'root',
})
export class DataService {

  //properties
  private currentUser = new BehaviorSubject<User>({} as User);
  private


  //constructor
  constructor() {}

  //getters & setters

  setCurrentUser(user: User): void {
    this.currentUser.next(user);
  }

  getCurrentUser(): Observable<User> {
    return this.currentUser.asObservable();
  }
  //custom methods
}
