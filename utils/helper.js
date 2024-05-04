function collision({ p1, p2 }) {
    return (
      p1.attackBox.position.x + p1.attackBox.width >= p2.position.x &&
      p1.attackBox.position.x <= p2.position.x + p2.width &&
      p1.attackBox.position.y + p1.attackBox.height >= p2.position.y &&
      p1.attackBox.position.y <= p2.position.y + p2.height
    );
  }
  
  
  
  function winner({player, enemy, timerId}){
      clearTimeout(timerId);
      let displayText = document.querySelector("#displayText");
      displayText.style.display = 'flex';
      if(player.health === enemy.health) {
          displayText.innerHTML = "Tie";
      }else if (player.health > enemy.health) {
          displayText.innerHTML = "Player 1 Wins";
      }else if (player.health < enemy.health){
          displayText.innerHTML = "Player 2 Wins";
      }
  }
  
  let timer = 40;
  let timerId;
  
  function decreaseTimer() {
    
    if (timer > 0) {
      timerId = setTimeout(decreaseTimer, 1000);
      timer--;
      console.log(timer);
      document.querySelector("#timer").innerHTML = timer;
    }
    if(timer === 0){
      
      winner({player, enemy, timerId});
   }
  }