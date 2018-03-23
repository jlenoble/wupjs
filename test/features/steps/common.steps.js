import client, {timeout} from '../../client';
import {Before, After, When} from 'cucumber';
import Finder, {methods} from '../support/finder.support';
import {Item, Selection} from '../../../src/server/db';

Before(timeout, async function () {
  await Item.remove({});
  await Selection.remove({});
  const finder = new Finder(client.init());

  methods.forEach(method => {
    this[method] = finder[method].bind(finder);
  });

  return this.client = finder.client;
});

After(timeout, async function () {
  // await Item.remove({});
  // await Selection.remove({});
  return this.client.end();
});

When(/^I go to URI "(.*)"$/, timeout, async function (uri) {
  return this.client.url(uri);
});

When(/^I press ENTER$/, timeout, async function () {
  return this.client.keys(['Enter']);
});

When(/^I refresh the page$/, timeout, async function () {
  return this.client.refresh();
});
