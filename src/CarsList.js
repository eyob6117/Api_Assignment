import { useState,useEffect } from "react";
import axios  from "axios";
import SimpleImageSlider from "react-simple-image-slider";
import ReactLoading from 'react-loading';
import Loading from "./Loading.js";
import DatePicker from 'react-date-picker';

const CarsList = () => {
    const[carList,setCarList] = useState([]);
    const[loading,setLoading] = useState(false);
    const[images,setImages] = useState([]);
    const [value, onChange] = useState(new Date());
    useEffect(() => {
            carsInfo();
            CarsImages();
        },[])
        const carsInfo = () => {
            axios
            .get("https://mocki.io/v1/4f7bf80f-e4c8-44c5-9be2-afc649a5af96")
            .then((res) => {
                // console.log(res)
                setCarList(res.data.cars)
                setLoading(true);
            })
            .catch((err) => {
            console.log(err)
            });
        }


 const CarsImages = () => {
        carList.map((item) => {
            setImages(item.images);
        });     
}
return (
    <>
    {!loading ? <Loading /> : carList.map((value) => 
    {
        return(  
            <>  
                <div className="box">
                 <SimpleImageSlider width={300} height = {200} images = {images.map(value => value)} showBullets = {true} className = "img-slider" />
                <div className="description">
                  <h3>{value.carName}</h3>
                  <p>{value.carPrice}</p>
                  <p>{value.features}</p>
                 
                </div>
          

                         
            </div> 
            </>
            )
        })
    }      
      </>  
           ) 
    
    
}
export default CarsList;