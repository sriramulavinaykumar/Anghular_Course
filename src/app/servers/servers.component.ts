import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  serverId: number = 10;
  serverStatus: String = 'name of the server status';

  getServerStatus(){
  return this.serverStatus;
  }

  // constructor() { }

  // ngOnInit() {
  // }

}
