import { useEffect, useState } from "react";
import NavBar from "../../Component/navbar/navbar";
import axios from "axios";
import styles from "./product.module.css";
import { Link } from "react-router-dom";

const Productt = () => {
  let [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      setUserData(response.data);
      console.log(response);
    } catch (error) {
      alert(error.massege);
    }
  };

  return (
    <>
      <NavBar />
      <h1>Product Page</h1>
      <div className={styles.mainContr}>
      {userData.map((data, index) => {
          return(
          <div key={index} className={styles.proContr}>
            <div className={styles.proCard}>
            <img src={data.image} alt="" width={100} />
              <h2>
              <Link to={`/product/${data.id}`}>{data.title}</Link>

              </h2>
              <h3>Price :{data.price}$</h3>

            </div>
            
          </div>
          );
        
      })}

      </div>
    </>
  );
};

export default Productt;
