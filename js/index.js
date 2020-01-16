// Your code goes here
 let navLink = document.querySelectorAll('nav a')[0];
 let navLink2 = document.querySelectorAll('nav a')[1];
 let navLink3 = document.querySelectorAll('nav a')[2];
 let heading = document.querySelector('.logo-heading');
    
 
 navLink.addEventListener('mouseenter' ,()=>{
     
        navLink.style.color = 'green';
        navLink.style.transform = 'scale(1.5)';
        navLink.style.transition = 'transform 0.3s'
    });
    
navLink.addEventListener('mouseleave' ,()=>{
        navLink.style.color = 'black';
        navLink.style.transform = 'scale(1)';
        navLink.style.transition = 'transform 0.3s'
    });

navLink2.addEventListener('mouseover', ()=>{
    if(navLink2.style.color !== 'purple'){
        navLink2.style.color = 'purple';
        navLink2.style.transform = 'scale(1.5)';
        navLink2.style.transition = 'transform 0.3s'
    }else{
        navLink2.style.color = 'black';
        navLink2.style.transform = 'scale(1)';
        navLink2.style.transition = 'transform 0.3s'
    }

});
heading.addEventListener('dblclick',()=>{
    if(heading.style.transform !== 'scale(3)'){
    heading.style.transform = 'scale(3)'
    }
    else{
        heading.style.transform = 'scale(1)'
    }
})
navLink3.addEventListener('keydown' , () => {
    if(navLink3.style.color !== 'yellow'){
        navLink3.style.color = 'yellow';
    }else{
        navLink3.style.color = 'blue';
    }
})
