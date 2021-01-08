import mysql from 'serverless-mysql';

export default class AdsRepository {
  constructor({ dataSource }) {
    this.dataSource = dataSource;

    this.connect = mysql({ config: dataSource });
  }

  async list(params) {
    const results = await this.connect.query(`select * from ADS where ?`, params);
    await this.connect.end();
    return results;
  }

  async save(values) {
    const results = await this.connect.query('INSERT INTO ADS set ?', values);
    await this.connect.end();
    return results;
  }
}
