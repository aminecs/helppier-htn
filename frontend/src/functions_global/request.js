export function postRequest(data, url){
    var request = new Request(`${url}`, {
        method: 'POST',
        headers: new Headers({ 'Content-Type' : 'application/json', 'Accept': 'application/json' }),
        body: JSON.stringify(data)
    });
    return request;
}