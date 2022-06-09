//Challenge: Fetch a txt file

const rainbowTxt = async () => {
    const response = await fetch("assets/rainbow.txt");
    const text = await response.text();
    let paragraph = document.createElement("p");
    paragraph.classList.add("paragraph");
    paragraph.innerText = text;
    let container1 = document.getElementById("container");
    container1.appendChild(paragraph);
};

// export default async function catchRainbow1() {//this code replaces the catchRainbow function commented out below
//     const response = await fetch("assets/rainbow.jpg");
//     const blob = await response.blob();
//     // console.log(blob);
//     document.getElementById("rainbow").src = URL.createObjectURL(blob);
// };



// export const rainbowTxt = () => {
//     fetch("assets/rainbow.txt")
//         .then(response => {
//             console.log(response);
            // return response.text()
//         })
//         .then(data => {
//             // Do something with your data
//             console.log(data);
//             let paragraph = document.createElement("p");//create the element 
//             paragraph.classList.add("paragraph");//give the element a class name
//             paragraph.innerText = data;
//             console.log(paragraph); 
//             let container1 = document.getElementById("container");
//             console.log(container);
//             container1.appendChild(paragraph);
//         });
// };
            
export default rainbowTxt;