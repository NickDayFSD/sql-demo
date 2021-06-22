import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('submits a new user and gives them a pokemon', async () => {
    const res = await request(app)
      .post('/api/v1/users')
      .send({
        name: 'Chase',
        catchPhrase: 'got em!'
      });

    expect(res.body).toEqual({ id: '1', name: 'Chase', catchPhrase: 'got em!' });
  });
});
