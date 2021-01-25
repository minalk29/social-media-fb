const db = require("../models");
const Registration = db.registration;
const Op = db.Sequelize.Op;
const crypto=require("../../crypto");

exports.create = (req, res) => {
    // Validate request
    if (!req.body.email) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    const pass=req.body.password;
    const encryp_password=crypto.encrypt(pass);
    // Create a Tutorial
    const user = {
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      phone: req.body.phone,
      password:encryp_password,
      dob: req.body.dob,
      bio: req.body.bio,
      gender: req.body.gender,
      relationship: req.body.relationship,
      interested_in: req.body.interested_in,
      language_id: req.body.language_id,
      education_id: req.body.education_id,
      work_exp_id: req.body.work_exp_id,
      security_answer: req.body.security_answer
    };
  
    // Save Tutorial in the database
    Registration.create(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while Registering the User."
        });
      });
  };

  exports.findAll = (req, res) => {
    const email = req.query.email;
    var condition = email ? { email: { [Op.like]: `%${email}%` } } : null;
  
    Registration.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };

  exports.findOne = (req, res) => {
    const Eemail = req.params.email;
  
    Registration.findAll({where: {email:Eemail}})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id="
        });
      });
  };