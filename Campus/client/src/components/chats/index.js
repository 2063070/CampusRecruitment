import chats from "./chats";
function install(Vue) {
    Vue.component(chats.name , chats)
}

export default {
    install
}