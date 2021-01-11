/*star = document.getElementById("hola");

function changeColor (star) {
    star.style.color = "pink";
}
*/

document.addEventListener('click', function(event) { 
		
    if (event.target.matches('.star')) {
        event.preventDefault();
        var target = event.target;				
        
        // find selected star
        var selected = target.getAttribute( 'data-star' );
        
        var stars = document.querySelectorAll('.star');
        
        for(var i = 0; i < stars.length; i++) { // loop thru all elements
          if(i < selected){
              stars[i].classList.add('selected');
              stars[i].querySelector('.screen-reader').textContent += " Selected";
              console.log(stars[i].querySelector('.screen-reader').textContent);
          } else {
              stars[i].classList.remove('selected');
              stars[i].querySelector('.screen-reader').textContent = (i+1) + " Star";
              if(i > 0){ stars[i].querySelector('.screen-reader').textContent += "s"; } 
              console.log(stars[i].querySelector('.screen-reader').textContent);
          }
        }  
    }

}, false);
