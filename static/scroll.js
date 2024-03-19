// document.addEventListener('contextmenu', event => event.preventDefault());

const observer= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add('show');
            console.log('show')
        } else{
            entry.target.classList.remove('show');
        }
    });
});

const scrollEffect= document.querySelectorAll('#scroll');
scrollEffect.forEach((el)=>observer.observe(el));