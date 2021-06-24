import Router from 'express';
import User from '../models/User.js';
import UserService from '../services/UserService.js';

export default Router()
  .post('/', async (req, res, next) => {
    UserService.makeUserWithPokemon(req.body)
      .then((user) => res.send(user))
      .catch(next);

  })
  .get('/:id', async (req, res, next) => {
    User.findById(req.params.id)
      .then((user) => res.send(user))
      .catch(next);

  })
  .get('/', async (req, res, next) => {
    User.findAll()
      .then((user) => res.send(user))
      .catch(next);

  })
  .delete('/:id', async (req, res, next) => {
    User.deleteUser(req.params.id)
      .then((user) => res.send(user))
      .catch(next);

  })
  .put('/:id', async (req, res, next) => {
    UserService.updateUserWithPokemon(req.body)
      .then((user) => res.send(user))
      .catch(next);

  });
