import * as mysql from 'serverless-mysql';

export default class AdsRepository {
  constructor(dbConfig) {
    this.dbConfig = dbConfig;

    this.connect = mysql({ config: dbConfig });
  }

  async list() {
    const results = await this.connect.query(`select * from ads`);
    await this.connect.end();
    return results;
  }
}
