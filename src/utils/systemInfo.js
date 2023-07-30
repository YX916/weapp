export default () => {
    try {
        const systemInfo = wx.getSystemInfoSync();
        const isIOS = systemInfo.system.includes('iOS');
        const statusBarH = systemInfo.statusBarHeight; // 状态栏高度 单位 px
        const isDevtools = systemInfo.platform=='devtools'; // 是否是开发者工具
        const capsule = wx.getMenuButtonBoundingClientRect();
        const titleBarH = capsule.top + capsule.bottom - statusBarH * 2; // 标题栏高度
        const capsuleH = capsule.height; // 胶囊高度，用于搜索框
        const capsuleW = capsule.width; // 胶囊宽度，用于搜索框
        const navBarH = statusBarH + titleBarH;  // 导航栏高度
        return {
            navBarH,
            statusBarH,
            isDevtools,
            titleBarH,
            capsule,
            capsuleH,
            capsuleW,
            isIOS
        }
    } catch (e) {
        console.warn('getSystemInfoSync error')
        return {
            navBarH: 80,
            statusBarH: 40,
            titleBarH: 40,
            isIOS: false,
            capsule: {
                bottom: 83,
                height: 32,
                left: 296,
                right: 383,
                top: 51,
                width: 87
            },
            capsuleH: 32,
            capsuleW: 87
        }
    }
}