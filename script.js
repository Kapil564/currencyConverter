let btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  fetchData()
})
async function fetchData(){
   const option1 = document.querySelector("select[name='Option1']").value;
   let option2 = document.querySelector("select[name='Option2']").value;
   const fetchdata=await fetch(`https://v6.exchangerate-api.com/v6/623c81e0d71ae3e23d1b19ab/pair/${option1}/${option2}`)
   try{
      let data =await fetchdata.json();
      console.log(data)
      let rate = data.conversion_rate;
      console.log(rate)
      document.querySelector(".input2").value=rate;
      
   }
   catch(error){
      console.log("could not fetch data")
   }
}


