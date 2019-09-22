import React, { Component } from 'react'
import { WingBlank, Flex, InputItem, WhiteSpace, Button } from "antd-mobile";
import "./login.css";
import { Link } from "react-router-dom";
import {clickLogin } from "../../api/Api";
export default class login extends Component {
    constructor(){
        super();
        this.state={
            acc:'',
            pwd:'',
            oldAcc:'',
            oldPwd:'',
            show:'none'
        }
    }
    render() {
        return (
            <div>
                <Flex justify='center'>
                    <img className='logo' src={require('../../assets/images/log.jpg')} />
                </Flex>
                <WhiteSpace size='xl' />
                <WhiteSpace size='xl' />
                <WhiteSpace size='xl' />
                <WingBlank size='lg'>
                    <InputItem
                        value={this.state.acc}
                        clear
                        placeholder="请输入用户名"
                        onChange={(val)=>{ this.setState({acc:val})}}
                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/images/user.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <WhiteSpace size='md' />

                    <InputItem
                     value={this.state.pwd}
                        clear
                        type='password'
                        placeholder="请输入密码"
                        onChange={(val)=>{ this.setState({pwd:val})}}

                    >
                        <div style={{ backgroundImage: `url(${require('../../assets/images/pwd.png')})`, backgroundSize: 'cover', height: '22px', width: '22px',display:'flex' }} />
                    </InputItem>
                    <WhiteSpace size='md' />
                    <p style={{display:this.state.show,color:'red'}}>请输入正确的账号和密码</p>
                    <Button style={{ color: '#fff', backgroundColor: '#00BC5B' }} activeStyle={{ backgroundColor: '#eee' }} onClick={this.Login.bind(this)}>登录</Button>
                    <WhiteSpace size='md' />

                    <Flex justify='between'>
                    <Link to='/register'><span style={{color:'#00BC5B'}}>手机快熟注册</span></Link>
                    <Link to='/register'><span style={{color:'#00BC5B'}}>忘记密码</span></Link>
                    </Flex>
                   
                </WingBlank>
                <div style={{fontSize:"20px",color:'#ccc' ,width:'200px',margin:'0 auto',paddingTop:'50px'}}>登录注册及代表同意</div>
            </div>
        )
    }
    Login(){
        let {oldAcc,oldPwd,acc,pwd}=this.state
        if(oldAcc===acc&oldPwd===pwd){
            return;
        } else{
            clickLogin({acc,pwd}).then(msg=>{
                // console.log(msg.data)
                if(msg.data==="ok"){
                    localStorage.setItem('userName',acc)
                    this.props.history.push('/')
                }else{
                    this.setState({
                        show:'block'
                    })
                }
            })
        }
    }

}
