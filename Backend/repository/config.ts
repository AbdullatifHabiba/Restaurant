import dotenv from 'dotenv';
dotenv.config();
export const config = {
    'username': process.env.AWS_MYSQL_username,
    'database': process.env.AWS_MYSQL_database,
    'password': process.env.AWS_MYSQL_password,
    'host': process.env.AWS_MYSQL_host,
    'dialect': process.env.AWS_MYSQL_dialect,
    'port': process.env.AWS_MYSQL_port
}
