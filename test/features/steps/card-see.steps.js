import {timeout} from '../../client';
import {Then} from 'cucumber';
import {expect} from 'chai';

Then(/^I see (.*) card\(s\) on the page$/, timeout, async function (nCards) {
  const n = parseInt(nCards, 10);
  const cards = await this.client.$$('.card');
  expect(cards).to.have.length(n);
});

Then(/^I see a "(.*)" card$/, timeout, async function (cardTitle) {
  const card = await this.card(cardTitle);
  expect(card.type).not.to.equal('NoSuchElement');
});

Then(/^I don't see a "(.*)" card$/, timeout, async function (cardTitle) {
  const card = await this.card(cardTitle);
  expect(card.type).to.equal('NoSuchElement');
});

Then(/^I see an input box in the "(.*)" card header$/, timeout,
  async function (cardTitle) {
    const input = await this.cardHeaderInputBox(cardTitle);
    expect(input.type).not.to.equal('NoSuchElement');
  });

Then(/^I see (.*) Item\(s\) in the "(.*)" card block$/, timeout,
  async function (nItems, cardTitle) {
    const list = this.cardBlockItemList(cardTitle);
    const type = (await list).type;
    const n = parseInt(nItems, 10);

    if (n > 0) {
      expect(type).not.to.equal('NoSuchElement');
      const elements = await list.$$('li');
      expect(elements).to.have.length(n);
    } else if (n === 0) {
      expect(type).to.equal('NoSuchElement');
    }
  });

Then(/^I see an input box prefilled with "(.*)" in the "(.*)" card block$/,
  timeout, async function (itemTitle, cardTitle) {
    const input = await this.cardBlockInputBox(cardTitle, itemTitle);
    expect(input.type).not.to.equal('NoSuchElement');
  });
