(function() {
  describe("preloadit coffee no options", function() {
    beforeEach(function() {
      return this.preloader = new Preloadit();
    });
    return describe("constructor", function() {
      it("constructs", function() {
        return expect(this.preloader).not.toBeUndefined();
      });
      return it("completed is zero", function() {
        return expect(this.preloader.completed).toEqual(0);
      });
    });
  });

  describe("preloadit some images and callbacks", function() {
    beforeAll(function() {
      spyOn($, "ajax").and.callFake(function(o) {
        return o.complete();
      });
      this.completeSpy = jasmine.createSpy("onCompleteListener");
      this.images = ["img1.png", "img2.png"];
      return this.preloader = new Preloadit({
        images: this.images,
        onComplete: this.completeSpy
      });
    });
    return describe("constructor", function() {
      it("constructs", function() {
        return expect(this.preloader).not.toBeUndefined();
      });
      it("sets the images", function() {
        return expect(this.preloader.images).toEqual(this.images);
      });
      return it("Sets the callback", function() {
        return expect(this.completeSpy).toHaveBeenCalled();
      });
    });
  });

}).call(this);
