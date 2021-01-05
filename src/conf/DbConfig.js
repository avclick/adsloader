
export default class DbConfig {

    constructor({context}) {
        const urlapi = require('url');
        const dbconf = urlapi.parse(context['apps.adsloader.db']);
        this.host =  dbconf.hostname;
        this.database = dbconf.pathname.replace('/', '');
        this.user = 'correspondence';
        this.password =  context['apps.adsloader.db_PASSWORD'];
        this.dateStrings =  [
            'DATE',
            'DATETIME'
          ];
        }
}
