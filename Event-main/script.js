// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.event-icon',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.event-icon__title',
    category: '[data-category]',
    color: '[data-color]',
    date: '[data-date]'
  },
  sortBy: 'date'
});

// store filter for each group
var filters = {};

$('.filters').on( 'click', '.button', function( event ) {
  var $button = $( event.currentTarget );
  // get group key
  var $buttonGroup = $button.parents('.button-group');
  var filterGroup = $buttonGroup.attr('data-filter-group');
  // set filter for group
  filters[ filterGroup ] = $button.attr('data-filter');
  // combine filters
  var filterValue = concatValues( filters );
  // set filter for Isotope
  $grid.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function( event ) {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    var $button = $( event.currentTarget );
    $button.addClass('is-checked');
  });
});

// sort by date button
// First, store a reference to the undo sort button
const $undoSortButton = $('#undo-sort-by-date-button');

// When the sort by date button is clicked, show the undo sort button and hide the sort by date button
$('#sort-by-date-button').on( 'click', function() {
  $grid.isotope({ sortBy: 'date', sortAscending: false });
  $(this).hide();
  $undoSortButton.show();
});

// When the undo sort button is clicked, hide the undo sort button and show the sort by date button
$undoSortButton.on('click', function() {
  $grid.isotope({ sortBy: 'original-order', sortAscending: true });
  $(this).hide();
  $('#sort-by-date-button').show();
});

// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}
