import { get } from 'http'

function call(url: string): Promise<any> {

    return new Promise((resolve, rejects) => {

        let buff = "";
        const req = get(url, res => {
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
}

async function test() {

    try {
        let data1 = await call("http://172.18.1.16:8082/");
        let data2 = await call("http://172.18.1.16:8082/");
        let data3 = await call("http://172.18.1.16:8082/");

        console.log(data1);
        console.log(data2);
        console.log(data3);
    } catch(message) {
        console.log(message);
    }
}

test();
