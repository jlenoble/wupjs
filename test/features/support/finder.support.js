import xpb from 'xpath-builder';

function XPaths () {}
XPaths.prototype = xpb.dsl();

export default class Finder extends XPaths {
  constructor (client) {
    super();
    this.client = client;
  }

  card (cardTitle) {
    let nth = cardTitle.match(/(\d+)(st|nd|rd|th)?/);
    if (nth) {
      nth = parseInt(nth[1], 10) - 1;
      return this.client.$$('.card').then(cards => cards[nth]);
    }

    const xpath = this.descendant('div')
      .where(this.attr('class').equals('card'))
      .where(
        this.descendant('div')
          .where(this.attr('class').equals('card-header'))
          .where(
            this.descendant('span')
              .where(this.text().equals(cardTitle))
          )
      ).toString();

    return this.client.$(xpath);
  }

  cardHeaderInputBox (cardTitle) {
    const xpath = this.descendant('div')
      .where(this.attr('class').equals('card-header'))
      .descendant('input')
      .where(this.attr('type').equals('text'))
      .toString();

    return this.card(cardTitle).$(xpath);
  }

  cardHeaderButton (cardTitle, glyph) {
    const xpath = this.descendant('div')
      .where(this.attr('class').equals('card-header'))
      .descendant('button')
      .descendant('i')
      .where(this.attr('class').contains(`fa-${glyph}`))
      .toString();

    return this.card(cardTitle).$(xpath);
  }

  cardHeaderInputBoxButton (cardTitle, glyph) {
    const xpath = this.nextSibling('span')
      .descendant('button')
      .where(this.attr('type').equals('submit'))
      .descendant('i')
      .where(this.attr('class').contains(`fa-${glyph}`))
      .toString();

    return this.cardHeaderInputBox(cardTitle).$(xpath);
  }

  cardBlockItemList (cardTitle) {
    const xpath = this.descendant('div')
      .where(this.attr('class').equals('card-block'))
      .descendant('ul')
      .toString();

    return this.card(cardTitle).$(xpath);
  }

  cardBlockItem (cardTitle, itemTitle) {
    const xpath = this.descendant('li')
      .where(
        this.descendant('span')
          .where(this.text().equals(itemTitle))
      )
      .toString();

    return this.cardBlockItemList(cardTitle).$(xpath);
  }

  cardBlockInputBox (cardTitle, itemTitle) {
    const xpath = this.descendant('li')
      .descendant('input')
      .where(this.attr('type').equals('text'))
      .where(this.attr('value').equals(itemTitle))
      .toString();

    return this.cardBlockItemList(cardTitle).$(xpath);
  }

  cardBlockInputBoxButton (cardTitle, itemTitle, glyph) {
    const xpath = this.nextSibling('span')
      .descendant('button')
      .where(this.attr('type').equals('submit'))
      .descendant('i')
      .where(this.attr('class').contains(`fa-${glyph}`))
      .toString();

    return this.cardBlockInputBox(cardTitle, itemTitle).$(xpath);
  }

  cardBlockItemCheckBox (cardTitle, itemTitle, glyph) {
    const xpath = this.descendant('input')
      .where(this.attr('type').equals('checkbox'))
      .where(
        this.nextSibling('label')
          .where(this.attr('class').contains(`fa-${glyph}`))
      )
      .toString();

    return this.cardBlockItem(cardTitle, itemTitle).$(xpath);
  }

  cardBlockItemCheckBoxLabel (cardTitle, itemTitle, glyph) {
    const xpath = this.descendant('input')
      .where(this.attr('type').equals('checkbox'))
      .nextSibling('label')
      .where(this.attr('class').contains(`fa-${glyph}`))
      .toString();

    return this.cardBlockItem(cardTitle, itemTitle).$(xpath);
  }

  cardBlockItemButton (cardTitle, itemTitle, glyph) {
    const xpath = this.descendant('button')
      .descendant('i')
      .where(this.attr('class').contains(`fa-${glyph}`))
      .toString();

    return this.cardBlockItem(cardTitle, itemTitle).$(xpath);
  }
}

export const methods = Object.getOwnPropertyNames(Finder.prototype);
