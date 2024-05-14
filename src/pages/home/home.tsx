import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="cards">
            <Link to="/sensus/1" className="card red">
                <p className="tip">ABSENSI JAMAAH</p>
                <p className="second-text">Kelompok 1</p>
            </Link>
            <Link to="/sensus/2" className="card blue">
                <p className="tip">ABSENSI JAMAAH</p>
                <p className="second-text">Kelompok 2</p>
            </Link>
            <Link to="/sensus/3" className="card green">
                <p className="tip">ABSENSI JAMAAH</p>
                <p className="second-text">Kelompok 3</p>
            </Link>
            <Link to="/sensus/4" className="card orange">
                <p className="tip">ABSENSI JAMAAH</p>
                <p className="second-text">Kelompok 4</p>
            </Link>
            <Link to="/sensus/5" className="card gray">
                <p className="tip">ABSENSI JAMAAH</p>
                <p className="second-text">Kelompok 5</p>
            </Link>
        </div>

    );
};

export default Home;
