import React, { Component } from 'react'
// import { Link } from "react-router-dom";
import { List } from "antd-mobile";
import "./my.css";
const Item = List.Item;
export default class my extends Component {
    constructor() {
        super()
        this.state = {
            // 标题的数组
            list: [
                { imgs: '/house.png', title: '钱包' },
                { imgs: '/discounts.png', title: '优惠' },
                { imgs: '/score-w.png', title: '积分' }
            ],
         
            listDetail: [
                { icon: '/score.png', title: '我的积分' },
                { icon: '/read.png', title: '我的订阅' },
                {},
                { icon: '/linkman.png', title: '微聊联系人' },
                { icon: '/math.png', title: '房屋计算器' },
                { icon: '/star.png', title: '我的房子' },
                {},
                { icon: '/record.png', title: '我的看房记录' },
                { icon: '/my-s1.png', title: '我的问答' },
                { icon: '/set.png', title: '设置' },
                // {  title: '意见反馈' }
            ],
            msg:''
        }
    }
    render() {
        return (
            <div>

                <div className='top'>
                    <div className="headerTop">
                        <div className='topImg'>
                            <img src={require('../../../assets/images/login.png')} />
                            <div className='topChat'>
                                    <h2 style={{ color: "#fff" }} onClick={this.jump.bind(this, '/login')}>{this.state.msg}</h2>
                                <p style={{ color: "#fff" }}>可以与经纪人发起聊天</p>
                            </div>
                        </div>

                        <p><img src={require('../../../assets/images/设置.png')} style={{ width: '30px', height: '30px' }} /> </p>
                    </div>
                    <div className='topdetail'>

                        {
                            this.state.list.map(obj => {
                                return <div style={{
                                    flex: 1,
                                    display: "flex",
                                    flexDirection: 'column',
                                    alignItems: "center", borderRight: '2px solid #fff', paddingRight: '30px'
                                }} key={obj.title}>
                                    <p style={{ fontSize: '20px', color: '#fff' }}>0</p>
                                    <div style={{ display: 'flex', justifyContent: "spaceetween" }}><img style={{ width: '30px', height: '30px' }} src={require("../../../assets/images" + obj.imgs)} /> <span style={{ fontSize: '20px', margin: '5px 0 0 10px', color: '#fff' }}>{obj.title}</span></div>
                                </div>

                            })
                        }


                    </div>
                </div>
                <div >


                    {
                        this.state.listDetail.map(obj => {
                           if(obj.icon){
                            return <List className="my-list" key={obj.title}>
                            <Item extra={'>'}>
                                <img src={require('../../../assets/images' + obj.icon)} alt="123" style={{ marginRight: '10px' }} />
                                <span>{obj.title}</span>
                            </Item>
                        </List>
                           }else{
                               return <div style={{height:'10px',background:'#eee'}}></div>
                           }
                        })
                    }
                </div>
            </div>
        )
    }
    componentDidMount(){
      
      let val=localStorage.getItem("userName")
      this.setState({msg:val?val:'登录/注册'})
    }



    jump(val) {
        if(!localStorage.getItem("userName")){
           this.props.h.push(val) 
        }
        
    }
}
