$(document).ready(function() {
  $('.counter-box').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-to');

      $({
          countNum: $this.find('.counter-value').text()
      }).animate({
          countNum: countTo
      }, {
          duration: 3000,
          easing: 'linear',
          step: function() {
              $this.find('.counter-value').text(Math.floor(this.countNum) + ' +');
          },
          complete: function() {
              $this.find('.counter-value').text(this.countNum + ' +');
          }
      });
  });
});