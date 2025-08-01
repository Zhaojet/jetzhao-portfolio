import axios from "axios";
import { ElMessage } from "element-plus";

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // 从环境变量获取API基础URL
  timeout: 15000, // 请求超时时间
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    
    // 从localStorage获取token并设置到请求头
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    console.error("请求错误：", error);
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    
    // 根据自定义状态码判断请求是否成功
    if (res.code && res.code !== 200) {
      // 处理各种错误状态码
      switch (res.code) {
        case 401: // 未授权
          // 可以在这里处理登出逻辑
          // store.dispatch('user/logout')
          break;
        case 403: // 禁止访问
          // 处理权限不足的情况
          break;
        case 500: // 服务器错误
          // 处理服务器错误
          break;
        default:
          // 处理其他错误
      }
      
      // 显示错误消息
      ElMessage.error(res.message || "请求失败");
      console.error("响应错误：", res.message || "请求失败");
      
      return Promise.reject(new Error(res.message || "请求失败"));
    } else {
      // 请求成功，返回数据
      return res;
    }
  },
  (error) => {
    // 处理HTTP错误状态码
    if (error.response) {
      const { status } = error.response;
      let message = "";
      
      switch (status) {
        case 400:
          message = "请求错误";
          break;
        case 401:
          message = "未授权，请重新登录";
          // 可以在这里处理登出逻辑
          // store.dispatch('user/logout')
          break;
        case 403:
          message = "拒绝访问";
          break;
        case 404:
          message = "请求地址出错";
          break;
        case 408:
          message = "请求超时";
          break;
        case 500:
          message = "服务器内部错误";
          break;
        case 501:
          message = "服务未实现";
          break;
        case 502:
          message = "网关错误";
          break;
        case 503:
          message = "服务不可用";
          break;
        case 504:
          message = "网关超时";
          break;
        case 505:
          message = "HTTP版本不受支持";
          break;
        default:
          message = `未知错误(${status})`;
      }
      
      // 显示错误消息
      ElMessage.error(message);
      console.error("HTTP错误：", message);
    } else if (error.request) {
      // 请求已发出但未收到响应
      ElMessage.error('网络异常，请检查您的网络连接');
      console.error("网络异常，请检查您的网络连接");
    } else {
      // 请求配置出错
      ElMessage.error('请求配置错误');
      console.error("请求配置错误：", error.message);
    }
    
    return Promise.reject(error);
  }
);

/**
 * 封装GET请求
 * @param {string} url - 请求地址
 * @param {object} params - 请求参数
 * @param {object} config - 额外配置
 * @returns {Promise} - 返回Promise对象
 */
export function get(url, params = {}, config = {}) {
  return service.get(url, {
    params,
    ...config,
  });
}

/**
 * 封装POST请求
 * @param {string} url - 请求地址
 * @param {object} data - 请求数据
 * @param {object} config - 额外配置
 * @returns {Promise} - 返回Promise对象
 */
export function post(url, data = {}, config = {}) {
  return service.post(url, data, config);
}

/**
 * 封装PUT请求
 * @param {string} url - 请求地址
 * @param {object} data - 请求数据
 * @param {object} config - 额外配置
 * @returns {Promise} - 返回Promise对象
 */
export function put(url, data = {}, config = {}) {
  return service.put(url, data, config);
}

/**
 * 封装DELETE请求
 * @param {string} url - 请求地址
 * @param {object} params - 请求参数
 * @param {object} config - 额外配置
 * @returns {Promise} - 返回Promise对象
 */
export function del(url, params = {}, config = {}) {
  return service.delete(url, {
    params,
    ...config,
  });
}

/**
 * 封装上传文件请求
 * @param {string} url - 请求地址
 * @param {FormData} formData - 表单数据
 * @param {function} onUploadProgress - 上传进度回调
 * @returns {Promise} - 返回Promise对象
 */
export function upload(url, formData, onUploadProgress) {
  return service.post(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
}

/**
 * 封装下载文件请求
 * @param {string} url - 请求地址
 * @param {object} params - 请求参数
 * @param {string} filename - 文件名
 * @returns {Promise} - 返回Promise对象
 */
export function download(url, params = {}, filename) {
  return service
    .get(url, {
      params,
      responseType: "blob",
    })
    .then((response) => {
      // 创建blob链接并下载
      const blob = new Blob([response]);
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = filename || "下载文件";
      link.click();
      window.URL.revokeObjectURL(link.href);
    });
}

// 导出axios实例和封装的请求方法
export default service;
