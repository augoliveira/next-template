'use client'

import { useRouter } from 'next/navigation'


import { Main } from 'components/Main';

export default function AboutPage() {
  const router = useRouter()
  return (
    <Main>
      <h2>About Page</h2>
      <button type="button" onClick={() => router.push('/')}>
        Link: Dashboard
        </button>
    </Main>
  );
}
