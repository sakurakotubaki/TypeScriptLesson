"use strict";
function getUser() {
    return new Promise((resolve) => {
        const user = {
            name: "太郎",
            age: 10,
        };
        resolve(user);
    });
}
getUser().then((user) => {
    console.log(user);
    // @log: { "name": "太郎", "age": 10 }
});
