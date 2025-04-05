import React from 'react';

 function Error(props) {
    return (
        <>
            <div>
                <div className="alert alert-danger d-flex justify-content-center" role="alert">
                   <h2>
                       {props.error}
                   </h2>
                </div>
            </div>
        </>
    );
}

export default Error;