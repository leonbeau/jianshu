import React,{ Component} from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import * as actionCreators from '../../store/actionCreators';
import axios from 'axios';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,   
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,

} from './style';
import iconfont from '../../static/iconfont/iconfont.css';
import { parse } from '@babel/parser';
import { fromJS } from 'immutable';
class Header extends Component{
   
    
    getListArea(){
        if(this.props.focused){
           
            let arr = {
                "success":true,
                "data":["区块链", "小程序", "vue", "毕业", "PHP", "故事", "flutter", "理财", "美食", "投稿", "手帐", "书法", "PPT", "穿搭", "打碗碗花"]
            }
          

            return (
                <SearchInfo>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch>换一批</SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                      
                    {
                        arr.data.map((item)=>(
                            <SearchInfoItem>{item}</SearchInfoItem>
                        ))
                    } 
                   
                </SearchInfoList>
            </SearchInfo>
       
            )
        }else{
            return null;
        }
    }
  
    render(){
        return (
            <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <NavItem className="right">登录</NavItem>
                <NavItem className="right">
                 <span className="iconfont">&#xe636;</span>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={this.props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                    
                        <NavSearch
                            className={this.props.focused ? 'focused':''}
                            onFocus={this.props.handleInputFocus}
                            onBlur={this.props.handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <span className={this.props.focused ? 'focused iconfont':'iconfont'}>&#xe62a;</span>
                    {this.getListArea()}
                 </SearchWrapper>
               
            </Nav>
            <Addition>
                <Button className="writting">
                    <span className="iconfont">&#xe615; </span>
                    写文章
                </Button>
                <Button className="reg">注册</Button>
            </Addition>
        </HeaderWrapper>
        )
    }
}


const mapStateToProps = (state) => {

    console.log('A'+JSON.stringify(state))
    return {
        focused:state
    };
}

const mapDispathToProps = (dispatch)=>{
    return{
       handleInputFocus(){
        // dispatch(actionCreators.getList())
        dispatch(actionCreators.searchFocus());
       },
       handleInputBlur(){
            dispatch(actionCreators.searchBlur());
       }
    }
}

export default connect(mapStateToProps,mapDispathToProps)(Header);