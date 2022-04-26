import React from "react";
import {
  deleteReviewStart,
  deleteReviewfaliure,
  deleteReviewSuccess,
} from "../redux/reviewRedux";
import { useDispatch, useSelector } from "react-redux";
import { publicRequest } from "../requestMethod";


const Mreview = ({ users }) => {

  const puser = useSelector(state=> state.user?.currentUser)
  const review = useSelector(state=> state.review)
  console.log(review)
  const dispatch = useDispatch();
  const deleteReview = async (id) => {
    dispatch(deleteReviewStart());
    try {
    await publicRequest.delete(`/reviews/${id}`);
      dispatch(deleteReviewSuccess(id));
      window.location.reload()
    } catch (err) {
      dispatch(deleteReviewfaliure());
    }
  };

  return (
    <div>
      {users.map((user) => (
        <div key={user._id}>
          <div className=" justify-content-center col-md-3 col-10">
            <div className="content text-center">
              <div className="ratings">
                {" "}
                <span className="product-rating">{user.rating}</span>
                <span>/5</span>
                <div className="stars">
                  {" "}
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                  <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
                </div>
                <div className="rating-text">
                  {" "}
                  <span>{user.review}</span>{" "}
                </div>
              {puser && <i
                  className="fa fa-trash"
                  onClick={() => deleteReview(user._id)}
                ></i>}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mreview;
