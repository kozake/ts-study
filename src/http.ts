import { get } from 'http'

let call = new Promise((resolve, rejects) => {

    let buff = "";
    const req = get("http://172.18.1.16:8082/", res => {
        res.on("data", body => {
            buff += body.toString();
        });
        res.on("end", () => {
            resolve(buff);
        })
    })
    
    req.on('error', (e) => {
        rejects(e.message);
    });
    
});


call.then(data => {
    console.log(data);
}).catch(message => {
    console.log(message);
});
