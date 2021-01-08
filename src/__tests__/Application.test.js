import Application from '../Application';

const app = new Application();

beforeAll(async () => {
  const res = await app.init();
  // console.log(app.container);
  return res;
});

test('resolve adsapiadapter', () => {
  expect(app.resolve('adsApiAdapter').constructor.name).toStrictEqual('AdsApiAdapter');
});
