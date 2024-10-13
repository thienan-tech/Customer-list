import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'daodinhbl',
    password: 'Daodinh@123456',
    database: 'qlbh_vlxaydung'

});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ', err);
        return;
    }
    console.log('Connected to database!');
});

export default connection;