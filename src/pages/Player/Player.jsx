import React, { useEffect, useState } from 'react'
import './Player.css'
import BackArrowIcon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();

  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  })

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGZhOTJmZTViMDI2YmI3Mzg2MzEwZGFmYjkzZDk5NiIsIm5iZiI6MTc0NTQ2NDgyOS41Nywic3ViIjoiNjgwOWFkZmQxNDJiMDljZWNmOGEyNzUwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Prqt9YSuARwWFPxHqcUf0kYWRPUoj0h3ZxXLxd-3UBE'
  }
};

useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
},[])




  return (
    <div className='player'>
      <img src={BackArrowIcon} onClick={()=> navigate('/')} />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='Trailer' frameBorder='0' allowFullScreen></iframe>
      <div className='player-info'>
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player