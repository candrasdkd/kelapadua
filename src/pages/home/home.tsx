import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="cards">
            <Link to="/template" className="card red">
                <p className="tip">TEMPLATE ABSENSI DESA</p>
                <p className="second-text">Development</p>
            </Link>
        </div>

    );
};

export default Home;
