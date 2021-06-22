import Router from 'express';
import User from '../models/User.js';
import UserService from '../services/UserService.js';

export default Router()
  .post('/', async (req, res, next) => {
    try{
      const user = await User.insert(req.body);
      res.send(user);
    } catch(err) {
      next(err);
    }
  })
  .get('/:id', async (req, res, next) => {
    try{
      const user = await UserService.getByIdWithPokemon(req.params.id);
      res.send(user);
    } catch(err) {
      next(err);
    }
  });
