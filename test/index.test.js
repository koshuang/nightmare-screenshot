const fs = require('fs');
const path = require('path');
const Nightmare = require('nightmare');
const installPlugin = require('../').installPlugin;

const screenshotPath = path.join(process.cwd(), 'test.png');

beforeEach(() => {
  try {
    installPlugin(Nightmare);
    fs.unlinkSync(screenshotPath);
  } catch (e) {}
});

it('generates screenshot', (done) => {
  new Nightmare()
    .goto('http://example.com')
    .screenshotSelector('test.png', 'h1')
    .then(() => {
      const stats = fs.statSync(screenshotPath);
      if (stats.isFile()) {
        done();
      }
    });
});
