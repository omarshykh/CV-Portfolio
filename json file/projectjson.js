
var person = localStorage.getItem('person');
person=JSON.parse(person);

document.getElementById('proj1name').innerHTML=person.projects[0].name;
document.getElementById('proj1desc').innerHTML=person.projects[0].description;
document.getElementById('proj1img').src=person.projects[0].imagelink;
document.getElementById('proj1link').href=person.projects[0].projectlink;

document.getElementById('proj2name').innerHTML=person.projects[1].name;
document.getElementById('proj2desc').innerHTML=person.projects[1].description;
document.getElementById('proj2img').src=person.projects[1].imagelink;
document.getElementById('proj2link').href=person.projects[1].projectlink;

document.getElementById('proj3name').innerHTML=person.projects[2].name;
document.getElementById('proj3desc').innerHTML=person.projects[2].description;
document.getElementById('proj3img').src=person.projects[2].imagelink;
document.getElementById('proj3link').href=person.projects[2].projectlink;

document.getElementById('proj4name').innerHTML=person.projects[3].name;
document.getElementById('proj4desc').innerHTML=person.projects[3].description;
document.getElementById('proj4img').src=person.projects[3].imagelink;
document.getElementById('proj4link').href=person.projects[3].projectlink;

document.getElementById('proj5name').innerHTML=person.projects[4].name;
document.getElementById('proj5desc').innerHTML=person.projects[4].description;
document.getElementById('proj5img').src=person.projects[4].imagelink;
document.getElementById('proj5link').href=person.projects[4].projectlink;

document.getElementById('cont').innerHTML=person.contact.address+"<br>"+
person.contact.phone+"<br>Email : <a href='@mailto:"+person.contact.email+"' id='email'>"+
person.contact.email+"</a>";

var further=document.getElementById('further');

for(var j=0;j<person.further.length;j++){
    var listitem=document.createElement('LI');
    listitem.setAttribute('class','footerlink');
    var anker=document.createElement('A');
    anker.setAttribute('class','footlinks');
    anker.setAttribute('target','_blank');
    anker.setAttribute('href',person.further[j]);
    var icons=document.createElement('IMG');
    icons.setAttribute('src',person.icons[j]);
    icons.setAttribute('alt',person.alternative[j]);
    if(j===0||j===4){
        icons.setAttribute('width','2%');
        icons.setAttribute('height','2%');
    }
    else if(j===1||j===2){
        icons.setAttribute('width','6%');
        icons.setAttribute('height','5%');
    }
    else{
        icons.setAttribute('width','9%');
        icons.setAttribute('height','7%');
    }
    anker.appendChild(icons);
    listitem.appendChild(anker);
    further.appendChild(listitem);
}