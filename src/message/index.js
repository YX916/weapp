// components/Message/index.js
Component({
    properties: {
        useNavBar: {
            type: Boolean,
            value: false,
            observer(val) {
                this.setData({
                    isUseNavBar: val
                })
            }
        },
    },
    /**
     * 组件的初始数据
     */
    data: {
        show: false,
        isUseNavBar: false,
        calss: ''
    },
    methods: {
        show() {
            const { duration, type } = this.data;
            clearTimeout(this.timer);
            this.setData({ show: true, class: 'fade-enter' });
            if (type != 'loading' && duration != null && duration > 0) {
                this.timer = setTimeout(() => {
                    this.close();
                }, duration * 1000);
            }
        },
        close() {
            this.setData({ show: false, mask: false, class: 'fade-leave' })
        }
    }
})