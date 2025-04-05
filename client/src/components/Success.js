import React from 'react';

function Success(props) {
    return (
        <>
            <div>
                <div className="alert alert-success" role="alert">
                    <h2>
                        {props.success}
                    </h2>
                </div>
            </div>
        </>
    );
}

export default Success;