
function URLs () {
    const url = "http://localhost:1337";
    // const url = "http://34.150.172.107/api"
    return url
}

function loginCheck(e){
    let v = localStorage.getItem(e)
    if (v == undefined) {
        console.log('not')
        window.location.href = '/authentication';
        return
    }
}


function logout(e){
    localStorage.removeItem(e);
    window.location.href = "/authentication"
}
