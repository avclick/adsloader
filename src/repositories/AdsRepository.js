import mysql from 'serverless-mysql';

export default class AdsRepository {
  constructor({ dbConfig }) {
    this.dbConfig = dbConfig;

    this.connect = mysql({ config: dbConfig });
  }

  async list(params) {
    const results = await this.connect.query(`select * from ads where ?`, params);
    await this.connect.end();
    return results;
  }

  async save(values) {
    const results = await this.connect.query('INSERT INTO ads set ?', values);
    await this.connect.end();
    return results;
  }
}
