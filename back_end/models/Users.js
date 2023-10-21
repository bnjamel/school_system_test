module.exports = (sequelize, DataType) => {
  const Users = sequelize.define("Users", {
    first_name: {
      type: DataType.STRING(),
      allowNull: false,
    },
    last_name: {
      type: DataType.STRING(),
      allowNull: false,
    },
  });

  Users.associate = (modules) => {
    Users.hasMany(modules.Posts);
  };

  return Users;
};
