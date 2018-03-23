import {timeout} from '../../client';
import {Then} from 'cucumber';
import {expect} from 'chai';

Then(/^I see a "(.*)" card$/, timeout, async function (cardTitle) {
  const card = await this.card(cardTitle);
  expect(card.type).not.to.equal('NoSuchElement');
});

Then(/^I see an input box in the "(.*)" card header$/, timeout,
  async function (cardTitle) {
    const input = await this.cardHeaderInputBox(cardTitle);
    expect(input.type).not.to.equal('NoSuchElement');
  });

Then(/^I see (.*) Item\(s\) in the "(.*)" card block$/, timeout,
  async function (nItems, cardTitle) {
    const list = await this.cardBlockItemList(cardTitle);
    const n = parseInt(nItems, 10);

    if (n > 0) {
      expect(list.type).not.to.equal('NoSuchElement');
      const elements = await this.client.$$('li');
      expect(elements).to.have.length(n);
    } else if (n === 0) {
      expect(list.type).to.equal('NoSuchElement');
    }
  });

Then(/^I see an input box prefilled with "(.*)" in the "(.*)" card block$/,
  timeout, async function (itemTitle, cardTitle) {
    const input = await this.cardBlockInputBox(cardTitle, itemTitle);
    expect(input.type).not.to.equal('NoSuchElement');
  });
