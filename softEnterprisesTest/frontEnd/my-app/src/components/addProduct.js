import axios from 'axios'
import { Button, Grid, Paper, TextField } from "@mui/material"
import { useEffect, useState } from "react"


const AddProduct = () => {
    const [productdetail, setproductdetail] = useState("");
    const [productname, setproductname]= useState("");
    const [data, setdata] = useState();

    async function submitform(e) {
        e.preventDefault()
        console.log(productname,productdetail);
        axios.post('http://localhost:8000/addProduct', { productname: productname, productdetail: productdetail })
            .then(res => {
                window.location.reload()
            })
            .catch(err => console.log('reacterr', err))

    }
    useEffect(() => {
        async function fetchData() {
            const result =  await axios.get('http://localhost:8000/getProduct')
           setdata(result.data)           
          // ...
        }
        fetchData();
      }, []);


    return (
        <div className="App" >
            <Grid>
                <form onSubmit={submitform}>
                    <h2>Add product by giving name and detail</h2>
                    <TextField placeholder="productName" onChange={(e) => { setproductname(e.target.value) }} /><br />
                    <TextField placeholder="productdetail" onChange={(e) => { setproductdetail(e.target.value) }} /> <br />
                    <Button type="submit" variant="contained" color="primary">Add product</Button>
                </form>
            </Grid>
            {data?.map((x)=>
              <div>
              <h2>{x?.productname}</h2><br />
              <p>{x?.productdetail}</p>
              </div>
            )
            }
        </div>
    )
}

export default AddProduct