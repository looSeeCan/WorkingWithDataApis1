import catchRainbow1 from "./rainbow.js";
// import rainbowTxt from "./rainbowTxt.js"; 
import FunctionArrayOfImages from "./arrayOfImages.js";
import RainbowTxt from "./txt.js";

// catchRainbow1()
//     .then(response => {
//         // console.log(response);
//     })
//     .catch(error => {
//         console.log("error!");
//         console.error(error);
//     });

// RainbowTxt();

FunctionArrayOfImages()
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error)
    })
    

