const btn = document.querySelector('button');
const tileArray = [...document.querySelectorAll('.memory-tile')];
const memoryArray = [];
const numberOfPairs = tileArray.length / 2;

const shuffleTiles = function() {
    // const numberOfPairs = tileArray.length / 2;
    for (let i = 0; i < numberOfPairs; i++) {
        memoryArray.push(i);
        memoryArray.push(i);

    }
    tileArray.forEach(element => {
        const rng = Math.floor(Math.random() * memoryArray.length);
        element.textContent = memoryArray[rng];
        memoryArray.splice(rng, 1);
        element.addEventListener('click', function(e) {
                e.target.style.backgroundColor = 'green';
                const filteredArray = tileArray.filter(el => {
                    return el.style.backgroundColor == 'green';
                })
                if (filteredArray.length >= 2) {
                    tileArray.forEach(el => {
                        el.style.backgroundColor = 'white';
                    });
                    if (filteredArray[0].textContent == filteredArray[1].textContent) {
                        filteredArray.forEach(element => {
                            element.style.backgroundColor = 'green';
                        })
                        tileArray.forEach((element, index) => {
                                if (element === filteredArray[0]) {
                                    tileArray.splice(index, 1);
                                    filteredArray.shift();
                                    console.log(true, filteredArray)
                                } else if (element === filteredArray[1]) {
                                    tileArray.splice(index, 1);
                                    filteredArray.pop()
                                    console.log(true, filteredArray)
                                }
                            })
                            // tileArray.splice()
                    }


                }



            })
            // console.log(memoryArray)
    })


};
btn.addEventListener('click', shuffleTiles)