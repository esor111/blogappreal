import axios from "axios"
const BASE_URL= "http://localhost:5000/api/"

const TOKEN = "token" || JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?.accesstoken || 'hero'

export const publicRequest =axios.create({
baseURL: BASE_URL
})


export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`},
  })


// import axios from "axios";

// const BASE_URL = "https://raaana.herokuapp.com/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser?.accesstoken || 'hero'
// // console.log(TOKEN)
// // const TOKEN = "HEOLLOO"

// export const userReuest = axios.create({
//   baseURL: BASE_URL,
//   headers: {token: `Bearer ${TOKEN}`},
// })

// export const publicRequest = axios.create({
//   baseURL: BASE_URL,
// })
