/*let btn = document.getElementById("dark");


 btn.addEventListener("click", function()
 {
if (document.body.classList.contains("dark-style"))
{
   
    btn.textContent="Dark Mode";
}
else{
   
    btn.textContent="Light Mode";
}
});
btn.addEventListener("click",function(){
    document.body.classList.toggle("dark-style");
});*/





 function sendData(doctor, time) {
    sessionStorage.setItem('selectedDocName', doctor);
    sessionStorage.setItem('selectedSchedule', time);
    window.location.href = 'booking.html'; 
}
/*btn.addEventListener("click",function(){
    if(document.body.classList.contains("dark-style"))
{    
    localStorage.setItem("mode","dark");
}
else{
     localStorage.setItem("mode","light");
}
});*/
/*window.onload=function(){
  /*  if(  localStorage.getItem("mode")==="dark"){
        document.body.classList.add("dark-style");
         btn.textContent="Light Mode";
    }
    else{
        /* document.body.classList.remove("dark-style");*/
         /*btn.textContent="Dark Mode";
}}*/
let lay=document.getElementById("lay");
lay.addEventListener("click",function(){
    document.body.classList.toggle("alt-layout");
   
});


lay.addEventListener("click",function(){
    if(document.body.classList.contains("alt-layout"))
{    
    localStorage.setItem("l","lay");
}
else{
     localStorage.setItem("l","out");
}
});
window.onload=function(){
/*if(  localStorage.getItem("mode")==="dark"){
        document.body.classList.add("dark-style");
         btn.textContent="Light Mode";
    }
    else{
        /* document.body.classList.remove("dark-style");*/
        /*btn.textContent="Dark Mode";*/
    }
    if(  localStorage.getItem("l")==="lay"){
        document.body.classList.add("alt-layout");
}  
    else{
        /* document.body.classList.remove("dark-style");*/
        document.body.classList.remove("alt-layout");       
}

/*{let open = document.querySelector('#open');
let close = document.querySelector('#close');
let nav = document.getElementById('nav');

if(document.body.classList.contains("alt-layout"))
{
    document.body.classList.add('alt-layout')
    {open.addEventListener('click',function(){
        open.classList.add('hide');
        close.classList.remove('hide');
       nav.style.display='block';
    });
     close.addEventListener('click',function(){
        open.classList.remove('hide');
        close.classList.add('hide');
        nav.style.display='none';
    });}
    
}

else{
     
     document.body.classList.remove('alt-layout');
    
   
     open.classList.add('hide');
    close.classList.add('hide');

}}
}
/*let open = document.querySelector(' #open');
let close = document.querySelector(' #close');
let nav = document.getElementById('nav');

{if(document.body.classList.contains("alt-layout"))
    {
        open.classList.add('hide');
        close.classList.remove('hide');
         document.getElementById("nav").style.display="none";
}

close.onclick = function(){
    document.getElementById("nav").style.display="none";
  
    close.classList.remove('hide');
    open.classList.add('hide');
    }
    open.onclick = function(){
    open.classList.add('hide');
    close.classList.remove('hide');
    document.getElementById("nav").style.display="block";
}
   
}}
/*else{
    open.classList.add('hide');
     close.classList.add('hide');
     document.getElementById("nav").style.display="inline-block";
}}


/*open.onclick =function(){
    this.classList.add('hide');
    close.classList.remove('hide');
    nav.classList.remove('hide');
}
close.onclick = function(){
   nav.classList.add('hide');
    this.classList.add('hide');
    open.classList.remove('hide')
}*/




