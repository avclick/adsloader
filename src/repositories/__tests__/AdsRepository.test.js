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
const ad = {
  type: 'Продам',
  category: 'Дом',
  title: 'Дом 165 м² на участке 10 сот.',
  description:
    'Продам Шикарный 2 этажный Коттедж. С возможностью обустройства 3 этажа. По документам дом 165 кв.м. в реальности около 240 кв.м. 1 этаж - 88,2 кв.м., 2 этаж 75,7 кв.м. Участок 10 соток в собственности!!!\n\n1 Ээтаж большая Кухня-гостиная + 1 Спальная комната + Сан. узел.\n\n2 Этаж 4 спальных комнаты. + Сан.узел\n\nДом построен из Газобетона автоклавного (привезен с Иркутска) установлен на монолитной плате. 1/2 этаж перекрытия из монолитной плиты. 2/3 этаж деревянные перекрытия. Крыша в ширину дома, можно обустроить 3 этаж. Крыша сделана из Шингласа. Обшит Дом Сендвич панелями. Отопление электрическое и Твердотопливный (уголь, дрова). \n\nТак же на участке находится Баня, теплица, хоз. постройки, смотровая яма. Есть фундамент для постройки любого сооружения - Гараж, Летняя кухня, Беседка и т.д.\n\nТот кто разбирается в строительстве сразу поймет, что все материалы качественные и дорогие. Строили дом для себя.'
};
it('should save ad', async () => {
  const res = await repository.save(ad);
  expect(res.affectedRows).toBe(1);
});

afterAll(() => {
  return repository.connect.quit();
});
