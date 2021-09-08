import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    //maxWidth: 345,
  },
});

const  Data = () => {
	const classes = useStyles();
	const [ users, setUsers ] = useState([]);

	useEffect( () => {
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((json) => setUsers(json.data))
      .catch((error) => console.error(error))
  }, []);
	console.log("bdbxm0==", users)
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '50px'}}>
     	{users && users.map((res)=>(
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
		    </Card>
      ))}
    </div>
  );
}

export default Data;
