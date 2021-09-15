 
 /* toggle */
 const homebtn = document.querySelector('.home')
 

 function toggleClass() {
  const navbar = document.querySelector('.navbar')
     navbar.classList.toggle('show')
 }



function myFunction() {
  let x = document.querySelector('.home')
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


 /*  SHOW MODAL AFRER MOUSEOVER */

 const panels = document.querySelectorAll('.paneldresu')
 const modal = document.querySelector('.modal')
 const closeModal = document.querySelectorAll('.closebtn')
 /* const logo = document.querySelectorAll('.logoteamu') */

  panels.forEach(function(panel) {
    //console.log(panel)
    const logo = panel.querySelector('.logoteamu')
    //console.log(logo)
      logo.addEventListener('click', function(e) {
        const mod = e.currentTarget.nextSibling.nextElementSibling
        
        mod.classList.add('showit')
        

      /*   panels.forEach(function(item) {
         

         if(item !== panel){
           item.classList.remove('showit')
         }
          
        }) */
        
      })
  }) 

  /*  CLOSE MODAL */
  closeModal.forEach(function(done) {
    done.addEventListener('click', function(e) {
      const modal = done.parentElement
      modal.classList.remove('showit')

      
    })
  })

 


//      contact  section ---------------
 

let message = []

const addMessage = (e) => {
  e.preventDefault()

  let msg = {
    id: Date.now(),
    firstName: document.getElementById('name').value,
    lastName: document.getElementById('email').value,
    text: document.querySelector('textArea').value
  }

   //name validate
  const name = document.getElementById('name');
  const re1 = /^[a-zA-Z]{2,10}$/

   // email validate
   const email = document.getElementById('email')
   const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
   
   if(!re1.test(name.value) || !re.test(email.value)) {

    // name
    name.classList.add('is-invalid')
    setTimeout(function(){
      name.classList.remove('is-invalid');
    },3000)
    
    // email
    email.classList.add('is-invalid')
     setTimeout(function(){
      email.classList.remove('is-invalid');
    },3000)

    email.value = ''
    name.value = ''

  } else {
   
        message.push(msg)
       
        localStorage.setItem('Messagese', JSON.stringify(message))
        console.warn('added', {message})
        clearInputs()
        localStorage.clear();
   
        const success = document.querySelector('.success')
        success.classList.add('show')

        setTimeout(function(){
          success.classList.remove('show')
        },2000)

  } 

        

}


const clearInputs = () => {
    document.getElementById('name').value = '',
    document.getElementById('email').value = '',
    document.querySelector('textArea').value = ''
  }




  

