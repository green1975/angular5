import { Component, OnInit } from '@angular/core';
import { Infos } from './infos';
import { INFOS } from './mock_infos';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.less']
})
export class InformationComponent implements OnInit {

  constructor() { }
  infos = INFOS;
  ngOnInit() {
  }

}
