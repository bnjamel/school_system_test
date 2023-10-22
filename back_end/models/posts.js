module.exports = (sequelize, DataType) => {
  const posts = sequelize.define("posts", {
    title: {
      type: DataType.STRING(),
      allowNull: false,
    },
    body: {
      type: DataType.STRING(),
      allowNull: false,
    },
  });

  posts.associate = (modules) => {
    posts.belongsTo(modules.users);
  };

  return posts;
};
