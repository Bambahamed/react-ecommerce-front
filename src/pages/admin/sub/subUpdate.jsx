import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/nav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { getSub, removeSub, updateSub } from "../../../functions/sub";
import { getCategories } from "../../../functions/category";
import { Link, useNavigate, useParams } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import CategoryForm from "../../../components/forms/CategoryForm";
import LocalSearch from "../../../components/forms/LocalSearch";

const SubUpdate = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [parent, setParent] = useState("");
  const navigate = useNavigate();
  let { slug } = useParams();

  useEffect(() => {
    loadCategories();
    loadSub();
  }, []);

  const loadSub = () =>
    getSub(slug).then((s) => {
      setName(s.name);
      setParent(s.parent);
    });

  const loadCategories = () =>
    getCategories().then((c) => setCategories(c.data));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    updateSub(slug, user.token, { name, parent })
      .then((res) => {
        setLoading(false);
        setName("");
        toast.success(`"${res.name}" is updated`);
        navigate("/admin/sub");
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.status === 400) toast.error(err.response.data);
      });
  };

  //   const handleRemove = async (slug) => {
  //     /*   let answer = window.confirm("Delete?");
  //     console.log(answer, slug); */
  //     if (window.confirm("Delete?")) {
  //       setLoading(true);
  //       removeSub(slug, user.token)
  //         .then((res) => {
  //           setLoading(false);
  //           toast.error(`${res.name} deleted`);
  //           navigate("/admin/sub");
  //         })
  //         .catch((err) => {
  //           if (err.response.status === 400) {
  //             setLoading(false);
  //             toast.error(err.response.data);
  //           }
  //         });
  //     }
  //   };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col">
          {loading ? (
            <h4 className="text-danger">Loading...</h4>
          ) : (
            <h4>Create sub category</h4>
          )}

          <div className="form-group">
            <label>Parent category</label>
            <select
              name="category"
              className="form-control"
              onChange={(e) => setParent(e.target.value)}
            >
              <option>Please select</option>
              {categories.length > 0 &&
                categories.map((c) => (
                  <option key={c._id} value={c._id} selected={c._id === parent}>
                    {c.name}
                  </option>
                ))}
            </select>
          </div>

          <CategoryForm
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
          />
        </div>
      </div>
    </div>
  );
};

export default SubUpdate;
