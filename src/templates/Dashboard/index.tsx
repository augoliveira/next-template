'use client'

import { useRouter } from 'next/navigation'

import { Main } from 'components/Main/';

import * as S from './styles';
import Link from 'next/link';

const Dashboard = () => {
  const router = useRouter()
  return (
    <Main>
      <S.Container>
      <button type="button" onClick={() => router.push('/about')}>
        Link: About
        </button>
        <h1 className="text-4xl font-extrabold">
        Pagina
      </h1>
      </S.Container>

    </Main>
  );
};

export default Dashboard;
