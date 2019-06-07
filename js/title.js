function setDrawerHandler(idSuffix, fileToLoad) {
  $('#id-drawer-head-' + idSuffix).mouseover(function () {
    $('#id-drawer-head-' + idSuffix).addClass('drawer-head-hover');}
  );
  $('#id-drawer-head-' + idSuffix).mouseout(function () {
    $('#id-drawer-head-' + idSuffix).removeClass('drawer-head-hover');
  });

  $('#id-drawer-head-' + idSuffix).click(function () {
    if (fileToLoad != '')
      $('#id-drawer-body-' + idSuffix).load(fileToLoad, '', function () {
        fileToLoad = '';
      });

    $('#id-drawer-body-' + idSuffix).slideToggle(400);
    $('#id-drawer-head-' + idSuffix).toggleClass('drawer-head-open');
  });

  $('#id-drawer-head-' + idSuffix).keypress(function (e) {
    if (e.keyCode == 13) {
      $('#id-drawer-head-' + idSuffix).click();
      return false;
    }
  });
}

function openAllDrawers() {

  $('div.drawer-body').hide();
  $('div.drawer-head').removeClass('drawer-head-open');
  $('div.drawer-head').click();
}

function closeAllDrawers() {
  $('div.drawer-body').slideUp(400);
  $('div.drawer-head').removeClass('drawer-head-open');
}

function setDrawerLinkHandler(idSuffix) {
  $('#id-drawer-link-' + idSuffix).mouseover(function () {
    $('#id-drawer-link-' + idSuffix).addClass('drawer-link-hover');}
  );
  $('#id-drawer-link-' + idSuffix).mouseout(function () {
    $('#id-drawer-link-' + idSuffix).removeClass('drawer-link-hover');
  });
}

var ContentCarouselLayoutManager = (function () {
  var instance;

  function layoutSlider(index, element) {
    var $element = $(element);
    var $firstItem = $element.find('.content-carousel__item').first();
    var carouselWidth;
    var itemWidth;
    var idealSlideCount;

    if ($firstItem) {
      carouselWidth = $(window).width() - 116;
      $(element).width(carouselWidth);
      itemWidth = $firstItem.outerWidth();
      idealSlideCount = Math.max(Math.floor(carouselWidth / itemWidth), 1);

      $element.slick(
        'slickSetOption',
        'dots',
        idealSlideCount >= 5,
        false);

      $element.slick(
        'slickSetOption',
        'slidesToScroll',
        idealSlideCount,
        false);

      $element.slick(
        'slickSetOption',
        'slidesToShow',
        idealSlideCount,
        true);
    }
  }

  function createInstance() {
    $(window).on('resize', function () {
      $('.content-carousel__slider[data-auto-layout]').each(function (index, element) {
        layoutSlider(index, element);
      });
    });

    return {
      autoLayout: function (selector) {
        $(selector).each(function (index, element) {
          $(element).attr('data-auto-layout', '');
          layoutSlider(index, element);
        });
      },
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }

      return instance;
    },
  };
})();
