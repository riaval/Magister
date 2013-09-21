semantic.validateForm = {};

// ready event
semantic.validateForm.ready = function() {

  // selector cache
  var
    $checkbox = $('.ui.checkbox'),
    $menuItem = $('.menu a.item, .menu .link.item'),
    $dropdown = $('.main.container .menu .dropdown'),
    // alias
    handler
  ;

  // event handlers
  handler = {

      activate: function() {
        if(!$(this).hasClass('dropdown')) {
          $(this)
            .addClass('active')
            .closest('.ui.menu')
            .find('.item')
              .not($(this))
              .removeClass('active')
          ;
        }
      }

    };

  $checkbox
    .checkbox()
  ;

  $dropdown
    .dropdown({
      on: 'hover',
      transition: "horizontal flip",
    });

  $menuItem
    .on('click', handler.activate)
  ;


};


// attach ready event
$(document)
  .ready(semantic.validateForm.ready)
;