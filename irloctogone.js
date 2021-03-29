const places = ['Gare du Nord (Paris)', 'Place Saint Pierre (Toulouse)', 'Chez Zekth', 'Part-Dieu (Lyon)'];
function rnJesus(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

export default function irloctogone() {
  const date = new Date();
  date.setDate(date.getDate() + rnJesus(5));
  date.setTime(date.getTime() + (rnJesus(8)*60*60*1000));

  return `Le ${new Intl.DateTimeFormat('fr-FR', { dateStyle: 'full', timeStyle: 'short', timeZone: 'Europe/Paris' }).format(date)}, ${places[rnJesus(places.length)]}`
}