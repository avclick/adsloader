import Application from '../Application';

const app = new Application();
// console.log(app.container);

beforeAll(async () => {
  const res = await app.init();
  return res;
});

test('resolve adsapiadapter', () => {
  expect(app.resolve('adsApiAdapter').constructor.name).toStrictEqual('AdsApiAdapter');
});
