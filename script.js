

function GetMouseCoords(event){
    let x = event.clientX;
    let y = event.clientY;
    let audio = new Audio("splat.mp3");
    const node = document.getElementById("tomato");
    const clone = node.cloneNode(true);
    document.body.appendChild(clone);
    document.getElementById("tomato").style.display = 'inline';
    document.getElementById("tomato").style.left = (x-60)+'px';
    document.getElementById("tomato").style.top = (y-60)+'px';

    audio.play();

    play.addEventListener("")

    
}

