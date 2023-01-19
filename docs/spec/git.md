---
group:
  title: 规范
---

# 协作

设置了代码样式和[提交信息](https://npmmirror.com/package/es-commit-msg-validator) 的钩子：

```text
"gitHooks": {
    "pre-commit": "lint-staged",
    "commit-msg": "es-commit-msg-validator"
},
```

## 注释

统一采用带注释的提交方式，格式为：`<type>: <subject>`

```shell
(feature-xxx)$: git commit -m 'feat: 新增xx'
(fix-xxx)$: git commit -m 'fix: 修复xx'
```

其他类型：

- feat：添加新特性
- fix：修复 bug
- style：仅仅修改了空格、格式缩进、都好等等，不改变代码逻辑
- refactor：代码重构，没有加新功能或者修复 bug
- docs：仅仅修改了文档
- test：增加测试用例
- ci：持续集成相关
- chore：改变构建流程、或者增加依赖库、工具等

## 分支管理

拿新增组件PasswordItem为例：
1. 在`dev`分支新建`feature`分支，以【操作类型-简单描述】命名，如`feat-component-password-item`，并在该分支进行开发；
```text
git checkout -b feat-component-password-item

git status  # 检查是否有不符合预期的改动
git add xxx
git commit -m "feat: PasswordItem" 
```
2. 提交前对齐`dev`分支（统一采用rebase操作，不要用merge），合并可能存在的冲突：
```text
git switch dev
git pull

git switch feat-component-password-item
git rebase dev
```
3. 推送到远程分支，并在远程仓库手动创建一个mr，检查无误后自行确定合并到dev；
```text
git push
```

创建一个将`feat-component-password-item`分支合并到`dev`的merge request，填写简单描述，确认后自行确认合并。
