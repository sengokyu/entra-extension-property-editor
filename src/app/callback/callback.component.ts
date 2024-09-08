import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-callback',
  standalone: true,
  imports: [],
  template: ` <p>callback works!</p> `,
  styles: ``,
})
export class CallbackComponent implements OnInit {
  constructor(private readonly oidcSecurityService: OidcSecurityService) {}

  ngOnInit(): void {
    this.oidcSecurityService.checkAuth().subscribe((loginResponse) => {
      console.log(loginResponse);
    });
  }
}
