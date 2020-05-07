const bcrypt = require("bcrypt");

const encryptPassword = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};

exports.encryptPassword = encryptPassword;
