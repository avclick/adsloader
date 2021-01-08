import DictionaryRepository from '../DictionaryRepository';
import * as dotenv from 'dotenv';
import * as path from 'path';

const envPath = path.resolve(process.cwd(), '.env.local');
dotenv.config({ path: envPath });
const dbConfig = {
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD
};

// console.log(config);

const repository = new DictionaryRepository({ dbConfig });

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
