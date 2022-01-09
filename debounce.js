const debounce = (fn,delay)=>{
    let timeoutId;
    return ()=>{
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(()=>fn(),delay);
    }
}

const btnDebounce = document.getElementById("btnDebounce");

btnDebounce.addEventListener("click",debounce(()=>{
    document.getElementById("showBtnStatus").innerHTML = "You clicked on the button!";
    setTimeout(()=>{
        document.getElementById("showBtnStatus").innerHTML = "";
    },2000)
},600))

const inputDebounce = document.querySelector('#inputDebounce');

inputDebounce.addEventListener("keyup",debounce(()=>{
    document.getElementById("showSearchText").innerHTML = inputDebounce.value;
},1000))