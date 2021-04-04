import { Component } from '@angular/core';
import { Satellite } from './satellite';//why do i need to specify file name?

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];//not sure where this goes

  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';

    window.fetch(satellitesUrl).then(function(response) {
        response.json().then(function(data) {

          let fetchedSatellites = data.satellites;
          // TODO: loop over satellites
          // TODO: create a Satellite object using new Satellite(satellite.name, satellite.type, satellite.launchDate, satellite.orbitType, satellite.operational);
          // TODO: add the new Satellite object to sourceList using: this.sourceList.push(satellite);

          for (let satellite of fetchedSatellites) { 
            this.sourceList.push(new Satellite(satellite.name, satellite.type, satellite.launchDate, satellite.orbitType, satellite.operational));
          }


        }.bind(this));
    }.bind(this));

  }
}

