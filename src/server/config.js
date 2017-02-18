import {default as origFetch} from 'isomorphic-fetch';
import urlParse from 'url-parse';

export const protocol = 'http';
export const host = 'localhost';
export const port = 3000;
export const db = 'wup';

export const mongoUri = `mongodb://${host}/${db}`;