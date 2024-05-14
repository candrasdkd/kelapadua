import { useCallback, useEffect, useRef, useState } from 'react';
import SensusTable from '../../components/tableSensus';
import { DATA } from '../../data';
import ReactToPrint from 'react-to-print';
import { MdPrint } from "react-icons/md";
import { IoChevronBackCircle } from "react-icons/io5";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const PDFGenerator = () => {
    const { id } = useParams();
    const componentRef = useRef<HTMLTableElement>(null);
    const onBeforeGetContentResolve = useRef<Function | null>(null);
    const [loading, setLoading] = useState(false);
    const [showPrint, setShowPrint] = useState(false)
    const [text, setText] = useState("teks lama membosankan");

    const handleAfterPrint = useCallback(() => {
        console.log("`onAfterPrint` dipanggil");
        setShowPrint(false)
    }, []);

    const handleBeforePrint = useCallback(() => {
        console.log("`onBeforePrint` dipanggil");
        setShowPrint(true)
    }, []);

    const handleOnBeforeGetContent = useCallback(() => {
        console.log("`onBeforeGetContent` dipanggil");
        setShowPrint(true)
        setLoading(true);
        setText("Memuat teks baru...");
        return new Promise<void>((resolve) => {
            onBeforeGetContentResolve.current = resolve;
            setTimeout(() => {
                setLoading(false);
                setText("Teks Baru, Diperbarui!");
                resolve();
            }, 1000);
        });
    }, [setLoading, setText]);

    useEffect(() => {
        if (
            text === "Teks Baru, Diperbarui!" &&
            typeof onBeforeGetContentResolve.current === "function"
        ) {
            onBeforeGetContentResolve.current();
        }
    }, [text]);

    const reactToPrintContent = useCallback(() => {
        return componentRef.current;
    }, []);

    const reactToPrintTrigger = () => {
        return showPrint ? <div style={{ display: 'none' }}></div> : <div style={{ position: 'fixed', bottom: '20px', right: '50px' }}>
            <button className='print-button '>
                <MdPrint size={40} />
            </button>
        </div>
    }
    const filteredData = DATA.filter(item => item.KELOMPOK === `Kelompok ${id}`);
    return (
        <div>
            <Link to="/" style={{ textDecoration: 'none', color: '#000', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                <IoChevronBackCircle size={40} />Back to Home
            </Link>
            <ReactToPrint
                content={reactToPrintContent}
                documentTitle="NamaBerkasKeren"
                onAfterPrint={handleAfterPrint}
                onBeforeGetContent={handleOnBeforeGetContent}
                onBeforePrint={handleBeforePrint}
                removeAfterPrint
                trigger={reactToPrintTrigger}
            />
            {loading && <div className="loading-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <div className="typewriter">
                    <div className="slide"><i></i></div>
                    <div className="paper"></div>
                    <div className="keyboard"></div>
                </div>
            </div>}
            <SensusTable ref={componentRef} data={filteredData.sort((a, b) => a.NAMA.localeCompare(b.NAMA))} />
        </div>

    );
};

export default PDFGenerator;
