import React,{ Component } from 'react';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
} from './style';
import List from './components/List'
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writerr from './components/Writer';
class Home extends Component{
    render(){
        return (
            <HomeWrapper>
              <HomeLeft>
                 <img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/4686/b205842c3dd6736c233b052411fe1211f164fcaf.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img> 
                 <Topic />
                 <List />
              </HomeLeft>
              <HomeRight>
                  <Recommend />
                  <Writerr />
              </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;