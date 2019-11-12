import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {

  serverId: number = 10;
  serverStatus: String = 'name of the server status';

  getServerStatus() {
  return this.serverStatus;
  }
}