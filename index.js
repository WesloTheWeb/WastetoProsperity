function active() {
    var searchBar = document.getElementById('searchBar');

    if (searchBar.value == 'search') {
        searchBar.value = ''
        searchBar.placeholder = 'search'
    }
}

function inactive() {
    var searchBar = document.getElementById('searchBar');

    if (searchBar.value == '') {
        searchBar.value = 'search'
        searchBar.placeholder = ''
    }
}


var sliderOptions =
{
    sliderId: "slider",
    startSlide: 0,
    effect: "series1",
    effectRandom: false,
    pauseTime: 2600,
    transitionTime: 500,
    slices: 12,
    boxes: 8,
    hoverPause: 1,
    autoAdvance: true,
    captionOpacity: 0.3,
    captionEffect: "fade",
    thumbnailsWrapperId: "thumbs",
    m: false,
    license: "mylicense"
};

var imageSlider = new mcImgSlider(sliderOptions);
 