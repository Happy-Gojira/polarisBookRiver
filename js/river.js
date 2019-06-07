function river() {
  var url = 'https://pac.sals.edu/ContentXChange/APICarouselToolKit/47/26/4?callback=?';

  // get the json file
  $.getJSON(url, function (data) {

    //regualr expression to convert all http to https
    var pattern = /http:/g;
    

    //Create a div element with the  carousel title
    var Div1 = document.createElement('div');
    Div1.id = 'id-drawer-head-xri' + data.CarrouselUniqueID;
    Div1.className = 'statichdead';
    Div1.innerHTML = data.CarouselName;

    //Create a div element with a uniqe id and a class of drawer-body
    var Div2 = document.createElement('div');
    Div2.id = 'id-drawer-body-xri' + data.CarrouselUniqueID;
    Div2.className = 'drawer-body';

    // Put carousel string in the div
    Div2.innerHTML = data.Carousel_Str;

    //add the embedded html from the url
    $('#div1').append(Div1);
    $('#div1').append(Div2);

    //Variable to check for data in Carousel_Str
    var DivName = '#' + data.CarrouselUniqueID;
    var nItems = data.nCarLength;

    if (nItems > 0)
    {
      jQuery(DivName).slick({
                dots: false,
                infinite: true,
                variableWidth: true,
                nextArrow: "<button type='button' class='content-carousel__right-arrow' aria-label='Carousel move right'><i class='glyphicon glyphicon-menu-right'></i></button>",
                prevArrow: "<button type='button' class='content-carousel__left-arrow' aria-label='Carousel move left'><i class='glyphicon glyphicon-menu-left'></i></button>",
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: false
            });
      var layoutManager = ContentCarouselLayoutManager.getInstance();
      layoutManager.autoLayout(DivName);
    }
  });
}
