import React from "react";
import style from "./Comments.scss";

function Comments() {
  const comments = [
    {
      name: "Nguyễn Văn A",
      comment: "Sản phẩm rất tuyệt. Sẽ ủng hộ sau nhé 1 :>",
    },
    {
      name: "Nguyễn Văn B",
      comment:
        "Sản phẩm rất tuyệt. Sẽ ủng hộ sau nhé hehehehehehehehehehehehehe 2 :>",
    },
    {
      name: "Nguyễn Văn C",
      comment: "Sản phẩm rất tuyệt. Sẽ ủng hộ sau nhé 3 :>",
    },
    {
      name: "Nguyễn Văn D",
      comment: "Sản phẩm rất tuyệt. Sẽ ủng hộ sau nhé 4 :>",
    },
    {
      name: "Nguyễn Văn E",
      comment: "Sản phẩm rất tuyệt. Sẽ ủng hộ sau nhé 5 :>",
    },
    {
      name: "Nguyễn Văn E",
      comment: "Sản phẩm rất tuyệt. Sẽ ủng hộ sau nhé 5 :>",
    },
    {
      name: "Nguyễn Văn E",
      comment: "Sản phẩm rất tuyệt. Sẽ ủng hộ sau nhé 5 :>",
    },
    {
      name: "Nguyễn Văn E",
      comment: "Sản phẩm rất tuyệt. Sẽ ủng hộ sau nhé 5 :>",
    },
    {
      name: "Nguyễn Văn E",
      comment: "Sản phẩm rất tuyệt. Sẽ ủng hộ sau nhé 5 :>",
    },
    {
      name: "Nguyễn Văn E",
      comment: "Sản phẩm rất tuyệt. Sẽ ủng hộ sau nhé 5 :>",
    },
    {
      name: "Nguyễn Văn E",
      comment: "Sản phẩm rất tuyệt. Sẽ ủng hộ sau nhé 5 :>",
    },
    {
      name: "Nguyễn Văn E",
      comment: "Sản phẩm rất tuyệt. Sẽ ủng hộ sau nhé 5 :>",
    },
    {
      name: "Nguyễn Văn E",
      comment: "Sản phẩm rất tuyệt. Sẽ ủng hộ sau nhé 5 :>",
    },
  ];
  return (
    <>
      <section className="prod-comments">
        <h2>Comments</h2>
        <div className="comments-box">
          <div className="comments-list">
            {comments.map((item, index) => (
              <div className="comment-item" key={index}>
                <div className="comment-name">{item.name}</div>
                <div className="comment-content">{item.comment}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Comments;
