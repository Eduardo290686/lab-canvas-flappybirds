window.onload = function () {
  document.getElementById("start-button").onclick = function (btn) {
    btn.preventDefault();
    Game.start();
  };
  Game.init();
};
