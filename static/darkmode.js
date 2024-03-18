const body=document.querySelector("body");
const moon=document.querySelector("#sun");

moon.addEventListener('click',()=>{
    body.classList.toggle('dark');
    console.log('clicked on moon.');
});