import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})

export class LoaderComponent {

  mode = 'indeterminate';
  value = 50;
  isLoading: Subject<boolean> = this.loaderService.isProgress;

  constructor(private loaderService: LoaderService) { }

}