'use client'

import React, { useEffect } from 'react'
import Auth from './Auth/Auth';
import { useSession } from 'next-auth/react';
import SignoutBtn from './SignoutBtn';

const Contents = () => {
	const {data: session} = useSession();
		
  return (
    <div>
      <h1>Hello There!</h1>
			{!session ? <Auth /> : (
				<div>
					<p>You are signed in as {session.user?.email}</p>
					<SignoutBtn />
					<h2>Hello, {session.user?.name}</h2>
				</div>
			)}
    </div>
  )
}

export default Contents
