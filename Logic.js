import { debmap } from "./Function/DebugMap.js"
import fs from "fs"

var stream = fs.createWriteStream("./Map.txt", {'flags': 'a'});

stream.write(`[\n`);
for (var i = 0; i < debmap["WUo"].length; i++) {
    let obj = debmap["WUo"][i];
    if (obj) {
        for (var e = 0; e < obj.length; e++) {
            let obj2 = obj[e]
            for (var item in obj2) {
                let newitem = obj2[item]
                if (obj2[item].x) {
                   let content = `[1,"${item}",1,${newitem.x},${newitem.y}],\n`
                    stream.write(content);
                } else {
                    if (item == "b" || item == "t") {
                        let it = newitem[0] ? newitem[0][0] : newitem[1] ? newitem[1][0] : newitem[2] ? newitem[2][0] : newitem[3] ? newitem[3][0] : newitem[4] ? newitem[4][0] : newitem[5][0]
                        if(!it.x){
                            console.log(newitem)
                        }else{
                            const content = `[1,"${item}",1,${it.x},${it.y}],\n`
                            stream.write(content);
                        }
                    }else{
                        let it = newitem[0] ? newitem[0][0] : newitem[1] ? newitem[1][0] : newitem[2] ? newitem[2][0] : newitem[3] ? newitem[3][0] : newitem[4] ? newitem[4][0] : newitem[5][0]
                            const content = `[1,"${item}",1,${it.x},${it.y}],\n`
                            stream.write(content);
                    }
                }
            }
        }
    }
}
stream.write(`]`);