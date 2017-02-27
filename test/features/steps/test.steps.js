import client from '../../client';

export default function () {
  this.Before({timeout: 60 * 1000}, function () {
    return this.client = client.init();
  });

  this.After(function () {
    return this.client.end();
  });

  this.Given(/^I do$/, {timeout: 60 * 1000}, function () {
    return this.client = this.client.url('http://www.google.com')
      .getTitle().then(function (title) {
        console.log('Title was: ' + title);
      });
  });
}
