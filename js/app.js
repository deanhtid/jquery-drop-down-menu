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
// Bind click to button.
  // Go to select's location.
// Modify CSS to hide links on small widths and show button and select.
  // Also hides select and button on larger width and show's links.
// Deal with selected options depending on current page.
