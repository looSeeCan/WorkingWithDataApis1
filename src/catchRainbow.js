export default async function catchRainbow1() {
    const response = await fetch("assets/rainbow.jpg");
    const blob = await response.blob();
    // console.log(blob);
    document.getElementById("rainbow").src = URL.createObjectURL(blob);
};

export const hello = () => {
    console.log('hello');
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


