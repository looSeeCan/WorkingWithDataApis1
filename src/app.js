import catchRainbow1 from "./catchRainbow.js";
import {hello} from "./catchRainbow.js"; 

catchRainbow1()
    .then(response => {
        // console.log(response);
        console.log("yay");
    })
    .catch(error => {
        console.log("error!");
        console.error(error);
    });

    hello();

