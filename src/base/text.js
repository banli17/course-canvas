// 1. fillText(text, x, y[, maxWidth])
// 会根据 maxWidth 进行缩放
ctx.font = "48px 微软雅黑"; // 默认为 10px sans-serif
ctx.textAlign = "start";
ctx.fillText("你好，小明", 30, 50, 150);
ctx.textAlign = "right";
ctx.fillText("你好", 30, 100, 150);
ctx.textAlign = "center";
ctx.direction = "rtl"; // 有些单词会是 rtl 有效
ctx.fillText("helllo world", 30, 150, 150);

// 2. strokeText(text, x, y[, maxWidth])
// 会根据 maxWidth 进行缩放
ctx.strokeText("你好，小明", 10, 150);

// textBaseline: top, hanging, middle, alphabetic, ideographic, bottom。默认值是 alphabetic。

// 预测量文本宽度
const text = ctx.measureText("foo"); // TextMetrics object
log(text, text.width);
