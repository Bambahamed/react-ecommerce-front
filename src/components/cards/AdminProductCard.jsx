import React from "react";
import { Card } from "antd";
import laptop from "../../../src/assets/laptop.jpg";
const { Meta } = Card;
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const AdminProductCard = ({ product, handleRemove }) => {
  const { title, description, images, slug } = product;
  return (
    <Card
      cover={
        <img
          src={images && images.length ? images[0].url : laptop}
          style={{ height: 150, objectFit: "cover" }}
          className="p-1"
        />
      }
      actions={[
        <Link to={`/admin/product/${slug}`}>
          <EditOutlined className="text-warning" />
        </Link>,
        <DeleteOutlined
          onClick={() => handleRemove(slug)}
          className="text-danger"
        />,
      ]}
    >
      <Meta
        title={title}
        description={`${description && description.substring(0, 10)}...`}
      />
    </Card>
  );
};

export default AdminProductCard;
