import getSystemInfo from "../utils/systemInfo";
const systemInfo = getSystemInfo();
const defaultOptions = {
    type: 'info',
    message: '',
    offsetTop: 10,
    mask: true,
    duration: 2
};
function getContext(selector) {
    const pages = getCurrentPages();
    const context = pages[pages.length - 1];
    const componentContext = context.selectComponent(selector);
    if (!componentContext) {
        console.error('未找到 message 节点，请确认 selector 及 context 是否正确');
        return null;
    }
    return componentContext;
}

const Message = (messageOptions) => {
    const options = {
        selector: '#y-message',
        ...defaultOptions,
        ...messageOptions
    }
    const message = getContext(options.selector)
    const isUseNavBar = message.data.isUseNavBar;
    options.offsetTop = isUseNavBar ? (systemInfo.navBarH + options.offsetTop) : options.offsetTop;
    message.setData(options);
    message.show();
}
Message.close = (selector = '#y-message') => {
    const context = getContext(selector);
    context.close()
}

export default Message;