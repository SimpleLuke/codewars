class RomanNumerals {
    toRoman(n){
        const rnums = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
        const nums = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
        let s = "";
        for(let i=0; i<nums.length; i++){
            while(n >= nums[i]){
                s += rnums[i];
                n -= nums[i];
            }
        }
        return s;
    }
    fromRoman(str){
        const strArr = str.split("");
        let arr = [];
        for(let el of strArr){
            switch(el){
                case 'I': arr.push(1); break;
                case 'V': arr.push(5); break;
                case 'X': arr.push(10); break;
                case 'L': arr.push(50); break;
                case 'C': arr.push(100); break;
                case 'D': arr.push(500); break;
                case 'M': arr.push(1000); break;
            }
        }
        let num = arr[arr.length-1]; //Since the last num no comparision
        for(let i=0; i<arr.length-1; i++){
            if(arr[i]>=arr[i+1]){
                num += arr[i];
            }else{
                num -= arr[i];
            }
        }
        return num;
    }
}

const obj = new RomanNumerals();

console.log(obj.toRoman(14));
console.log(obj.fromRoman('MMVIII'));