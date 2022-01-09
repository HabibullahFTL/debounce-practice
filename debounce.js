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
    console.log("Clicked");
},2000))

const inputDebounce = document.querySelector('#inputDebounce');

inputDebounce.addEventListener("keyup",debounce(()=>{
    console.log(inputDebounce.value);
},1000))