import React, { Component } from 'react'
import { connect } from "react-redux";
import {IP} from "../../../api/Api"

 class history extends Component {
    render() {
        return (
            <div style={{width:'100%',height:'100%'}}>
                {
                     this.props.addHistory.map(obj => {
                        // console.log(obj.imgs);
                        return <div className="guessLike" key={obj.id}>
                          <div className="tileLeft">
            
                            <img src={IP + obj.imgs} />
                            <div className="sTitle">
                              <h3>{obj.name}</h3>
                              <p><span style={{ margin: '0 10px 0 0' }}>{obj.area}</span><span>{obj.range}</span></p>
                              <p><span style={{ margin: '0 10px 0 0' }}>{obj.type}</span><span>{obj.point}平</span></p>
            
            
                            </div>
                          </div>
            
                          <p style={{ color: 'red' }}>{obj.price}/平</p>
                        </div>
            
                      })
                }
            </div>
        )
    }
}
export default connect(state=>{
    return{
        addHistory:state.addHistory
    } 
})(history)
