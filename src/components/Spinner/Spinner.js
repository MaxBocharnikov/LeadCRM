import React from 'react';

import './Spinner.css'

const Spinner = () => {
    const style = {
        background: 'none'
    };
    return (
            <svg xmlns="http://www.w3.org/2000/svg" width="170px" height="170px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="lds-rolling custom-spinner" style={style}><circle cx="50" cy="50" fill="none" ng-attr-stroke="{{config.color}}" ng-attr-stroke-width="{{config.width}}" ng-attr-r="{{config.radius}}" ng-attr-stroke-dasharray="{{config.dasharray}}" stroke="#5bd8e1" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138" transform="rotate(122.687 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"/></circle></svg>
    )
}

export default Spinner;