import AdsAdapter from './AdsAdapter';

export default class AdsApiAdapter extends AdsAdapter {
  convert(src) {
    const result = {
      type: src.nedvigimost_type,
      category: src.param_3042,
      title: src.title,
      description: src.description
    };
    return result;
  }
}
