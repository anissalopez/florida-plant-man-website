import Grid from '@mui/material/Grid';
import InputLabel from "@mui/material/InputLabel";

export default function PlantFormImages({formik, setPreview, preview, initialValues}){

    console.log(initialValues)
    return(
            <>
                <Grid item lg={4} xs={12} key="image1">
                    <InputLabel>Image 1</InputLabel>
                        <input
                            id="image1"
                            name="image1"
                            onClick={(e)=>console.log(e)}
                            onChange={(e)=>{
                            formik.setFieldValue("image1", e.currentTarget.files[0]);
                            setPreview((prevState) => ({
                                ...prevState,
                                image1: URL.createObjectURL(e.target.files[0]),
                            }));  
                            }}
                            type="file"
                            accept=".jpg, .jpeg, .png, .svg, .webp"
                        />    
                        {
                            initialValues && !preview &&
                            <img alt="previewimage"style={{height:"200px", width:"200px"}}
                            src={initialValues.image1} /> 
                        } 
                        {
                            preview &&
                            <img alt="previewimage" style={{height:"200px", width:"200px"}}
                            src={preview.image1} /> 
                        }
                    <p style={{ color: 'red' }}>{formik.errors['image1']}</p>
                </Grid>
                <Grid item lg={4} xs={12} key="image2">
                    <InputLabel>Image 2</InputLabel>
                        <input
                            id="image2"
                            name="image2"
                            onChange={(e)=>{
                            formik.setFieldValue("image2", e.currentTarget.files[0]);
                            setPreview((prevState) => ({
                                ...prevState,
                                image2: URL.createObjectURL(e.target.files[0]),
                            }));
                            }}
                            type="file"
                            accept=".jpg, .jpeg, .png, .svg, .webp"
                        />
                        {
                            initialValues && !preview &&
                            <img alt="previewimage" style={{height:"200px", width:"200px"}}
                            src={initialValues.image2} /> 
                        } 
                        {
                            preview &&
                            <img  
                            alt="previewimage" 
                            style={{height:"200px", width:"200px"}}
                            src={preview.image2} /> 
                        }
                        <p style={{ color: 'red' }}>{formik.errors['image2']}</p>
                </Grid>
                <Grid item lg={4} xs={12} key="image3">
                    <InputLabel>Image 3</InputLabel>
                        <input
                        id="image3"
                        name="image3"
                        onChange={(e)=>{
                            formik.setFieldValue("image3", e.currentTarget.files[0]);
                            setPreview((prevState) => ({
                            ...prevState,
                            image3: URL.createObjectURL(e.target.files[0]),
                            }));    
                        }}
                        type="file"
                        accept=".jpg, .jpeg, .png, .svg, .webp"
                        />
                    {
                        initialValues && !preview &&
                        <img 
                            alt="previewimage" 
                            style={{height:"200px", width:"200px"}}
                            src={initialValues.image3} /> 
                    } 
                    {
                        preview &&
                        <img  
                            alt="previewimage" 
                            style={{height:"200px", width:"200px"}}
                            src={preview.image3} /> 
                    }
                     <p style={{ color: 'red' }}>{formik.errors['image3']}</p>
                </Grid>
            </>
    );
};

    
    