import pool from '../utils/pool.js';

export default class User {
  id;
  name;
  catchPhrase;
  pokemon;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.catchPhrase = row.catch_phrase;
    this.pokemon = row.pokemon;
  }

  static async insert({ name, catchPhrase, pokemon }) {
    const { rows } = await pool.query(
      'INSERT INTO users (name, catch_phrase, pokemon) VALUES ($1, $2, $3) RETURNING *',
      [name, catchPhrase, pokemon]
    );

    return new User(rows[0]);
  }

  static async findById(id) {
    const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);

    if(!rows[0]) return null;
    return new User(rows[0]);
  }

  static async findAll() {
    const { rows } = await pool.query('SELECT * FROM users');

    return rows.map(row => new User(row));
  }

  static async deleteUser(id) {
    const { rows } = await pool.query(
      'DELETE FROM users WHERE id = $1 RETURNING *', [id]
    );

    return new User(rows[0]);
  }

  static async updateUser(user) {
    const { rows } = await pool.query(
      'UPDATE users SET name = $1, catch_phrase = $2, pokemon = $3 WHERE id = $4 RETURNING *',
      [user.name, user.catchPhrase, user.pokemon, user.id]
    );

    return new User(rows[0]);
  }
}
