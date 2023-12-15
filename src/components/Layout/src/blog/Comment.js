import { CommentCard } from "../../../UI";
import NothingBox from "../NothingBox";

const Comment = ({ comments }) => {
  return (
    <div
      className="comment-section p-4 d-flex flex-column h-100 align-items-start w-100 x20-gap"
      style={{
        maxHeight: "600px",
        overflow: "hidden",
      }}
    >
      <div className="inner-header">
        <h3 className="upp-txt fw-8">
          comment ({comments && comments.length})
        </h3>
      </div>
      <div
        className="inner-body d-flex flex-column x30-gap custom-scroll-bar"
        style={{ overflowY: "scroll" }}
      >
        {comments &&
          comments.map((comment, index) => {
            return <CommentCard comment={comment} key={index} />;
          })}
        {comments && comments.length === 0 && <NothingBox />}
      </div>
    </div>
  );
};

export default Comment;
