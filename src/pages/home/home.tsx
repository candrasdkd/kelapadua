import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Link to="/template-absensi-desa" style={{ textDecoration: 'none' }}>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner">
                        <p>TEMPLATE ABSENSI DESA</p>
                    </div>
                </div>
            </Link>
            <Link to="" style={{ textDecoration: 'none', marginTop: 50 }}>
                <div className="card">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="card-inner">
                        <p>TOTAL SENSUS DESA</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Home;
