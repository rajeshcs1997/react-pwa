import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    //maxWidth: 345,
  },
});

const  Data = (props) => {
  const classes = useStyles();
  const [ users, setUsers ] = useState([]);
  const history = useHistory();

  useEffect( () => {
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((json) => setUsers(json.data))
      .catch((error) => console.error(error))
  }, []);
  //console.log("bdbxm0==", users)
  const handleClick = (e,res) =>{
  	//console.log("bms=====",res)
  	props.sendData(res)
  	history.push('/details')
  }
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingTop: '50px'}}>
      {users && users.map((res, i)=>(
      	<>
        <Card style={{display: 'block', width: '40vw', transitionDuration: '0.3s', marginBottom: '50px'}}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="profile_pic"
              height="140"
              image={res.avatar}
              title="profile_pic"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Name: {res.first_name} {res.last_name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Email: {res.email}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
		        <Button size="small" color="primary" onClick={(e)=>handleClick(e,res)}>
		          Show more 
		        </Button>
		      </CardActions>
        </Card>
        </>
      ))}
    </div>
  );
}

export default Data;
