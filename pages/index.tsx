import { NextPage } from 'next';
import Head from 'next/head';

import { SAbout, SHero, SProject, SSkill, } from '../components/components';

import classNames from 'classnames';


const Home:NextPage = () => {

    return (
        <>
            <Head>
                <title>Hatta Portfolio</title>
            </Head>
            {/* Header */}
            
            {/* <main className="relative z-[1]"> */}
                <SHero />
                <SAbout />
                <SSkill />
                <SProject />
            {/* </main> */}

            {/* Footer */}

        </>
    )
}
export default Home;