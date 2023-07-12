function requestPromise(request) {
    return new Promise((resolve, reject) => {
        if (request.toLowerCase() === 'google') {
            resolve('Connection requested to Google');
        } else {
            reject('Only request to Google');
        }
    });
}

function responsePromise(status) {
    return new Promise((resolve, _) => {
        console.log('Connected with google');
        resolve('Talking with Google now');
    });
}

requestPromise('Google').then((response) => {
    console.log(response);
    console.log('Request processing...');
    responsePromise(response).then((response) => {
        console.log(response);
    });
    console.log('#############')
}).catch((err) => {
    console.log(err);
})


async function makeRequest(request) {
    try {
        const response = await requestPromise(request);
        console.log(response);
        const result = await responsePromise(response);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

makeRequest('Google');