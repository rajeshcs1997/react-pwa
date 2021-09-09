import React, {useState, useEffect} from 'react';

const  Data = (props) => {
  const [ users, setUsers ] = useState([]);

  console.log("detailsdtata==sdcd==", props.data)
  return (
    <div style={{backgroundColor: 'aqua', padding: '50px'}}>
    	<p style={{fontSize: '25px', color: 'royalblue', fontWeight: 'bold'}}>Here's your personal detail</p>
    	<img src={props.data.avatar} alt="profile_pic" style={{borderRadius: '50%'}} />
    	<p style={{fontSize: '20px', color: 'royalblue', fontWeight: 'bold'}}>Your id: <span style={{color: 'gray',fontWeight: 'bold'}}> {props.data.id}</span></p>
    	<p style={{fontSize: '20px', color: 'royalblue', fontWeight: 'bold'}}>Your Name: <span style={{color: 'gray',fontWeight: 'bold'}}> {props.data.first_name} {props.data.last_name}</span></p>
    	<p style={{fontSize: '20px', color: 'royalblue', fontWeight: 'bold'}}>Your Email: <span style={{color: 'gray',fontWeight: 'bold'}}> {props.data.email}</span></p>
    </div>
  );
}

export default Data;
