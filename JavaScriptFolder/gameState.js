class gameState {
    construtor(){
        this._placeCardState='false';
    }
    get placeCardState(){
        return this._placeCardState;
    }
    set placeCardState(bool){
        this._placeCardState=bool;
    }

    switchCardState(){
        if (placeCardState==='true'){
            placeCardState='false';
        }else {
            placeCardState= 'true';
        }
    }

}

export {gameState};