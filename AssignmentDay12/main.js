//Question 1: FizzBuzz

// define function
function fizzbuzz (n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if(i % 3 === 0 && i % 5 === 0){
            result.push("FizzBuzz");
        }
        else if(i % 3 === 0){
            result.push("Fizz")
        }
        else if(i % 5 === 0){
            result.push("Buzz")
        }
        else{
            result.push(i)
        }
    };
    console.log(result);
};

// call function
fizzbuzz(50);