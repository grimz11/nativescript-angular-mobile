import { Component } from "@angular/core";
import { UserModel } from "../shared/user/userModel";
import { UserService } from "../shared/user/user.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-login",
    providers: [UserService],
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent {
    public changeText: string = "";
    public user: UserModel;
    public isLogin: boolean = true;

    constructor(private router: Router, private userService: UserService) {
        this.user = new UserModel();
    }
    public submit() {
        this.isLogin ? this.login() : this.signUp();
    }
    public toggleSignDisplay() {
        this.isLogin = !this.isLogin;
    }
    private login() {
        this.userService.login(this.user).subscribe(
            () => this.router.navigate(["/list"]),
            error => alert("Unfortunately we could not find your account.")
        );
    }
    private signUp() {
        this.userService.register(this.user).subscribe(
            () => {
                alert("Your account was successfully created.");
                this.toggleSignDisplay();
            },
            () => alert("Unfortunately we were unable to create your account.")
        );
    }
}
