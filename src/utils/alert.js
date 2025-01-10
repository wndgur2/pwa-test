export function randomNotification() {
  const games = [
    {
      name: 'Counter-Strike: Global Offensive',
      author: 'Valve Corporation',
      slug: 'csgo',
    },
    {
      name: 'Dota 2',
      author: 'Valve Corporation',
      slug: 'dota2',
    },
    {
      name: 'Team Fortress 2',
      author: 'Valve Corporation',
      slug: 'tf2',
    },
  ]

  const randomItem = Math.floor(Math.random() * games.length)
  const notifTitle = games[randomItem].name
  const notifBody = `Created by ${games[randomItem].author}.`
  const notifImg = `/images/${games[randomItem].slug}.jpg`
  const options = {
    body: notifBody,
    icon: notifImg,
  }
  new Notification(notifTitle, options)
  setTimeout(randomNotification, 7000)
}

// function registerServiceWorker() {
//   navigator.serviceWorker
//     .register('service-worker.js')
//     .then((registration) => {
//       return registration.pushManager.getSubscription().then(async (subscription) => {
//         // registration part
//       })
//     })
//     .then((subscription) => {
//       // subscription part
//     })
// }
