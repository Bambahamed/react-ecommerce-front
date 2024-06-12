import React, { useState } from "react";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserAddOutlined,
  UserOutlined,
  LogoutOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Menu, Badge } from "antd";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../App.css";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import Search from "../forms/Search";

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");
  let dispatch = useDispatch();
  let { user, cart } = useSelector((state) => ({ ...state }));
  const navigate = useNavigate();
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const logout = () => {
    signOut(auth);
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    navigate("/login");
  };
  return (
    <div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        style={{ display: "block" }}
      >
        <Menu.Item key="home" icon={<AppstoreOutlined />}>
          <Link to={"/"} className="text-decoration-none">
            Home
          </Link>
        </Menu.Item>
        <Menu.Item key="shop" icon={<ShoppingOutlined />}>
          <Link to={"/shop"} className="text-decoration-none">
            Shop
          </Link>
        </Menu.Item>
        <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
          <Link to={"/cart"} className="text-decoration-none">
            <Badge count={cart.length} offset={[9, 0]}>
              Cart
            </Badge>
          </Link>
        </Menu.Item>
        {user && (
          <Menu.SubMenu
            icon={<SettingOutlined />}
            title={user.email && user.email.split("@")[0]}
            style={{ float: "right" }}
          >
            {user && user.role === "subscriber" && (
              <Item>
                <Link to="/user/history" className="text-decoration-none">
                  Dashboard
                </Link>
              </Item>
            )}

            {user && user.role === "admin" && (
              <Item>
                <Link to="/admin/dashboard" className="text-decoration-none">
                  Dashboard
                </Link>
              </Item>
            )}

            <Item icon={<LogoutOutlined />} onClick={logout}>
              Logout
            </Item>
          </Menu.SubMenu>
        )}
        {!user && (
          <Menu.Item
            key="login"
            icon={<UserOutlined />}
            style={{ float: "right" }}
          >
            <Link to={"/Login"} className="text-decoration-none">
              Login
            </Link>
          </Menu.Item>
        )}
        {!user && (
          <Menu.Item
            key="register"
            icon={<UserAddOutlined />}
            style={{ float: "right" }}
          >
            <Link to={"/register"} className="text-decoration-none">
              {" "}
              Register
            </Link>
          </Menu.Item>
        )}
        <span style={{ float: "right" }}>
          <Search />
        </span>
      </Menu>
    </div>
  );
};

export default Header;
