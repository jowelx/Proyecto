import { useState,useEffect } from 'react';
import { Grid,Typography } from "@material-ui/core";
import Product from '../../components/product'
import Navbar from '../../components/navBar'
import{ Link} from "react-router-dom"
const Home =()=> {
    
    const url ='http://localhost:5000/';
    
    const [items,setItems]=useState([]);
    const fetchApi = async() =>{
      const response = await fetch(url);
      
      const responseJSON = await response.json();
      setItems(responseJSON);
      console.log(responseJSON)
    }
    useEffect(()=>{
      fetchApi()
    },[])

    return(
        <>
           <Grid container >
            <Grid item xs={12}>
                <Navbar/>
            </Grid>
     
            <Grid item xs={12}>
            <Grid container>
                {items.map(item =>{
                   
                    return(
                        <>
                
                    
                        <Grid item xs={6} sm={4}md={3}>
                        <Link
                     to={`/product/${item.file.id}`}
                     >

                        <Product  
                        tittle={item.file.product_name} 
                        img={item.
                            file.portada} 
                        description={item.file.description_product}
                        price={item.file.price} />
                         </Link>
                        </Grid> 
                       
                  </>
                    )
                })
            }  
                 </Grid>
            </Grid>
        </Grid>
        </>
    )
}

export default Home;