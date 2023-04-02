import Posts from "./posts"

const ListadoPosts = ({posts}) => {
  return (
    <>
      <h2 className="heading">Blog</h2>
      {posts?.length && (
         <div className="blog__grid">
            {posts.map(blog=>(
               <Posts
                  key={blog.id}
                  blog = {blog.attributes}
               />
            ))}
         </div>
      )}
    </>
  )
}

export default ListadoPosts