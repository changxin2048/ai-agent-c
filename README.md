aiagent/
├── frontend/                    # 前端目录
│   ├── src/
│   │   ├── components/         # 组件目录
│   │   │   ├── Layout/        # 布局组件
│   │   │   │   ├── Sidebar.tsx
│   │   │   │   └── Sidebar.css
│   │   │   ├── BookmarkCard/  # 书签组件
│   │   │   │   ├── Bookmark.tsx
│   │   │   │   └── Bookmark.css
│   │   │   └── ChatSearch/    # 聊天搜索组件
│   │   │       ├── index.tsx
│   │   │       └── index.css
│   │   │
│   │   ├── pages/             # 页面组件
│   │   │   └── Home/
│   │   │       ├── index.tsx
│   │   │       └── index.css
│   │   │
│   │   ├── services/          # API服务
│   │   │   └── chat.ts        # 聊天服务
│   │   │
│   │   ├── styles/            # 全局样式
│   │   │   └── global.css
│   │   │
│   │   ├── types/             # 类型定义
│   │   │   └── index.ts
│   │   │
│   │   ├── App.tsx            # 根组件
│   │   └── main.tsx           # 入口文件
│   │
│   ├── index.html             # HTML模板
│   ├── tsconfig.json          # TypeScript配置
│   └── vite.config.ts         # Vite配置
│
├── backend/                    # 后端目录
│   ├── src/
│   │   ├── controllers/       # 控制器层
│   │   │   ├── chatController.ts
│   │   │   ├── jenkinsController.ts
│   │   │   ├── messageController.ts
│   │   │   └── resultController.ts
│   │   │
│   │   ├── routes/           # 路由层
│   │   │   ├── chat.ts
│   │   │   ├── message.ts
│   │   │   ├── result.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── repositories/     # 数据仓库层
│   │   │   └── messageRepository.ts
│   │   │
│   │   ├── utils/           # 工具类
│   │   │   ├── baiduAI.ts   # 百度AI接口
│   │   │   ├── tencentAI.ts # 腾讯AI接口
│   │   │   ├── zhipuAI.ts   # 智谱AI接口
│   │   │   ├── kimiAI.ts    # Kimi AI接口
│   │   │   └── db.ts        # 数据库工具
│   │   │
│   │   ├── types/          # 类型定义
│   │   │   ├── message.ts
│   │   │   └── tencent.ts
│   │   │
│   │   └── index.ts        # 后端入口文件
│   │
│   ├── tsconfig.json       # TypeScript配置
│   └── .env               # 环境变量配置
│
└── .gitignore            # Git忽略文件