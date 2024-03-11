import { Component } from '@angular/core';
import { LoaderComponent } from "../../../shared/loader/loader.component";

@Component({
    selector: 'app-main-display',
    standalone: true,
    templateUrl: './main-display.component.html',
    styleUrl: './main-display.component.css',
    imports: [LoaderComponent]
})
export class MainDisplayComponent {

}
