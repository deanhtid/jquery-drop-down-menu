// Problem: It looks rubbish in smaller browser widths and devices.
// Solution: To hide the text links and swap them out with more appropriate navigation.

// Create a select and append to #menu.
let $select = $('<select></select>');
$('#menu').append($select);

// Cycle over menu links.
$('#menu a').each(function() {
  let $anchor = $(this);

  // Create and option.
  let $option = $('<option></option>');

  // Option's value is the href.
  $option.val($anchor.attr('href'));

  // Option's text is the text of link.
  $option.text($anchor.text());

  // Append option to select.
  $select.append($option);
});

// Create button.
var $button = $('<button>Go</button>');
$('#menu').append($button);

// Bind click to button.
$button.click(function() {

  // Go to select's location.
  window.location = $select.val();
});

// Deal with selected options depending on current page.
