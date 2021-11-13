new Vue({
  el: "#app",
  data: {
    scorePlayer: 100,
    scoreMonster: 100,
    isPlaying: false,
    isGiveUp: true,
    youWin = true
  },

  computed:{
      result(){
          if(this.scorePlayer == 0){
              this.youWin = false
              //return this.youWin
          }
          if(this.scoreMonster == 0){
              this.youWin = true
              //return this.youWin
          }
      }
  }
    
});
