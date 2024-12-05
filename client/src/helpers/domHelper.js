export const createUserCard = () => {
	const divCard = document.createElement("div");
	divCard.classList.add("card");
	
	const picture = document.createElement("img");
	picture.src = "../public/user_nt_found.jpg"
	
	const spanName = document.createElement("span");
	const strongName = document.createElement("strong");
	strongName.textContent = "Name: ";
	spanName.appendChild(strongName);
	
	const spanMail = document.createElement("span");
	const strongMail = document.createElement("strong");
	strongMail.textContent = "Mail: ";
	spanMail.appendChild(strongMail);
	

	const spanPhone = document.createElement("span");
	const strongPhone = document.createElement("strong");
	strongPhone.textContent = "Phone: ";
	spanPhone.appendChild(strongPhone);
	
	
	const spanLocation = document.createElement("span");
	const strongLocation = document.createElement("strong");
	strongLocation.textContent = "Location: ";
	spanLocation.appendChild(strongLocation);
	
	
	const spanTime = document.createElement("span");
	const strongTime = document.createElement("strong");
	strongTime.textContent = "Time: ";
	spanTime.appendChild(strongTime);


	divCard.appendChild(picture);
	divCard.appendChild(spanName);
	divCard.appendChild(spanMail);
	divCard.appendChild(spanPhone);
	divCard.appendChild(spanLocation);
	divCard.appendChild(spanTime);

	return divCard;
}

export const fetchAndSetUserCard = (user, time) => {
	const userObject = user.results[0];

	// No queria recoger los elementos de esta manera como ya te comente 
	// pero no sabia muy bien como hacerlo con el tiempo que me quedaba.appendChild();

	const img = document.getElementsByTagName("img")[0];
	const name = document.getElementsByTagName("strong")[0];
	const mail = document.getElementsByTagName("strong")[1];
	const phone = document.getElementsByTagName("strong")[2];
	const location = document.getElementsByTagName("strong")[3];
	const worldTime = document.getElementsByTagName("strong")[4];

	img.src = userObject.picture.large;
	name.textContent += userObject.name.first + " " + userObject.name.last;
	mail.textContent += userObject.email;
	phone.textContent += userObject.phone;
	location.textContent += userObject.location.city;
	worldTime.textContent += time.datetime;
}


// Devuelvo la localizacion para la API del tiempo
export const getLocation = (user) => {
	const userObject = user.results[0];

	return userObject.location.city;
}


// Limpio los datos
export const clearUser = () => {
	// Muy feo esto lo siento 
	const img = document.getElementsByTagName("img")[0];
	const name = document.getElementsByTagName("strong")[0];
	const mail = document.getElementsByTagName("strong")[1];
	const phone = document.getElementsByTagName("strong")[2];
	const location = document.getElementsByTagName("strong")[3];
	const worldTime = document.getElementsByTagName("strong")[4];


	img.src = "../public/user_nt_found.jpg";
	name.textContent = "Name: ";
	mail.textContent = "Mail: ";
	phone.textContent = "Phone: ";
	location.textContent = "Location: ";
	worldTime.textContent = "Time: ";
}
