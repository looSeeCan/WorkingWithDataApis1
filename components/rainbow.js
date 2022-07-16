//This was the first part of the tutorial. Where I just fetched the rainbow.jpg. I did the array challenge and just put the rainbow image in there.

export default async function catchRainbow1() {//this code replaces the catchRainbow function commented out below
    const response = await fetch("assets/rainbow.jpg");//call the fetch method and pass in an argument. The path in the this case is a picture
    //the fetch function returns a promise. A promise is a way to handle an asynchronis event.
    // console.log(response);//the response is a stream of data. we need another step to read that data and store it to a format that we can work with
    const blob = await response.blob();//in this case we want to read it as a blob
    const a = document.getElementById("rainbow").src = URL.createObjectURL(blob);//the URL.createObjectURL() method creates a string containing a URL representing the object given in the  parameter
    // console.log(a);
    return response;
};





// export const catchRainbow = () => {
    
//     fetch("assets/rainbow.jpg")
//     .then(response => {
//         return response.blob();
//     })
//     .then(blob => {
//         console.log(blob);
//         document.getElementById("rainbow").src = URL.createObjectURL(blob);
//     })
// };


