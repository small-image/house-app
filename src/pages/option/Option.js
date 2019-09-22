import React, { Component } from 'react'
import cityList from '../../json/city.json'
import BScroll from 'better-scroll'

export default class Option extends Component {
    render() {
        return (
            <div style={{height:'100%',paddingRight:'30px'}} id='cityContent'>
              <ul className='content'>

              <div style={{height:'100%',overflow:'scroll'}}>
               <h2 style={{background:"#eee",borderBottom:'1px solid #000',margin:0,lineHeight:"80px"}}>热门城市</h2>
                  {
                      cityList.hotCity.map(obj=>{
                          return <div key={obj}>
                              <p  style={{fontSize:'20px',background:"#eee",borderBottom:'1px solid #000',margin:0,lineHeight:"60px"}}>{obj}</p>
                          </div>
                      })
                  }
                  {
                      cityList.citys.map(obj=>{
                          return <div id={obj.title} key={obj.title}>
                              <h2  style={{background:"#eee",borderBottom:'1px solid #000',margin:0,lineHeight:"80px"}}>{obj.title}</h2>
                              {
                                  obj.child.map(cityName=>{
                                      return <p style={{fontSize:'20px',background:"#eee",borderBottom:'1px solid #000',margin:0,lineHeight:"60px"}} key={cityName}>{cityName}</p>
                                  })
                              }
                          </div>
                      })
                  }
                </div>
              </ul>
                <div style={{width:'20px',height:'200px',position:'fixed',
            right:0,top:"200px"}}>
                    {
                        cityList.citys.map(obj=>{
                            // console.log(obj)
                            return <p onClick={this.clicktitle.bind(this,obj.title)} key={obj.title}>{obj.title}</p>
                        }) 
                    }
                  
                    </div> 

            </div>
        )
    }
    componentDidMount(){
        this. myScroll=new BScroll('#cityContent',{
            click: true
        })
    }
    clicktitle(val){
        // console.log(111)
        this. myScroll.scrollToElement('#'+val,300)
    }
}
