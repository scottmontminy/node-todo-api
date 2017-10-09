const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

// Todo.remove({}).then((res) => {
//   console.log(res)
// })

// Todo.findOneAndRemove()

Todo.findByIdAndRemove('59d90ba556e35d880016afd9').then((todo) => {
  console.log(todo)
})
