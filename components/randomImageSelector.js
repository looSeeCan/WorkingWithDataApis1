
const RandomImageSelector = (str) => {
    let image_array = [];//TODO: I used .split, because I wanted to the practice with it. Use fetch to fetch the images
    image_array = str.split(","); 
    // console.log(image_array);

    let random_index = Math.floor(Math.random() * image_array.length); 
    // console.log(random_index);
    let selected_image = image_array[random_index]; 
    // console.log(selected_image);
    return selected_image;
};

export {RandomImageSelector};