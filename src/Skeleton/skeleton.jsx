import React from 'react';

const SkeletonCard = () => {
    return (
        <div className="p-4 max-w-sm w-full mx-auto">
            <div className="border border-gray-200 rounded-2xl shadow-sm p-4 animate-pulse space-y-4">
                <div className="h-48 bg-gray-300 rounded-xl"></div>
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded w-full"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            </div>
        </div>
    );
};

export default SkeletonCard;
