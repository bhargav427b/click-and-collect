import React from 'react';

import { auth } from './../firebase';

const SignOutButton = () =>
    <button
        type="button"
        onClick={auth.doSignOut}
    >
        Sign Out
    </button>

export default SignOutButton;



// WEBPACK FOOTER //
// src/components/SignOut/index.js