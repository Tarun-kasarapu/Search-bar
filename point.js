
const data_container='https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
let arr=[];
fetch(data_container).then((data) => {
    return data.json();
}).then((value) => {
    arr.push(...value);
});
function findmatches(str,arr){
    var check=[];
    if(str===""){
        return check;
    }
    return arr.filter( element => {
        const exp=new RegExp(str,'gi');
        return element.city.match(exp);
    })
}
const suggestions=document.querySelector('.suggestions');
const update=suggestions.innerHTML;
function displaymatches(){
    if(this.value===""){
        suggestions.innerHTML=update;
        return;
    }
   const matches=findmatches(this.value,arr);
//    console.log(matches);
//    console.log(this.value);
   var inside=matches.map( element => {
        return ` <li><span class="city">${element.city} </span>  
        <span class="state">${element.state}</span>
        <span class="population">${element.population}</span>
        
        </li>`;
   }
   
   ).join(' ');
   console.log(inside);
   suggestions.innerHTML=inside;

}

const search=document.querySelector(".search");

search.addEventListener("change",displaymatches);
search.addEventListener("keyup",displaymatches);