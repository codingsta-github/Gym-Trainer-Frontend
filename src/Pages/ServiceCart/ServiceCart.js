import React from "react";
import "./ServiceCart.css";
import ServiceCartBanner from "../../Assets/Banner/banner3.jpg";
import { Link, Outlet, useParams } from "react-router-dom";
import useServiceCart from "../../Hooks/useServiceCart";
import { useState } from "react";
const ServiceCart = () => {
  const id = useParams();
  const [ServiceCart] = useServiceCart(id);
  const {
    _id,
    image,
    name,
    price,
    category,
    instructor,
    schedule,
    short,
    full,
    slots,
  } = ServiceCart;

  const [des, setDes] = useState(true);
  const [add, setAdd] = useState(false);
  const [rev, setRev] = useState(false);
  const Des = () => {
    setDes(true);
    setAdd(false);
    setRev(false);
  };
  const Add = () => {
    setAdd(true);
    setDes(false);
    setRev(false);
  };
  const Rev = () => {
    setRev(true);
    setDes(false);
    setAdd(false);
  };
  const BuyNow = () => {};
  return (
    <div className="ServiceCart">
      <div className="ServiceCart-banner">
        <img src={ServiceCartBanner} alt="" />
        <div className="head">
          <h1>FITNESS CONSULTATION</h1>
        </div>
      </div>
      <div className="ServiceCart-details">
        <div className="ServiceCart-details-img">
          <img src={image} alt="" />
        </div>
        <div className="ServiceCart-details-info">
          <h1>${price}.00</h1>
          <p>{short}</p>
          <form onClick={BuyNow}>
            <p id="label">Choose a schedule:</p>
            <select id="slots" name="slots">
              {slots?.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input className="buynow" type="submit" value="buy now" />
          </form>
          <div className="straight-line"></div>
          <h4>
            category: <span>{category}</span>
          </h4>
        </div>
      </div>
      <div className="ServiceCart-description">
        <div className="description-button">
          <div>
            <button onClick={Des} className={des ? `active` : `inactive`}>
              description
            </button>
          </div>
          <div>
            <button onClick={Add} className={add ? `active` : `inactive`}>
              additional information
            </button>
          </div>
          <div>
            <button onClick={Rev} className={rev ? `active` : `inactive`}>
              reviews({})
            </button>
          </div>
        </div>
        {des && <p>{full}</p>}
        {add && (
          <div>
            <h1>additional information</h1>
            <div className="straight-line2"></div>
            <h4>
              Instructor : <span>{instructor}</span>
            </h4>
            <div className="straight-line2"></div>
            <h4>
              schedule : <span>{schedule}</span>
            </h4>
            <div className="straight-line2"></div>
          </div>
        )}
        {rev && (
          <div id="review">
            <h1>reviews</h1>
            <p>There is no review</p>
            <h4>Be the first to review “{name}”</h4>
            <form action="" >
              <p>Your name</p>
              <input type="text" name="name" id="name-box"/>
              <p>Your review</p>
              <input type="text" name="review" id="review-box" />
              <button className="buynow">submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCart;
