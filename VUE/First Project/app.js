new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function() {
            const damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster for: ' + damage
            });
            if (this.checkEndGame()) {
                return;
            }
            this.monsterAttack();
        },
        specialAttack: function() {
            const damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage
            if (this.checkEndGame()) {
                return;
            }
            this.monsterAttack();

            this.turns.unshift({
                isPlayer: true,
                text: 'Special Attack! Player hits monster for: ' + damage
            });
        },
        heal: function() {
          this.monsterAttack();

          if(this.playerHealth <= 90){
              this.playerHealth += 10;
              this.turns.unshift({
                  isPlayer: true,
                  text: 'Player heals for 10'
              })
          }
          else{
              this.playerHealth = 100;
              this.turns.unshift({
                  isPlayer: true,
                  text: 'Player heals back to full life'
              })
          }

        },
        giveUp: function() {
          this.gameIsRunning = false;
        },
        monsterAttack: function() {
            const damage = this.calculateDamage(5, 15);
           this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits player for: ' + damage
            });
           this.checkEndGame();
        },
        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkEndGame: function () {
            if(this.monsterHealth <= 0) {
                if(confirm('You won! New Game?')){
                    this.startGame();
                }
                else {
                    this.gameIsRunning = false;
                }
            return true;
            }
            else if(this.playerHealth <= 0) {
                if(confirm('You Lost! New Game?')) {
                    this.startGame();
                }
                else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
})