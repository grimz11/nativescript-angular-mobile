import { Component, OnInit } from "@angular/core";
import { UserModel } from "../shared/user/userModel";
import { UserService } from "../shared/user/user.service";
import { Router } from "@angular/router";
import {Page} from 'tns-core-modules/ui/page';

@Component({
    selector: "app-login",
    providers: [UserService],
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit{
    public changeText: string = "";
    public user: UserModel;
    public isLogin: boolean = true;

    constructor(private router: Router, private userService: UserService, private page: Page) {
        this.user = new UserModel();
        console.log('constructor')
    }
    public ngOnInit() {
        console.log('ngOnInit')
        this.page.actionBarHidden = true;
        // this.page.backgroundImage = "res://bg_login";
    }
    public submit() {
        this.isLogin ? this.login() : this.signUp();
    }
    public toggleSignDisplay() {
        this.isLogin = !this.isLogin;
    }
    private login() {
        console.log('xxxx');
        this.router.navigate(["/menu"]);
        // this.userService.login(this.user).subscribe(
        //     () => this.router.navigate(["/list"]),
        //     error => alert("Unfortunately we could not find your account.")
        // );
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
