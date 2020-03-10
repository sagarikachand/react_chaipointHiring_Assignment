
import imageSrc from '../../assests/images/bunny.jpg'
import videoUrl from '../../assests/video/SampleVideo_1280x720_5mb.mp4'


const mockDatabase ={
  categoryList :[
    { linkTo: 'sports' , label : 'Sports'},
    { linkTo: 'music' ,label : 'Music'},
    { linkTo: 'cinema' ,label : 'Cinema'},
    { linkTo: 'technology' , label : 'Technology'},
    { linkTo: 'science',label : 'Science'},
    { linkTo: 'art' ,label : 'Art'},
    { linkTo: 'business' ,label : 'Business'},
    { linkTo: 'politics' ,label : 'Politics'},
    { linkTo: 'education' ,label : 'Education'},
    { linkTo: 'nature' ,label : 'Nature'}
  ],

  categoryData:{
      'sports':[
        {id:10 , title: 'Sample video title' , description:"This is a short description of the video",image:imageSrc, videoUrl:videoUrl},
        {id:20 , title: 'Sample video title 2' , description:"This is a short description of the video 2", image:imageSrc ,videoUrl:videoUrl},
        {id:30 , title: 'Sample video title 3' , description:"This is a short description of the video 3",image:imageSrc, videoUrl:videoUrl},
        {id:40  , title: 'Sample video title 4' , description:"This is a short description of the video 4", image:imageSrc ,videoUrl:videoUrl},
        {id:50 , title: 'Sample video title 5' , description:"This is a short description of the video 5",image:imageSrc, videoUrl:videoUrl},
        {id:60  , title: 'Sample video title 6' , description:"This is a short description of the video 6", image:imageSrc ,videoUrl:videoUrl},
        {id:70 , title: 'Sample video title 7' , description:"This is a short description of the video 7",image:imageSrc, videoUrl:videoUrl},
        {id:80  , title: 'Sample video title 8' , description:"This is a short description of the video 8", image:imageSrc ,videoUrl:videoUrl},
        {id:90 , title: 'Sample video title 9' , description:"This is a short description of the video 9", image:imageSrc ,videoUrl:videoUrl},
        {id:100  , title: 'Sample video title 10' , description:"This is a short description of the video 10", image:imageSrc ,videoUrl:videoUrl},
      ],
      'cinema':[
        {id:11 , title: 'Sample video title' , description:"This is a short description of the video",image:imageSrc, videoUrl:videoUrl},
        {id:21  , title: 'Sample video title 2' , description:"This is a short description of the video 2", image:imageSrc ,videoUrl:videoUrl},
        {id:31 , title: 'Sample video title 3' , description:"This is a short description of the video 3",image:imageSrc, videoUrl:videoUrl},
        {id:41  , title: 'Sample video title 4' , description:"This is a short description of the video 4", image:imageSrc ,videoUrl:videoUrl},
        {id:51 , title: 'Sample video title 5' , description:"This is a short description of the video 5",image:imageSrc, videoUrl:videoUrl},
        {id:61  , title: 'Sample video title 6' , description:"This is a short description of the video 6", image:imageSrc ,videoUrl:videoUrl},
        {id:71 , title: 'Sample video title 7' , description:"This is a short description of the video 7",image:imageSrc, videoUrl:videoUrl},
        {id:81  , title: 'Sample video title 8' , description:"This is a short description of the video 8", image:imageSrc ,videoUrl:videoUrl},
        {id:91 , title: 'Sample video title 9' , description:"This is a short description of the video 9", image:imageSrc ,videoUrl:videoUrl},
        {id:101  , title: 'Sample video title 10' , description:"This is a short description of the video 10", image:imageSrc ,videoUrl:videoUrl},
      ],
      'technology':[
        {id:12 , title: 'Sample video title' , description:"This is a short description of the video",image:imageSrc, videoUrl:videoUrl},
        {id:22  , title: 'Sample video title 2' , description:"This is a short description of the video 2", image:imageSrc ,videoUrl:videoUrl},
        {id:32 , title: 'Sample video title 3' , description:"This is a short description of the video 3",image:imageSrc, videoUrl:videoUrl},
        {id:42  , title: 'Sample video title 4' , description:"This is a short description of the video 4", image:imageSrc ,videoUrl:videoUrl},
        {id:52 , title: 'Sample video title 5' , description:"This is a short description of the video 5",image:imageSrc, videoUrl:videoUrl},
        {id:62  , title: 'Sample video title 6' , description:"This is a short description of the video 6", image:imageSrc ,videoUrl:videoUrl},
        {id:72 , title: 'Sample video title 7' , description:"This is a short description of the video 7",image:imageSrc, videoUrl:videoUrl},
        {id:82 , title: 'Sample video title 8' , description:"This is a short description of the video 8", image:imageSrc ,videoUrl:videoUrl},
        {id:92 , title: 'Sample video title 9' , description:"This is a short description of the video 9", image:imageSrc ,videoUrl:videoUrl},
        {id:102  , title: 'Sample video title 10' , description:"This is a short description of the video 10", image:imageSrc ,videoUrl:videoUrl},
      ],
      'music':[
        {id:13 , title: 'Sample video title' , description:"This is a short description of the video",image:imageSrc, videoUrl:videoUrl},
        {id:23  , title: 'Sample video title 2' , description:"This is a short description of the video 2", image:imageSrc ,videoUrl:videoUrl},
        {id:33 , title: 'Sample video title 3' , description:"This is a short description of the video 3",image:imageSrc, videoUrl:videoUrl},
        {id:43  , title: 'Sample video title 4' , description:"This is a short description of the video 4", image:imageSrc ,videoUrl:videoUrl},
        {id:53 , title: 'Sample video title 5' , description:"This is a short description of the video 5",image:imageSrc, videoUrl:videoUrl},
        {id:63  , title: 'Sample video title 6' , description:"This is a short description of the video 6", image:imageSrc ,videoUrl:videoUrl},
        {id:73 , title: 'Sample video title 7' , description:"This is a short description of the video 7",image:imageSrc, videoUrl:videoUrl},
        {id:83  , title: 'Sample video title 8' , description:"This is a short description of the video 8", image:imageSrc ,videoUrl:videoUrl},
        {id: 93 , title: 'Sample video title 9' , description:"This is a short description of the video 9", image:imageSrc ,videoUrl:videoUrl},
        {id:103  , title: 'Sample video title 10' , description:"This is a short description of the video 10", image:imageSrc ,videoUrl:videoUrl},
      ],
      'science':[
        {id:14 , title: 'Sample video title' , description:"This is a short description of the video",image:imageSrc, videoUrl:videoUrl},
        {id:24 , title: 'Sample video title 2' , description:"This is a short description of the video 2", image:imageSrc ,videoUrl:videoUrl},
        {id:34 , title: 'Sample video title 3' , description:"This is a short description of the video 3",image:imageSrc, videoUrl:videoUrl},
        {id:44  , title: 'Sample video title 4' , description:"This is a short description of the video 4", image:imageSrc ,videoUrl:videoUrl},
        {id:54 , title: 'Sample video title 5' , description:"This is a short description of the video 5",image:imageSrc, videoUrl:videoUrl},
        {id:64  , title: 'Sample video title 6' , description:"This is a short description of the video 6", image:imageSrc ,videoUrl:videoUrl},
        {id:74 , title: 'Sample video title 7' , description:"This is a short description of the video 7",image:imageSrc, videoUrl:videoUrl},
        {id:84  , title: 'Sample video title 8' , description:"This is a short description of the video 8", image:imageSrc ,videoUrl:videoUrl},
        {id:94 , title: 'Sample video title 9' , description:"This is a short description of the video 9", image:imageSrc ,videoUrl:videoUrl},
        {id:104  , title: 'Sample video title 10' , description:"This is a short description of the video 10", image:imageSrc ,videoUrl:videoUrl},
      ],
      'art':[
        {id:15 , title: 'Sample video title' , description:"This is a short description of the video",image:imageSrc, videoUrl:videoUrl},
        {id:25 , title: 'Sample video title 2' , description:"This is a short description of the video 2", image:imageSrc ,videoUrl:videoUrl},
        {id:35 , title: 'Sample video title 3' , description:"This is a short description of the video 3",image:imageSrc, videoUrl:videoUrl},
        {id:45  , title: 'Sample video title 4' , description:"This is a short description of the video 4", image:imageSrc ,videoUrl:videoUrl},
        {id:55 , title: 'Sample video title 5' , description:"This is a short description of the video 5",image:imageSrc, videoUrl:videoUrl},
        {id:65  , title: 'Sample video title 6' , description:"This is a short description of the video 6", image:imageSrc ,videoUrl:videoUrl},
        {id:75 , title: 'Sample video title 7' , description:"This is a short description of the video 7",image:imageSrc, videoUrl:videoUrl},
        {id:85  , title: 'Sample video title 8' , description:"This is a short description of the video 8", image:imageSrc ,videoUrl:videoUrl},
        {id:95 , title: 'Sample video title 9' , description:"This is a short description of the video 9", image:imageSrc ,videoUrl:videoUrl},
        {id:105  , title: 'Sample video title 10' , description:"This is a short description of the video 10", image:imageSrc ,videoUrl:videoUrl},
      ],
      'business':[
        {id:16 , title: 'Sample video title' , description:"This is a short description of the video",image:imageSrc, videoUrl:videoUrl},
        {id:26 , title: 'Sample video title 2' , description:"This is a short description of the video 2", image:imageSrc ,videoUrl:videoUrl},
        {id:36 , title: 'Sample video title 3' , description:"This is a short description of the video 3",image:imageSrc, videoUrl:videoUrl},
        {id:46  , title: 'Sample video title 4' , description:"This is a short description of the video 4", image:imageSrc ,videoUrl:videoUrl},
        {id:56 , title: 'Sample video title 5' , description:"This is a short description of the video 5",image:imageSrc, videoUrl:videoUrl},
        {id:66  , title: 'Sample video title 6' , description:"This is a short description of the video 6", image:imageSrc ,videoUrl:videoUrl},
        {id:76 , title: 'Sample video title 7' , description:"This is a short description of the video 7",image:imageSrc, videoUrl:videoUrl},
        {id:86  , title: 'Sample video title 8' , description:"This is a short description of the video 8", image:imageSrc ,videoUrl:videoUrl},
        {id:96 , title: 'Sample video title 9' , description:"This is a short description of the video 9", image:imageSrc ,videoUrl:videoUrl},
        {id:106  , title: 'Sample video title 10' , description:"This is a short description of the video 10", image:imageSrc ,videoUrl:videoUrl},
      ],
      'politics':[
        {id:17 , title: 'Sample video title' , description:"This is a short description of the video",image:imageSrc, videoUrl:videoUrl},
        {id:27 , title: 'Sample video title 2' , description:"This is a short description of the video 2", image:imageSrc ,videoUrl:videoUrl},
        {id:37 , title: 'Sample video title 3' , description:"This is a short description of the video 3",image:imageSrc, videoUrl:videoUrl},
        {id:47  , title: 'Sample video title 4' , description:"This is a short description of the video 4", image:imageSrc ,videoUrl:videoUrl},
        {id:57 , title: 'Sample video title 5' , description:"This is a short description of the video 5",image:imageSrc, videoUrl:videoUrl},
        {id:67  , title: 'Sample video title 6' , description:"This is a short description of the video 6", image:imageSrc ,videoUrl:videoUrl},
        {id:77 , title: 'Sample video title 7' , description:"This is a short description of the video 7",image:imageSrc, videoUrl:videoUrl},
        {id:87  , title: 'Sample video title 8' , description:"This is a short description of the video 8", image:imageSrc ,videoUrl:videoUrl},
        {id:97 , title: 'Sample video title 9' , description:"This is a short description of the video 9", image:imageSrc ,videoUrl:videoUrl},
        {id:107  , title: 'Sample video title 10' , description:"This is a short description of the video 10", image:imageSrc ,videoUrl:videoUrl},
      ],
      'education':[
        {id:18 , title: 'Sample video title' , description:"This is a short description of the video",image:imageSrc, videoUrl:videoUrl},
        {id:28 , title: 'Sample video title 2' , description:"This is a short description of the video 2", image:imageSrc ,videoUrl:videoUrl},
        {id:38 , title: 'Sample video title 3' , description:"This is a short description of the video 3",image:imageSrc, videoUrl:videoUrl},
        {id:48  , title: 'Sample video title 4' , description:"This is a short description of the video 4", image:imageSrc ,videoUrl:videoUrl},
        {id:58 , title: 'Sample video title 5' , description:"This is a short description of the video 5",image:imageSrc, videoUrl:videoUrl},
        {id:68  , title: 'Sample video title 6' , description:"This is a short description of the video 6", image:imageSrc ,videoUrl:videoUrl},
        {id:78 , title: 'Sample video title 7' , description:"This is a short description of the video 7",image:imageSrc, videoUrl:videoUrl},
        {id:88  , title: 'Sample video title 8' , description:"This is a short description of the video 8", image:imageSrc ,videoUrl:videoUrl},
        {id:98 , title: 'Sample video title 9' , description:"This is a short description of the video 9", image:imageSrc ,videoUrl:videoUrl},
        {id:108  , title: 'Sample video title 10' , description:"This is a short description of the video 10", image:imageSrc ,videoUrl:videoUrl},
      ],
      'nature':[
        {id:19 , title: 'Sample video title' , description:"This is a short description of the video",image:imageSrc, videoUrl:videoUrl},
        {id:29 , title: 'Sample video title 2' , description:"This is a short description of the video 2", image:imageSrc ,videoUrl:videoUrl},
        {id:39 , title: 'Sample video title 3' , description:"This is a short description of the video 3",image:imageSrc, videoUrl:videoUrl},
        {id:49  , title: 'Sample video title 4' , description:"This is a short description of the video 4", image:imageSrc ,videoUrl:videoUrl},
        {id:59 , title: 'Sample video title 5' , description:"This is a short description of the video 5",image:imageSrc, videoUrl:videoUrl},
        {id:69  , title: 'Sample video title 6' , description:"This is a short description of the video 6", image:imageSrc ,videoUrl:videoUrl},
        {id:79 , title: 'Sample video title 7' , description:"This is a short description of the video 7",image:imageSrc, videoUrl:videoUrl},
        {id:89  , title: 'Sample video title 8' , description:"This is a short description of the video 8", image:imageSrc ,videoUrl:videoUrl},
        {id:99 , title: 'Sample video title 9' , description:"This is a short description of the video 9", image:imageSrc ,videoUrl:videoUrl},
        {id:109  , title: 'Sample video title 10' , description:"This is a short description of the video 10", image:imageSrc ,videoUrl:videoUrl},
      ],


  }


}

export const fetchCategories =() =>{

    return mockDatabase['categoryList']

}

export const fetchCategoryData =(category) =>{

    return mockDatabase.categoryData[category]

}
