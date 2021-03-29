const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
const places = ['Gare du Nord (Paris)', 'Place Saint Pierre (Toulouse)', 'Chez Zekth', 'Part-Dieu (Lyon)'];
function rnJesus(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

export default function irloctogone() {
  const date = new Date();
  date.setDate(date.getDate() + rnJesus(5));
  date.setTime(date.getTime() + (rnJesus(8)*60*60*1000));
  
  return `Le ${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}, ${places[rnJesus(places.length)]}`
}