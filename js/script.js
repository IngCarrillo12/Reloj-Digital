
setInterval(()=>{
    const iddate = document.getElementById('date');
    const idtime = document.getElementById('time');
    let date = new Date(),
    day = date.getDate(),
    daywek= date.getDay(),
    month = date.getMonth(),
    year = date.getFullYear(),
    hours = date.getHours(),
    min = date.getMinutes(),
    seg =date.getSeconds(),
    PMAM;
    let diassemana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    let listmonth = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    iddate.textContent =diassemana[daywek]+" "+day+" "+listmonth[month]+" "+year
    if(hours>12){
        hours= hours-12;
        PMAM= 'PM';
    }else if(hours==12){
        hours=12;
        PMAM ='PM'
    }else if(hours<10){
        hours = "0"+hours;
    }else{
        PMAM='AM';
    }
    if(min<10){
        min = "0"+min;
    }
    if(seg<10){
        seg = "0"+seg;
    }
    idtime.textContent = hours+":"+min+":"+seg+" "+PMAM;
    },1000);
    
const theme= document.querySelector('.theme');
theme=addEventListener('change', ()=> {
    const body= document.querySelector('body');
    const dateTime= document.querySelector('.date-time');
    const slogan = document.querySelector('p');
    if(theme.value=='Black')
    {
        body.setAttribute('id','dark-mode');
        dateTime.setAttribute('id','dark-mode');
        slogan.setAttribute('id','slogandark');
        theme.setAttribute('id','themeDark-mode');

    }else if(theme.value=='Light'){
        body.setAttribute('id','');
        dateTime.setAttribute('id','');
        slogan.setAttribute('id','sloganlight');
        theme.setAttribute('id','themeLight-mode');
    }
    });




