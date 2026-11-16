Title : How Pick and Omit Utility Types Prevent Code Duplication in TypeScript

Introduction:
In TypeScript, Interfaces are used to define the structure of objects. In large applications we often need different versions of the same data structure for different purposes. Creating separate interfaces for every requirement can lead to code duplication and maintenance problems.TypeScript provides two useful utility types. They are Pick and Omit, that help developers create specialized versions of existing interfaces without rewriting the same code.These utility types support the DRY (Don't Repeat Yourself) principle and make applications easier to maintain.

1.The Pick utility type allows us to select specific properties from an existing interface and create a new type.
Syntax:
Pick<Type, Keys>

Type: The original interface.
Keys: The properties we want to select.
Example:

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    age: number;
}

type UserProfile = Pick<User, "name" | "email" | "age">;
Now, UserProfile contains only three properties:

{
    name: string;
    email: string;
    age: number;
}
We do not need to create another interface manually. TypeScript automatically creates the new type using the selected properties.

2.The Omit utility type works in the opposite way of Pick.It removes specific properties from an existing interface and creates a new type with the remaining properties.
Syntax:
Omit<Type, Keys>

Example:

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    age: number;
}
type PublicUser = Omit<User, "password">;

The PublicUser type contains:
{
    id: number;
    name: string;
    email: string;
    age: number;
}
Here, the password property is removed while all other properties remain available.

4.Benefits of Using Pick and Omit:
1.Code Reusability: Create new types from existing interfaces without rewriting properties.
2.Less Code Duplication: Avoid maintaining multiple interfaces with similar structures.
3.Easy Maintenance: Changes to the original interface automatically affect derived types where applicable.
4.Better Type Safety: Ensure that specialized objects follow the correct structure.
5.Improved Readability: Make code cleaner and easier for developers to understand.

Conclusion:
The Pick and Omit utility types are powerful features of TypeScript that help developers create specialized versions of existing interfaces. They reduce code duplication, improve maintainability, and support the DRY principle. By using these utility types effectively, developers can build cleaner, more scalable, and maintainable TypeScript applications.