import React, { useState } from "react";
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { ADD } from "../../../controller/action";

const ProductItem = ({ data }) => {
  const dispatch = useDispatch();

  const [openImage, setOpenImage] = useState(false);
  const [img, setImg] = useState("false");

  const onOpenImage = (src) => {
    setImg(src);
    setOpenImage(true);
  };

  const addToCart = (items) => {
    dispatch(ADD(items));
  };

  return (
    <>
      <div className="product_items">
        {data.map((items) => (
          <div className="box" key={items.id}>
            <div className="img">
              <img src={items.cover} alt="" />
              <div className="overlay">
                <button className="button">
                  <FiShoppingBag onClick={() => addToCart(items)} />
                </button>
                <button className="button">
                  <AiOutlineHeart />
                </button>
                <button
                  className="button"
                  onClick={() => onOpenImage(items.cover)}
                >
                  <FiSearch />
                </button>
              </div>
            </div>

            <div className="details">
              <h3>{items.title}</h3>
              <p>{items.author}</p>
              <h4>Price : ${items.price}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className={openImage ? "modelOpen" : "modelClose"}>
        <div className="onClickImage">
          <img src={img} alt="" />
          <button className="button" onClick={() => setOpenImage(false)}>
            <AiOutlineClose />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
