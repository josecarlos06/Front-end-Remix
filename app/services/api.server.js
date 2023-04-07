export const getData = async ()=>{
   try{     
      const res = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
      const data = await res.json();
      return data;
   }catch(erro){
      console.log("Error");
   }
}

export const UniqueData = async (url) => {
   try{
      const res = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
      const data = await res.json();
      return data;
   }catch(err){
      console.log(err);
   }
}

export const getPost = async ()=>{
   try{     
      const res = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
      const data = await res.json();
      return data;
   }catch(erro){
      console.log("Error");
   }
}

export const uniquePost = async (url)=>{
   try{     
      const res = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`);
      const data = await res.json();
      return data;
   }catch(erro){
      console.log("Error");
   }
}

export const getCurso = async ()=>{
   try{     
      const res = await fetch(`${process.env.API_URL}/curso?populate=imagen`);
      const data = await res.json();
      return data;
   }catch(erro){
      console.log("Error");
   }
}