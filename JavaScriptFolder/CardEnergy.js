import Card from "./Card.js";

class CardEnergy extends Card {
    constructor(name, type, imgAddress, value = 1) {
        super(name);
        this._type = type;
        this._imgAddress = imgAddress;
        this._value = value;
        this._type = 'energy';
    }

    get type() {
        return this._type;
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
