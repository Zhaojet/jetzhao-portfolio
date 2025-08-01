<template>
    <div class="api-demo">
        <h2>API调用示例</h2>

        <div class="demo-section">
            <h3>用户登录</h3>
            <div class="form-group">
                <label>用户名：</label>
                <input v-model="loginForm.username" placeholder="请输入用户名" />
            </div>
            <div class="form-group">
                <label>密码：</label>
                <input v-model="loginForm.password" type="password" placeholder="请输入密码" />
            </div>
            <button @click="handleLogin" :disabled="loading.login">
                {{ loading.login ? '登录中...' : '登录' }}
            </button>
        </div>

        <div class="demo-section">
            <h3>获取文章列表</h3>
            <button @click="fetchArticles" :disabled="loading.articles">
                {{ loading.articles ? '加载中...' : '获取文章' }}
            </button>
            <div v-if="articles.length" class="result-box">
                <h4>文章列表：</h4>
                <ul>
                    <li v-for="(article, index) in articles" :key="index">
                        {{ article.title }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { userApi, articleApi } from '@/api/index'

// 登录表单
const loginForm = reactive({
  username: '',
  password: ''
})

// 文章列表
const articles = ref([])

// 加载状态
const loading = reactive({
  login: false,
  articles: false
})

// 错误信息
const error = ref('')

// 处理登录
const handleLogin = async () => {
  if (!loginForm.username || !loginForm.password) {
    alert('请输入用户名和密码')
    return
  }

  loading.login = true
  try {
    const res = await userApi.login(loginForm)
    console.log('登录成功', res)
    alert('登录成功')
    // 登录成功后可以获取用户信息
    getUserInfo()
  } catch (err) {
    console.error('登录失败', err)
    error.value = err.message || '登录失败'
    alert(`登录失败: ${error.value}`)
  } finally {
    loading.login = false
  }
}

// 获取用户信息
const getUserInfo = async () => {
  try {
    const res = await userApi.getUserInfo()
    console.log('用户信息', res)
  } catch (err) {
    console.error('获取用户信息失败', err)
  }
}

// 获取文章列表
const fetchArticles = async () => {
  loading.articles = true
  try {
    // 这里可以传入分页参数
    const params = {
      page: 1,
      pageSize: 10
    }
    const res = await articleApi.getList(params)
    console.log('文章列表', res)
    articles.value = res.data || []
    if (articles.value.length === 0) {
      alert('暂无文章数据')
    }
  } catch (err) {
    console.error('获取文章列表失败', err)
    error.value = err.message || '获取文章列表失败'
    alert(`获取文章列表失败: ${error.value}`)
  } finally {
    loading.articles = false
  }
}
</script>

<style scoped>
.api-demo {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
}

h2 {
    color: #333;
    text-align: center;
    margin-bottom: 30px;
}

.demo-section {
    background-color: #f5f5f5;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h3 {
    margin-top: 0;
    color: #2c3e50;
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
}

button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #3aa876;
}

button:disabled {
    background-color: #a8d5c3;
    cursor: not-allowed;
}

.result-box {
    margin-top: 20px;
    background-color: white;
    border-radius: 4px;
    padding: 15px;
    border: 1px solid #ddd;
}

h4 {
    margin-top: 0;
    color: #2c3e50;
}

ul {
    padding-left: 20px;
}

li {
    margin-bottom: 5px;
}
</style>