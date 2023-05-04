import React from 'react';

const Blog = () => {
    return (
        <div>
      <div className="bg-violet-50 py-10">
        <h2 className="text-3xl text-center font-bold">Blog Section</h2>
      </div>
      <div className="my-8 p-4 sm:p-8 rounded">
        <h2 className="text-2xl font-bold mb-2">
          When should I use Context API?
        </h2>
        <p className="text-lg font-medium mb-10">
          Ans: The React Context API is used to share data between components
          that are not directly connected in the component tree. It's useful for
          scenarios such as theming, user authentication, language selection,
          and global state. If you find yourself passing props down through
          multiple levels of components, the Context API can help you avoid prop
          drilling.
        </p>

        <h2 className="text-2xl font-bold mb-2">
          What is custom hook in react?
        </h2>
        <p className="text-lg font-medium mb-10">
          Ans: In React, a custom hook is a function that allows you to reuse
          stateful logic across multiple components. It's a way to extract
          stateful logic from a component so it can be used in other components
          without duplicating code. Custom hooks use the same hooks as regular
          components, such as useState and useEffect, but can be shared and
          reused like regular functions.
        </p>

        <h2 className="text-2xl font-bold mb-2">What is useRef in react?</h2>
        <p className="text-lg font-medium mb-10">
          Ans: In React, useRef is a hook that returns a mutable ref object that
          persists throughout the component's lifecycle. The ref object can be
          used to reference a DOM element or a value, and can be updated without
          triggering a re-render of the component. This is useful for managing
          focus, measuring elements, or accessing values in event handlers. The
          ref can also be used to share mutable data between components or
          across renders of a single component.
        </p>

        <h2 className="text-2xl font-bold mb-2">What is useMemo in react?</h2>
        <p className="text-lg font-medium mb-10">
          Ans: In React, useMemo is a hook that can help optimize performance by
          memoizing the result of a function. It takes a function and a
          dependency array and returns a memoized value. The function is only
          re-executed when one of the dependencies in the array changes,
          otherwise the memoized value is returned. This can be useful for
          expensive calculations or rendering large lists. By memoizing the
          result, unnecessary re-renders can be avoided and the overall
          performance of the application can be improved.
        </p>
      </div>
    </div>
    );
};

export default Blog;