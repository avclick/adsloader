import * as fs from 'fs';
import * as path from 'path';
import mysql from 'serverless-mysql';
import * as dotenv from 'dotenv';

console.log(mysql);
const envPath = path.resolve(process.cwd(), '.env.local');

console.log({ envPath });

dotenv.config({ path: envPath });

// console.log(process.env);

const config = {
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD
};

// console.log(config);

const db = mysql({ config });

async function query(q) {
  try {
    const results = await db.query(q);
    await db.end();
    return results;
  } catch (e) {
    throw Error(e.message);
  }
}

// Create tables
async function migrate() {
  const tablesPath = path.resolve(process.cwd(), 'sql/tables.sql');
  const tablesSql = fs.readFileSync(tablesPath, 'utf-8');
  // console.log(tablesSql);
  try {
    await query(tablesSql);
    console.log('migration ran successfully');
  } catch (e) {
    console.error('could not run migration, double check your credentials.', e);
    process.exit(1);
  }
}

migrate().then(() => process.exit());
