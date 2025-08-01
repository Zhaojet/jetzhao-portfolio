import { get, post, put, del } from "@/utils/request";

/**
 * 用户相关接口
 */
export const userApi = {
  // 用户登录
  login: (data) => post("/api/user/login", data),
  
  // 获取用户信息
  getUserInfo: () => get("/api/user/info"),
  
  // 用户登出
  logout: () => post("/api/user/logout"),
  
  // 用户注册
  register: (data) => post("/api/user/register", data),
};

/**
 * 文章相关接口
 */
export const articleApi = {
  // 获取文章列表
  getList: (params) => get("/api/articles", params),
  
  // 获取文章详情
  getDetail: (id) => get(`/api/articles/${id}`),
  
  // 创建文章
  create: (data) => post("/api/articles", data),
  
  // 更新文章
  update: (id, data) => put(`/api/articles/${id}`, data),
  
  // 删除文章
  delete: (id) => del(`/api/articles/${id}`),
};

/**
 * 示例：商品相关接口
 */
export const productApi = {
  // 获取商品列表
  getList: (params) => get("/api/products", params),
  
  // 获取商品详情
  getDetail: (id) => get(`/api/products/${id}`),
  
  // 创建商品
  create: (data) => post("/api/products", data),
  
  // 更新商品
  update: (id, data) => put(`/api/products/${id}`, data),
  
  // 删除商品
  delete: (id) => del(`/api/products/${id}`),
};

// 可以根据需要添加更多API模块
