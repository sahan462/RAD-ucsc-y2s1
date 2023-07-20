class game{

    constructor() {
        if(this.constructor === game){
            throw new Error("Instance can not be created from this class")
        }
    }


    setLevel(level){
        this.level = level;
    }




}

class car_games extends game{

}

class shooting_game extends game{

}
class puzzle_games extends game{

}