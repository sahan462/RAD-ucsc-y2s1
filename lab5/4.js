class game {
    constructor(theme, avatar, level, game, score) {
        this.theme = theme;
        this.avatar = avatar;
        this.level = level;
        this.game = game;
        this.score = score;
    }

    setLevel(level) {
        this.level = level;
    }

    getLevel() {
        return this.level;
    }

    setTheme(theme) {
        this.theme = theme;
    }

    getTheme() {
        return this.theme;
    }

    setAvatar(avatar) {
        this.avatar = avatar;
    }

    getAvatar() {
        return this.avatar;
    }

    setState(state) {
        this.state = state;
    }

    getState() {
        return this.state;
    }

    start() {
    }

    pause() {
        console.log("Paused");
    }

    resume() {
        console.log("Resumed");
    }

    cancel() {
        document.getElementById("gameconsole").innerHTML = "<h1>Game Cancelled!!<h1>";
        document.getElementById("games").innerHTML = "";
    }
}

class car_game extends game {

    constructor(theme,avatar,level,game) {
        super(theme,avatar.name,level,game,0);
    }
    start() {
        const gamedisplay = document.getElementById('games');
        gamedisplay.innerHTML =  "<button onclick='gamer.update()'>add score</button>"
    }

    update(){
        if(this.score === 100) {
            document.getElementById('games').innerHTML = "YOU WON!!";
            document.getElementById("score").innerHTML = "Total Score: "+this.score;
        }else{
            document.getElementById("score").innerHTML = "Total Score: "+this.score;
            this.score = this.score + 10;
        }
    }

    pause() {
        super.pause();
        document.getElementById("score").innerHTML = "<h3>Game Paused!!!</h3>";
    }

    resume() {
        super.resume();
        this.start();
        document.getElementById("score").innerHTML = this.score;
    }


}

class shooting_game extends game {
    constructor(theme,avatar,level,game) {
        super(theme,avatar.name,level,game,0);
    }

    start() {
        super.start(); // If needed, additional implementation for the car_game start method can be added here
        gamedisplay.innerHTML = "game started";
    }
}

class puzzle_game extends game {
    constructor(theme,avatar,level,game) {
        super(theme,avatar.name,level,game,0);
    }

    start() {
        super.start(); // If needed, additional implementation for the car_game start method can be added here
        gamedisplay.innerHTML = "game started"
    }
}

let gamer;


function newUser() {

    const new_game = document.getElementById("gameoptions");
    const game_data = document.getElementById("gamedata");

    const theme = game_data.elements['theme'].value;
    const avatar = game_data.elements['avatar'].value;
    const level = game_data.elements['level'].value;
    const game = game_data.elements['game'].value;


    if(new_game.value === "Car Game"){
        gamer = new car_game(theme,avatar,level,game);

        document.getElementById("gameconsole").innerHTML = "    <h1>Car Game</h1>\n" +
            "\n" +
            "    <div style=\"margin-top: 10px\">\n" +
            "      <button onclick='gamer.start();'>Start</button>\n" +
            "      <button onclick='gamer.pause()'>Pause</button>\n" +
            "      <button onclick='gamer.resume()'>Resume</button>\n" +
            "      <button onclick='gamer.cancel()'>Cancel</button>\n" +
            "    </div>";
    }else if(new_game.value === "Puzzle Game"){
        gamer = new puzzle_game(theme,avatar,level,game);
        document.getElementById("gameconsole").innerHTML = "    <h1>Puzzle Game</h1>\n" +
            "\n" +
            "    <div style=\"margin-top: 10px\">\n" +
            "      <button onclick='gamer.start()'>Start</button>\n" +
            "      <button>Pause</button>\n" +
            "      <button>Resume</button>\n" +
            "      <button>Cancel</button>\n" +
            "    </div>";
    }else if(new_game.value === "Shooting Game"){
        gamer = new shooting_game(theme,avatar,level,game);
        document.getElementById("gameconsole").innerHTML = "    <h1>Shooting Game</h1>\n" +
            "\n" +
            "    <div style=\"margin-top: 10px\">\n" +
            "      <button onclick='gamer.start()'>Start</button>\n" +
            "      <button>Pause</button>\n" +
            "      <button>Resume</button>\n" +
            "      <button>Cancel</button>\n" +
            "    </div>";
    }else{
        document.getElementById("gameconsole").innerHTML = "Currently Not Available";
    }
}




