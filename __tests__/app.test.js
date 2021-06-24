import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import User from '../lib/models/User.js';
import UserService from '../lib/services/UserService.js';

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

    expect(res.body).toEqual({ id: '1', name: 'Chase', catchPhrase: 'get it', pokemon: expect.any(String) });
  });

  it('GET a profile and its pokemon by id', async () => {
    await UserService.makeUserWithPokemon({
      name: 'Tucker',
      catchphrase: ''
    });

    const res = await request(app).get('/api/v1/users/1');

    expect(res.body).toEqual({
      id: '1',
      name: 'Tucker',
      catchPhrase: null,
      pokemon: expect.any(String)
    });
  });

  it('GET all profiles and their pokemon', async () => {
    await UserService.makeUserWithPokemon({
      name: 'Joe',
      catchPhrase: 'nah'
    });
    await UserService.makeUserWithPokemon({
      name: 'Chase',
      catchPhrase: 'get it'
    });

    const res = await request(app).get('/api/v1/users');

    expect(res.body).toEqual([{
      id: '1',
      name: 'Joe',
      catchPhrase: 'nah',
      pokemon: expect.any(String)
    },
    {
      id: '2',
      name: 'Chase',
      catchPhrase: 'get it',
      pokemon: expect.any(String)
    }]);
  });

  it('DELETE a user', async () => {
    await UserService.makeUserWithPokemon({
      name: 'Delete Me',
      catchPhrase: 'nah'
    });
    await UserService.makeUserWithPokemon({
      name: 'Keep Me',
      catchPhrase: 'get it'
    });

    const res = await request(app).delete('/api/v1/users/1');

    expect(res.body).toEqual({
      id: '1',
      name: 'Delete Me',
      catchPhrase: 'nah',
      pokemon: expect.any(String)
    });
  });

  it('Make a change to a user with PUT', async () => {
    await UserService.makeUserWithPokemon({
      name: 'Joe',
      catchPhrase: 'nah'
    });
    const Chase = await UserService.makeUserWithPokemon({
      name: 'Chase',
      catchPhrase: 'get it'
    });

    Chase.catchPhrase = 'don\'t get it';

    const res = await request(app)
      .put(`/api/v1/users/${Chase.id}`)
      .send(Chase);

    expect(res.body).toEqual(Chase);
  });
});
62;
