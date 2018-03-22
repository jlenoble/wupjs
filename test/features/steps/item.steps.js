import client, {timeout} from '../../client';
import {Item} from '../../../src/server/db';
import {Before, After, Given, Then} from 'cucumber';
import {expect} from 'chai';

Before(timeout, async function () {
  await Item.remove({});
  return this.client = client.init();
});

After(timeout, async function () {
  // await Item.remove({});
  return this.client.end();
});

Given(/^I go to URI "(.*)"$/, timeout, async function (uri) {
  return this.client.url(uri);
});

Given(/^I type "(.*)" in the input box$/, timeout,
  async function (title) {
    return this.client.$('.card .card-header input[type="text"]')
      .setValue(title);
  });

Given(/^I type "(.*)" in the "(.*)" input box$/, timeout,
  async function (title, prevTitle) {
    return this.client.$(`.card .card-block input[value="${prevTitle}"]`)
      .setValue(title);
  });

Given(/^I press ENTER$/, timeout, async function () {
  return this.client.keys(['Enter']);
});

Given(/^I click on the "(.*)" button$/, timeout, async function (button) {
  const input = this.client.$('.card .card-header .input-group');
  return input.$(`button[type="submit"] .fa-${button}`).click();
});

Given(/^I click on the "(.*)" button of the "(.*)" Item$/, timeout,
  async function (button, title) {
    const ul = this.client.$('.card .card-block ul');
    const li = ul.$(`li=${title}`);
    return li.$(`button .fa-${button}`).click();
  });

Given(/^I click on the "(.*)" button of the "(.*)" input box$/, timeout,
  async function (button, title) {
    const ul = this.client.$('.card .card-block ul');
    expect(await ul.$$('input[type="text"]')).to.have.length(1);
    expect(await ul.isExisting(`input[value="${title}"]`)).to.be.true;
    await ul.$(`.input-group button[type="submit"] .fa-${button}`).click();
  });

Given(/^I refresh the page$/, timeout, async function () {
  return this.client.refresh();
});

Then(/^I see a card$/, timeout, async function () {
  expect(await this.client.isExisting('.card')).to.be.true;
});

Then(/^I see the title "(.*)" in the card header$/, timeout,
  async function (title) {
    const text = await this.client.$('.card .card-header').getText();
    expect(text).to.equal(title);
  });

Then(/^I see an input box in the card header$/, timeout,
  async function () {
    const isExisting = await this.client.isExisting(
      '.card .card-header input[type="text"]');
    expect(isExisting).to.be.true;
  });

Then(/^I see an input box prefilled with "(.*)"$/, timeout,
  async function (title) {
    const ul = this.client.$('.card .card-block ul');
    expect(await ul.isExisting(`input[value="${title}"]`)).to.be.true;
  });

Then(/^I see (.*) Item\(s\) in the card block$/, timeout,
  async function (_n) {
    const isExisting = await this.client.isExisting('.card .card-block ul');
    const n = parseInt(_n, 10);

    if (n > 0) {
      expect(isExisting).to.be.true;
      const elements = await this.client.$$('.card .card-block ul li');
      expect(elements).to.have.length(n);
    } else if (n === 0) {
      expect(isExisting).to.be.false;
    }
  });

Then(/^I find Item "(.*)" in the card block$/, timeout,
  async function (title) {
    const list = this.client.$('.card .card-block ul');
    expect(await list.isExisting(`li=${title}`)).to.be.true;
  });

Then(/^I don't find Item "(.*)" in the card block$/, timeout,
  async function (title) {
    const list = this.client.$('.card .card-block ul');
    expect(await list.isExisting(`li=${title}`)).not.to.be.true;
  });
