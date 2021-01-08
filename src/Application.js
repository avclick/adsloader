import awilix from 'awilix';
import DataSourceFactory from './database/DataSourceFactory';
const { asFunction, asValue } = awilix;

export default class Application {
  constructor() {
    this.container = awilix.createContainer();
  }

  /**
   * initialize application
   */
  async init() {
    // register currentUser, datasource
    this.container.register({
      currentUser: asValue(process.env.USER),
      datasource: asFunction(DataSourceFactory)
    });

    // autoscan modules
    await this.container.loadModules(
      ['src/adapters/**/*.js', 'src/repositories/**/*.js', 'src/database/**/*.js'],
      {
        formatName: 'camelCase',
        esModules: true
      }
    );
  }

  /**
   * resolve bean by name
   * @param {*} name name of bean
   */
  resolve(name) {
    return this.container.resolve(name);
  }
}
