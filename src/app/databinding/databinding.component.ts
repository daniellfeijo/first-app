import { Component, OnInit } from '@angular/core';

import {PropertyBindigComponent} from './property-binding.component'

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
  directives: [PropertyBindigComponent]
})
export class DatabindingComponent {
  stringInterpolation = 'This is string Interpolation';
  numberInterpolation = 2;

  onTest(){
    return true;
  }
}
