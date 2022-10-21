var res=fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
.then((data)=>data.json()).then((data1)=>{
   for (var i=0;i<data1.length;i++){
    var div=document.createElement("div");
    div.innerHTML=`<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
    <div class="card-header">COUNTRIESNAME : ${data1[i].name}</div>
    <div class="card-body">
      <h5 class="card-title">CAPITAL : ${data1[i].capital}</h5>
      <h5 class="card-title">REGION : ${data1[i].region}</h5>
      <h5 class="card-title">POPULATION : ${data1[i].population}</h5>
    </div>
  </div>`;
  document.body.append(div);   
   }
})
.catch((error)=>console.log(error));