import mysql from 'serverless-mysql';

export default class DictionaryRepository {
  constructor({ dataSource }) {
    this.dataSource = dataSource;

    this.connect = mysql({ config: dataSource });
  }

  async find(params) {
    const results = await this.connect.query(`select * from DICTIONARY where ?`, params);
    await this.connect.end();
    return results;
  }

  async save(values) {
    const results = await this.connect.query(
      'INSERT INTO DICTIONARY set ? on duplicate key update ? ',
      [values, values]
    );
    await this.connect.end();
    return results;
  }
}
