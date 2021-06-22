import { Profiler } from 'react';
import pool from '../utils/pool.js';

export default class User {
  id;
  name;
  catchPhrase;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.catchPhrase = row.catch_phrase;
  }

  static async insert({ name, catchPhrase }) {
    const { rows } = await pool.query(
      'INSERT INTO users (name, catch_phrase) VALUES ($1, $2) RETURNING *',
      [name, catchPhrase]
    );

    return new User(rows[0]);
  }
}
