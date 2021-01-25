module.exports = (sequelize, Sequelize) => {
    const Registration = sequelize.define("registration", {
      fname: {
        type: Sequelize.STRING
      },
      lname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.BIGINT
      },
      password: {
        type: Sequelize.STRING
      },
    dob:{
      type:Sequelize.DATE
    },
    bio: {
      type: Sequelize.TEXT
    },
    gender: {
      type: Sequelize.STRING
    },
    relationship: {
      type: Sequelize.STRING
    },
    interested_in: {
      type: Sequelize.STRING
    },
    language_id: {
      type: Sequelize.INTEGER
    },
    education_id: {
      type: Sequelize.INTEGER
    },
    work_exp_id: {
      type: Sequelize.INTEGER
    },
    security_answer: {
      type: Sequelize.STRING
    }

  },
    {
        timestamps:false
      }
    );
  
    return Registration;
  };