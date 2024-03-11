import { Component, OnInit } from '@angular/core';
import { LoaderServiceService } from '../../services/loader-service.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent  implements OnInit {

  loading: boolean = true;
  constructor(private loaderService: LoaderServiceService) {

    this.loaderService.isLoading.subscribe((v) => {
      setTimeout(() => {
        this.loading = v;
      }, 1500);     
    });
  }
  ngOnInit(): void {
    
  }

}
