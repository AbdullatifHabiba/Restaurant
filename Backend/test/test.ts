import db from './../repository/sequalize';

(async () => {
  console.log("Initialize database connection...");
  await db.sequelize.sync({ force: false });
})();
