import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs,setBlogs] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
            .then((res)=> res.json())
            .then((data)=> setBlogs(data))
            .catch((error)=> console.log(error));
    }, []);

    return ( 
        <div className="home">
            {blogs && <BlogList 
                title="All Blogs" 
                blogs={blogs}/>}
        </div> 
     );
}
 
export default Home;