const app = require('./src/app');
const { sequelize, testConnection } = require('./src/config/database');
const PORT = process.env.PORT || 8000;

const startServer = async () => {
  try {
    
    await testConnection();

   
    await sequelize.sync({ alter: true });
    console.log(' Database synchronized');

   
    app.listen(PORT, () => {
      console.log(` Server running on port ${PORT}`);
      console.log(` Environment: ${process.env.NODE_ENV}`);
    });
  } catch (error) {
    console.error(' Failed to start server:', error);
    process.exit(1);
  }
};

startServer();