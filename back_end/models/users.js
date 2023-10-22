module.exports = (sequelize, DataType) => {
  const users = sequelize.define("users", {
    first_name: {
      type: DataType.STRING(),
      allowNull: false,
    },
    last_name: {
      type: DataType.STRING(),
      allowNull: false,
    },
  });

  users.associate = (modules) => {
    users.hasMany(modules.posts);
  };

  return users;
};
