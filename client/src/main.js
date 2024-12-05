import "./style.css";
import { urlTime, optionsTime, urlUser } from "./helpers/api";
import { createUserCard, fetchAndSetUserCard, clearUser, getLocation } from "./helpers/domHelper";
import { mockData } from "./helpers/mockData"; // Originalmente para las pruebas.

// Inicializo el DOM
const divContainer = document.querySelector(".container");

const btnGenerate = document.createElement("button");
btnGenerate.textContent = "GENERATE USER";

// Le paso la card vacia para que siempre haya algo antes de cargar los datos
const card = createUserCard();
divContainer.appendChild(card);
divContainer.appendChild(btnGenerate);

const getRandomUser = async (url, urlTime, optionsTime) => {
	const responseUser = await fetch(url);
	const user = await responseUser.json();

	// Recojo la localizacion del usuairo
	const location = getLocation(user);

	const responseTime = await fetch(urlTime + location, optionsTime);
	const time = await responseTime.json();
	fetchAndSetUserCard(user, time);
};


// Hago el evento onclick para generar usuarios
btnGenerate.addEventListener('click', () => {
	clearUser();
	getRandomUser(urlUser, urlTime, optionsTime);
});
