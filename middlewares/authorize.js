const authorization = require('auth-header')
const knex = require('../sql/sqlConnectionOptions').knex

const auth = (req, res, next) => {
  const authHeader = req.get('authorization')
    console.log(req.get('authorization'));
  if (!authHeader) {
    return fail(res)
  }

  const auth = authorization.parse(authHeader)
  console.log(auth);

  if (auth.scheme !== 'Basic') {
    return fail(res)
    
  }

  const token = auth.token

  knex
    .from('users')
    .innerJoin('tokens', 'users.user_id', 'tokens.user_id')
    .innerJoin('workers', 'users.user_id', 'workers.user_id')
    .innerJoin('departments', 'workers.department_id', 'departments.department_id')
    .select('users.user_id as id', 'users.login', 'workers.role_id as roleID', 'worker_id as workerID', 'departments.head as supervisorID')
    .where('tokens.id', token)
    .then(users => {
      const user = users[0]
      if (!user) {
        return fail(res)
      }
      req.currentUser = user
      next()
    })
    .catch((error) => {
      console.error(error)
      return fail(res)
    })
}

const fail = res => {
  res.set('WWW-Authenticate', authorization.format('Basic'))
  res.status(401).send('Authorisation error')
}

module.exports = auth
