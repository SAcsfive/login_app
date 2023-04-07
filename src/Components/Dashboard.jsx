import { useRef, useState } from "react";
import { PostData } from "../PostData";
import Base from "./Base";
import CustomNavBar from "./CustomNavBar";
import SinglePost from "./SinglePost";

function Dashboard(){
    const inputRef=useRef();
    const [post,setPost] = useState([...PostData])
    const [newpostId, setNewPostId] = useState(PostData.length+1)
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const addPost=()=>{
        let myNewPost=inputRef.current.value;
        {
            myNewPost.length>0 &&
            setPost([...post,
                {
                    post_id: newpostId,
                    author: "Saira Ali",
                    date: date,
                    body: myNewPost

                }])
                setNewPostId(newpostId+1)
        }

    }

    const deletePost =(delete_to_be)=>{
        const updatedPost= post.filter((item)=>item.post_id!==delete_to_be)
        setPost(updatedPost)

    }

    return (
      <div>
        <CustomNavBar />
        <div className="container">
          <div className="row mx-auto">
            <div className="col-md-3">Col 1</div>
            <div className="col-md-6">
              <form id="newPostForm">
                <p className="text-start my-1">Create New Post</p>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    ref={inputRef}
                  ></textarea>
                </div>
                <div className="d-grid gap-2">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={addPost}
                  >
                    Post
                  </button>
                </div>
              </form>
              <hr />
              {post.map((item, index) => (
                <SinglePost
                  author={item.author}
                  date={item.date}
                  body={item.body}
                  itemIndex={item.post_id}
                  deletePost={deletePost}
                />
              ))}
            </div>
            <div className="col-md-3">Col 3</div>
          </div>
        </div>
      </div>
    );
}

export default Dashboard;