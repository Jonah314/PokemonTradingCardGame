import CardEnergy from "./CardEnergy.js";

/*createEnergy functio makes any basic function by taking its element/type and the number of energies
You want to create.  */
function createEnergy(type, count) {
    const name = `${type[0].toUpperCase()}${type.slice(1)} Energy`;
    const img = `./Img/fire_energy.jpg`;

    return Array.from({ length: count }, () =>
        new CardEnergy(name, type, img)
    );
}
/* Because the double colorless Energy has a value of two and also is more semanticaly challenging, I 
just created its own function */
function createDoubleColorlessEnergy(count) {
    return Array.from({ length: count }, () =>
        new CardEnergy("Double Colorless Energy", "colorless", "./Img/double_colorless_energy.jpg",2)
    );
}

/*const img = `./Img/${type}_energy.jpg`; */

export {
    createDoubleColorlessEnergy,
    createEnergy
};
