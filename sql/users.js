var knex = require("./sqlConnectionOptions").knex;

function login(login, password) {
  return knex('users')
    .select('user_id as id', 'login')
    .where({ login, password })
    .then(users => {
      if (users.length === 0) {
        throw new Error('Login or password is incorrect')
      }
      return users[0];
    })
}

module.exports = {
  login,
}
