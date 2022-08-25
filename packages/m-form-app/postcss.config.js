module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 375, // 视窗的宽度 ，对应的是我们设计稿的宽度，一般是750
      unitPrecision: 5, // 将px转化为视窗单位值的小数位数
      viewportUnit: 'vw', // 指定要转换成的视窗单位值
   
      // * 表示所有属性值px都会转换vw，!表示过滤某个属性
      propList: [
        '*',
        '!font',
        '!font-size',
        '!box-shadow'
      ],

      // 指定不转换视窗单位值得类，可以自定义，可以无限添加
      selectorBlackList: [
        '.ignore-px2vw',
        'van-cell', // 可以过滤vant组件内部的class
        '.hairlines'
      ],

      minPixelValue: 1, // 小于等于1px不转换为视窗单位
      mediaQuery: false, // 允许在媒体查询中使用px
      exclude: /(\/|\\)(node_modules)(\/|\\)/
    },
  }
}
