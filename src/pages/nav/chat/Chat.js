import React, { Component } from 'react'
import { Button,Flex } from 'antd-mobile'

export default class chat extends Component {
    render() {
        return (
            <div>
                <Flex>
                   <div>
                <img src={require('../../../assets/images/login.png')} style={{width:"100px",height:'120px'}}/>
                <p><span>置业顾问</span><span>张小妹</span></p> 
                <p>专业服务诚信做人诚心做事</p>
                
              </div> 
                </Flex>
              
            </div>
        )
    }
}
