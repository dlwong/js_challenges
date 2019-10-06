const createDeck = () => {
  const suits = [ '♥', '♣', '♠', '♦' ];
  const values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
  const finalDeck = [];

  suits.forEach(suit => {
    for (let i = 0; i < values.length; i++){
      finalDeck.push(suit+values[i])
    }
  })

  return finalDeck;
}

const shuffleDeck = () => {
  
}