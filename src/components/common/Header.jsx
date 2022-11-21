import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
import cartimg from "../assets/images/cart.png";
import { BiSearch } from "react-icons/bi";
import { BsBagCheck } from "react-icons/bs";
import { RiUser3Line } from "react-icons/ri";
import {
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineDelete,
} from "react-icons/ai";
import { navlist } from "../assets/data/data";
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { DELETE } from "../../controller/action";

export default function Header() {
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    header.classList.toggle("active", window.scrollY > 100);
  });

  const [mobile, setMobile] = useState(false);

  //cart add in shop
  const getData = useSelector((state) => state.cartReducer.carts);

  const [cartList, setCartList] = useState(false);
  const handleClose = () => {
    setCartList(null);
  };

  const dispatch = useDispatch();
  const deleteItem = (id) => {
    dispatch(DELETE(id));
  };

  //caculate total price

  const [totalPrice, setTotalPrice] = useState(0);

  const totals = () => {
    console.log("caculate total");
    let price = 0;

    getData.map((item) => {
      price += parseFloat(item.price) * item.qty;
    });
    setTotalPrice(price);
  };

  useEffect(() => {
    totals();
  }, [totals]);

  return (
    <>
      <header className="header">
        <div className="container">
          <nav>
            <div className="toggle">
              <button onClick={() => setMobile(!mobile)}>
                {mobile ? (
                  <AiOutlineClose className="close heIcon" />
                ) : (
                  <AiOutlineMenu className="open heIcon" />
                )}
              </button>
            </div>
            <div className="left">
              <img src={logo} alt="" />
            </div>
            <div className="center">
              <ul className={mobile ? "mobile-nav" : "menu"}>
                {navlist.map((nav) => (
                  <li key={nav.id}>
                    <Link to={nav.path}>{nav.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className="right">
            <div className="right_search">
              <input type="text" placeholder="Search Products ..." />
              <BiSearch className="searchIcon heIcon" />
            </div>
            <div className="right_user">
              <RiUser3Line className="userIcon heIcon" />
              <AiOutlineHeart className="userIcon heIcon" />
            </div>

            <div className="right_card">
              <button className="button" onClick={() => setCartList(true)}>
                <BsBagCheck className="shop heIcon" />
                MY CART({getData.length})
              </button>

              <div className={cartList ? "showCart" : "hideCart"}>
                {getData.length ? (
                  <section className="details">
                    <div className="details_title">
                      <h3>Photo</h3>
                      <h3>Product Name</h3>
                    </div>
                    {getData.map((item) => (
                      <div className="details_content">
                        <div className="details_content_img">
                          <Link to={`/cart/${item.id}`} onClick={handleClose}>
                            <img src={item.cover} alt="" />
                          </Link>
                        </div>

                        <div className="details_content_detail">
                          <div className="details_content_detail_price">
                            <p>{item.title.slice(0, 20)} ... </p>
                            <p>Price: ${item.price}</p>
                            <p>Quantity: {item.qty}</p>
                          </div>
                        </div>

                        <div className="details_content_detail_icon">
                          <i onClick={() => deleteItem(item.id)}>
                            <AiOutlineDelete />
                          </i>
                        </div>
                      </div>
                    ))}

                    <div className="details_total">
                      <h4>Total : ${totalPrice}</h4>
                    </div>
                    <div className="" onClick={() => setCartList(false)}>
                      <AiOutlineClose />
                    </div>
                  </section>
                ) : (
                  <div className="empty">
                    <p>Your cart is empty</p>
                    <img src={cartimg} alt="" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    amout: state.amout,
  };
};
connect(mapStateToProps(Header));
