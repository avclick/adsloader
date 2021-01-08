import AdsRepository from '../AdsRepository';
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

const repository = new AdsRepository({ dbConfig });

// beforeAll(async () => {
//   await repository.connect.transaction();
// });
afterAll(async () => {
  // await repository.connect.rollback();
  return repository.connect.quit();
});

function randomInt(min, max) {
  return min + Math.floor((max - min) * Math.random());
}

const ad = {
  type: 'Продам',
  category: 'Дом',
  title: 'Дом ' + randomInt(1, 500) + ' м² на участке ' + randomInt(1, 100) + ' сот.',
  description: 'Продам Шикарный ' + randomInt(1, 3) + '  этажный Коттедж.'
};
it('should save ad', async () => {
  const res = await repository.save(ad);
  expect(res.affectedRows).toBe(1);
});

it('should find ad', async () => {
  const res = await repository.list({ title: ad.title });
  expect(res[0].title).toBe(ad.title);
  expect(res[0].description).toBe(ad.description);
});
