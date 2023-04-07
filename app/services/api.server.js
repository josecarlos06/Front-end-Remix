export const getData = async (type)=>{
   try{     
      const res = await fetch(`${process.env.API_URL}/${type}?populate=imagen`);
      const data = await res.json();
      return data;
   }catch(erro){
      console.log("Error");
   }
}

export const UniqueData = async (type,url) => {
   try{
      const res = await fetch(`${process.env.API_URL}/${type}?filters[url]=${url}&populate=imagen`)
      const data = await res.json();
      return data;
   }catch(err){
      console.log(err);
   }
}
