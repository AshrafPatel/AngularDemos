import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent {
  serverText = 'This input has changed';
  onKeyType(event: any) { // without type info
    this.serverText = event.target.value;
  }

  checkDisabled() {
    if (this.serverText === '') {
      return true;
    }
    return false;
  }

  onClick() {
    this.serverText = '';
  }
}


