type User = {
    id: string;
    name: string;
    age: number;
};
function getUser(): Promise<User> {
    return new Promise((resolve) => {
        const user: User = {
            id: "",
            name: "太郎",
            age: 10,
        };
        resolve(user);
    });
}
getUser().then((user: User) => {
    console.log(user);
    // @log: { "name": "太郎", "age": 10 }
});
