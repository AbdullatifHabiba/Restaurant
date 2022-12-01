module.exports = (sequelize: any, DataTypes: any) => {
  const DeliveryMan = sequelize.define("Deliveryman", {
    deliveryman_id: {
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
    email: {
      type: DataTypes.STRING,
    },
    HPassword: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
    Branch_id: {
      type: DataTypes.INTEGER,
    }
  });
  const Branch = require(`./../models/Branch`)(sequelize, DataTypes);
  Branch.hasMany(DeliveryMan, {
    foreignKey: 'Branch_id',
    onDelete: 'CASCADE'
  })
  return DeliveryMan;
};