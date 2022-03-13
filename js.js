var requst;
var cont=document.querySelector('.cont');


if(window.XMLHttpRequest){
    requst=new XMLHttpRequest();
}

var url=`https://randomuser.me/api/?results=50`;

requst.open('GET',url,true);
requst.responseType='json';
requst.send();
requst.onload=function(){
    let data=requst.response;
    addData(data);
}

function addData(data){
    console.log(data.results);
    
    var persons=data.results; // altijd de naam van de json object
    for(var i=0; i<persons.length; i++){

        var itemEl=generateItem(persons[i]); // de naam van de eerste persoon
        cont.appendChild(itemEl); // dit retourneert de generat item div
    }
}




function generateItem(item){
    var divEl=document.createElement('div');
    var h1El=maakEl('h1',`${item.name.title} ${item.name.first} ${item.name.last}` );
    var imgEl=document.createElement('img');
    imgEl.setAttribute('src',item.picture.large);
    imgEl.alt=`photo of ${item.name.first} ${item.name.last}`;
    var divimgEl=document.createElement('div');
    divimgEl.appendChild(imgEl);
    var linkEl=maakEl('a','contact me');
    linkEl.setAttribute('href',`mailto:${item.email}`);
    var pEl=document.createElement('p');
    pEl.appendChild(linkEl);

    divEl.appendChild(h1El);
    divEl.appendChild(imgEl);
    divEl.appendChild(pEl);

    return divEl;
}




function maakEl(tag,value){

    var el=document.createElement(tag);
    el.innerHTML=value;
    return el
}