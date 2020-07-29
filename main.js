const btn = document.querySelector('button');
const tileArray = document.querySelectorAll('.memory-tile');
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
        // console.log(memoryArray)
    })




};
btn.addEventListener('click', shuffleTiles)