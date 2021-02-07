module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("task", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      }
    });
  
    return Tutorial;
  };