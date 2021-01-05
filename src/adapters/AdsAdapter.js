export default class AdsAdapter {
  convert(src) {
    throw new TypeError(this.constructor.name + '.convert not implemented');
  }
}
