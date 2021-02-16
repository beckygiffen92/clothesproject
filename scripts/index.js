const discountList = document.querySelector('#discount-list')

const setUpMembersDisc =(data) =>{        //putting data inside the array
  let html = '';
  data.forEach(doc =>{          //foreach document in the discountlist
    const discount = doc.data();    //going through the array vv creating an li with h2 and p for each store and discountcode
    const li = `

      <li>  
      <h2>${discount.store}</h2>
      <p>${discount.discountcode}</p>
      </li>
    `;             //`` output data inside curly strings
    html += li;
  })

  discountList.innerHTML = html;
}
// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
  
  });
