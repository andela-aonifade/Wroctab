'use strict';
import bcrypt from 'bcryptjs';

export default (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: { type: DataTypes.STRING, allowNull: false, },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        notEmpty: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    roleId: {
      type: DataTypes.INTEGER,
      defaultValue: 2,
      references: {
        model: 'Roles',
        key: 'id',
        as: 'roleId',
      },
    },
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        Users.belongsTo(models.Roles, {
          foreignKey: 'roleId'
        });
        Users.hasMany(models.Documents, {
          foreignKey: 'userId',
          as: 'documents',
        });
      }
    },
    instanceMethods: {
      /**
       * verify plain password against user's hashed password
       * @method
       * @param {String} password
       * @returns {Boolean} Validity of passowrd
       */
      verifyPassword(password) {
        return bcrypt.compareSync(password, this.password);
      },
       /**
       * Hash the password before being saved to the database
       * @method
       * @param {string} password - Accepts the user's password to be encrypted.
       * @returns {Void} no return
       */
      hashPassword(password) {
        const salt = bcrypt.genSaltSync(8);
        this.password = bcrypt.hashSync(this.password, salt);
      }
    },
    hooks: {
      beforeCreate: (user) => {
        return user.hashPassword();
      },
      beforeUpdate: (user) => {
        if(user._changed.password){
          user.hashPassword();
        }
      }
    }
  });
  return Users;
};
