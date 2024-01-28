import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

//Asset
import img1 from "../../asset/comment/1.png";
import img2 from "../../asset/comment/2.png";
import img3 from "../../asset/comment/3.png";
import img4 from "../../asset/comment/4.png";

const Comment = ({ name, image, comment }) => {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="comment-box" data-aos="fade-up">
      <div className="box-top">
        <div className="Profile">
          <div className="profile-image">
            <img src={image} alt={name} />
          </div>
          <div className="Name">
            <strong>{name}</strong>
            <span>@{name.toLowerCase()}</span>
          </div>
        </div>
      </div>
      <div className="comment">
        <p>{comment}</p>
      </div>
    </div>
  );
};

const Comments = () => {
  const comments = [
    {
      name: "Ranidi Lochana",
      image: img1,
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      name: "Senuda Dilwan",
      image: img2,
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      name: "Rumali Fernando",
      image: img3,
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      name: "Midinu Thiranjana",
      image: img4,
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
    <section className="comments-section">
      <h2> Our Good Comment from Customer</h2>
      <div className="full-boxer">
        {comments.map((comment, index) => (
          <Comment
            key={index}
            name={comment.name}
            image={comment.image}
            comment={comment.comment}
          />
        ))}
      </div>
    </section>
  );
};

export default Comments;
