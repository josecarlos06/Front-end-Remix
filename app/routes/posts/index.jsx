import { useLoaderData } from "@remix-run/react";
import ListadoPosts from "~/components/listadoPosts";
import { getData } from "../../services/api.server";

export async function loader(){
   const data = await getData("posts");
   return data.data;  
}
export function meta() {
   return {
      title: `Blog`
   }
}

const Index = () => {
   const posts = useLoaderData();
  return (
   <ListadoPosts
      posts = {posts}
   />
  )
}

export default Index