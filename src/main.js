"use strict";
function getUser() {
    return new Promise((resolve) => {
        const user = {
            id: "X0032",
            name: "山田花子",
            age: 25,
        };
        resolve(user);
    });
}

getUser().then((user) => {
    console.log(user);
});
