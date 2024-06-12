import React from "react";
import Resizer from "react-image-file-resizer";
import axios from "axios";
import { useSelector } from "react-redux";
import { Avatar, Space, Badge } from "antd";

const FileUpload = ({ values, setLoading, setValues }) => {
  const { user } = useSelector((state) => ({ ...state }));
  const fileUploadAndResize = (e) => {
    e.preventDefault();
    let files = e.target.files;
    let allUpLoadedFiles = values.images;
    if (files) {
      setLoading(true);
      for (let i = 0; i < files.length; i++) {
        Resizer.imageFileResizer(
          files[i],
          720,
          720,
          "JPEG",
          100,
          0,
          (url) => {
            console.log(url);
            axios
              .post(
                `${import.meta.env.VITE_SOME_API}/uploadimages`,
                {
                  image: url,
                },
                {
                  headers: {
                    authtoken: user ? user.token : "",
                  },
                }
              )
              .then((res) => {
                console.log("IMAGE UPLOAD RES DATA", res.data);
                setLoading(false);
                allUpLoadedFiles.push(res.data);
                setValues({ ...values, images: allUpLoadedFiles });
              })
              .catch((err) => {
                setLoading(false);
                console.log("CLOUDINARY UPLOAD ERR", err);
              });
          },
          "base64"
        );
      }
    }
  };

  const handleImageRemove = (public_id) => {
    setLoading(true);
    console.log("Remove image", public_id);
    axios
      .post(
        `${import.meta.env.VITE_SOME_API}/removeimages`,
        {
          public_id,
        },
        {
          headers: {
            authtoken: user ? user.token : "",
          },
        }
      )
      .then((res) => {
        setLoading(false);
        const { images } = values;
        let filteredImages = images.filter((item) => {
          return item.public_id !== public_id;
        });
        setValues({ ...values, images: filteredImages });
      })
      .catch((err) => {
        console.log("ssss", err);
        setLoading(false);
      });
  };

  return (
    <>
      <div>
        {values.images &&
          values.images.map((image) => (
            <Space style={{ margin: "10px 10px" }}>
              <Badge
                count="X"
                key={image.public_id}
                onClick={() => handleImageRemove(image.public_id)}
                style={{ cursor: "pointer" }}
              >
                <Avatar
                  src={image.url}
                  size={100}
                  shape="square"
                  className="ml-3"
                />
              </Badge>
            </Space>
          ))}
      </div>
      <div className="row btn btn-primary ">
        <label>
          Choose File
          <input
            type="file"
            multiple
            hidden
            accept="images/*"
            onChange={fileUploadAndResize}
          />
        </label>
      </div>
    </>
  );
};

export default FileUpload;
