function decodeResistorColors(bands) {
    bands = bands.split(" ");
    const resistor = {black: 0, brown: 1, red: 2, orange: 3, yellow: 4, green: 5, blue: 6, violet: 7, gray: 8, white: 9};
    const tolerance = {gold:5,silver:10};
    let value = (resistor[bands[0]]*10+resistor[bands[1]])*Math.pow(10,resistor[bands[2]]);
    // console.log(bands,resistor,tolerance);

      if(value>=1000000){
        value = value/1000000;
        return `${value}M ohms, ${tolerance[bands[3]]||20}%`;
      }else if(value>=1000){
        value = value/1000;
        return `${value}k ohms, ${tolerance[bands[3]]||20}%`;
      }else{
        return `${value} ohms, ${tolerance[bands[3]]||20}%`;
      }

}

console.log(decodeResistorColors("yellow violet black"));
console.log(decodeResistorColors("yellow violet red gold"));
console.log(decodeResistorColors("brown black green silver"));

//another answer provided on the site
const decodeResistorColors2 = bands => {
    const colors = {black:0,brown:1,red:2,orange:3,yellow:4,green:5,blue:6,violet:7,gray:8,white:9,gold:5,silver:10},
      [first, second, multiplier, tolerance] = bands.split(' ').map(color => colors[color]),
      ohm = (10 * first + second) * 10**multiplier;
    return `${ohm >= 10**6 ? ohm / 10**6 + 'M' : ohm >= 1000 ? ohm / 1000 + 'k' : ohm} ohms, ${tolerance || 20}%`;
  }