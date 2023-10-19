// A Hero interface. An interface is a structure that defines syntax for classes to follow.
// An interface can type check, but if you need methods or other logic, utilize a class.
// You can start with an interface, then create a class when methods are needed, and inherit the interface.

export interface Hero {
    id: number;
    name: string;
}