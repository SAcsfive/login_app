import { Link, useNavigate } from "react-router-dom";

function SinglePost(Props) {
  function handledeletePost() {
    Props.deletePost(Props.itemIndex);
  }

  return (
    <div className="card m-2">
      <div className="card-body text-start">
        <div className="row">
          <div className="col-6 fw-bold">{Props.author}</div>
          <div className="col-6 text-end">{Props.date}</div>
        </div>
        <p className="mt-2">{Props.body}</p>
      </div>
      <div className="m-2 gap-2 d-md-flex justify-content-md-end">
        <button
          type="button"
          className="btn btn-danger float-right pb-2 w-25"
          onClick={handledeletePost}
        >
          <i className="fa fa-trash" aria-hidden="true"></i> Delete Post
        </button>
      </div>
    </div>
  );
}
export default SinglePost;
