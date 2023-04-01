export const getData = async ()=>{
   try{
      const res = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
      const data = await res.json();
      return data;
   }catch(erro){
      console.log("Error");
   }
}