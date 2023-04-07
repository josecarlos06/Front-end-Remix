export const getData = async (type)=>{
   try{     
      const res = await fetch(`${process.env.API_URL}/${type}?populate=imagen`);
      return await res.json();
   }catch(err){
      console.log(err);
   }
}

export const UniqueData = async (type,url) => {
   try{
      const res = await fetch(`${process.env.API_URL}/${type}?filters[url]=${url}&populate=imagen`)
      return await res.json();
   }catch(err){
      console.log(err);
   }
}
