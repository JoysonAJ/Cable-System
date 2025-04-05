import React from 'react';

function Loading(props) {
    return (
        <>
            <div >
                <div className="text-center p-3 mt-2">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Loading;