import DictionaryRepository from '../DictionaryRepository';
import * as dotenv from 'dotenv';
import * as path from 'path';
import DataSourceFactory from '../../database/DataSourceFactory';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
const dataSource = DataSourceFactory();

// console.log(config);

const repository = new DictionaryRepository({ dataSource });

afterAll(async () => {
  return repository.connect.quit();
});
function randomInt(min, max) {
  return min + Math.floor((max - min) * Math.random());
}
const row = {
  code: 'LASTADID',
  name: 'Код последнего объявления',
  value: randomInt(1, 100),
  parentId: 101
};
it('should save row', async () => {
  const res = await repository.save(row);
  // console.log({ res });
  expect(res.affectedRows > 0).toBe(true);
});
