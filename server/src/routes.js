const UserController = require('./controllers/UserController')
module.exports = (app) => {
/* RESFUL Api for users management */
// get all user
app.get('/users',
UserController.index
),
// create user
app.post('/user',
UserController.create
),
// edit user, suspend, active
app.put('/user/:userId',UserController.put
)
// delete user
app.delete('/user/:userId',
UserController.remove
)
// get user by id
app.get('/user/:userId',
UserController.show
)

}