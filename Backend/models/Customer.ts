module.exports = (sequelize: any, DataTypes: any) => {
  const customer = sequelize.define("Customer", {
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    phone: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    HPassword: {
      type: DataTypes.STRING,
    },
  });
  return customer;
};
