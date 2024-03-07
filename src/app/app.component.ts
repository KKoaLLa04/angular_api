import { Component } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'api';

  data: any;
  constructor(private user: UserService){
      this.user.getData().subscribe(data => {
        console.warn(data);
        this.data = data;
      })
  }


}
