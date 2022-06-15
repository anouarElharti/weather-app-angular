// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weatherApiBaseURL:
    'https://community-open-weather-map.p.rapidapi.com/weather',
  XRapidAPIKeyHeaderName: 'X-RapidAPI-Host',
  XRapidAPIKeyHeaderValue: 'community-open-weather-map.p.rapidapi.com',
  XRapidAPIHeaderKey: 'X-RapidAPI-Key',
  XRapidAPIKeyValue: '0b432af708msh1ec44671dd740ecp14c805jsnd7f7a83c848e',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
