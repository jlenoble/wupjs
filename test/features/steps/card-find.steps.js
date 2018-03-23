import {timeout} from '../../client';
import {Then} from 'cucumber';
import {expect} from 'chai';

Then(/^I find Item "(.*)" in the "(.*)" card block$/, timeout,
  async function (itemTitle, cardTitle) {
    const item = await this.cardBlockItem(cardTitle, itemTitle);
    expect(item.type).not.to.equal('NoSuchElement');
  });

Then(/^I don't find Item "(.*)" in the "(.*)" card block$/, timeout,
  async function (itemTitle, cardTitle) {
    const item = await this.cardBlockItem(cardTitle, itemTitle);
    expect(item.type).to.equal('NoSuchElement');
  });
