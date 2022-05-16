import { ShellSdkConnector } from './../helper/shell-sdk-connector';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fsm-extension',
  templateUrl: './fsm-extension.component.html',
  styleUrls: ['./fsm-extension.component.css']
})
export class FsmExtensionComponent implements OnInit {

  private connector: ShellSdkConnector = new ShellSdkConnector();
  
  constructor() { }

  async ngOnInit(): Promise<void> { /*
    let UIContextList = '';

    if (this.connector.isInsideShell()) {
      const context = await this.connector.getContext();

      UIContextList = '<ul>';
      for (const [key, value] of Object.entries(context)) {
        UIContextList = UIContextList + (typeof value === 'object' ?
          '<li>' + `${key}: ${JSON.stringify(value)}` + '</li>' :
          '<li>' + `${key}: ${value}` + '</li>');
      }
      UIContextList = UIContextList + '</ul>'; 
    }
    this.updateUI(UIContextList); */
    this.updateUI('hejho');
  }

  updateUI(text: string) {
    (document.querySelectorAll('#info')[0] as any).innerHTML = text;
  }

}
