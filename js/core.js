// CORE FUNCTIONS
class Core {
  static notify(text) {
    document.getElementById("notify").innerHTML = text;
  }
  static hideById(id) {
    document.getElementById(id).style.display = "none";
  }
  static showById(id) {
    document.getElementById(id).style.display = "block";
  }
  static randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  static romanize(num) {
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
    for ( i in lookup ) {
      while ( num >= lookup[i] ) {
        roman += i;
        num -= lookup[i];
      }
    }
    return roman;
  }

  static saveGame(data) {
    localStorage.setItem("local_game_saved",true);
    localStorage.setItem("coins1", data.game.coins.amounts);
    localStorage.setItem("coins2", data.game.coins.basePrices);
    localStorage.setItem("diamonds1", data.game.diamonds.amounts);
    localStorage.setItem("diamonds2", data.game.diamonds.basePrices);
    localStorage.setItem("protons1", data.game.protons.amounts);
    localStorage.setItem("protons2", data.game.protons.basePrices);
    localStorage.setItem("unlockedCoins", data.unlockedCoins);
    localStorage.setItem("unlockedDiamonds", data.unlockedDiamonds);
    localStorage.setItem("unlockedProtons", data.unlockedProtons);
  }

  static loadGameTo(data) {
    function parseBool(val) { return val === true || val === "true" }
    function stna(string) {
      var array = [];
      string.split(",").forEach(function(currentValue) {array.push(Number(currentValue));});
      return array;
    }
    function stba(string) {
      var array = [];
      string.split(",").forEach(function(currentValue) {parseBool(array.push(currentValue));});
      return array;
    }
    if (localStorage.getItem("local_game_saved") != "true") {
      console.log("No save was found, starting new game...");
      return false;
    }
    data.game.coins.amounts = stna(localStorage.getItem("coins1"));
    data.game.coins.basePrices = stna(localStorage.getItem("coins2"));
    data.game.diamonds.amounts = stna(localStorage.getItem("diamonds1"));
    data.game.diamonds.basePrices = stna(localStorage.getItem("diamonds2"));
    data.game.protons.amounts = stna(localStorage.getItem("protons1"));
    data.game.protons.basePrices = stna(localStorage.getItem("protons2"));
    data.unlockedCoins = stba(localStorage.getItem("unlockedCoins"));
    data.unlockedDiamonds = stba(localStorage.getItem("unlockedDiamonds"));
    data.unlockedProtons = stba(localStorage.getItem("unlockedProtons"));
    return true;
  }

}
