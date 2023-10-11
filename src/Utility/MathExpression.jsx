import React from 'react';
import MathJax from 'react-mathjax2';

// eslint-disable-next-line react/prop-types
const MathExpression = ({ expression }) => {

    return (
        <MathJax.Context input="tex">
            <div>
                <MathJax.Node inline>{expression}</MathJax.Node>
            </div>
        </MathJax.Context>
    );
};

export default MathExpression;
