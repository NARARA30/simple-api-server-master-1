import mysql from 'mysql2/promise';

export const db = await mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1cpmaina!',
  port: 3306,
  database: 'narara10', // 실제 DB명으로 바꿔
  waitForConnections: true,
  connectionLimit: 10,
});
