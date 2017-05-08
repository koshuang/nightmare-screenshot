nightmare-screenshoter
================

[Nightmare](https://github.com/segmentio/nightmare) plugin for improved screenshot.

### .screenshotSelector(path, selector)

Saves a screenshot of the element which matches the specified selector to the specified path.

### Example

```
const Nightmare = require('nightmare');
const installPlugin = require('nightmare-screenshoter').installPlugin;

installPlugin(Nightmare);

const screenshotPath = path.join(process.cwd(), 'test.png');
new Nightmare()
  .goto('http://example.com')
  .screenshotSelector('test.png', 'h1')
  .then(() => {
    const stats = fs.statSync(screenshotPath);
    if (stats.isFile()) {
      console.log('DONE');
    }
  });

```
