const btn = document.querySelector('button');

const memoryArray = [];


const shuffleTiles = function() {
    const tileArray = [...document.querySelectorAll('.memory-tile')];
    const numberOfPairs = tileArray.length / 2;
    // const numberOfPairs = tileArray.length / 2;
    for (let i = 0; i < numberOfPairs; i++) {
        memoryArray.push(i);
        memoryArray.push(i);

    }
    tileArray.forEach(element => {
        const rng = Math.floor(Math.random() * memoryArray.length);
        element.style.backgroundColor = 'white';
        element.textContent = memoryArray[rng];
        memoryArray.splice(rng, 1);
        element.addEventListener('click', function(e) {
                e.target.style.backgroundColor = 'green';
                const filteredArray = tileArray.filter(el => {
                    if ((el.getAttribute('aria-disabled') != "true")) {
                        return el.style.backgroundColor == 'green';
                    }

                })
                if (filteredArray.length >= 2) {

                    if (filteredArray[0].textContent == filteredArray[1].textContent) {
                        console.log(filteredArray)
                        filteredArray.forEach(element => {
                            element.style.backgroundColor = 'green';
                            element.setAttribute('aria-disabled', 'true');

                        })
                        filteredArray.splice(0, filteredArray.length);
                        console.log(filteredArray)
                            // tileArray.forEach((element, index) => {
                            //         if (element === filteredArray[0]) {
                            //             tileArray.splice(index, 1);
                            //             filteredArray.shift();
                            //             console.log(true, filteredArray)
                            //         } else if (element === filteredArray[1] || element === filteredArray[0]) {
                            //             tileArray.splice(index, 1);
                            //             filteredArray.pop()
                            //             console.log(true, filteredArray)
                            //         }
                            //     })
                            // tileArray.splice()
                    }

                    tileArray.forEach(el => {
                        if (el.getAttribute('aria-disabled') != "true") {
                            el.style.backgroundColor = 'white';
                        }
                    });
                }

                if (tileArray.filter(el => {
                        return el.style.backgroundColor == 'white';
                    }).length == 0) {
                    console.log('wygrałeś');
                }


            })
            // console.log(memoryArray)


    })


};
btn.addEventListener('click', shuffleTiles)