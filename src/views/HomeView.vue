<template>
  <div class="portfolio-container">
    <!-- 导航栏 -->
    <header class="header" :class="{ 'header-scrolled': isScrolled }">
      <div class="container">
        <div class="logo">赵杰</div>
        <nav class="nav-menu">
          <ul>
            <li><a href="#home" class="active">首页</a></li>
            <li><a href="#about">关于我</a></li>
            <li><a href="#skills">技能</a></li>
            <li><a href="#experience">经验</a></li>
            <li><a href="#projects">项目</a></li>
            <li><a href="#contact">联系我</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- 首页英雄区 -->
    <section id="home" class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text" ref="heroText">
            <h1 class="glitch-text" data-text="赵杰">赵杰</h1>
            <h2 class="typing-text">前端开发工程师</h2>
            <p class="fade-in-text">4年前端开发经验，参与 30+ 个线上项目</p>
            <div class="hero-buttons">
              <a href="#projects" class="btn primary-btn">查看项目</a>
              <a href="#contact" class="btn secondary-btn">联系我</a>
            </div>
          </div>
          <div class="hero-image">
            <div class="tech-stack">
              <div class="tech-icon" v-for="(tech, index) in techStack" :key="index" :style="{ animationDelay: `${index * 0.2}s` }">
                {{ tech }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-down">
        <a href="#about">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
    </section>

    <!-- 关于我 -->
    <section id="about" class="about-section">
      <div class="container">
        <div class="section-title" ref="aboutTitle">
          <h2>关于我</h2>
          <div class="underline"></div>
        </div>
        <div class="about-content">
          <div class="about-text" ref="aboutText">
            <div class="about-card">
              <div class="about-info">
                <div class="info-item">
                  <span class="info-label">姓名:</span>
                  <span class="info-value">赵杰</span>
                </div>
                <div class="info-item">
                  <span class="info-label">年龄:</span>
                  <span class="info-value">28</span>
                </div>
                <div class="info-item">
                  <span class="info-label">职位:</span>
                  <span class="info-value">前端开发工程师</span>
                </div>
                <div class="info-item">
                  <span class="info-label">学历:</span>
                  <span class="info-value">启梦学院 网页设计专业</span>
                </div>
                <div class="info-item">
                  <span class="info-label">电话:</span>
                  <span class="info-value">18103586461</span>
                </div>
                <div class="info-item">
                  <span class="info-label">邮箱:</span>
                  <span class="info-value">648926412@qq.com</span>
                </div>
              </div>
              <p class="about-description">
                我是一名拥有4年经验的前端开发工程师，专注于创建高质量、用户友好的web应用程序。
                我擅长使用现代前端技术栈，包括Vue.js、React等框架，以及HTML5、CSS3和JavaScript等核心技术。
                我热爱解决复杂问题，并不断学习新技术来提升自己的技能。在过去的工作中，我参与了30+个项目的开发，
                涵盖企业级管理系统、移动应用、电商平台等多个领域，积累了丰富的实战经验。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 技能 -->
    <section id="skills" class="skills-section">
      <div class="container">
        <div class="section-title" ref="skillsTitle">
          <h2>专业技能</h2>
          <div class="underline"></div>
        </div>
        <div class="skills-content" ref="skillsContent">
          <div class="skill-category">
            <h3>核心技能</h3>
            <div class="skill-bars">
              <div class="skill-item" v-for="(skill, index) in coreSkills" :key="index">
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-percentage">{{ skill.percentage }}%</span>
                </div>
                <div class="skill-bar">
                  <div class="skill-progress" :style="{ width: `${skill.percentage}%`, animationDelay: `${index * 0.2}s` }"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="skill-category">
            <h3>框架 & 库</h3>
            <div class="skill-tags">
              <div class="skill-tag" v-for="(skill, index) in frameworkSkills" :key="index" :style="{ animationDelay: `${index * 0.1}s` }">
                {{ skill }}
              </div>
            </div>
          </div>

          <div class="skill-category">
            <h3>工具 & 其他</h3>
            <div class="skill-tags">
              <div class="skill-tag" v-for="(skill, index) in toolSkills" :key="index" :style="{ animationDelay: `${index * 0.1}s` }">
                {{ skill }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 工作经验 -->
    <section id="experience" class="experience-section">
      <div class="container">
        <div class="section-title" ref="experienceTitle">
          <h2>工作经历</h2>
          <div class="underline"></div>
        </div>
        <div class="timeline" ref="timeline">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-date">2021.12-至今</div>
              <h3>北京智安迪信息科技股份有限公司</h3>
              <h4>高级前端开发工程师</h4>
              <p>负责公司核心产品的前端架构设计与开发，带领3人前端团队完成多个大型项目。参与技术选型、代码审查、性能优化等工作，推动前端工程化建设。</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-date">2020.9-2021.11</div>
              <h3>山西龙辉科技有限公司</h3>
              <h4>前端开发工程师</h4>
              <p>负责公司产品的前端开发，独立完成多个中小型项目。深度参与产品需求分析、技术方案设计，积累了丰富的项目经验。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 项目经验 -->
    <section id="projects" class="projects-section">
      <div class="container">
        <div class="section-title" ref="projectsTitle">
          <h2>项目经验</h2>
          <div class="underline"></div>
        </div>
        <div class="projects-filter">
          <button class="filter-btn active" @click="filterProjects('all')">全部项目</button>
          <button class="filter-btn" @click="filterProjects('web')">Web应用</button>
          <button class="filter-btn" @click="filterProjects('app')">移动端</button>
          <button class="filter-btn" @click="filterProjects('enterprise')">企业级</button>
        </div>
        <div class="projects-grid" ref="projectsGrid">
          <!-- 远大医药集团管理系统 -->
          <div class="project-card" :class="{ 'show': currentFilter === 'all' || currentFilter === 'web' || currentFilter === 'enterprise' }">
            <div class="project-image">
              <div class="project-overlay">
                <div class="project-info">
                  <h3>远大医药集团智能安全管控平台</h3>
                  <p>2024.12-至今 · 核心开发</p>
                  <div class="project-tech">
                    <span>JEcloud</span>
                    <span>Vue3</span>
                    <span>TypeScript</span>
                    <span>Echarts</span>
                    <span>G6</span>
                    <span>Ant Design Vue</span>
                    <span>Cesium</span>
                    <span>WebSocket</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="project-details">
              <h3>远大医药集团智能安全管控平台</h3>
              <p>大型企业级安全生产管理系统，集成人员定位、环境监测、应急响应等多个子系统，服务5000+员工的安全管理。</p>
              <div class="project-highlights">
                <div class="highlight-item">
                  <i class="el-icon-check"></i>
                  <span>架构设计：基于微前端架构，搭建20+业务模块，代码复用率提升70%</span>
                </div>
                <div class="highlight-item">
                  <i class="el-icon-check"></i>
                  <span>3D可视化：使用Cesium+WebGL实现厂区3D建模，支持100+设备实时监控</span>
                </div>
                <div class="highlight-item">
                  <i class="el-icon-check"></i>
                  <span>数据分析：集成14类安全指标，日处理数据量10万+条，响应时间小于200ms</span>
                </div>
                <div class="highlight-item">
                  <i class="el-icon-check"></i>
                  <span>性能优化：通过虚拟滚动、懒加载等技术，页面加载速度提升60%</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 智慧园区综合管理平台 -->
          <div class="project-card" :class="{ 'show': currentFilter === 'all' || currentFilter === 'web' || currentFilter === 'enterprise' }">
            <div class="project-image">
              <div class="project-overlay">
                <div class="project-info">
                  <h3>智慧园区综合管理平台</h3>
                  <p>2024.3-2024.11 · 技术负责人</p>
                  <div class="project-tech">
                    <span>Vue3</span>
                    <span>Vite</span>
                    <span>Element Plus</span>
                    <span>Three.js</span>
                    <span>WebRTC</span>
                    <span>Node.js</span>
                    <span>MongoDB</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="project-details">
              <h3>智慧园区综合管理平台</h3>
              <p>面向产业园区的一站式管理平台，整合物业管理、访客系统、能耗监控等功能，覆盖园区200+企业。</p>
              <div class="project-highlights">
                <div class="highlight-item">
                  <i class="el-icon-check"></i>
                  <span>全栈开发：独立完成前后端开发，使用Node.js+MongoDB构建RESTful API</span>
                </div>
                <div class="highlight-item">
                  <i class="el-icon-check"></i>
                  <span>实时通信：基于WebSocket实现消息推送，支持1000+并发连接</span>
                </div>
                <div class="highlight-item">
                  <i class="el-icon-check"></i>
                  <span>3D展示：使用Three.js构建园区3D模型，实现沉浸式管理体验</span>
                </div>
                <div class="highlight-item">
                  <i class="el-icon-check"></i>
                  <span>移动适配：响应式设计，移动端访问占比达到45%</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 那台安全管控平台 -->
          <div class="project-card" :class="{ 'show': currentFilter === 'all' || currentFilter === 'app' }">
            <div class="project-image">
              <div class="project-overlay">
                <div class="project-info">
                  <h3>那台安全管控移动端</h3>
                  <p>2023.7-2024.5 · 前端负责人</p>
                  <div class="project-tech">
                    <span>uni-app</span>
                    <span>Vue2</span>
                    <span>uView</span>
                    <span>Canvas</span>
                    <span>PDF.js</span>
                    <span>SQLite</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="project-details">
              <h3>那台安全管控移动端</h3>
              <p>国家级安全管控平台的移动应用，实现现场巡检、应急处置、数据上报等核心功能，日活用户2000+。</p>
              <div class="project-highlights">
                <div class="highlight-item">
                  <i class="el-icon-check"></i>
                  <span>跨平台开发：使用uni-app实现一套代码多端运行，支持iOS/Android/H5</span>
                </div>
                <div class="highlight-item">
                  <i class="el-icon-check"></i>
                  <span>离线功能：集成SQLite本地存储，支持离线数据采集和同步</span>
                </div>
                <div class="highlight-item">
                  <i class="el-icon-check"></i>
                  <span>图纸标注：基于Canvas实现CAD图纸查看、缩放、标注功能</span>
                </div>
                <div class="highlight-item">
                  <i class="el-icon-check"></i>
                  <span>性能优化：通过代码分割、图片压缩等手段，APP体积减少40%</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 企业数字化办公平台 -->
          <div class="project-card" :class="{ 'show': currentFilter === 'all' || currentFilter === 'web' || currentFilter === 'enterprise' }">
            <div class="project-image">
              <div class="project-overlay">
                <div class="project-info">
                  <h3>企业数字化办公平台</h3>
                  <p>2023.1-2023.6 · 核心开发</p>
                  <div class="project-tech">
                    <span>React</span>
                    <span>TypeScript</span>
                    <span>Ant Design</span>
                    <span>Redux Toolkit</span>
                    <span>Webpack</span>
                    <span>Jest</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="project-details">
              <h3>企业数字化办公平台</h3>
              <p>面向中小企业的SaaS办公平台，集成OA、CRM、项目管理等功能，服务企业用户10000+。</p>
              <div class="project-highlights">
                <div class="highlight-item">
                  <i class="el-icon-check"></i>
                  <span>组件库开发：基于Ant Design封装30+业务组件，提升开发效率50%</span>
                </div>
                <div class="highlight-item">
                  <i class="el-icon-check"></i>
                  <span>状态管理：使用Redux Toolkit优化数据流，减少不必要渲染70%</span>
                </div>
                <div class="highlight-item">
                  <i class="el-icon-check"></i>
                  <span>单元测试：Jest测试覆盖率达到85%，保证代码质量</span>
                </div>
                <div class="highlight-item">
                  <i class="el-icon-check"></i>
                  <span>国际化：支持中英文切换，海外用户占比20%</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 电商小程序 -->
          <div class="project-card" :class="{ 'show': currentFilter === 'all' || currentFilter === 'app' }">
            <div class="project-image">
              <div class="project-overlay">
                <div class="project-info">
                  <h3>新零售电商小程序</h3>
                  <p>2022.8-2022.12 · 前端开发</p>
                  <div class="project-tech">
                    <span>微信小程序</span>
                    <span>Taro</span>
                    <span>React</span>
                    <span>Mobx</span>
                    <span>Sass</span>
                    <span>云开发</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="project-details">
              <h3>新零售电商小程序</h3>
              <p>线上线下一体化电商小程序，支持商品展示、在线支付、门店自提等功能，月活用户50000+。</p>
              <div class="project-highlights">
                <div class="highlight-item">
                  <i class="el-icon-check"></i>
                  <span>多端适配：使用Taro框架，同时支持微信、支付宝、百度小程序</span>
                </div>
                <div class="highlight-item">
                  <i class="el-icon-check"></i>
                  <span>支付集成：接入微信支付、支付宝支付，支付成功率99.5%</span>
                </div>
                <div class="highlight-item">
                  <i class="el-icon-check"></i>
                  <span>性能优化：图片懒加载、分包加载，首屏加载时间小于2s</span>
                </div>
                <div class="highlight-item">
                  <i class="el-icon-check"></i>
                  <span>数据埋点：集成用户行为分析，转化率提升25%</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 在线教育平台 -->
          <div class="project-card" :class="{ 'show': currentFilter === 'all' || currentFilter === 'web' }">
            <div class="project-image">
              <div class="project-overlay">
                <div class="project-info">
                  <h3>在线教育学习平台</h3>
                  <p>2022.3-2022.7 · 前端开发</p>
                  <div class="project-tech">
                    <span>Vue2</span>
                    <span>Nuxt.js</span>
                    <span>Element UI</span>
                    <span>Video.js</span>
                    <span>Socket.io</span>
                    <span>PWA</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="project-details">
              <h3>在线教育学习平台</h3>
              <p>K12在线教育平台，提供直播课程、录播回放、在线作业等功能，注册用户100000+。</p>
              <div class="project-highlights">
                <div class="highlight-item">
                  <i class="el-icon-check"></i>
                  <span>SSR优化：使用Nuxt.js实现服务端渲染，SEO效果提升80%</span>
                </div>
                <div class="highlight-item">
                  <i class="el-icon-check"></i>
                  <span>直播功能：集成Video.js播放器，支持1080P高清直播</span>
                </div>
                <div class="highlight-item">
                  <i class="el-icon-check"></i>
                  <span>实时互动：基于Socket.io实现师生实时问答和白板协作</span>
                </div>
                <div class="highlight-item">
                  <i class="el-icon-check"></i>
                  <span>PWA应用：支持离线缓存，提升用户体验</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系我 -->
    <section id="contact" class="contact-section">
      <div class="container">
        <div class="section-title" ref="contactTitle">
          <h2>联系我</h2>
          <div class="underline"></div>
        </div>
        <div class="contact-content">
          <div class="contact-info">
            <div class="contact-item">
              <i class="el-icon-phone"></i>
              <div>
                <h3>电话</h3>
                <p>18103586461</p>
              </div>
            </div>
            <div class="contact-item">
              <i class="el-icon-message"></i>
              <div>
                <h3>邮箱</h3>
                <p>648926412@qq.com</p>
              </div>
            </div>
            <div class="contact-item">
              <i class="el-icon-location"></i>
              <div>
                <h3>地址</h3>
                <p>中国</p>
              </div>
            </div>
          </div>
          <div class="contact-form">
            <h3>给我留言</h3>
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <input type="text" placeholder="您的姓名" v-model="contactForm.name" required />
              </div>
              <div class="form-group">
                <input type="email" placeholder="您的邮箱" v-model="contactForm.email" required />
              </div>
              <div class="form-group">
                <input type="text" placeholder="主题" v-model="contactForm.subject" required />
              </div>
              <div class="form-group">
                <textarea placeholder="您的留言" v-model="contactForm.message" required></textarea>
              </div>
              <button type="submit" class="btn primary-btn">发送留言</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <p>&copy; {{ new Date().getFullYear() }} 赵杰. 保留所有权利.</p>
          <div class="social-links">
            <a href="#" class="social-link"><i class="el-icon-s-custom"></i></a>
            <a href="#" class="social-link"><i class="el-icon-s-promotion"></i></a>
            <a href="#" class="social-link"><i class="el-icon-s-platform"></i></a>
          </div>
        </div>
      </div>
    </footer>

    <!-- 回到顶部按钮 -->
    <div class="back-to-top" :class="{ 'show': showBackToTop }" @click="scrollToTop">
      <i class="el-icon-arrow-up"></i>
    </div>

    <!-- 粒子背景 -->
    <div id="particles-js" class="particles-container"></div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue';
import { ElMessage } from 'element-plus';

// 响应式数据
const isScrolled = ref(false);
const showBackToTop = ref(false);
const currentFilter = ref('all');

// DOM引用
const heroText = ref(null);
const aboutTitle = ref(null);
const aboutText = ref(null);
const skillsTitle = ref(null);
const skillsContent = ref(null);
const experienceTitle = ref(null);
const timeline = ref(null);
const projectsTitle = ref(null);
const projectsGrid = ref(null);
const contactTitle = ref(null);

// 技术栈动画
const techStack = [
  'HTML5', 'CSS3', 'JS', 'Vue', 'React', 'Uni-app', 'Webpack', 'TypeScript'
];

// 核心技能
const coreSkills = [
  { name: 'HTML5/CSS3', percentage: 95 },
  { name: 'JavaScript/ES6+', percentage: 90 },
  { name: 'Vue.js/Vue3', percentage: 95 },
  { name: 'React/React Hooks', percentage: 85 },
  { name: 'Uni-app', percentage: 85 },
  { name: 'TypeScript', percentage: 80 },
];

// 框架和库
const frameworkSkills = [
  'Vue2/Vue3', 'React', 'Vue-Router', 'ElementPlus', 'Ant Design Vue', 'Echarts', 'G6', 'Cesium', 'Uni-app', 'Taro', 'Three.js'
];

// 工具和其他
const toolSkills = [
  'Webpack', 'Vite', 'Git', 'Node.js', 'JEcloud', 'Canvas', 'PDF.js', 'WebSocket', 'PWA', 'Jest', 'MongoDB'
];

// 联系表单
const contactForm = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

// 方法
const filterProjects = (filter) => {
  currentFilter.value = filter;
  // 添加过滤动画效果
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.classList.remove('active');
    const btnText = btn.textContent.trim();
    if ((btnText === '全部项目' && filter === 'all') ||
        (btnText === 'Web应用' && filter === 'web') ||
        (btnText === '移动端' && filter === 'app') ||
        (btnText === '企业级' && filter === 'enterprise')) {
      btn.classList.add('active');
    }
  });
};

const submitForm = () => {
  // 模拟表单提交
  ElMessage.success('留言已发送，我会尽快回复您！');
  contactForm.name = '';
  contactForm.email = '';
  contactForm.subject = '';
  contactForm.message = '';
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// 滚动监听
const handleScroll = () => {
  const scrollPosition = window.scrollY;
  
  // 导航栏滚动效果
  isScrolled.value = scrollPosition > 50;
  
  // 回到顶部按钮显示/隐藏
  showBackToTop.value = scrollPosition > 300;
  
  // 滚动动画
  const sections = [
    { ref: aboutTitle.value, offset: 100 },
    { ref: aboutText.value, offset: 100 },
    { ref: skillsTitle.value, offset: 100 },
    { ref: skillsContent.value, offset: 100 },
    { ref: experienceTitle.value, offset: 100 },
    { ref: timeline.value, offset: 100 },
    { ref: projectsTitle.value, offset: 100 },
    { ref: projectsGrid.value, offset: 100 },
    { ref: contactTitle.value, offset: 100 }
  ];
  
  sections.forEach(section => {
    if (section.ref && isElementInViewport(section.ref, section.offset)) {
      section.ref.classList.add('animate');
    }
  });
};

// 检查元素是否在视口中
const isElementInViewport = (el, offset = 0) => {
  if (!el) return false;
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= window.innerHeight - offset &&
    rect.bottom >= 0 &&
    rect.left <= window.innerWidth &&
    rect.right >= 0
  );
};

// 生命周期钩子
onMounted(() => {
  // 初始化粒子效果
  try {
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: '#42b983' },
          shape: { type: 'circle' },
          opacity: { value: 0.5, random: false },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#42b983',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'grab' },
            onclick: { enable: true, mode: 'push' },
            resize: true
          },
          modes: {
            grab: { distance: 140, line_linked: { opacity: 1 } },
            push: { particles_nb: 4 }
          }
        },
        retina_detect: true
      });
    }
  } catch (error) {
      // console.error('粒子效果初始化失败:', error);
  }

  // 添加滚动监听
  window.addEventListener('scroll', handleScroll);
  
  // 初始触发一次滚动事件，以激活初始可见元素的动画
  handleScroll();
  
  // 添加打字效果
  const typingText = document.querySelector('.typing-text');
  if (typingText) {
    typingText.classList.add('typing-animation');
  }
  
  // 添加英雄区文字动画
  if (heroText.value) {
    heroText.value.classList.add('animate');
  }
});

onUnmounted(() => {
  // 移除滚动监听
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* 全局样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

section {
  padding: 100px 0;
  position: relative;
  overflow: hidden;
}

.section-title {
  text-align: center;
  margin-bottom: 50px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.section-title.animate {
  opacity: 1;
  transform: translateY(0);
}

.section-title h2 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #333;
}

.underline {
  height: 4px;
  width: 70px;
  background: linear-gradient(to right, #42b983, #2c3e50);
  margin: 0 auto;
}

.btn {
  display: inline-block;
  padding: 12px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
}

.primary-btn {
  background: linear-gradient(to right, #42b983, #2c3e50);
  color: #fff;
  box-shadow: 0 5px 15px rgba(66, 185, 131, 0.4);
}

.primary-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(66, 185, 131, 0.6);
}

.secondary-btn {
  background: transparent;
  color: #42b983;
  border: 2px solid #42b983;
}

.secondary-btn:hover {
  background: rgba(66, 185, 131, 0.1);
  transform: translateY(-3px);
}

/* 粒子背景 */
.particles-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

/* 导航栏 */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 0;
  z-index: 1000;
  transition: all 0.3s ease;
}

.header-scrolled {
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 15px 0;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 28px;
  font-weight: 700;
  color: #42b983;
  text-decoration: none;
}

.nav-menu ul {
  display: flex;
  list-style: none;
}

.nav-menu ul li {
  margin-left: 30px;
}

.nav-menu ul li a {
  color: #333;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-menu ul li a:hover,
.nav-menu ul li a.active {
  color: #42b983;
}

.nav-menu ul li a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #42b983;
  transition: all 0.3s ease;
}

.nav-menu ul li a:hover::after,
.nav-menu ul li a.active::after {
  width: 100%;
}

/* 英雄区 */
.hero-section {
  height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%);
  position: relative;
}

.hero-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hero-text {
  flex: 1;
  opacity: 0;
  transform: translateX(-50px);
  transition: all 1s ease;
}

.hero-text.animate {
  opacity: 1;
  transform: translateX(0);
}

.hero-text h1 {
  font-size: 60px;
  font-weight: 800;
  margin-bottom: 20px;
  color: #2c3e50;
}

.hero-text h2 {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #42b983;
}

.hero-text p {
  font-size: 18px;
  margin-bottom: 30px;
  color: #666;
}

.hero-buttons {
  display: flex;
  gap: 15px;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.tech-icon {
  padding: 10px 20px;
  background-color: rgba(66, 185, 131, 0.1);
  border-radius: 30px;
  color: #42b983;
  font-weight: 600;
  opacity: 0;
  transform: scale(0.8);
  animation: fadeInScale 0.5s forwards;
  animation-delay: 0.5s;
}

@keyframes fadeInScale {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* 打字效果 */
.typing-text {
  position: relative;
  display: inline-block;
}

.typing-animation::after {
  content: '|';
  position: absolute;
  right: -8px;
  animation: blink 0.7s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* 故障文字效果 */
.glitch-text {
  position: relative;
  color: #2c3e50;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch-text::before {
  left: 2px;
  text-shadow: -1px 0 #42b983;
  clip: rect(44px, 450px, 56px, 0);
  animation: glitch-anim-1 5s infinite linear alternate-reverse;
}

.glitch-text::after {
  left: -2px;
  text-shadow: -1px 0 #ff00ff;
  clip: rect(24px, 450px, 100px, 0);
  animation: glitch-anim-2 5s infinite linear alternate-reverse;
}

@keyframes glitch-anim-1 {
  0% { clip: rect(20px, 450px, 30px, 0); }
  20% { clip: rect(40px, 450px, 50px, 0); }
  40% { clip: rect(60px, 450px, 70px, 0); }
  60% { clip: rect(80px, 450px, 90px, 0); }
  80% { clip: rect(100px, 450px, 110px, 0); }
  100% { clip: rect(120px, 450px, 130px, 0); }
}

@keyframes glitch-anim-2 {
  0% { clip: rect(30px, 450px, 40px, 0); }
  20% { clip: rect(50px, 450px, 60px, 0); }
  40% { clip: rect(70px, 450px, 80px, 0); }
  60% { clip: rect(90px, 450px, 100px, 0); }
  80% { clip: rect(110px, 450px, 120px, 0); }
  100% { clip: rect(130px, 450px, 140px, 0); }
}

/* 滚动下拉指示器 */
.scroll-down {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
}

.scroll-down a {
  display: block;
  width: 30px;
  height: 50px;
  border: 2px solid #42b983;
  border-radius: 15px;
  position: relative;
  text-decoration: none;
}

.scroll-down a span {
  position: absolute;
  top: 8px;
  left: 50%;
  width: 4px;
  height: 8px;
  margin-left: -2px;
  background-color: #42b983;
  border-radius: 2px;
  animation: scroll-down 2s infinite;
}

.scroll-down a span:nth-child(2) {
  animation-delay: 0.15s;
}

.scroll-down a span:nth-child(3) {
  animation-delay: 0.3s;
}

@keyframes scroll-down {
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
    transform: translateY(10px);
  }
  100% {
    opacity: 0;
    transform: translateY(20px);
  }
}

/* 关于我区域 */
.about-section {
  background-color: #f8f9fa;
}

.about-text {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.about-text.animate {
  opacity: 1;
  transform: translateY(0);
}

.about-card {
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.about-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.about-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.info-label {
  font-weight: 600;
  color: #666;
}

.info-value {
  color: #42b983;
  font-weight: 600;
}

.about-description {
  font-size: 16px;
  line-height: 1.8;
  color: #666;
  text-align: justify;
}

/* 技能区域 */
.skills-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.skills-section .section-title h2 {
  color: white;
}

.skills-content {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.skills-content.animate {
  opacity: 1;
  transform: translateY(0);
}

.skill-category {
  margin-bottom: 50px;
}

.skill-category h3 {
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;
  color: white;
}

.skill-bars {
  max-width: 800px;
  margin: 0 auto;
}

.skill-item {
  margin-bottom: 25px;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.skill-name {
  font-weight: 600;
  color: white;
}

.skill-percentage {
  font-weight: 600;
  color: #42b983;
}

.skill-bar {
  height: 8px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(to right, #42b983, #2c3e50);
  border-radius: 4px;
  width: 0;
  animation: skillProgress 2s ease-in-out forwards;
}

@keyframes skillProgress {
  from {
    width: 0;
  }
  to {
    width: var(--progress-width);
  }
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  max-width: 800px;
  margin: 0 auto;
}

.skill-tag {
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  color: white;
  font-weight: 600;
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  opacity: 0;
  transform: scale(0.8);
  animation: fadeInScale 0.5s forwards;
}

.skill-tag:hover {
  background-color: rgba(66, 185, 131, 0.2);
  border-color: #42b983;
  transform: translateY(-3px);
}

/* 工作经验区域 */
.experience-section {
  background-color: #f8f9fa;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.timeline.animate {
  opacity: 1;
  transform: translateY(0);
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #42b983, #2c3e50);
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin-bottom: 50px;
}

.timeline-item:nth-child(odd) .timeline-content {
  margin-right: 50%;
  padding-right: 40px;
  text-align: right;
}

.timeline-item:nth-child(even) .timeline-content {
  margin-left: 50%;
  padding-left: 40px;
}

.timeline-dot {
  position: absolute;
  left: 50%;
  top: 20px;
  width: 20px;
  height: 20px;
  background: linear-gradient(to right, #42b983, #2c3e50);
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 2;
  box-shadow: 0 0 0 4px white, 0 0 0 8px #42b983;
}

.timeline-content {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.timeline-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.timeline-date {
  color: #42b983;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 10px;
}

.timeline-content h3 {
  color: #2c3e50;
  font-size: 20px;
  margin-bottom: 5px;
}

.timeline-content h4 {
  color: #666;
  font-size: 16px;
  margin-bottom: 15px;
}

.timeline-content p {
  color: #666;
  line-height: 1.6;
}

/* 项目区域 */
.projects-section {
  background: white;
}

.projects-filter {
  text-align: center;
  margin-bottom: 50px;
}

.filter-btn {
  background: transparent;
  border: 2px solid #42b983;
  color: #42b983;
  padding: 10px 25px;
  margin: 0 10px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.filter-btn:hover,
.filter-btn.active {
  background: #42b983;
  color: white;
  transform: translateY(-2px);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.projects-grid.animate {
  opacity: 1;
  transform: translateY(0);
}

.project-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  opacity: 1;
  transform: scale(1);
}

.project-card:not(.show) {
  display: none;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.project-image {
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-info {
  text-align: center;
  color: white;
}

.project-info h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.project-info p {
  margin-bottom: 15px;
  opacity: 0.8;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.project-tech span {
  background: rgba(66, 185, 131, 0.2);
  color: #42b983;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 600;
}

.project-details {
  padding: 30px;
}

.project-details h3 {
  color: #2c3e50;
  font-size: 20px;
  margin-bottom: 15px;
}

.project-details p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.project-highlights {
  list-style: none;
}

.highlight-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #666;
}

.highlight-item i {
  color: #42b983;
  margin-right: 10px;
  font-size: 16px;
}

/* 联系我区域 */
.contact-section {
  background: linear-gradient(135deg, #2c3e50 0%, #42b983 100%);
  color: white;
}

.contact-section .section-title h2 {
  color: white;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  max-width: 1000px;
  margin: 0 auto;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 20px;
}

.contact-item i {
  font-size: 24px;
  color: #42b983;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.contact-item h3 {
  font-size: 18px;
  margin-bottom: 5px;
}

.contact-item p {
  opacity: 0.8;
}

.contact-form {
  background: rgba(255, 255, 255, 0.1);
  padding: 40px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
}

.contact-form h3 {
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  background: white;
  box-shadow: 0 0 0 2px #42b983;
}

.form-group textarea {
  height: 120px;
  resize: vertical;
}

/* 页脚 */
.footer {
  background: #2c3e50;
  color: white;
  padding: 30px 0;
  text-align: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(66, 185, 131, 0.2);
  border-radius: 50%;
  color: #42b983;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #42b983;
  color: white;
  transform: translateY(-3px);
}

/* 回到顶部按钮 */
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: linear-gradient(to right, #42b983, #2c3e50);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1000;
}

.back-to-top.show {
  opacity: 1;
  visibility: visible;
}

.back-to-top:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(66, 185, 131, 0.4);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
  }
  
  .hero-text h1 {
    font-size: 40px;
  }
  
  .hero-text h2 {
    font-size: 20px;
  }
  
  .nav-menu ul {
    flex-direction: column;
    gap: 10px;
  }
  
  .nav-menu ul li {
    margin-left: 0;
  }
  
  .timeline::before {
    left: 20px;
  }
  
  .timeline-item:nth-child(odd) .timeline-content,
  .timeline-item:nth-child(even) .timeline-content {
    margin-left: 50px;
    margin-right: 0;
    padding-left: 20px;
    padding-right: 20px;
    text-align: left;
  }
  
  .timeline-dot {
    left: 20px;
  }
  
  .contact-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .footer-content {
    flex-direction: column;
    gap: 20px;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .about-info {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 15px;
  }
  
  section {
    padding: 60px 0;
  }
  
  .hero-text h1 {
    font-size: 32px;
  }
  
  .section-title h2 {
    font-size: 28px;
  }
  
  .skill-category h3 {
    font-size: 20px;
  }
}
</style>
