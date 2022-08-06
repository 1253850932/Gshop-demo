// 使用mockJs提供mocj接口
import Mock from 'mockjs'
import data from './data.json'

// 返回goods的接口
Mock.mock('/api/goods',{code:0,data:data.goods})
// 返回ratings的接口
Mock.mock('/api/ratings',{code:0,data:data.ratings})

// 返回info的接口
Mock.mock('/api/info',{code:0,data:data.info})
// export default ??? 不需要向外暴露任何数据，只需要保证执行一次