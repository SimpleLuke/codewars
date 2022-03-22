//coding and coding.. shorter and more shorter..  good luck! ;-)

//version 1 is too long for the challenge
removeZeros=a=>a.join("").replace(/^0+|0+$/g, "").split("").map(Number);

//version 2
removeZeros=a=>eval(`[${/[1-9].+[1-9]/.exec(a)}]`)

console.log(removeZeros([0, 9, 5, 0, 0, 0, 0, 2, 0, 0]));