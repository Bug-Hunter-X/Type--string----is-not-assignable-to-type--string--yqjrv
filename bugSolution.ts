function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(persons: string[]): string[] {
  return persons.map(person => greeter(person));
}

let user = ["Jane Doe", "John Smith"];
console.log(greeterArray(user)); //This will work correctly

//Another approach
for (const person of user) {
  console.log(greeter(person));
}