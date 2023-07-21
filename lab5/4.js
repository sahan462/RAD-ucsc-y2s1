class game {
    constructor(theme, avatar, level, game) {
        this.theme = theme;
        this.avatar = avatar;
        this.level = level;
        this.game = game;
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
        // Implement the start behavior for the game
        alert("Game started");
        const gamedisplay = document.getElementById('games');
    }

    pause() {
        console.log("Paused");
    }

    resume() {
        console.log("Resumed");
    }

    cancel() {
        console.log("Cancelled");
    }
}

class car_game extends game {

    constructor(theme,avatar,level,game) {
        super(theme,avatar.name,level,game);
    }
    start() {
        super.start(); // If needed, additional implementation for the car_game start method can be added here
        gamedisplay.innerHTML = "game started"
    }
}

class shooting_game extends game {
    constructor(theme,avatar,level,game) {
        super(theme,avatar.name,level,game);
    }
}

class puzzle_game extends game {
    constructor(theme,avatar,level,game) {
        super(theme,avatar.name,level,game);
    }
}

function newUser() {

    const new_game = document.getElementById("gameoptions");
    const game_data = document.getElementById("gamedata");

    const theme = game_data.elements['theme'].value;
    const avatar = game_data.elements['avatar'].value;
    const level = game_data.elements['level'].value;
    const game = game_data.elements['game'].value;

    if(new_game.value === "Car Game"){
        const cargame = new car_game(theme,avatar,level,game);
        document.getElementById("gameconsole").innerHTML = "    <h1>Car Game</h1>\n" +
            "\n" +
            "    <div style=\"margin-top: 10px\">\n" +
            "      <button onclick='cargame.start()'>Start</button>\n" +
            "      <button>Pause</button>\n" +
            "      <button>Resume</button>\n" +
            "      <button>Cancel</button>\n" +
            "    </div>";
    }else if(new_game.value === "Puzzle Game"){
        const puzzlegame = new puzzle_game(theme,avatar,level,game);
        document.getElementById("gameconsole").innerHTML = "    <h1>Puzzle Game</h1>\n" +
            "\n" +
            "    <div style=\"margin-top: 10px\">\n" +
            "      <button>Start</button>\n" +
            "      <button>Pause</button>\n" +
            "      <button>Resume</button>\n" +
            "      <button>Cancel</button>\n" +
            "    </div>";
    }else if(new_game.value === "Shooting Game"){
        const shootinggame = new shooting_game(theme,avatar,level,game);
        document.getElementById("gameconsole").innerHTML = "    <h1>Shooting Game</h1>\n" +
            "\n" +
            "    <div style=\"margin-top: 10px\">\n" +
            "      <button>Start</button>\n" +
            "      <button>Pause</button>\n" +
            "      <button>Resume</button>\n" +
            "      <button>Cancel</button>\n" +
            "    </div>";
    }else{
        document.getElementById("gameconsole").innerHTML = "Currently Not Available";
    }


}


