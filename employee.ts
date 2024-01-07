type Employee = {
  name: string;
  age: number;
  role: string;
  address: {
    city: string;
    country: string;
  };
  workAddress: {
    city: string;
    country: string;
  };
  email: `${string}@${string}.${string}`; // Template literal type for emails
  phone: string;
  hobbies: string[];
  getName: () => string;
};

const john: Employee = {
  name: "John",
  age: 24,
  role: "Software Engineer",
  address: { city: "Jersey City", country: "USA" },
  workAddress: { city: "New York", country: "USA" },
  email: "john@example.com",
  phone: "1234567890",
  hobbies: ["Reading", "Coding", "Gaming"],
  getName: function () {
    return this.name;
  },
};
