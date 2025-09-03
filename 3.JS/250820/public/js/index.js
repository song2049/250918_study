const sixClass = [
   "주병현",
   1,
   true, // boolean
   false, // boolean
   null,
   124124214124n,
   undefined,
   [],
   {},
   function() {
        return 10;
   }
]

// console.log(sixClass[9]());

// sixClass[0] = 0;
// sixClass[1] = 1;
// sixClass[2] = 2;
// sixClass[3] = 3;
// sixClass[4] = 4;

for(let i = 0; i < sixClass.length; i++) {
    sixClass[i] = i
}

// ...


// const a = [{},{},{}];