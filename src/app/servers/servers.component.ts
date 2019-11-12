import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
serverName = 'testServer';
serverCreated = false;
  allowNewServer = false;
  serverCreationStatus = 'No server was created, please create one';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }
  OnCreateServer() {
    this.serverCreated = true;
  this.serverCreationStatus = 'Server is Now Created and the name is ' + this.serverName;
  }
  onUpdateserverName(event: any) {
  this.serverName = (<HTMLInputElement>event.target).value;
  }
}
