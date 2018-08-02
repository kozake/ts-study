import { get } from 'http'

const req = get("http://172.18.1.16:8082/", res => {
    res.on("data", body => {
        console.log(body.toString());
    })
})

req.on('error', (e) => {
    console.error(e.message);
});
