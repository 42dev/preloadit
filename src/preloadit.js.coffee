#
# Class - Preloadit
#
#

class window.Preloadit
  constructor: (options={})->
    @images = options.images
    @onComplete = options.onComplete
    @onProgress = options.onProgress

    # make it an array
    unless @images instanceof Array
      @images = [@images]
    # no blank elements
    @images.filter( (elem)-> elem != undefined )

    # exit now
    if @images.length == 0
      @onComplete() if @onComplete
      return
    
    @completed = 0
  
    # load all images through ajax
    for image in @images
      $.ajax( url: image, complete: @onAjaxComplete )

  #
  # Event listener for ajax complete
  #
  onAjaxComplete: (xhr, status)=>
    @completed++
    @onProgress(@completed, @images.length) if @onProgress
    @onComplete() if @onComplete && @completed == @images.length




  
