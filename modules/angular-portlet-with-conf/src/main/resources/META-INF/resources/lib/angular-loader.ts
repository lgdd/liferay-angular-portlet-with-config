import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

declare var Liferay: any;

export default function (rootId: string, config: any) {
  Liferay.Loader.require(
    'angular-portlet-with-conf@1.0.0/lib/main',
    (main: any) => {
      console.log('angular-loader');
      console.log(config);
      main.default(rootId, config);
    }
  );
}
