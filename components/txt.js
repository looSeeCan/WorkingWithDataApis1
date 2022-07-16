//Challenge: Fetch a txt file

//The answer to the challenge.
const Txt = async (selected_image) => {
    //I have to manipulate the selected_image string. I only want the name before the period and then add .txt to it.
    
    const a = selected_image.indexOf(".");//find the index of the period assign it to a variable
    // console.log(a);
    const b = selected_image.substring(0, a);//use the substring method(). (0, a) = (where you want to start, where you want to end)
    // console.log(b);
    // console.log(`assest/${b}.txt`);
    const response = await fetch(`assets/${b}.txt`);//add the .txt to the end of the file name, because I removed the .jpg or .png.
    // console.log(response);
    const text = await response.text();
    document.getElementById("p2").innerText = text;
    
    return response;
}


//How I did it. This is how I did the challenge of just grabbing one text file.

// const txt = async () => {
//     const response = await fetch("assets/rainbow.txt");
//     console.log(response);
//     const text = await response.text();
//     console.log(text);
//     let paragraph = document.createElement("p");
//     console.log(paragraph);
//     paragraph.classList.add("paragraph");
//     // console.log(paragraph);
//     paragraph.innerText = text;
//     let container1 = document.getElementById("container");
//     console.log(container1);
//     container1.appendChild(paragraph);
// }


//with .then

// const txt = () => {
//     fetch("assets/rainbow.txt")
//         .then(response => {
//             console.log(response);
//             return response.text();
//         })
//         .then(text => {
//             console.log(text);
//             document.getElementById("p2").innerText = text;
//         });
// };

export default Txt;