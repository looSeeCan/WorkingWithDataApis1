import catchRainbow1 from "./rainbow.js";
// import rainbowTxt from "./rainbowTxt.js"; 
import FunctionArrayOfImages from "./arrayOfImages.js";
import RainbowTxt from "./txt.js";


FunctionArrayOfImages()
.then(response => {
    console.log(response);
})
.catch(error => {
    console.log(error)
})


// catchRainbow1()//this was the very first task where i had to fetch just one img, the rainbow.jpg
//     .then(response => {
//         // console.log(response);
//     })
//     .catch(error => {
//         console.log("error!");
//         console.error(error);
//     });

// RainbowTxt();
