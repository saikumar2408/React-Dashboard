export const Storage = {
    get user(){
        return sessionStorage.getItem("user");
    },
    set user(value) {
        if (value) {
            sessionStorage.setItem('user', value);
        } else {
            sessionStorage.removeItem("user");
        }
    },
    get remember() {
        return Boolean(sessionStorage.getItem("remember"));
    },
    set remember(value) {
        sessionStorage.setItem("remember", value);
    },
    clear() {
        sessionStorage.clear();
    }
};
