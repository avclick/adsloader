import mysql from 'serverless-mysql';
// import jsonSqlBuilder from 'json-sql';
// const jsonSql = jsonSqlBuilder({ dialect: 'mysql' });

export default class AdsRepository {
  constructor({ dbConfig }) {
    this.dbConfig = dbConfig;

    this.connect = mysql({ config: dbConfig });
  }

  async list() {
    const results = await this.connect.query(`select * from ads`);
    await this.connect.end();
    return results;
  }

  async save(values) {
    // const sql = jsonSql.build({
    //   type: 'insert',
    //   table: 'ads',
    //   values
    // });
    // console.log(sql);
    const results = await this.connect.query('INSERT INTO ads set ?', values);
    await this.connect.end();
    return results;
  }
}
