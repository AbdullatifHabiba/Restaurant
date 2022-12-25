import dotenv from 'dotenv';
dotenv.config();
export const config = {
    'username': process.env.MYSQL_username,
    'database': process.env.MYSQL_database,
    'password': process.env.MYSQL_password,
    'host': process.env.MYSQL_host,
    'dialect': process.env.MYSQL_dialect,
    'port': process.env.MYSQL_port
}