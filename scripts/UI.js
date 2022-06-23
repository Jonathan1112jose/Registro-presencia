import {saveTask,getUsers,ongetUsers,deleteUser,editUser,upDate} from "./firebase.js";


const userContainer = document.querySelector('.user-container')
const fomrUser = document.getElementById('form')
let editStatus = false
let id = '';


export const showUsers = async ()=>{
  //show users 
    const users =await getUsers();
    ongetUsers((users)=>{
     let html =''
    users.forEach(doc => {
        const user = doc.data()
        html +=`
        <li class="ui card container user">
          <div class="content">
            <div class="header">${user.name}</div>
            <div class="description"><span>${user.mail}</span></br><span>${user.privilege}</span></br><span>${user.phone}</span><br/><span>${user.address}</span>
          </div>
          <div class="ui two column stackable grid inverted">
            <div class="column"><a class="btn-delete ui button inverted red" data-id="${doc.id}"><i class="thumbs down outline icon"></i>Eliminar
            </a></div>
            <div class="column"><a class="btn-edit ui button inverted primary" data-id="${doc.id}"><i class="i cursor icon"></i>Editar
            </a></div>
          </div>
        </li>
        `
    });
    userContainer.innerHTML = html
    
    //delete users
    const btnDelete = userContainer.querySelectorAll('.btn-delete')
    btnDelete.forEach(btn =>{
      btn.addEventListener('click',({target: {dataset}}) =>{
        deleteUser(dataset.id)
      })
    })
    //edit users
    const btnEdit = userContainer.querySelectorAll('.btn-edit')
    btnEdit.forEach(btn =>{
      btn.addEventListener('click',async(e)=>{
       const userEdit= await editUser(e.target.dataset.id)
       const doc = userEdit.data();

       fomrUser['name'].value = doc.name
       fomrUser['email'].value = doc.mail
       fomrUser['phone'].value = doc.phone
       fomrUser['privilege'].value = doc.privilege
       fomrUser['address'].value = doc.address

       id = e.target.dataset.id
       fomrUser['btn-form'].innerHTML = '<i class="save icon"></i>Actualizar'
       
       editStatus = true
      })
    })


  })
}


//submit new user
fomrUser.addEventListener('submit', e=>{
  e.preventDefault()
  const name = fomrUser['name']
  const mail = fomrUser['email']
  const phone = fomrUser['phone']
  const privilege = fomrUser['privilege']
  const address = fomrUser['address']
//uptade user
  if (editStatus) {
    upDate(id,{
      name: name.value,
      mail: mail.value,
      phone: phone.value,
      privilege: privilege.value,
      address: address.value,
    });
    editStatus = false
    fomrUser['btn-form'].innerHTML = '<i class="paper plane icon"></i>Guardar'
  }else{
    saveTask(name.value,mail.value,phone.value,privilege.value,address.value);
  }
  
  fomrUser.reset()

})