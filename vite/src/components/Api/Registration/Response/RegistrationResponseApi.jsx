function RegResponse({ status }) {
    if (status === 400) {
        console.log("1");
    } else if (status === 201) {
        console.log("2");
    } else {
        console.log("err");
    }
}

export default RegResponse;
