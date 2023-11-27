const section = document.querySelectorAll("section");
console.log(section);
const rainbowBtn = document.querySelector("#rainbow");
console.log(rainbow);
const allElements = document.querySelectorAll("*");

window.addEventListener("scroll", (e) => {
    let scroll = window.scrollY;
    let windowHeight = window.innerHeight;

    for (let target of section) {
        let targetPos = target.getBoundingClientRect().top + scroll;

        if (scroll > targetPos - windowHeight) {
            target.classList.add("FadeIn");
        }
    }
});

rainbowFlg = false;
rainbowBtn.addEventListener("click", () => {
if(!rainbowFlg){
        rainbowFlg = true;
        allElements.forEach((Element) => {
            Element.classList.add("rainbow");
            rainbowBtn.textContent = "Normal"
        })}
        else{
            rainbowFlg = false;
            allElements.forEach((Element) => {
                Element.classList.remove("rainbow");
                rainbowBtn.textContent = "Rainbow"
        })
    }})

console.dir(allElements[0].classList);
// rainbowBtn.addEventListener("click", (e) => {
//     e.preventDefault();
    // allElements.forEach((Element)=>{
    //     Element.classList.toggle("rainbow")
    // })

    // if (allElements[0].classList.contains("rainbow")) {
    //     rainbowBtn.innerText = "Normal"
    // }
    // else{
    //     rainbowBtn.innerText = "Rainbow"
    // }
// });
