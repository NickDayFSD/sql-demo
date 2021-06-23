import Router from 'express';
import User from '../models/User.js';
import UserService from '../services/UserService.js';

export default Router()
  .post('/', async (req, res, next) => {
    try{
      const user = await UserService.makeUserWithPokemon(req.body);
      res.send(user);
    } catch(err) {
      next(err);
    }
  })
  .get('/:id', async (req, res, next) => {
    try{
      const user = await User.findById(req.params.id);
      res.send(user);
    } catch(err) {
      next(err);
    }
  })
  .get('/', async (req, res, next) => {
    try{
      const users = await User.findAll();
      res.send(users);
    } catch(err) {
      next(err);
    }
  });
