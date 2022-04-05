import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <h2>1.what is context api?</h2>
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
            </p>
            <br />
            <h2>2.what is semantic tag?</h2>
            <p>Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way. Elements such as "header" , "footer" and "article" are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.
            </p>
            <br />
            <h2>3. inline block inline block elements differences?</h2>
            <p>Compared to display: inline , the major difference is that inline-block allows to set a width and height on the element. Also, with display: inline , top and bottom margins and paddings are not respected, and with display: inline-block they are.
            </p>
        </div>
    );
};

export default Blogs;