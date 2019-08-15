import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow:hidden
    width:960px;
    margin:0 auto;
   
`

export const HomeLeft = styled.div`
   margin-left:15px;
   padding-top:30px;
   width:625px;
   float:left;
   .banner-img{
       width:625px;
       height:270px;
   }
`

export const HomeRight = styled.div`
   width:240px;
   float:right;
`

export const TopicWrapper = styled.div`
    overflow:hidden;
    padding:20px 0 10px 0;
    // background:red;
    margin-left:-18px;
`

export const TopicItem = styled.div`
   float:left;
   background:#f7f7f7;
   height:32px;
   line-height:32px;
   padding-right:18px;
   font-size:14px;
   border:1px solid #dcdcdc;
   border-radius:4px;
   margin:0 0 18px 18px;
   margin-bottem:18px;
.topic-pic{
    display:block;
    float:left;
    width:32px;
    height:32px;
    margin-right:10px;
}
`