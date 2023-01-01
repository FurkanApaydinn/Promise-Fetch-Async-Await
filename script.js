// const a = new Promise((resolve,reject) => {
//  setTimeout(() => {
//   // resolve("işlem başarılı")
//   reject("işlem hatalı")
//  },1500)
// })
// // console.log(a)
// a.then((data) => { n
//  console.log(data)
// }).catch(err => {
//  console.log(err)
// })
// const api = fetch("https://restcountries.com/v2/all")
// // console.log(api)
//  .then(res => res.json())
//  .then(data => console.log(data))
//  .catch(err => console.log(err))

 // fonksiyon içerisinde ve async ile api çağırma

// async function getPosts() {
//  const response= await fetch("https://restcountries.com/v2/all")
//  const data = await response.json()
//  console.log(data)
 
//  }
// getPosts()

// async de hataları gösterme

// async function getPosts() {
//  try {
//   const response = await fetch("https://restcountries.com/v2/all")
//   const data = await response.json()
//   console.log(data)
//  } catch (err) {
//   console.log(err)
//  }
//  }
// getPosts()

//callback örnekleri
// const call = callback => {
//  setTimeout(() => {
//   const skills = ["HTML", "CSS", "JS"]
//   callback("iyi gitmedi",skills)
//  },200)
// }
// const warninCall = (err, result) => {
//  if (err) {
//   return console.log(err)
//  }
//  return console.log(result)
// }
// call(warninCall) // iyi gitmedi

//Bu durumda hata yanlıştır ve sonuç olan else bloğunu döndürür.
// const call = callback => {
//  setTimeout(() => {
//   const skills = ["HTML", "CSS", "JS"]
//   callback(false,skills)
//  },2000)
// }

// call((err,result) => {
//  if (err) {
//   console.log(err)
//  }
//  console.log(result)
// })

// PROMİSE
//syntax
// const Promise = new Promise((resolve, reject)=> {
//  resolve("success")
//  reject("failure")
// })
//fetch APİ
// const url = "https://restcountries.com/v2/all"
// fetch(url)
// .then(apial=>apial.json())// API verilerine JSON olarak erişme

// .then(data=>console.log(data))
// .catch(error=>console.log(error)) // yanlış bir şey olursa işleme hatası

//Async ve Await
// const asyn = async function (n) {
//  return n*n
// }
// console.log(asyn(2))

// async function getPosts() {
//  try {
//   const response = await fetch("https://restcountries.com/v2/all")
//   const countries = response.json()
//   console.log(countries)
//  } catch (err) {
//   console.log(err)
//  }
// }
// console.log("async and wait")
// getPosts()

// ----------------------------------------------------EGZERSİZLER-----------------------------------------------------------
//SEVİYE 1
// const countriesAPI = "https://restcountries.com/v2/all"
// fetch(countriesAPI)
//  .then(response => response.json())
//  .then(data => {
//   for (const item of data) {
//    console.log(item.capital>)
//    console.log(item.languages)
//    console.log(item.population)
//    console.log(item.area)
//   }
//  })
// SEVİYE 2
//
// const catNames = "https://api.thecatapi.com/v1/breeds"
// fetch(catNames)
//  .then(response => response.json())
//  .then(data => {
//   for (const item of data)
//    console.log(item)
//    // console.log(item.adaptability)
  


// })

 // fetch ("https://restcountries.com/v2/all")

 // .then(response => response.json())
 // .then(data => {
 //  for (const item of data)
 //     console.log(item)
 //     console.log(item.region)
 // })

//  fetch('https://restcountries.com/v2/all')
//   .then((response) => response.json())
//   .then((data) => {
//    for (const item of data) {
//      console.log(item)
//      console.log(item.region)
//    }
// });

// fetch("https://restcountries.com/v2/all")
//  .then(res => res.json())
//  .then(data => {
//   for (const item of data) {
//    console.log(item)
//    console.log(item.name)
//    console.log(item.region)
//    console.log(item.area)
//   }
// })

// const promise1 = new Promise((resolve, reject) => {
//  // resolve("veriler alındı")
//  reject("bağlantı hatası")
// });
// promise1.then((value)=> {
//  console.log(value)
// })
// promise1.catch((value) => {
//  console.log(value)
// })