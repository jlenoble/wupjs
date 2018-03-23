import {timeout} from '../../client';
import {When} from 'cucumber';

When(/^I click on the "(.*)" input box button of the "(.*)" card header$/,
  timeout, async function (glyph, cardTitle) {
    return this.cardHeaderInputBoxButton(cardTitle, glyph).click();
  });

When(/^I click on the "(.*)" button of the "(.*)" card header$/,
  timeout, async function (glyph, cardTitle) {
    return this.cardHeaderButton(cardTitle, glyph).click();
  });

When(/^I click on the "(.*)" button of the "(.*)" Item in the "(.*)" card block$/,
  timeout, async function (glyph, itemTitle, cardTitle) {
    return this.cardBlockItemButton(cardTitle, itemTitle, glyph).click();
  });

When(/^I click on the "(.*)" button of the "(.*)" input box in the "(.*)" card block$/,
  timeout, async function (glyph, itemTitle, cardTitle) {
    return this.cardBlockInputBoxButton(cardTitle, itemTitle, glyph).click();
  });
