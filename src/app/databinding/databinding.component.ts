import { Component, OnInit } from '@angular/core';

import {PropertyBindingComponent} from './property-binding.component';

@Component({
  selector: 'fa-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
})
export class DatabindingComponent {
  stringInterpolation = 'This is string Interpolation';
  numberInterpolation = 2;

  onTest(){
    return true;
  }
}
