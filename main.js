let str = "";
let arr = []; 
let a, b, isDirectionRight; 

function isPrime(num) {
    for (let i = 2, max = Math.sqrt(num); i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1
}

function getPrimes(b) {
    const primes = [];
    for (let i = a; i <= b; i++) {
        if (isPrime(i)) { 
            primes.push(i); 
        }
    }
    return primes;
}

function vivod() {
    primes = getPrimes(b);
    if (primes.length == 0) {
        console.log(`простых чисел не найдено`);
    } else if (primes.length == 1) {
        console.log(`надйено всего ${primes.length} простое число`);
    } else if (primes.length < 3) {
        console.log(`надйено лишь ${primes.length} простых числа`);
    }

    if (!isDirectionRight) {
        console.log(primes[0], primes[1], primes[2]);
    } else {
        console.log(primes[primes.length - 1], primes[primes.length - 2], primes[primes.length - 3]);
    }
}



do {
    isDirectionRight = parseInt(prompt(" 0- прямое направление, 1 - обратное направление"));
} while (isDirectionRight !== 0 && isDirectionRight !== 1) 

do {
    str = prompt("введите одно или два числа через запятую");
    arr = str.split(",");
    a = parseInt(arr[0]);
    b = parseInt(arr[1]);
} while (arr.length > 2 || ((arr.length !== 1 || isNaN(a)) && (isNaN(a) || isNaN(b))))


if (arr.length == 1) {
    const primes = [];
        for (let i = a; primes.length < 3; (isDirectionRight ? i--: i++) ) {
            if (isPrime(i)) { 
                primes.push(i); 
            }
        }
    console.log(primes[0], primes[1], primes[2]);
} else {
    if (a > b) {
        b = [a, a = b][0];
    }
    vivod();
}
