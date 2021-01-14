let list=['cinco','cuatro','tres','dos','uno'];

list.forEach(function(element) {
    let star = document.getElementById(element);

    star.addEventListener("click", function(){
        
        //Busca todos los elementos que tienen la clase checked para pasarla a unchecked i actualizar el num. de estrellas
        let els = document.querySelectorAll(".checked");
        els.forEach(function(el) {
            el.classList.add('unchecked');
        });

        //Busca el numero correspondiente en el Array para con el loop cambiar a checked la estrella correspondiente y las anteriores
        let num = list.indexOf(element);
        let i;
        for (i = num; i <= list.length-1; i++){
            mas = document.getElementById(list[i]);
            var cls = mas.className;
            
            if(cls.includes("unchecked")) {
                mas.classList.remove("unchecked");
                mas.classList.add("checked");
            }
        }
        
    });
});


//Cuando se clica fuera de #contenedor la clase checked pasa a unchecked
    document.addEventListener('click', function(event) {
        
        var isClickInside = contenedor.contains(event.target);
        
        if (!isClickInside) {        
            let els = document.querySelectorAll(".checked");
                els.forEach(function(el) {
                el.classList.add('unchecked');
            });        
        }
    });