import {timeout} from '../../client';
import {When, Then} from 'cucumber';
import {expect} from 'chai';

When(/^I toggle the "(.*)" checkbox of Item "(.*)" in the "(.*)" card block$/,
  timeout, async function (glyph, itemTitle, cardTitle) {
    return this.cardBlockItemCheckBoxLabel(cardTitle, itemTitle, glyph).click();
  });

Then(/^Item "(.*)" is selected in the "(.*)" card block$/, timeout,
  async function (itemTitle, cardTitle) {
    const check = await this.cardBlockItemCheckBox(cardTitle, itemTitle,
      'check').isSelected();
    expect(check).to.be.true;
  });

Then(/^Item "(.*)" is not selected in the "(.*)" card block$/, timeout,
  async function (itemTitle, cardTitle) {
    const check = await this.cardBlockItemCheckBox(cardTitle, itemTitle,
      'check').isSelected();
    expect(check).to.be.false;
  });
