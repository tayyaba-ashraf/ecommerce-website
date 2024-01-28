import React, { useState } from 'react'


const ViewIcons = () => {
    const [view, setView] = useState('grid'); 
    const renderViewIcon = (icon, viewMode, label) => (
        <div
            className={`view-icon ${view === viewMode ? 'active' : ''}`}
            onClick={() => setView(viewMode)}
        >
            {icon} {label}
        </div>
    )
  return {view,renderViewIcon};
}

export default ViewIcons