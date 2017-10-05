const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

// var id = '59d582db29c0b66e0795d24c11'
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid')
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos)
// })
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo)
// })

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found')
//   }
//   console.log('Todo by ID', todo)
// }).catch((e) => console.log(e))

User.findById('59d2efeea18f9d59df1d8b37').then((user) => {
  if (!user) {
    return console.log('User not found')
  }
  console.log('User by ID', user)
}, (e) => {
  console.log(e)
})
