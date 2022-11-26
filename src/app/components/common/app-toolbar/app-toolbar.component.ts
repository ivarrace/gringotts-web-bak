import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/shared/auth.service'

@Component({
    selector: 'app-app-toolbar',
    templateUrl: './app-toolbar.component.html',
    styleUrls: ['./app-toolbar.component.css'],
})
export class AppToolbarComponent implements OnInit {
    constructor(public authService: AuthService) {}

    ngOnInit(): void {
        //this.isLoggedIn = this.authService.isLoggedIn
    }

    logout() {
        this.authService.doLogout()
    }
}
