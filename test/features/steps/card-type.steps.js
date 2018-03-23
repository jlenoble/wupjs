import {timeout} from '../../client';
import {When} from 'cucumber';

When(/^I type "(.*)" in the input box of the "(.*)" card header$/, timeout,
  async function (text, cardTitle) {
    return this.cardHeaderInputBox(cardTitle).setValue(text);
  });

When(/^I type "(.*)" in the "(.*)" input box in the "(.*)" card block$/, timeout,
  async function (text, itemTitle, cardTitle) {
    return this.cardBlockInputBox(cardTitle, itemTitle).setValue(text);
  });
