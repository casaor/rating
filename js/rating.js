let list=['cinco','cuatro','tres','dos','uno'];

list.forEach(function(element) {
    let star = document.getElementById(element);

    star.addEventListener("click", function(){
        
        let els = document.querySelectorAll(".checked");
        els.forEach(function(el) {
            el.classList.add('unchecked');
        });

        let num = list.indexOf(element);
        let i;
        for (i = num; i <= 5; i++){
            mas = document.getElementById(list[i]);
            var cls = mas.className;
            
            if(cls.includes("unchecked")) {
                mas.classList.remove("unchecked");
                mas.classList.add("checked");
            }
        }
        
    });
});
