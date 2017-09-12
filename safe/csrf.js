
/**
 * Created by xiaobxia on 2017/9/12.
 */
//TODO 跨站请求伪造
//用户登录了A站，B站中有连接利用了用户在A站中的session发起请求
//解决方案，需要用post的地方不要用get代替，后端渲染时给表单添加token
