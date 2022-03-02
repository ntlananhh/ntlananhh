// const axios = require('axios').default;

const  callAPI = async(method, url, payload) =>{
    const config = {
        method: method,
        url: url,
        headers: { 
            // 'Authorization': '',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        }
    }
    if(method =='post' || method =='put'){
        return await axios.post(config, payload)
        .then(async (response) => {
            console.log(response.data)
          })
          .catch(error => {
            console.log(error);
          })
    }
    else{
        return await axios(config)
        .then(async (response) => {
            return response.data
          })
          .catch(error => {
            console.log(error);
          })
    }
    
    
}
//---------------------------------------------------------------------------------------------
//----GET ALL USER
async function getAllUser() {
    try {
        const response = await callAPI('get','https://reqres.in/api/users', '')
        return response.data
      }
    catch (error) {
        console.log(error);
    }
    // await callAPI('get','https://gorest.co.in/public/v2/users', '').then(data => {
            // return data
    // })
    // .catch(err => console.log(err))
}

//----GET USER BY ID
async function getUserById(id) {
    try {
        const response = await callAPI('get','https://reqres.in/api/users/'+ id.toString(), '')
        console.log(response.data)
      }
    catch (error) {
        console.log(error);
    }
    
    
}

//----DELETE USER BY ID
async function deleteUser(id) {
    try {
        await callAPI('delele','https://reqres.in/api/users/'+ id.toString(), '')
        console.log("Deleted user " + id + "::::" + response.data)
      }
    catch (error) {
        console.log(error);
    }
}

//----ADD USER
async function addUser(payload) {
    await callAPI('post', 'https://reqres.in/api/users', payload).then(data => {
        console.log('RESPONSE:::'+ data);
    })
    .catch(err => console.log(err))
    
}

//----UPDATE USER BY ID
async function updateUser(id, payload) {
    await callAPI('put', 'https://reqres.in/api/users/' + id.toString(), payload).then(data => {
        console.log('updated:::'+ data);
    })
    .catch(err => console.log(err))
    
}

//------SHOW DATA TO HTML
window.addEventListener('load', async () => {
    const listUser = await getAllUser();
    let table_users = `<tr><thead><th>ID</th><th>First Name</th><th>Last name</th><th>Email</th></thead></tr>`;
	
		listUser.forEach(user => {
			table_users += `<tr>
                        <td>${user.id} </td>
                        <td>${user.first_name}</td>
                        <td>${user.last_name} </td>
                        <td>${user.email}</td>
			        </tr>`;
            
		});
    
	document.getElementById("users").innerHTML = table_users;
  });


  let payload={
    "name": "test",
    "job": "test"
}
   getUserById(2);
//   addUser(payload);
//   updateUser(2, payload);
   deleteUser(2)

