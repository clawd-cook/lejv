# Custom Theme

## 自定义主题

在 UniApp 项目中自定义 uView UI 主题。

### 修改主题变量

在 `uni.scss` 中修改主题变量：

```scss
/* uni.scss */
@import "uview-ui/theme.scss";

/* 自定义主题变量 */
$u-type-primary: #409eff;
$u-type-success: #67c23a;
$u-type-warning: #e6a23c;
$u-type-error: #f56c6c;
$u-type-info: #909399;

/* 自定义其他变量 */
$u-main-color: #303133;
$u-content-color: #606266;
$u-tips-color: #909399;
$u-light-color: #c0c4cc;
$u-border-color: #e4e7ed;
$u-bg-color: #f3f4f6;
```

### 使用 SCSS 变量

在组件中使用主题变量：

```vue
<template>
  <view class="custom-button">自定义按钮</view>
</template>

<style lang="scss" scoped>
.custom-button {
  background-color: $u-type-primary;
  color: #ffffff;
  padding: 20rpx 40rpx;
  border-radius: 8rpx;
}
</style>
```

### 全局样式覆盖

在 `App.vue` 中覆盖全局样式：

```vue
<style lang="scss">
@import "uview-ui/index.scss";

/* 覆盖 uView 默认样式 */
.u-button {
  border-radius: 8rpx;
}

.u-input {
  border-radius: 8rpx;
}
</style>
```

### 条件编译主题

不同平台可以使用不同主题：

```scss
/* uni.scss */
@import "uview-ui/theme.scss";

/* #ifdef H5 */
$u-type-primary: #409eff;
/* #endif */

/* #ifdef MP-WEIXIN */
$u-type-primary: #07c160;
/* #endif */

/* #ifdef APP-PLUS */
$u-type-primary: #007aff;
/* #endif */
```

### 注意事项

1. **变量名称**：使用正确的变量名称
2. **引入顺序**：先引入 uView 主题，再覆盖变量
3. **作用域**：注意变量的作用域
4. **平台差异**：使用条件编译处理平台差异
5. **测试验证**：在不同平台测试主题效果
