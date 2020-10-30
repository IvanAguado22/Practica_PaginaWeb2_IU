$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
    var $this = $(this),
        label = $this.prev('label');
  
        if (e.type === 'keyup') {
              if ($this.val() === '') {
            label.removeClass('active highlight');
          } else {
            label.addClass('active highlight');
          }
      } else if (e.type === 'blur') {
          if( $this.val() === '' ) {
              label.removeClass('active highlight'); 
              } else {
              label.removeClass('highlight');   
              }   
      } else if (e.type === 'focus') {
        
        if( $this.val() === '' ) {
              label.removeClass('highlight'); 
              } 
        else if( $this.val() !== '' ) {
              label.addClass('highlight');
              }
      }
  
  });
  
  $('.tab a').on('click', function (e) {
    
    e.preventDefault();
    
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
    
    target = $(this).attr('href');
  
    $('.tab-content > div').not(target).hide();
    
    $(target).fadeIn(600);
    
  });

  function verificarPassword(){
  var inputPassword = document.getElementById('pass').value;
    if (inputPassword.length < 8) {
        alert("too_short");
        return("too_short"); 
    } else if (inputPassword.search(/\d/) == -1) {
        alert("no_num");
        return("no_num");
    } else if (inputPassword.search(/[a-z]/) == -1) {
        alert("no_letter");
        return("no_letter");
    }
  alert("oukey!!");
  return("ok");
}