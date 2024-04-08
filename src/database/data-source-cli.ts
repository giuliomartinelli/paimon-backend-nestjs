import 'dotenv/config';
import { DataSource, DataSourceOptions } from "typeorm";

console.log(__dirname);

const dataSourceOptions: DataSourceOptions = {
    type: 'mysql',
    host: process.env.MYSQL_TYPEORM,
    port: Number(process.env.MYSQL_PORT),
    username:process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE,
    entities:[__dirname + '/../**/*.entity.{js,ts}'],
    migrations:[__dirname + '/migrations/*.{js,ts}'],
}

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
