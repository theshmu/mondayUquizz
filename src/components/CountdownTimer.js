import React, { Fragment, useEffect, useState } from "react";

const CountdownTimer = ({timer, total}) =>
{




    return (
        <div className={'text-center text-white font-semibold my-5'}>
            <h1>Remaining Time: {total - timer} seconds</h1>
        </div>
    );
}


export default CountdownTimer;