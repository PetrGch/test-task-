export function setToStorage(data) {
    if (typeof(Storage) !== 'undefined') {
        if (localStorage.userData) {
            let oldData = JSON.parse(localStorage.getItem('userData'));
            let userID = localStorage.getItem('userID');
            let concatData = Object.assign({}, oldData, {[++userID]: data});
            localStorage.setItem('userData', JSON.stringify(concatData));
            localStorage.setItem('userID', userID);
        } else {
            localStorage.setItem('userID', 0);
            let dataJSON = JSON.stringify({0: data});
            localStorage.setItem('userData', dataJSON);

        }
    } else {
        throw new Error("Sorry! No Web storage support...")
    }
}

export function getFromStorage() {
    if (typeof(Storage) !== 'undefined') {
        if (localStorage.userData) {
            return localStorage.getItem('userData');
        } else {
            return "{}";
        }
    } else {
        throw new Error("Sorry! No Web storage support...")
    }
}
