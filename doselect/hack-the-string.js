/*
DoNuts (yes, that's what we call ourselves) have a penchant for hacking stuff up and making it work how we like it. In the same spirit, we want you to create a method DoSelectHack on String that takes an integer n as parameter. If n is an even number, it should return the string in uppercase. If n is odd, it should return the string in lowercase.

Basically, you'll need to write a script to make the following possible.

'DoSelect'.DoSelectHack(5) should return 'doselect'
'DoSelect'.DoSelectHack(4) should return 'DOSELECT'
*/

module.exports = function() {
    
    //Write your script here. This function will be executed before the evaluation script
    if(!String.prototype.DoSelectHack) {
      String.prototype.DoSelectHack = function(i) {
        if(isNaN(i)){
            return -1;
        }
      	if(i%2===0){
      		return this.toUpperCase();
      	}
      	else {
      		return this.toLowerCase();
      	}
      };	
    }
}
