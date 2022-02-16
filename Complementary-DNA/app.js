function DNAStrand(dna){
    const set = [["A","T"],["C","G"]];
    return dna.split("").map(el=>{
        if(set[0].indexOf(el)>-1){
            for(let i of set[0]){
                if(el!=i){
                    return i;
                }
            }
        }else{
            for(let i of set[1]){
                if(el!=i){
                    return i;
                }
            }
        }
    })
    .join("");
}

//another way using object
var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand2(dna){
  return dna.split('').map(el=> pairs[el]).join('');
}

console.log(DNAStrand("ATTGC"));