import Application from '../Application';

const app = new Application();
// console.log(app.container);

test('resolve adsapiadapter', () => {
  expect(app.resolve('adsApiAdapter').constructor.name).toStrictEqual('AdsApiAdapter');
});
