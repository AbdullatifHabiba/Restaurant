module.exports = (sequelize: any, Sequelize: any) => {
  const MenuItems = sequelize.define("MenuItems", {
    item_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    available_amount: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    image_location: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  });
  return MenuItems;
};