
        function checkPrice(){
        let moneyUser = prompt("How much money do you have?");
        const chocolateIC = 10, mintChocolateIC = 20;
        
        if(moneyUser <= 9) {
        
        alert(`You can't buy any icecream`);
        }
        
        else if (moneyUser >= chocolateIC && moneyUser > 0) {
        
        alert(`You can buy the chocolate icecream`);
        }
        
        else if (moneyUser >= mintChocolateIC && moneyUser > chocolateIC) {
        
        alert (`You can buy the mint chocolate icecream`);
        }
        
        else {
        
        alert(`You can buy any ice cream`);
}
      }
