import Card from "./Card.js";

class CardEnergy extends Card {
    constructor(name, energyType, imgAddress, value = 1) {
        super(name);
        this._energyType = energyType;
        this._imgAddress = imgAddress;
        this._value = value;
        this._type = 'energy';
    }

    get energyType() {
        return this._energyType;
    }

    get imgAddress() {
        return this._imgAddress;
    }

    get value() {
        return this._value;
    }
    get type() {
        return this._type;
    }
}

export default CardEnergy;
