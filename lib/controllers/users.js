import Router from 'express';
import User from '../models/User.js';

export default Router()
  .post('/', async (req, res, next) => {
    try{
      const user = await User.insert(req.body);
      res.send(user);
    } catch(err) {
      next(err);
    }
  });
