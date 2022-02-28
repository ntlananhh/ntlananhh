// const axios = require('axios').default;

const  callAPI = async(method, url, payload) =>{
    const config = {
        method: method,
        url: url,
        headers: { 
            'Authorization': 'Bearer 0d623a946175880564364c410ce6c7f5ec6b68cd27722d1e3d7ad11fb96ff916',
            'Content-Type': 'application/json'
        }
    }
    if(method =='post'){
        await axios.post(config, payload)
        .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          })
    }
    else{
        await axios(config)
        .then(async (response) => {
            console.log(response.data)
            return response.data
          })
          .catch(error => {
            console.log(error);
          })
    }
    
    
}

//----GET ALL USER
async function getAllUser() {
    await callAPI('get','https://gorest.co.in/public/v2/users', '').then(data => {
        console.log(data)    
    })
    .catch(err => console.log(err))
}

//----GET USER BY ID
async function getUserById(id) {
    await callAPI('get','https://gorest.co.in/public/v2/users'+'/'+ id, '').then(data => {
        return data;
    })
    .catch(err => console.log(err))
    
}

//----DELETE USER BY ID
async function deleteUser(id) {
    try {
        const response = await callAPI('delete','https://gorest.co.in/public/v2/users'+'/'+ id, '')
        console.log(response)
      }
    catch (error) {
        console.log(error);
    }
}

async function addUser(id, payload) {
    await callAPI('post', 'https://gorest.co.in/public/v2/users' + '/'+ id, payload).then(data => {
        console.log('created');
    })
    .catch(err => console.log(err))
    
}

async function updateUser(id, payload) {
    await callAPI('post', 'patch', 'https://gorest.co.in/public/v2/users' + '/'+ id, payload).then(data => {
        console.log('updated');
    })
    .catch(err => console.log(err))
    
}


window.addEventListener('load', async () => {
    const listUser = await getAllUser();
     console.log(listUser)
    // let li = `<tr><thead><th>ID</th><th>Name</th><th>Email</th><th>Gender</th><th>Status</th><th>Actions</th></thead></tr>`;
	
	// 	listUser.forEach(user => {
	// 		li += `<tr>
    //                     <td>${user.id} </td>
    //                     <td>${user.name}</td>
    //                     <td>${user.email} </td>
    //                     <td>${user.gender}</td>
    //                     <td>${user.status} </td>
    //                     <td ><button class="btn btn-danger" onClick="deleteUser(${user.id})"><i class="fa-solid fa-trash-can"></i></button></td>
	// 		        </tr>`;
            
	// 	});
    
	// document.getElementById("users").innerHTML = li;
  });