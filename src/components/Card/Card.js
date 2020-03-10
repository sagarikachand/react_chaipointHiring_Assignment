import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function MediaCard({videoDetail,runTime,playSelectedVideo}) {

  let currentVideoAction="Watch Now"
  let currentProgress= null;
  if(runTime && runTime.currentTime){
    let {currentTime,duration} = runTime
   if( currentTime ==duration){
    currentVideoAction='Play Again'
    }else{
    currentVideoAction='Play'
    currentProgress= `You watched ${currentTime.toFixed(2)} of ${duration.toFixed(2)} sec`
     }
  }
  return(
    <Card style={{
      maxWidth: 345,
      margin:20
    }}>

          <CardMedia
          style={{
            height: 200,
            backgroundSize: 'cover'
          }}
            image={videoDetail['image']}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {videoDetail.title}
            </Typography>
            <Typography component="p">
            {videoDetail.description}
            </Typography>
            <Typography component="p" style={{ color: 'rgb(184, 123, 123)', fontStyle:'italic'}}>
              {currentProgress}
            </Typography>
          </CardContent>

        <CardActions>
          <Button size="small" color="primary" onClick={(event)=> playSelectedVideo(event, videoDetail)}>
          {currentVideoAction}
          </Button>
        </CardActions>

      </Card>
  )


}



export default MediaCard
