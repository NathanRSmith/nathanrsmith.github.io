(function($) {

  var PROMPT_BASE_WAIT = 60;
  var PROMPT_PRE_WAIT = 1000;
  var PROMPT_POST_WAIT = 100;
  var CURSOR = "&#9612;";

  var content = $('#body').children();
  var idx = 0;
  var prompt_idx = 0;
  var prompt_content;

  // Process each section
  function step() {
    var $el = $(content[idx]);

    // If is prompt line, special case
    if($el.hasClass('prompt') && !$el.hasClass('last')) {
      prompt_content = $el.text();
      $el.html(CURSOR);
      $el.addClass('visible');
      setTimeout(promptStep, PROMPT_PRE_WAIT);
    }
    // Otherwise, show and go to next
    else {
      $el.addClass('visible');

      if(idx <= content.length) {
        idx += 1;
        setTimeout(step, 0);
      }
    }
  }

  // Show each character one at a time
  function promptStep() {
    var $el = $(content[idx]);

    // Done with prompt, go to next line
    if(prompt_idx >= prompt_content.length) {
      $el.text(prompt_content);

      prompt_idx = 0;
      idx += 1;
      setTimeout(step, PROMPT_POST_WAIT);
    }
    // Show next character
    else {
      var val = prompt_content[prompt_idx];
      prompt_idx += 1;
      $el.html(prompt_content.slice(0, prompt_idx) + CURSOR);
      setTimeout(promptStep, getPromptStepWait(prompt_content[val]))
    }
  }

  // Calculate time to wait til next letter
  function getPromptStepWait(val) {
    return PROMPT_BASE_WAIT;
  }



  step();

}($))
