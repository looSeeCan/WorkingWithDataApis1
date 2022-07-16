import { RandomImageSelector } from "./randomImageSelector.js";
import Txt from "./txt.js";

const FunctionArrayOfImages = async () => {

    const str = "felix.png,ehonda.jpg,imflying.jpg,rainbow.jpg";//pass in a string of images. the RandomImageSelector will .split it into an array
    const selected_image = RandomImageSelector(str);//call this function. it uses a randomNum generator to select and return an image from an arrray
    // console.log(selected_image);
    
    const response = await fetch(`assets/${selected_image}`);//fetch that image
    const blob = await response.blob();//read the response as an image: blob
    // console.log(blob);
    const b = document.getElementById("imgArray").src = URL.createObjectURL(blob);//the URL.createObjectURL() method creates a string containing a URL representing the object given in the  parameter
    
    //after the picture is selected, call a function that selects the proper text for the picture
    const a = Txt(selected_image)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })

    // const a = document.getElementById("imgArray").src = `./assets/${selected_image}`;//this grabs it right from the folder
    
    return response;
};

export default FunctionArrayOfImages;