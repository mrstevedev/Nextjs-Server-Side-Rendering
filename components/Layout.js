import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => (
    <div>
        <Head>
            <title>BitsPrice</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.css" />
        </Head>
        <Navbar />
        <div className="container-fluid">
            {props.children}
        </div>
    </div>
);

export default Layout;