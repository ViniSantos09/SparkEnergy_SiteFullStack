module.exports = (Sequelize, DataTypes) => {
  const Users = Sequelize.define("Users", {
    // Here are the database tables
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  //   Users.associate = (models) => {
  //     // Cria um vinculo com a tabela Comments.
  //     Users.hasMany(models.Posts, {
  //       // Se o Post for deletado todos os comments tbm irão.
  //       onDelete: "Cascade",
  //     });
  //   };

  return Users;
};
