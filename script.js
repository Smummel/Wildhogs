

displayNumber = 0
function select(selectedItem){
    const item = document.querySelector('#'+selectedItem);
    if(item.style.backgroundColor === 'green'){
        item.style.backgroundColor = 'khaki';
        displayNumber-=Number(document.querySelector('#'+selectedItem+' h3').innerHTML);
    } else{
        item.style.backgroundColor = 'green';
        displayNumber+=Number(document.querySelector('#'+selectedItem+' h3').innerHTML);
    }
    document.getElementById('total').innerHTML = 'Total: '+displayNumber+' kr';
}

function infoItem1(){
    const info = document.querySelector('#info');

    info.innerHTML = 'Detta är WildHogs ikoniska jacka! Den är gjort av syntetisk läder. Med denna förtjänar man respekt.';
}
function infoItem2(){
    const info = document.querySelector('#info');

    info.innerHTML = 'Detta är den officiella WildHogs T-shirten! Med denna visar du att du är en äkta WildHog.';
}
function infoItem3(){
    const info = document.querySelector('#info');

    info.innerHTML = 'Säkerhet först! Denna WildHog hjälm räddar liv när gruppen är ute och rullar. Gjort av material från högsta kvalitet.';
}