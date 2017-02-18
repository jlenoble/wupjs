import {default as origFetch} from 'isomorphic-fetch';
import urlParse from 'url-parse';

import {protocol, host, port} from './config';

export default function fetch(path, options) {
  const url = urlParse(path);

  if (!url.protocol) {
    url.set('protocol', protocol);
  }

  if (!url.host) {
    url.set('host', host);
  }

  if (!url.port) {
    url.set('port', port);
  }

  return origFetch(url.toString(), options);
}
