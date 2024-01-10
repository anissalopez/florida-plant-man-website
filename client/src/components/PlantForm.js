import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

import AdminPanel from "./AdminPanel";

export default function PlantForm({ plants, setPlants }){

    const navigate = useNavigate();

    const MAX_FILE_SIZE = 102400; 
    const validFileExtensions = { image: ['jpg','png', 'jpeg', 'svg', 'webp'] };
    const isValidFileType = (fileName, fileType) =>{
            return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
    }

    const formSchema = yup.object().shape({
        name: yup.string().min(5).required("Must enter plant name"),
        water: yup.string().min(5).required("Must enter water requirements"),
        sun: yup.string().min(5).required("Must enter min sun requirements"),
        qty: yup.number().positive().integer().required("Must enter qty"),
        price: yup.string().required("Price must be in string format with two decimal points i.e 3.44"),
        image1:yup.mixed()
            .required("Required")
            .test("is-valid-type", "Not a valid image type",
            value => isValidFileType(value && value.name.toLowerCase(), "image"))
            .test("is-valid-size", "Max allowed size is 100KB",
            value => value && value.size <= MAX_FILE_SIZE),
        image2:yup.mixed()
            .required("Required")
            .test("is-valid-type", "Not a valid image type",
            value => isValidFileType(value && value.name.toLowerCase(), "image"))
            .test("is-valid-size", "Max allowed size is 100KB",
            value => value && value.size <= MAX_FILE_SIZE),
        image2:yup.mixed()
            .required("Required")
            .test("is-valid-type", "Not a valid image type",
                value => isValidFileType(value && value.name.toLowerCase(), "image"))
            .test("is-valid-size", "Max allowed size is 100KB",
                value => value && value.size <= MAX_FILE_SIZE),
        description:yup.string().min(5).required("Description must be min of 5 characters")
            
});
  

  const formik = useFormik({
    initialValues: {
      name: "",
      water: "",
      sun: "",
      image1:"",
      image2:"",
      image3:"",
      description:"",
      qty:""
    },

    validationSchema: formSchema,
    onSubmit: (values) => {
      fetch("/plants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values, null, 2),
      }).then((res) => {
        if (res.status == 200) {
          navigate("/admin");
        }
      });
    },
  });
  const labels = ["Plant Name", "Description", "Image1", "Image2", "Image3", "Water Requirements", "Sun Requirements", "Qty"]
  return (

    <div style={{display: "flex"}}>
 
    <div style={{marginTop:"100px", marginLeft:"200px"}}>
      <form onSubmit={formik.handleSubmit} style={{ margin: "30px" }}>


        { ["name", "description", "image1", "image2", "image3", "water", "sun", "qty"].map((value, index)=>(
             <div key={value}>
             <label  htmlFor={value}>{labels[index]}</label>
             <br />
             <input
               id={value}
               name={value}
               onChange={formik.handleChange}
               value={formik.values.value}
             />
             <p style={{ color: "red" }}> {formik.errors.value}</p>
             
             </div>    
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};
