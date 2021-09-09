import React, {useState, useEffect} from 'react';
import { Styles } from "./styles";

const  Data = (props) => {
  const [ users, setUsers ] = useState([]);

  console.log("detailsdtata==sdcd==", props.data)
  return (
    <div style={Styles.container}>
      <p style={Styles.heading}>Here's your personal detail</p>
      <img src={props.data.avatar} alt="profile_pic" style={{borderRadius: '50%'}} />
      <p style={Styles.head}>Your id: <span style={Styles.span}> {props.data.id}</span></p>
      <p style={Styles.head}>Your Name: <span style={Styles.span}> {props.data.first_name} {props.data.last_name}</span></p>
      <p style={Styles.head}>Your Email: <span style={Styles.span}> {props.data.email}</span></p>
    </div>
  );
}

export default Data;
