import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server was created!";
  serverName: string = 'Test Server';
  username: string = '';
  serverCreated: boolean = false;
  servers = ['Server 1', 'Server 2'];
  showSecret = false;
  log = [];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created with name as ${this.serverName} !`;
    this.serverCreated = true
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    //this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
