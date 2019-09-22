import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { InputItem, Checkbox, Button, WingBlank, WhiteSpace } from 'antd-mobile';
import { setRegister, getCode } from "../../api/Api";
const AgreeItem = Checkbox.AgreeItem;
export default class register extends Component {
    constructor() {
        super();
        this.state = {
            phone: '',
            pwd: '',
            oldPhone: '',
            oldPwd: '',
            verify: '',
            show: 'none'

        }
    }
    render() {
        return (
            <div>

                <WingBlank size='xl'>
                    <WhiteSpace size='lg' />
                    <InputItem
                        value={this.state.phone}
                        clear
                        type='phone'
                        placeholder="请输入手机号"
                        onChange={(val) => { this.setState({ phone: val }) }}
                        onBlur={this.noviod.bind(this)}
                    ></InputItem>
                    <WhiteSpace size='lg' />

                    <InputItem
                        value={this.state.pwd}
                        clear
                        type='password'
                        placeholder="请输入密码"
                        onChange={(val) => { this.setState({ pwd: val }) }}

                    ></InputItem>
                    <WhiteSpace size='lg' />

                    <InputItem
                        value={this.state.verify}
                        clear
                        extra='验证码'
                        placeholder="请输入验证码"
                        onChange={(val) => { this.setState({ verify: this.state.verify }) }}
                        onExtraClick={this.clickCode.bind(this)}
                    ></InputItem>
                    <WhiteSpace size='lg' />

                    <AgreeItem >
                        我也阅读
            <Link to="/"><span style={{ color: "#00BC5B" }}>《用户服务协议》及</span></Link>
                        <Link to="/"><span style={{ color: "#00BC5B" }}>《隐私权政策》</span></Link>
                    </AgreeItem>
                    <WhiteSpace size='lg' />
                    <p style={{ display: this.state.show, color: 'red' }}>电话号码或密码输入有误，请重新输入</p>
                    <Button style={{ color: '#fff', backgroundColor: '#00BC5B' }} activeStyle={{ backgroundColor: '#eee' }} onClick={this.addName.bind(this)}>登录</Button>
                    <WhiteSpace size='lg' />

                    <Link to='/login' style={{ color: "#00BC5B" }}>已有账号</Link>
                </WingBlank>

            </div>
        )
    }
    clickCode() {

        getCode().then(msg => {
            if (msg.status === 200) {
                this.setState({
                    verify: msg.data
                })
            }
        })

    }
    noviod(val){
        let reg=/^1[3|4|5|8][0-9]{9}$/
        if(reg.test(val)){
           this.setState({
               phone:val
           }) 
        }else{
            // this.setState({
            //     show: 'block'
            // })
        }
            　
    }
    addName() {
 let _this=this;
        let { oldPhone, oldPwd, pwd, phone } = _this.state
        if (oldPhone === phone && oldPwd === pwd) {
            return;
        } else {
            if (_this.state.phone != '' & _this.state.pwd != '' & _this.state.verify != '') {


                _this.setState({
                    oldPhone: phone,
                    oldPwd: pwd

                })
                setRegister({ acc: phone, pwd: pwd }).then(msg => {
                    console.log(msg)
                    if (msg.status === 200) {
                        _this.props.history.push('/login')

                    } else {
                        _this.setState({
                            show: 'block'
                        })
                    }

                })


            }
        }




    }
}
