import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dangerousCode  = 'Template <script>alert("i am dangerous")</script> <b>Syntax</b>';
}
