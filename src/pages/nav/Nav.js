import React, { Component } from 'react'
import {TabBar} from 'antd-mobile';
import './Nav.css'
import Chat from "./chat/Chat";
import History from "./history/History";
import Main from "./main/Main";
import My from "./my/My";
export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            selectedTab: 'main',
            fullScreen:true,
            list:[
                {title:'首页',key:'main',icon:'/main.png',selected:'/main-s.png'},
                {title:'微聊',key:'chat',icon:'/chat.png',selected:'/chat-s.png'},
                {title:'足迹',key:'history',icon:'/root.png',selected:'/root-s.png'},
                {title:'我的',key:'my',icon:'/my.png',selected:'/my-s.png'}
        ]
          
        }
    }
  
    renderContent() {
switch(this.state.selectedTab){
    case 'main': return <Main h={this.props.history}/>
    case 'chat':return <Chat/>
    case  'history':return <History/>
    case 'my':return <My h={this.props.history}/>}
    }
  
    render() {
      return (
        <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#00BC5B"
            barTintColor="white"
          >
           {
               this.state.list.map(obj=>{
               return <TabBar.Item
                title={obj.title}
                key={obj.key}
                icon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${require('../../assets/images'+obj.icon)}) center center /  21px 21px no-repeat `}}
                />
                }
                selectedIcon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${require('../../assets/images'+obj.selected)}) center center /  21px 21px no-repeat `}}
                />
                }
                selected={this.state.selectedTab === obj.key}
              //   badge={1}
                onPress={() => {
                  this.setState({
                    selectedTab: obj.key,
                  });
                }}
              >
                {this.renderContent()}
              
              
              </TabBar.Item>
               })
           }
          </TabBar>



         

        </div>
      );
    }
  }
