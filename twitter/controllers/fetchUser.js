const userDetailsConfig = {
    "api": {
        "uri": `https://twitter154.p.rapidapi.com/user/details?username=`,
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "fbe717f8demshc1ba7bad7bdeb4cp13a7e3jsn1d04361ba9ee",
            "X-RapidAPI-Host": "twitter154.p.rapidapi.com"
        }
    }
}

async function getUserDetails(username) {
    const url = `${userDetailsConfig.api.uri}${username}`;
    console.log(url);
    const options = {
        method: userDetailsConfig.api.method,
        headers: userDetailsConfig.api.headers
    };
    const response = await fetch(url, options);
    return addClientGeneratedProperties(await response.json());
}

function addClientGeneratedProperties(data) {
    data.twitter_link = `https://twitter.com/${data.username}`;
    return data;
}