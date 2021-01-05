import AdsApiAdapter from '../AdsApiAdapter';
import * as fs from 'fs';

function readTest(i) {
  const req = JSON.parse(fs.readFileSync('src/adapters/__tests__/AdsApi' + i + 'Req.json'));
  const res = JSON.parse(fs.readFileSync('src/adapters/__tests__/AdsApi' + i + 'Res.json'));
  return [req, res];
}

const adapter = new AdsApiAdapter();

test('cottage', () => {
  const [req, res] = readTest('01');
  expect(adapter.convert(req)).toStrictEqual(res);
});
