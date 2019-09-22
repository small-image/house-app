import { createStore,combineReducers } from "redux";
// 测试转台记录的函数
function test(state="张三",action){
switch(action.type){
    default:return state
    }
}
// 添加历史记录的状态函数
function addHistory(state=[],action){

    switch(action.type){
        case "addlike":
        // for(let i;i<state.length;i++){
        //     if(state[i].name==action.obj.name){
        //         state.splice(i,1)
        //     }
        //     break;
        // }
       
        return [action.obj,...state.filter(obj=>obj.name !=action.obj.name) ]

        default:return state
    }
}
// 暴露出去的函数
export default createStore(combineReducers({
    test,
    addHistory
}))
