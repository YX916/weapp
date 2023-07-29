Component({
    externalClasses: ['custom-class'],

    options: {
        addGlobalClass: true,
    },

    properties: {
        type: {
            type: String,
            value: 'default',
        },
        size: {
            type: String,
            value: '',
        },
        round: {
            type: Boolean,
            value: false
        },
        disabled: {
            type: Boolean,
            value: false,
        },
        loading: {
            type: Boolean,
            value: false,
        },
        block: {
            type: Boolean,
            value: false
        }
    },

    methods: {
        /**点击事件 */
        onTap() {
            if (this.data.disabled) return false;
            this.triggerEvent('click');
        }
    }
});