import {timeout} from '../../client';
import {When} from 'cucumber';

When(/^I toggle the "(.*)" checkbox of Item "(.*)" in the "(.*)" card block$/,
  timeout, async function (glyph, itemTitle, cardTitle) {
    return this.cardBlockItemCheckBox(cardTitle, itemTitle, glyph).click();
  });
