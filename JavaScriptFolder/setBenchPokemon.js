function setBench(player) {
    for (let i = 1; i <= 5; i++) {
        const bench = player[`b${i}`];

        // Skip if bench slot is missing or empty
        if (!bench || bench.length === 0) continue;

        const pokemon = bench[0];

        //Generating/Getting Ids from the player Object
        const imgEl  = document.getElementById(`${player.suffix}b${i}Graphic`);
        const nameEl = document.getElementById(`${player.suffix}b${i}Name`);
        const hpEl   = document.getElementById(`${player.suffix}b${i}Hp`);

        /* In the future Create a file containing the set Bench Pokemon Energies and call that method here
        on each individual bench pokemon*/

        //fail-safe, incase Id doesnt exist
        if (imgEl)  imgEl.src = pokemon.imgAddress;
        if (nameEl) nameEl.textContent = pokemon.name;
        if (hpEl)   hpEl.textContent = `Hp= ${pokemon.health}`;
    }
}




export {setBench};