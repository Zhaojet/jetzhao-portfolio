import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { ElMessage } from 'element-plus'

export default {
  install: (app) => {
    app.use(ElementPlus, {
      locale: zhCn,
      size: 'default'
    })
    
    // 全局挂载 $message 方法
    app.config.globalProperties.$message = ElMessage
    
    // 也可以单独挂载其他组件
    // app.config.globalProperties.$notify = ElNotification
    // app.config.globalProperties.$msgbox = ElMessageBox
  }
}

// 导出常用组件，方便直接引用
export { ElMessage }