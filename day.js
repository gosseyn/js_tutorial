// Retourne le jour de la semaine d'une date donnée
function dayName(date) {
         const joursDeLaSemaine = ["Dimanche","Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
	 return joursDeLaSemaine[date.getDay()];
     }
function greeting(date) {
    alert(`Hello, world ! Happy ${dayName(date)}`)
}
