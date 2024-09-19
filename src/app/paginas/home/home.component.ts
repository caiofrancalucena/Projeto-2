import { Component } from '@angular/core';
import { PainelComponent } from '../../components/painel/painel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PainelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
