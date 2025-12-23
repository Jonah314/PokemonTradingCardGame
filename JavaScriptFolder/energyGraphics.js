/* function displayEnergies(player){
    if(player.b1.length > 1){
        let seat = document.getElementById("pb1Energies");
        seat.innerHTML='';

        player.b1.forEach(element => {
            
            
            if(element.type==="energy"){
                let p = document.createElement('p');
                p.innerHTML= `E-${element.energyType}`;
                seat.appendChild(p);
            }
            
        });
    }
} */

function displayEnergies(player){
    let seatEnergyGraphic =document.querySelectorAll(".energies");

    seatEnergyGraphic.forEach((seat)=>{
        //get id
        let id = seat.id;
        //get stack from id
        let stack = id.slice(1,3);
        
        seat.innerHTML ='';

        player[stack].forEach(element => {
            if(element.type==="energy"){
                let p = document.createElement('p');
                p.innerHTML= `E-${element.energyType}`;
                seat.appendChild(p);
            }
        });

    });
}

export {displayEnergies};