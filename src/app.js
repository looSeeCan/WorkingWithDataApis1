import catchRainbow1 from "./rainbow.js";
// import rainbowTxt from "./rainbowTxt.js"; 
import rainbowTxt1 from "./rainbowTxt1.js";
import functionArrayOfImages from "./arrayOfImages.js";

catchRainbow1()
    .then(response => {
        // console.log(response);
        console.log("yay");
    })
    .catch(error => {
        console.log("error!");
        console.error(error);
    });


// rainbowTxt()
//     .then(response => {
//         // console.log(response);
//         console.log("yay");
//     })
//     .catch(error => {
//         console.log("error!");
//         console.error(error);
//     });

rainbowTxt1();
functionArrayOfImages();
