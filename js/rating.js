/*star = document.getElementById("hola");

function changeColor (star) {
    star.style.color = "pink";
}
*/

function vote(rating) {
    $('#contenedor i')
        .slice(0, rating)
        .each(function(){
            $(this).toggleClass('far fas')
        })
}