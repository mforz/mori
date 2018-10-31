// 修改 iview
// https://github.com/iview/iview/blob/2.0/src/components/notice/index.js

import Vue from 'vue';
import notification from './notice';
let Notification = Vue.extend(notification);

const prefixKey = 'notice_key_';
let top = 24;
let noticeInstance;
let name = 1;


function getNoticeInstance (props) {
    noticeInstance = noticeInstance || new Notification(props);
    noticeInstance.$mount();
    document.body.appendChild(noticeInstance.$el)

    return noticeInstance;
}

function notice (type, options) {
    const title = options.title || '';
    const desc = options.desc || '';
    const noticeKey = options.name || `${prefixKey}${name}`;
    const render = options.render;
    const onClose =options.onClose || function(){}
    const duration = (options.duration === 0) ? 0 : options.duration || 4.5;
    name++;
    let instance = getNoticeInstance();
    let content;

    if (type == 'notice') {
        content = `
            <div class="notice-content-show">
                <div class="notice-title">${title}</div>
                <div class="notice-desc">${desc}</div>
            </div>
        `;
    } else {
        content = `
            <div class="message-content-show">
                <div class="message-title">${title}</div>
                <div class="message-desc">${desc}</div>
            </div>
        `;
    }
    instance({
        name: noticeKey.toString(),
        duration: duration,
        styles: {},
        content: content,
        render: render,
        onClose: onClose,
        closable: true,
        type: type || 'message'
    });
}

export default {
    open (type,options) {
        return notice(type, options);
    },
    config (options) {
        if (options.top) {
            top = options.top;
        }
        if (options.duration || options.duration === 0) {
            defaultDuration = options.duration;
        }
    },
    close (name) {
        if (name) {
            name = name.toString();
            if (noticeInstance) {
                noticeInstance.remove(name);
            }
        } else {
            return false;
        }
    },
    destroy () {
        let instance = getNoticeInstance();
        noticeInstance = null;
        instance.destroy('notice');
    }
};