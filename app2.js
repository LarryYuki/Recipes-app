// https://accounts.skillsengine.com/settings
// https://secure.indeed.com/account/apikeys?hl=en_US
/* --------------------------- Indeed (Job Search) -------------------------- */
/* 
let api_key = '1397045879077994';
let job_key = 'b344d04ae9161898';
let base_url = 'http://api.indeed.com/ads/apisearch';
let query_url = base_url + `?publisher=${api_key}` +
                '&format=json' +
                // '&limit=10
                '&q=javascript+developer' +
                '&l=san-francisco' +
// '&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=' +
                // '&userip=1.2.3.4' +
                // '&useragent=Mozilla/%2F4.0%28Firefox%29' +
                // '&useragent=Chrome/%2F77.0.3865.120' +
                '&v=2'; 
                // + '&co=us' + '&q=programming' + '&start=50'
//
console.log(query_url)
*/
// example
// let url = 'http://api.indeed.com/ads/apisearch?publisher=1397045879077994&q=javascript+developer&l=austin%2C+tx&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2'
// console.log(url);
// CORS | XML
/*-- https://opensource.indeedeng.io/api-documentation/docs/job-search/#requirements --*/
/* --------------- https://techdocs.indeedeng.io/xml-job-feed/ -------------- */
/* --------------------------- Adzuna (Job Search) -------------------------- */

// let app_id = '7bca6aff';
// let api_key = '4506f9c67aae342fd722a48b1e4a7ee9';
// // let base_url = 'https://api.adzuna.com/v1/api';
// let base_url = 'https://api.adzuna.com/v1/api/jobs/gb/search/1';
// let query_url = base_url +
//     `?app_id=${app_id}` +
//     `&app_key=${api_key}` +
//     '&results_per_page=20&what=javascript%20developer&where=&content-type=application/json'
//

/* ---------------- https://developer.adzuna.com/docs/search ---------------- */
/* ----------------------- Edamam (food search & more) ---------------------- */

let api_k = '6fcc3bbde6e04f2b8946660691a0e48c';
let base_u = 'https://api.spoonacular.com/recipes/{data-id}/information';
let query_u = base_u + `?apiKey=${api_k}` + '&query='
console.log("new api", query_u);
$.ajax({
    method: "GET",
    url: query_u,
}).then(data => {
    console.log(data)
});
/* ----------- https://developer.edamam.com/edamam-docs-recipe-api ---------- */
/* ------------------------- Food2Fork (food search) ------------------------ */
/* 
let api_key = '2c59e92b0dd546d871e200c7102970b1';
let base_url = 'https://www.food2fork.com/api/search';
let query_url = base_url + `?key=${api_key}` +
                '&q=chicken'
//
console.log(query_url);
//example
let url = 'https://www.food2fork.com/api/search?key=2c59e92b0dd546d871e200c7102970b1&q=chicken';
console.log(url);
 */
/* ------------------- https://www.food2fork.com/about/api ------------------ */
/* ---------------------- Wolfram Alpha (Q & A search) ---------------------- */
/* let app_id = '4QX8W4-JGK9638V97';
let base_url = 'http://api.wolframalpha.com/v2/query'
let query_url = base_url + '?input=pi' +
                `&appid=${app_id}`
//
console.log(query_url); */
// example
/* let url = 'http://api.wolframalpha.com/v2/query?input=pi&appid=4QX8W4-JGK9638V97'
console.log(url); */
// CORS | XML
/* -- http://products.wolframalpha.com/docs/WolframAlpha-API-Reference.pdf -- */