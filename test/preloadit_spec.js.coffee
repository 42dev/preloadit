describe "preloadit coffee no options", ->
  beforeEach ->
    @preloader = new Preloadit()

  describe "constructor", ->
    it "constructs", ->
      expect(@preloader).not.toBeUndefined()
    it "completed is zero", ->
      expect(@preloader.completed).toEqual(0)


describe "preloadit some images and callbacks", ->
  beforeAll ->
    spyOn($, "ajax").and.callFake((o)-> o.complete())
    @completeSpy = jasmine.createSpy("onCompleteListener")
    @images = ["img1.png", "img2.png"]
    @preloader = new Preloadit
      images: @images
      onComplete: @completeSpy


  describe "constructor", ->
    it "constructs", ->
      expect(@preloader).not.toBeUndefined()
    it "sets the images", ->
      expect(@preloader.images).toEqual(@images)
    it "Sets the callback", ->
      expect(@completeSpy).toHaveBeenCalled()
