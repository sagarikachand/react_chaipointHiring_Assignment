
import React from 'react';
import  Layout  from './HOC/Layout'
import { Route ,Switch ,Redirect} from 'react-router-dom'
import  Home from './components/Home'
import VideoListComponent from './containers/Video/VideoList'

const App=() => {

    return (
      <Layout>
         <Switch>
          <Route path='/videoList/:category' component={VideoListComponent} />
          <Route path='/' component={Home} />
          <Redirect to="/"/>
        </Switch>
      </Layout>
    )
}

export default App;
