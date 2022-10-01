import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.css']
})
export class skeletonComponent implements OnInit {

  constructor(
    private authService: AuthService) { }

  ngOnInit(): void {
  }


  signOut() {
    localStorage.removeItem('userId');
    this.authService.logOut();
  }

}
