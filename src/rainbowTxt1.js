//The answer to the challenge.
const rainbowTxt1 = async () => {
    const response = await fetch('assets/rainbow.txt');
    const text = await response.text();
    document.getElementById("p2").innerText = text;
}



// const rainbowTxt1 = () => {
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

export default rainbowTxt1;