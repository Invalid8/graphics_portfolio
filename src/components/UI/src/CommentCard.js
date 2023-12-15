import { useState } from "react";

const CommentCard = ({ comment }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="comment-modal d-flex x10-gap" style={{ maxWidth: "540px" }}>
      <div className="img-box icon">
        <img
          src={comment.img}
          width={45}
          style={{ width: "45px", height: "45px" }}
          alt="..."
        />
      </div>
      <div
        className="line bg-special"
        style={{ width: "3px", maxHeight: "150px" }}
      ></div>
      <div className="info">
        <div className="nin">
          <span className="date">{comment.date}</span>
          <h6 className="name cap-txt fw-9">{comment.name}</h6>
        </div>

        <p className="comment">{comment.txt}</p>
        <div className="action d-flex x5-gap">
          <button
            title={`${liked ? "un" : ""}like`}
            className="like p-2 text-danger transperant is-2_5 d-flex ai-c"
            onClick={() => {
              setLiked(!liked);
            }}
          >
            <span className="comment_no">{comment.likes_count}</span>
            <i className={`bx bx${liked ? "s" : ""}-heart`}></i>
          </button>
          <button
            title="Reply"
            className="reply p-2 text-special-0-i transperant is-2_5 d-flex ai-c"
          >
            <span className="comment_no">{comment.replies.length}</span>
            <i className="bi bi-arrow-clockwise"></i>
          </button>
        </div>
        <hr />
        <div className="reply-container d-flex flex-column x30-gap ml-5 mt-1 p-1">
          {comment.replies.map((reply, index) => {
            return <ReplyCommentCard reply={reply} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

const ReplyCommentCard = ({ reply }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div
      className="reply-modal d-flex flex-column x10-gap"
      style={{ maxWidth: "450px" }}
    >
      <div className="diff d-flex x10-gap">
        <div className="img-box icon">
          <img
            src={reply.img}
            width={45}
            style={{ width: "45px", height: "45px" }}
            alt="..."
          />
        </div>

        <div className="diff">
          <span className="date">{reply.date}</span>
          <h6 className="name cap-txt fw-9">{reply.name}</h6>
        </div>
      </div>
      <div className="info">
        <p className="comment">{reply.txt}</p>
        <div className="action d-flex x5-gap">
          <button
            title={`${liked ? "un" : ""}like`}
            className="like p-2 text-danger transperant is-2_5 d-flex ai-c"
            onClick={() => {
              setLiked(!liked);
            }}
          >
            <span className="comment_no">{reply.likes_count}</span>
            <i className={`bx bx${liked ? "s" : ""}-heart`}></i>
          </button>
          {/* <button title="Reply" className="reply p-2 text-special transperant is-2_5 d-flex ai-c">
            <span className="reply_no">{reply.replies_count}</span>
            <i className="bi bi-arrow-clockwise"></i>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
