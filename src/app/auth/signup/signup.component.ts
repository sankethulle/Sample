import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { AuthService } from "../auth.service";

@Component({
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit,OnDestroy {
  isLoading = false;
  private authSubscription: Subscription;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authSubscription = this.authService.getAuthStatusListener().subscribe(isAuth => {
      this.isLoading = false;
    });
  }

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.createUser(form.value.email, form.value.password);
  }
  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
