fetch("https://gorest.co.in/public/v2/users")
	// Converting received data to JSON
	.then(response => response.json())
	.then(json => {

		let li = `<tr><thead><th>ID</th><th>Name</th><th>Email</th><th>Gender</th><th>Status</th><th>Actions</th></thead></tr>`;
	
		json.forEach(user => {
			li += `<tr>
                        <td>${user.id} </td>
                        <td>${user.name}</td>
                        <td>${user.email} </td>
                        <td>${user.gender}</td>
                        <td>${user.status} </td>
                        <td ><button class="btn btn-danger" onClick="deleteUser(${user.id})"><i class="fa-solid fa-trash-can"></i></button></td>
			        </tr>`;
            
		});
    
	document.getElementById("users").innerHTML = li;
});
//---------------------------------------------------------------
const serialize= (form) => {
    var field, s = [];
    if (typeof form == 'object' && form.nodeName == "FORM") {
        var len = form.elements.length;
        for (i=0; i<len; i++) {
            field = form.elements[i];
            if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
                if (field.type == 'select-multiple') {
                    for (j=form.elements[i].options.length-1; j>=0; j--) {
                        if(field.options[j].selected)
                            s[s.length] = "\"" +encodeURIComponent(field.name) + "\"" + ":" + "\""+ encodeURIComponent(field.options[j].value) + "\"";
                    }
                } else if ((field.type != 'checkbox' && field.type != 'radio') || field.checked) {
                    s[s.length] = "\"" + encodeURIComponent(field.name) + "\"" + ":" + "\"" + encodeURIComponent(field.value)+ "\"";
                }
            }
        }
    }
    return s.join(',').replace(/%20/g, '+');
}
//---------------------------------------------------
const deleteUser = async(id)=>{
    const data={};
    fetch('https://gorest.co.in/public/v2/users/'+id, {
        method: 'DELETE', 
        mode: 'cors',
        headers: {
          'Authorization': 'Bearer 0d623a946175880564364c410ce6c7f5ec6b68cd27722d1e3d7ad11fb96ff916',
          'Content-Type': 'application/json'
        },
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true,
        body: JSON.stringify(data),
      })
      .then(
          response => { alert('Deleted user ' + id);}
      )
      .catch((error) => {
        console.error('Error:', error);
      });
}


//---------------------------------------------------------------
const addUser = (form) =>{
    const myobj = JSON.parse('{' + serialize(document.forms[form]) .toString() + '}');
    console.log(myobj);
// const data = { name: 'example',
// email: 'test1@gmail.com',
// gender: 'male',
// status: 'active',
//  };

// fetch('https://gorest.co.in/public/v2/users/4185', {
//   method: 'POST', 
//   cache: 'no-cache', 
//   credentials: 'same-origin', 
//   headers: {
//     'Authorization': 'Bearer 0d623a946175880564364c410ce6c7f5ec6b68cd27722d1e3d7ad11fb96ff916',
//     'Content-Type': 'application/json'
//   },
//   redirect: 'follow',
//   body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Created new user:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });

}
