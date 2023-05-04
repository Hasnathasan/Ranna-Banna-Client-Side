import React from "react";

const Blog = () => {
  return (
    <div className="bg-violet-50 container mx-auto">
      <div className="py-10">
        <h2 className="text-3xl text-center font-bold">Blog Section</h2>
      </div>
      <div className="my-8 p-4 sm:p-8 rounded">
        <h2 className="text-2xl font-bold mb-2">
          Describe differences between uncontrolled and controlled components?
        </h2>
        <p className="text-lg font-medium mb-10">
          Ans: Uncontrolled components are typically external to a system and
          operate independently without direct manipulation or influence.
          Controlled components, on the other hand, are integral to a system and
          can be directly managed or manipulated by the system. Examples of
          uncontrolled components include weather, user behavior, and external
          APIs, while controlled components may include software modules,
          hardware devices, and database systems.
        </p>

        <h2 className="text-2xl font-bold mb-2">
          How to validate React props using PropTypes?
        </h2>
        <p className="text-lg font-medium mb-10">
          Ans: To validate React props using PropTypes, use the PropTypes
          library and define the expected prop types and validation rules in the
          `propTypes` property of a component. For example, use `string` type
          for a `text` prop and specify it as required using the `isRequired`
          method. If the wrong type or a required prop is not provided,
          PropTypes will throw an error. Other types and validation rules are
          also available.
        </p>

        <h2 className="text-2xl font-bold mb-2">
          What is the main difference between nodejs and express js?
        </h2>
        <p className="text-lg font-medium mb-10">
          Ans: NodeJS is the package, which provides the JavaScript run-time
          environment, whereas Express is a framework that sits on top of NodeJS
          and helps us to handle requests and responses
        </p>

        <h2 className="text-2xl font-bold mb-2">
          What is a custom hook, and why will you create a custom hook?
        </h2>
        <p className="text-lg font-medium mb-10">
          Ans: A custom hook is a reusable function in React that encapsulates
          stateful logic and can be shared across multiple components. It allows
          you to abstract complex logic into a separate function and use it in
          different parts of your application. You might create a custom hook to
          simplify and reuse code, improve code organization, and make your
          components more readable and maintainable
        </p>
      </div>
    </div>
  );
};

export default Blog;
