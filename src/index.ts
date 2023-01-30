type User = {
  id: string;
  name: string;
  age: number;
};
getUser().then((user: User) => {
  console.log(user);
  // @log: { "name": "太郎", "age": 10 }
});
