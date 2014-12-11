(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.Preloadit = (function() {
    function Preloadit(options) {
      var image, _i, _len, _ref;
      if (options == null) {
        options = {};
      }
      this.onAjaxComplete = __bind(this.onAjaxComplete, this);
      this.images = options.images;
      this.onComplete = options.onComplete;
      this.onProgress = options.onProgress;
      if (!(this.images instanceof Array)) {
        this.images = [this.images];
      }
      this.images.filter(function(elem) {
        return elem !== void 0;
      });
      if (this.images.length === 0) {
        if (this.onComplete) {
          this.onComplete();
        }
        return;
      }
      this.completed = 0;
      _ref = this.images;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        image = _ref[_i];
        $.ajax({
          url: image,
          complete: this.onAjaxComplete
        });
      }
    }

    Preloadit.prototype.onAjaxComplete = function(xhr, status) {
      this.completed++;
      if (this.onProgress) {
        this.onProgress(this.completed, this.images.length);
      }
      if (this.onComplete && this.completed === this.images.length) {
        return this.onComplete();
      }
    };

    return Preloadit;

  })();

}).call(this);
