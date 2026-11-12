const { Sequelize } = require('sequelize');


const bdmysql = new Sequelize(
    process.env.MYSQL_LOCAL_DATABASE || 'test',
    process.env.MYSQL_LOCAL_USER || 'root',
    process.env.MYSQL_LOCAL_PASSWORD || '',
    {
        host: process.env.MYSQL_LOCAL_HOST || 'localhost',
        port: Number(process.env.MYSQL_LOCAL_PORT || 3306),
        dialect: 'mysql'
    }
);

const bdmysqlNube = new Sequelize(
    process.env.MYSQL_CLOUD_DATABASE,
    process.env.MYSQL_CLOUD_USER,
    process.env.MYSQL_CLOUD_PASSWORD,
    {
        host: process.env.MYSQL_CLOUD_HOST,
        port: Number(process.env.MYSQL_CLOUD_PORT || 3306),
        dialect: 'mysql'
    }
);

module.exports = {
    bdmysql, bdmysqlNube
}
