import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper,TopicItem } from '../style'
class Topic extends Component{
    render(){
        return (
            <TopicWrapper>
                <TopicItem>
                    <img   
                    className="topic-pic"
                    src="https://upload-images.jianshu.io/upload_images/18551747-92d5e7fcdb96c615.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"></img>
                    社会热点
                </TopicItem>
            </TopicWrapper>
        )
    }
}
const mapState = (state) => ({
    
});

export default connect(mapState,null)(Topic);