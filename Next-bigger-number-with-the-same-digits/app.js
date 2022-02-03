// eg. 59884848459853
// Since we want the next bigger number,
// we only need to change the right part.
// We have to find a pivot between two parts(change & unchange),
// then switch the number to reach the next bigger number

function nextBigger(n){
        let arrN = n.toString().split("");

        // find out a pivot
        let p =-1;
        for(let i=arrN.length-1; i>0; i--){
            if(arrN[i]>arrN[i-1]){
                p = i-1;
                break;
            }
        }

        if(p==-1){
            return p; //unable to find the pivot
        }

        let right = arrN.splice(p); //splice the digits in the pivot
        let pivotValue = right.splice(0,1)[0]; //extract pivot

        //find the min number > pivotValue;
        let minNum =null, minNumIndex=null;
        for (let i=0; i<right.length; i++){
            if(right[i]>pivotValue){
                if(minNum==null|| right[i]<minNum){
                    minNum = right[i];
                    minNumIndex = i;
                }
            }
        }
        if(minNumIndex == null) return -1;

        right.splice(minNumIndex,1);
        right.push(pivotValue);
        right = right.sort();

        //concat left part & new pivot & right part
        let output = parseInt(arrN.concat(minNum).concat(right).join(''));
        if(output<n) return -1;

        return output;


    }


//The initial way takes too much time to excute large number
function nextBigger2(n){
    let nextNum = n+1;
    const compare = num => num.toString().split("").sort((a,b)=>a-b).join("");
    while(compare(n)!=compare(nextNum)){
        nextNum++;
        if(compare(nextNum).length>compare(n).length){
            return -1;
        }
    }
    return parseInt(nextNum);
}

console.log(nextBigger(9)); //-1
console.log(nextBigger(12)); //21
console.log(nextBigger(513)); //531
console.log(nextBigger(2017)); //2071
console.log(nextBigger(414)); //441
console.log(nextBigger(144)); //414
console.log(nextBigger(59884848459853)); //59884848483559