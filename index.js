const fs = require('fs');

exports.installPlugin = function(Nightmare) {
	Nightmare.prototype.screenshotSelector = function(path, selector) {
    return this.evaluate(function(_selector) {
         var _element = document.querySelector(_selector);
         if (_element) {
             var rect = _element.getBoundingClientRect();
             return {
                 x: Math.round(rect.left),
                 y: Math.round(rect.top),
                 width: Math.round(rect.width),
                 height: Math.round(rect.height)
             };
         }
     }, selector)
     .then((rect) => this.screenshot(rect))
     .then((buffer) => {
       fs.writeFileSync(path, buffer);

       return buffer;
     })
   }

  return Nightmare;
};
