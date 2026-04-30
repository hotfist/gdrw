# GX挑战者协会 - 文章管理说明

## 目录结构

```
gxchallengers/
├── articles/                  # 文章文件夹
│   ├── 01-template-general.html        # 通用文章模板
│   ├── 02-template-event.html          # 活动通知模板
│   ├── 03-template-interview.html      # 成员采访模板
│   ├── 04-template-tech.html           # 技术分享模板
│   ├── 05-template-announcement.html   # 公告通知模板
│   ├── 2024-04-25-founding.html        # 示例文章 - 协会成立
│   ├── 2024-04-20-team-building.html   # 示例文章 - 团队建设
│   ├── 2024-04-15-logo-contest.html    # 示例文章 - LOGO征集
│   └── README.md                       # 本文件
├── index.html                 # 首页
├── news.html                  # 新闻列表页（文章合集）
└── ...
```

## 如何添加新文章

### 步骤 1: 复制模板

根据文章类型，选择一个合适的模板进行复制：

- **通用文章** - 适合大多数新闻类型 → 使用 `01-template-general.html`
- **活动通知** - 活动预告、活动报道 → 使用 `02-template-event.html`
- **成员采访** - 人物专访 → 使用 `03-template-interview.html`
- **技术分享** - 技术讲座、知识分享 → 使用 `04-template-tech.html`
- **公告通知** - 重要公告、征集通知 → 使用 `05-template-announcement.html`

### 步骤 2: 重命名文件

建议按照以下格式命名：`YYYY-MM-DD-short-title.html`

例如：
- `2024-05-01-new-event.html`
- `2024-05-10-member-interview.html`

### 步骤 3: 编辑文章内容

打开复制的文件，修改以下内容：

1. **标题** - 修改 `<title>` 标签内容
2. **页面标题** - 修改 `<h1>` 标签内容
3. **文章标题** - 修改文章标题
4. **日期和分类** - 更新日期和分类信息
5. **正文内容** - 替换为实际文章内容
6. **图片占位** - 更新图片描述（或替换为真实图片）

### 步骤 4: 更新新闻列表页

打开根目录的 `news.html`，在 `<div class="news-grid">` 中添加新的文章卡片：

```html
<article class="news-card">
    <div class="news-date">2024-05-01</div>
    <h3>文章标题</h3>
    <p>文章简介...</p>
    <a href="articles/2024-05-01-filename.html" class="read-more">阅读更多 →</a>
</article>
```

### 步骤 5: （可选）更新首页预览

如果需要在首页显示，可以在 `index.html` 的新闻预览部分添加。

## 文章模板说明

### 通用文章模板 (01-template-general.html)
适合所有类型的文章，包含完整的文章结构。

### 活动通知模板 (02-template-event.html)
包含活动时间、地点、内容、报名方式等专门字段。

### 成员采访模板 (03-template-interview.html)
包含问题和答案格式，适合人物专访。

### 技术分享模板 (04-template-tech.html)
包含分享者信息和要点列表，适合技术分享。

### 公告通知模板 (05-template-announcement.html)
简洁直接的公告格式。

## 常用格式参考

### 日期格式
使用 `YYYY-MM-DD` 格式，例如：`2024-04-25`

### 分类标签
常用分类：
- 重要公告
- 活动通知
- 成员风采
- 技术分享
- 作品征集
- 活动预告
- 技术进展

### 内容格式
```html
<p>普通段落</p>
<p><strong>加粗强调内容</strong></p>
<p>• 列表项目 1</p>
<p>• 列表项目 2</p>
<p>✓ 可选标记</p>
```

## 链接检查

确保所有内部链接正确：
- 从文章页到主页：`../index.html`
- 从文章页到新闻列表：`../news.html`
- 从新闻列表到文章：`articles/filename.html`

## 注意事项

1. 保持文件名一致，不要使用中文或特殊字符
2. 确保所有链接正确
3. 更新文章时，同步更新新闻列表页
4. 删除文章时，也要从列表页移除对应卡片

## 示例文章

当前已有以下示例文章可供参考：
- `2024-04-25-founding.html` - 协会成立大会
- `2024-04-20-team-building.html` - 团队建设活动
- `2024-04-15-logo-contest.html` - LOGO和宣传语征集
