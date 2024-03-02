'use client'

import React from 'react'
import { signOut } from 'next-auth/react';

const SignoutBtn = () => {

    const handleSignout = () => {
        try {
            signOut();
        }
        catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
        <button onClick={handleSignout}>Sign Out</button>  
    </div>
  )
}

export default SignoutBtn
