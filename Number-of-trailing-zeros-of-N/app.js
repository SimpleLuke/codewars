//Number of trailing zeroes in n! = Number of times n! is divisible by 10 = Highest power of 10 which divides n! = Highest power of 5 in n!
function zeros (n){
    let output = 0;
        while(n>0){
            n = Math.floor(n/5);
            output += n;
        };
        return output
    } 
