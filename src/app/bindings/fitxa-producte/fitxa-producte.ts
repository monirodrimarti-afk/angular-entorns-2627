import { Component, Input } from '@angular/core';
import { ProducteLab } from '../producte-lab';

@Component({
  selector: 'app-fitxa-producte',
  imports: [],
  templateUrl: './fitxa-producte.html',
  styleUrl: './fitxa-producte.css',
})
export class FitxaProducteComponent {
  // Producte que mostra aquesta fitxa (li passa Botiga dins del @for)
  @Input() producte!: ProducteLab;

  // REPTE A: variable d'estat. Controla alhora [disabled] del botó i [class.confirmat] de l'article
  afegitAlCarret = false;

  get teEstoc(): boolean {
    return this.producte.estoc > 0;
  }

  afegir(): void {
    this.afegitAlCarret = true;
  }
}
