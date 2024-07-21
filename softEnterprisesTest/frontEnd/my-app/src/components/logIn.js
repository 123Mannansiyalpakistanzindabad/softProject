import { Button, Grid, TextField } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios'


const LogIn = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();


    async function submitform(e) {
        e.preventDefault()
        await axios.post('http://localhost:8000/take', { email: email, password: password })
            .then(res => {
                if (res.data.email && res.data.password) {
                    navigate('/addProduct')
                } else {
                    alert('invaid email or password')

                }
            })
            .catch(err => console.log('err', err))
    }

    return (
        <div className="App" >
            <Grid>
                <form onSubmit={submitform}>
                    <h2>login user</h2>
                    <TextField placeholder="email" onChange={(e) => { setemail(e.target.value) }} /><br />
                    <TextField placeholder="password" onChange={(e) => { setpassword(e.target.value) }} /> <br />
                    <Button type="submit" variant="contained" color="primary">submit</Button>
                </form>
            </Grid>
        </div>

    )
}


export default LogIn