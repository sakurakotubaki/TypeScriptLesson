interface Person {
  id: string;
  name: string;
  age: number;
}

function getUser(): Promise<Person> {
  return new Promise((resolve) => {
    const user: User = {
      id: "X0032",
      name: "山田花子",
      age: 25,
    };
    resolve(user);
  });
}
getUser().then((user: Person) => {
  console.log(user);
});
