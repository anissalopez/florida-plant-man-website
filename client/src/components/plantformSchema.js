import * as yup from "yup";

const formSchema = yup.object().shape({
    name: yup.string().min(5).required("Must enter plant name"),
    water: yup.string().min(5).required("Must enter water requirements"),
    sun: yup.string().min(5).required("Must enter min sun requirements"),
    qty: yup.number().positive().integer().required("Must enter qty"),
    price: yup.string()
    .matches(/^\d+\.[0-9][0-9]$/, "Price must be in string format with two decimal points i.e 3.44")
    .required("Price must be in string format with two decimal points i.e 3.44"),
    image1:yup.mixed()
        .required("Required"),
  
    image2:yup.mixed()
        .required("Required"),

    image3:yup.mixed()
        .required("Required"),
      
    description:yup.string().min(5).required("Description must be min of 5 characters")   
    });

export default formSchema;
