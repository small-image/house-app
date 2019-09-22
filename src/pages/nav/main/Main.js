import React, { Component } from 'react'
import { Carousel, Grid } from "antd-mobile";
import { likeHouse, IP } from '../../../api/Api';
import './Main.css'
import { connect } from 'react-redux';


var iconList = [
  { icon: 'icon01.png', text: '新房' },
  { icon: 'icon02.png', text: '二手房' },
  { icon: 'icon03.png', text: '租房' },
  { icon: 'icon04.png', text: '商铺写字楼' },
  { icon: 'icon05.png', text: '卖房' },
  { icon: 'icon07.png', text: '海外房产' },
  { icon: 'icon06.png', text: '小区房价' },
  { icon: 'icon08.png', text: '问答' }
].map(obj => { return { icon: require("../../../assets/images/" + obj.icon), text: obj.text } })

class Main extends Component {
  constructor() {
    super();
    this.state = {
      data: ['1', '2', '3'],
      imgHeight: 176,
      iconList2: [
        { icon: 'icon11.png', text: '我要贷款' },
        { icon: 'icon12.png', text: '房屋计算' },
        { icon: 'icon13.png', text: '知识' },
        { icon: 'icon14.png', text: '扫一扫' }
      ].map(obj => { return { icon: require('../../../assets/images/' + obj.icon), text: obj.text } }),
      list: [],
      city: '定位中'
    }
  }

  componentDidMount() {
    // simulate img loading
    this.timer = setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);

    likeHouse().then(msg => {
      // console.log(msg)
      this.setState({
        list: msg.data
      })
    })


    let _this=this;
    var myMap = new window.AMap.Map("city", {
      resizeEnable: true,
      center: [116.397428, 39.90923],
      zoom: 13
  });
       
        //实例化城市查询类
        var citysearch = new window.AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        
        citysearch.getLocalCity(function(status, result) {
         
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    var citybounds = result.bounds;
                    _this.setState({
                      city:cityinfo
                    })
                    // document.getElementById('info').innerHTML = '您当前所在城市：'+cityinfo;


                    //地图显示当前城市
                    myMap.setBounds(citybounds);
                }
            } else {
                // document.getElementById('info').innerHTML = result.info;
            }
        });


  }
  componentWillUnmount() {
    clearTimeout(this.timer);
    // iconList = null;
  }
  render() {
    return (
      <div>
        <div className='topNav'>
          <p className='option' onClick={this.changeHash.bind(this, '/option')}>{this.state.city}∇</p>
          <div className='search' onClick={this.changeHash.bind(this, '/search')}>
            <img src={require('../../../assets/images/mirror.png')} style={{ height: '40px', width: '40px' }} />
            <span>挑好房，上源码房产app</span>
          </div>
          <img src={require('../../../assets/images/地图.png')} className='address' onClick={this.changeHash.bind(this, '/map')} />
        </div>
        <Carousel
          autoplay
          infinite
          style={{ height: this.state.imgHeight }}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        {/* 宫格一 */}
        <Grid data={iconList} activeStyle={false} hasLine={false} />
        {/* 宫格二 */}
        <div className='title'><h2 style={{ color: '#00BC5B' }}>房产百科</h2> <span style={{ margin: '26px 0 0 10px', color: '#ccc' }}>专业的买房攻略</span></div>
        <Grid data={this.state.iconList2} activeStyle={false} hasLine={false} />
        <h2 style={{ margin: '10px 0 0 0', padding: "0 0 0 30px", background: '#fff' }}>猜你喜欢</h2>



        {/* 猜你喜欢 */}
        {
          this.state.list.map(obj => {
            // console.log(obj.imgs);
            return <div className="guessLike" key={obj.id} onClick={this.clickLike.bind(this, obj)}>
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

        <div id="city" style={{ width: "100%", height: "200px" }}>

        </div>
      </div>
    )
  }
  changeHash(hash) {
    this.props.h.push(hash)
  }

  clickLike(obj) {
    this.props.dispatch({
      type: 'addlike',
      obj
    })
  }

}
export default connect()(Main)