const list=document.querySelector('#list');
const form = document.querySelector('#add-elements');
//var dataset=[10,20,30,40];

//create elements and rendering function to display data
function render(doc){
	let li=document.createElement('li');
	let patientname=document.createElement('span');
	let aadharno=document.createElement('span');
    let region=document.createElement('span');
    let phcno=document.createElement('span');
    let currentweight=document.createElement('span');
    let toilet=document.createElement('span');
    let disease=document.createElement('span');
    let currentmonth=document.createElement('span');
    let lastcheckup=document.createElement('span');
    let lastvaccination=document.createElement('span');
    let button=document.createElement('button');

    //dataset.push(doc.data().phone);
	li.setAttribute('data-id',doc.id);
    patientname.textContent=doc.data().patientname;
    aadharno.textContent=doc.data().aadharno;
    region.textContent=doc.data().region;
    phcno.textContent=doc.data().phcno;
    currentweight.textContent=doc.data().currentweight;
    toilet.textContent=doc.data().toilet;
    disease.textContent=doc.data().disease;
    currentmonth.textContent=doc.data().currentmonth;
    lastcheckup.textContent=doc.data().lastcheckupdate;
    lastvaccination.textContent=doc.data().lastvaccination;
 
    li.appendChild(patientname);
    li.appendChild(aadharno);
	li.appendChild(region);
    li.appendChild(phcno);
    li.appendChild(currentweight);
    li.appendChild(toilet);
    li.appendChild(disease);
    li.appendChild(currentmonth);
    li.appendChild(lastcheckup);
    li.appendChild(lastvaccination);
    li.appendChild(button)
	list.appendChild(li);

}



db.collection('user').get().then((snapshot) => {
    console.log(snapshot.docs.forEach(doc => {
        render(doc);
    }))
});