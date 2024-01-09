import React, { useEffect, useState } from "react";

const Test = () =>{
 const [data, setData] = useState("");
 const [loading, setLoading] = useState(false);


 useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/test');
        console.log(response)
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        const imageList = await response.json();

        setData(imageList); 
        setLoading(false);
      } catch (error) {
        setLoading(false);
       
      }
    };

    fetchData();
  }, []);



    
    return(
        <div>
           {Object.keys(data).map((filename) => (
            <div key={filename}>
              <img src={data[filename]} alt={filename} />
            </div>
          ))}

        </div>
    )
}

export default Test