
import { Component, AfterViewInit } from "@angular/core";


@Component({
    selector: 'app-hoks',
    standalone: true,
    templateUrl: './hoks.html',
    styleUrls: ['./hoks.scss', '../../../shared/globalStyling.scss']
})
export class Hoks_Component implements AfterViewInit {

  ngAfterViewInit(): void {
    const svg = document.querySelector('svg');
    if (svg) {
      svg.querySelectorAll('path').forEach(path => {
        path.addEventListener('click', (event) => {
          const countryId = (event.target as HTMLElement).id;
          this.onCountryClick(countryId);
        });
      });
    }
  }

  onCountryClick(countryId: string): void {
    console.log(`Land angeklickt: ${countryId}`);
    // Hier kannst du weitere Aktionen hinzufügen, z. B. API-Aufrufe oder Navigation
  }

  onSvgLoad(event: Event) {
    // Zugriff auf das Objekt-Tag
    const svgDoc = (event.target as HTMLObjectElement).contentDocument;
    if (svgDoc) {
      const paths = svgDoc.querySelectorAll('path');
      paths.forEach(path => {
        path.addEventListener('click', () => {
          console.log('Land geklickt:', path.id);
        });
      });
    }
  }
}
