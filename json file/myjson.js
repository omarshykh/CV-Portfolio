var person={
    picture:"images/final.png",
    name:"Omar Iqbal",
    designation:"Web Developer",
    about:"I am student currently doing Bachelors of Computer Science from DCS-UBIT,University of Karachi.",
    objective:"Seeking an entry-level position of a programmer/Web Developer in the field of information technology, prove my potential.Particularly interested in wearing multiple hats in a start-up environment, taking on tasks as they arise, upgrade my knowledge and grow with the organization.",
    videolink:"https://www.youtube.com/embed/Yzj5EbGQRg4",
    qualification:[
        {
            current:"Bachelors in Computer Scienece(BSCS)",
            institute:"University of Karachi(Evening Program)",
            duration:"January(2015)-Present",
            goal:"This 4-year degree program emphasizes the mathematical and theoretical foundations of computing."
        },
        {
            inter:"Intermediate in Pre-Engineering",
            institute:"Government National College",
            duration:"2013-2014"
        },
        {
            matric:"Matriculation in Science",
            institute:"S.M Public Academy Campus 1",
            duration:"2011-2012"
        }
    ],
    skills:[
        [
            "Familiar with the HTML5, CSS3,JavaScript,Bootstrap, JAVA, C#.",
            "Moreover acceptable skills over ReactJS.",
            "Good concepts of Object Oriented Programming.",
            "Acceptable commands over Photoshop and Illustrator."
        ],
        [
            "Good commmunication and presentation skills.",
            "Able to handle stress and work in multi-tasking situations.",
            "Good Interpersonal skills in team work."
        ]
    ],
    projects:[
        {
            name:"Dua Application",
            description:"This is the Dua Application which I made beacause, every other person want others to make a dua for him/her, so through it you can post your dua and others can see it and like it as well as make Dua for you",
            imagelink:"projects/dua.JPG",
            projectlink:"https://duaapplication-550b8.firebaseapp.com/"
        },
        {
            name:"Firebase Todo Application",
            description:"This is the todo application which is connected through Firebase Realtime Database so anyone could post any todo any others can see his/he todo moreover you can update and delete your todo as well as others todo.",
            imagelink:"projects/chat.JPG",
            projectlink:"https://localstorage-427a6.firebaseapp.com/"
        },
        {
            name:"Todo Application on ReactJS",
            description:"This is the todo application which I made to check my skils over ReactJS platform,and I think I made it a bit satisfactory.",
            imagelink:"projects/todo.JPG",
            projectlink:"https://todoreact-ad6bd.firebaseapp.com/"
        },
        {
            name:"Quiz Application",
            description:"This is the quiz application through which teacher can create quiz and student can attempt quiz. There is seperate panel for teacher and student, Teacher can visit his panel through his account, and student can visit his panel through student account.",
            imagelink:"projects/quiz.JPG",
            projectlink:"https://quiz-86003.firebaseapp.com/"
        },
        {
            name:"Apple Website Layout",
            description:"This layout of Apple website I design when I was at the intial level of HTML5 ans CSS3 just to practice my skills.",
            imagelink:"projects/apple.JPG",
            projectlink:"https://apple-b9df6.firebaseapp.com/"
        }
    ],
    contact:{
        address:"Address: HouseNo.3/4 B Area Liaquatabad Karachi-19.",
        phone:"Contact : 03443837443",
        email:"omar.ubit@gmail.com"
    },
    further:[
                "https://www.facebook.com/umerk26",
            "https://www.linkedin.com/in/omar-iqbal-328361137/",
            "https://www.github.com/omarshykh",
         "https://www.stackexchange.com/users/10101587/omar-iqbal",
            "https://www.twitter.com/omarshykh"
    ],
    icons:[
        "http://res.cloudinary.com/oi12345/image/upload/v1485286554/facebook_rdnobv.png",
        "http://res.cloudinary.com/oi12345/image/upload/v1485286558/linkedin_s7dkag.png",
        "http://res.cloudinary.com/oi12345/image/upload/v1485286554/github_emixjk.png",
        "http://res.cloudinary.com/oi12345/image/upload/v1485286566/stack_c0ybp8.png",
        "http://res.cloudinary.com/oi12345/image/upload/v1485286571/twitter_srg1wv.png"
    ],
    alternative:["Facebook","LinkedIn","Github","Stack Overflow","Twitter"]
};

document.getElementById('displaypic').src=person.picture;
document.getElementById('yourname').innerHTML=person.name;
document.getElementById('designation').innerHTML=person.designation;

document.getElementById('intropara').innerHTML=person.about;
document.getElementById('objpara').innerHTML=person.objective;
document.getElementById('video').src=person.videolink;

document.getElementById('current').innerHTML=person.qualification[0].current+"<br>"+
person.qualification[0].institute+"<i style='float:right'>"+person.qualification[0].duration+
"</i><br><br>"+person.qualification[0].goal;

document.getElementById('inter').innerHTML=person.qualification[1].inter+"<br>"+
person.qualification[1].institute+"<i style='float:right'>"+person.qualification[1].duration+
"</i>";

document.getElementById('matric').innerHTML=person.qualification[2].matric+"<br>"+
person.qualification[2].institute+"<i style='float:right'>"+person.qualification[2].duration+
"</i>";

//console.log(person.skills[0][0]);
var tech = document.getElementById('tech');

for(var i=0;i<person.skills[0].length;i++){
    var item=document.createElement('LI');
    var text=document.createTextNode(person.skills[0][i]);
    item.appendChild(text);
    tech.appendChild(item);
}

var personal = document.getElementById('personal');

for(var i=0;i<person.skills[1].length;i++){
    var item=document.createElement('LI');
    var text=document.createTextNode(person.skills[1][i]);
    item.appendChild(text);
    personal.appendChild(item);
}

document.getElementById('proj1name').innerHTML=person.projects[0].name;
document.getElementById('proj1desc').innerHTML=person.projects[0].description;
document.getElementById('proj1img').src=person.projects[0].imagelink;
document.getElementById('proj1img').setAttribute('alt',person.projects[0].name);
document.getElementById('proj1link').href=person.projects[0].projectlink;

document.getElementById('proj2name').innerHTML=person.projects[1].name;
document.getElementById('proj2desc').innerHTML=person.projects[1].description;
document.getElementById('proj2img').src=person.projects[1].imagelink;
document.getElementById('proj2img').setAttribute('alt',person.projects[1].name);
document.getElementById('proj2link').href=person.projects[1].projectlink;


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

var loc=JSON.stringify(person);
localStorage.setItem('person',loc);
