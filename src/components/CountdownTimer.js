import React, { Fragment, useEffect, useState } from "react";

const CountdownTimer = ({timer, total}) =>
{




    return (
        <div>
            <h1>Remaining Time: {total - timer} seconds</h1>
        </div>
    );
}


export default CountdownTimer;