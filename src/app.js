import catchRainbow1 from "./rainbow.js";
import {rainbowTxt} from "./rainbow.js"; 

catchRainbow1()
    .then(response => {
        // console.log(response);
        console.log("yay");
    })
    .catch(error => {
        console.log("error!");
        console.error(error);
    });

    rainbowTxt();

