// TabTitle.jsx
import React from 'react';

const TabTitle = ({ title, count }) => {
    return (
        <span className="tab-title">
            {title}
            {count &&
                <span className="tab-count">{count}</span>
            }
        </span>
    );
};

export default TabTitle;
