import {DataTypes} from 'sequelize';
import db from '../db/connection';

const Pais = db.define('Catalogopais', {
 PaisId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,},
    Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,}
    },{timestamps: false});

    export default Pais;