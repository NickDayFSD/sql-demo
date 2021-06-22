import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import User from '../lib/models/User.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('submits a new user and gives them a pokemon', async () => {
    const res = await request(app)
      .post('/api/v1/users')
      .send({
        name: 'Chase',
        catchPhrase: 'get it'
      });

    expect(res.body).toEqual({ id: '1', name: 'Chase', catchPhrase: 'get it' });
  });

  it('GET a profile and its pokemon by id', async () => {
    await User.insert({
      name: 'Tucker'
    });

    const res = await request(app).get('/api/v1/profiles/1');

    expect(res.body).toEqual({
      id: '1',
      name: 'Tucker',
      pokemon: expect.any(String)
    });
  });
});
