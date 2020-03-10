import React  ,{Component} from 'react'
import videoUrl from '../../assests/video/SampleVideo_1280x720_5mb.mp4'
import './VideoPlayer.css'

class VideoPlayer extends Component {

 goBack=()=>{
  let videoDetail = this.props.videoDetail
   let key = `video_${videoDetail.id}`
   let data= { duration:this._video.duration , currentTime :this._video.currentTime }
   this.props.setVideoState(key,data)
 }


  render(){
    return(
      <div>
      <button className="backButton" onClick={this.goBack}>  Back To List</button>
      <div className="video_wrapper">
      <video  controls muted autoPlay ref={c => (this._video = c)}>
      <source src={videoUrl}  type="video/mp4" />
      </video>
      </div>

      </div>
    )
  }

  componentDidMount(){
    let runTime = this.props.videoDetail.runTime;
     if(runTime && runTime.currentTime!==runTime.duration) {
       this._video.currentTime= runTime.currentTime
     }
  }

  componentWillUnmount(){
    this.goBack();
  }
}

export default VideoPlayer;
