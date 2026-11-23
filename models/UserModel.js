import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../connection.js';
import bcrypt from 'bcrypt';

class User extends Model { }

User.init( 
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'User'
  },
);

User.beforeCreate(async (user, options)=>{
  const newPassword = await bcrypt.hash(user.password, 10);
  user.password = newPassword;
})

export default User