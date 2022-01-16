import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './Userapi.css'
const Userapi = () => {
    const [data, setData]= useState([])
    useEffect(() => {
        const fetchData=()=>{
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response=>setData(response.data))
            .catch(error=>console.log(error))
        }
        fetchData()

    }, [])
    return (
        <div className='UserContainer'>
            {data.map(user=>{
                return(
                    <div className='UserCard'>
                       <img style={{width:60}} src='https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png'/>
                       <h4>Name: {user.name}</h4>
                       <h4>UserName: {user.username}</h4>
                       <p>Email:{user.email}</p>
                       <p>City: {user.address.city}</p>
                       <h4>Company: {user.company.name}</h4>
                       <p>Business Type: {user.company.bs}</p>
                       <p>Phone: {user.phone}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Userapi
