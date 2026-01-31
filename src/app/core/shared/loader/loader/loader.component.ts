import { Component, inject } from '@angular/core';
import { LoaderService } from '../../../services/loader/loader.service';

@Component({
  selector: 'app-loader',
  imports: [],
  standalone: true,
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {

  loaderService = inject(LoaderService);
}
