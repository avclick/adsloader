import awilix from 'awilix';
import AdsApiAdapter from './adapters/AdsApiAdapter';

export default class Application {
  constructor() {
    this.container = awilix.createContainer();
  }

  async init() {
    const opts = {
      formatName: 'camelCase',
      esModules: true
    };
    await this.container.loadModules(['src/adapters/**/*.js', 'src/repositories/**/*.js'], opts);
    // this.container.register('adsApiAdapter', awilix.asClass(AdsApiAdapter));
  }

  resolve(name) {
    return this.container.resolve(name);
  }
}
