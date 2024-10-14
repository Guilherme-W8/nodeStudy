import { DataTypes } from 'sequelize';
import dbConnection from '../db/dbConnection.js';

const Task = dbConnection.define('Task', {

    title: {
        type: DataTypes.STRING,
        required: true
    },

    description: {
        type: DataTypes.STRING,
        required: true
    },

    done: {
        type: DataTypes.BOOLEAN,
        required: true
    }

});

export default Task;