fetch('data.json').then(response=>{
	return response.json();
}).then(data=>{
	// console.log(data.profile.details);
	profile(data.profile.basics);
	details(data.profile.details);
})

var child_one=document.querySelector(".child_one");
var child_two=document.querySelector(".child_two");

var profile=(basic_info)=>{
	// console.log(basic_info.name);
	var name=document.createElement("h2");
	name.textContent=basic_info.name;
	child_one.append(name);

	var role=document.createElement("h4");
	role.textContent=basic_info.role;
	role.classList.add("role");
	child_one.append(role);

	var hr=document.createElement("hr");
	child_one.append(hr);

	var email=document.createElement("a");
	email.href="mailto:"+basic_info.email;
	email.textContent=basic_info.email;
	child_one.append(email);

	var mobile=document.createElement("a");
	mobile.href="tel:"+basic_info.mobile;
	mobile.textContent=basic_info.mobile;
	child_one.append(mobile);

	var address=document.createElement("p");
	address.textContent=basic_info.address;
	child_one.append(address);
}

var details=(details_info)=>{
	// console.log(details_info);
}