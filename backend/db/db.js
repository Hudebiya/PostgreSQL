import { Sequelize } from 'sequelize';
import { userSchema } from '../models/user.model.js';
const sequelize = new Sequelize('postgres', 'postgres', '12345', {
    host: 'localhost',
    dialect: 'postgres'
});
let userModel = null;
async function connectToDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        userModel = await userSchema(sequelize);
        await sequelize.sync();

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
export {  connectToDatabase, userModel };