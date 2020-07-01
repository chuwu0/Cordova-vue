const getters = {
    sidebar: state => state.app.sidebar,
    device: state => state.app.device,
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    name: state => state.user.name,
    menuList: state => state.user.menuList,
    routerState: state => state.user.routerState,
    hasAdd: state => state.user.hasAdd,
    changedPass: state => state.user.changedPass
}
export default getters
