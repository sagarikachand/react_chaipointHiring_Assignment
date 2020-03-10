import React, {Component} from 'react'
import MediaCard from '../../components/Card/Card'
import {fetchCategoryData} from '../Api'
import {Route} from 'react-router-dom'
import VideoPlayer   from '../../components/videoPlayer/VideoPlayer'
import './VideoList.css'
import { getLocalStorage ,setLocalStorage} from '../../components/helper/misc'


class VideoListComponent extends Component {

state = {
  category:'',
  videoList:[],
  selectedVideo:null,
  isLoading: true
}
  componentDidMount(){
   let category = this.props.match.params.category;
   this.setState({
     category,
     videoList : fetchCategoryData(category),
     isLoading:false
   })
  }

  shouldComponentUpdate(nextState,nextProps){

    if(nextState.match.params.category !== this.state.category){
      this.setState({
        category:nextState.match.params.category,
        videoList : fetchCategoryData(nextState.match.params.category),
        selectedVideo:null
      })

    }
    return true
  }

  playSelectedVideo=(event,video)=>{
    this.setState({
      selectedVideo:video
    })
  }

  setVideoState=(key,data)=>{
    setLocalStorage(key ,data);
    this.setState({
      selectedVideo: null
    })
  }

renderCard =() =>{
  return   this.state.videoList.map((ele)=>{
    let runTime= getLocalStorage(`video_${ele.id}`)
     ele["runTime"]=runTime;
      return   <MediaCard videoDetail={ele} runTime ={runTime} key={ele.id}  playSelectedVideo={this.playSelectedVideo}  />
     })
}

render(){
  let heading= <h2 className="activeCategory">{this.state.category}</h2>

      if(this.state.selectedVideo){
        heading =<h2 className="activeCategory">{this.state.category} > {this.state.selectedVideo.title}</h2>
    return  (
      <div>
      {heading}
      <VideoPlayer videoDetail={this.state.selectedVideo}  back={this.back} setVideoState ={this.setVideoState} />
      </div>
    )

      }

         let card= this.state.videoList ?
          this.renderCard() :
          null
        return (
            <div className="list_wrapper">
             {heading}
            <div className="card_wrapper">
               {card}
              </div>
            </div>
        )
    }
}

export default VideoListComponent
