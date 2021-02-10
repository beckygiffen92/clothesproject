const funwearList = document.querySelector('#funwearList');
const form = document.querySelector('#funwearForm');
//create element and render cafe
function renderClothes(doc){
let li = document.createElement('li');
let top = document.createElement('span');
let trousers = document.createElement('span');
 let cross = document.createElement('div');

li.setAttribute('data-id', doc.id);
top.textContent = doc.data().top;
trousers.textContent = doc.data().trousers;
cross.textContent = 'x';


li.appendChild(top);
li.appendChild(trousers);
li.appendChild(cross);

funwearList.appendChild(li); 

//deleteding data
cross.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('crossclicked');
    let id = e.target.parentElement.getAttribute('data-id'); //getting the id of that document
    db.collection('winterfun').doc(id).delete();
})
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    db.collection('winterfun').add({
        top: form.top.value,
        trousers: form.trousers.value
    });
    form.top.value = '';
    form.trousers.value = '';
})
//realtime listener deleting and adding in realtime
db.collection('winterfun').orderBy('top').onSnapshot(snapshot =>{
    let changes = snapshot.docChanges();
    changes.forEach(change =>{
      if (change.type == 'added'){
          renderClothes(change.doc)
      } else if (change.type == 'removed'){
        
        let li = funwearList.querySelector('[data-id=' + change.doc.id + ']'); //getting li tag that is changed
          funwearList.removeChild(li);
          
      }
    })
})

// getting data
// db.collection('winterwork').orderBy('trousers').get().then((snapshot) => { //where X is == Y, display this data

//     snapshot.docs.forEach(doc =>{
//         renderClothes(doc);
//     })
// })