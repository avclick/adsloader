import awilix from 'awilix';
import AdsApiAdapter from './adapters/AdsApiAdapter';

export default class Application {
  constructor() {
    this.container = awilix.createContainer();
    const opts = {
      esModules: true
    };
    this.container.loadModules(['adapters/**/*.js', 'repositories/**/*.js'], opts);
    this.container.register('adsApiAdapter', awilix.asClass(AdsApiAdapter));
  }

  resolve(name) {
    return this.container.resolve(name);
  }
}
