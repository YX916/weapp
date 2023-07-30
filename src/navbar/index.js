import getSystemInfo from "../utils/systemInfo";
const systemInfo = getSystemInfo();

Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },

  properties: {
    loading: {
      type: Boolean,
      value: false
    },

    // 背景色
    bgcolor: {
      type: String,
      value: ''
    },
    // 返回按钮与字体色
    backColor: {
      type: String,
      value: '#000'
    },
    // 标题文字色
    color: {
      type: String,
      value: '#000'
    },
    // 标题
    title: {
      type: String,
      value: ''
    },

    // 是否显示返回按钮
    back: {
      type: Boolean,
      value: false
    },

    delta: {
      type: Number,
      value: 1
    },
    // 背景图片地址
    bgImage: {
      type: String,
      value: ''
    },
  },

  observers: {
    bgcolor(val) {
      if (val) {
        if (val.includes('gradient')) {
          this.setData({
            bgColorStyle: `background-image: ${val};`
          })
        } else {
          this.setData({
            bgColorStyle: `background-color: ${val};`
          })
        }
      } else {
        this.setData({
          bgColorStyle: ''
        })
      }
    },

    bgImage(val) {
      if (val) {
        this.setData({
          bgColorStyle: '',
          bgImageStyle: `background-image: url('${this.data.isDevtools ? val : val.substr(1)}')`
        })
      } else {
        this.setData({
          bgImageStyle: ''
        })
      }
    },
    color(val) {
      if (val) {
        this.setData({
          titleColorStyle: `color: ${val}`
        })
      } else {
        this.setData({
          titleColorStyle: ''
        })
      }
    }
  },

  data: {
    isDevtools: systemInfo.isDevtools,
    navBarH: systemInfo.navBarH,
    statusBarH: systemInfo.statusBarH,
    titleBarH: systemInfo.titleBarH,
    titleAlignStyle: '',
    titleColorStyle: '',
    bgColorStyle: '',
    bgImageStyle: '',
  },

  methods: {
    BackPage() {
      wx.navigateBack({
        delta: this.data.delta
      });
    }
  }
})