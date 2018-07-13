// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  appId: '163a85f01c3b4ef298664626181307',
  baseUrl: 'http://api.worldweatheronline.com/premium/v1/weather.ashx?', 
  units:'&num_of_days=6&tp=1&format=json'
};
