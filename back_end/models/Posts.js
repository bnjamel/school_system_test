module.exports = (sequelize, DataType) => {
  const Posts = sequelize.define("Posts", {
    title: {
      type: DataType.STRING(),
      allowNull: false,
    },
    body: {
      type: DataType.STRING(),
      allowNull: false,
    },
  });

  Posts.associate = (modules) => {
    Posts.belongsTo(modules.Users);
  };

  return Posts;
};
