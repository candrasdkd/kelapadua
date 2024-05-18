import { useCallback, useEffect, useRef, useState } from 'react';
import TableSensus from '../../components/tableTotalSensus';
import { DataSensus, DataKK } from '../../data';
import ReactToPrint from 'react-to-print';
import { MdPrint } from "react-icons/md";
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { IoIosHome } from "react-icons/io";

const TotalSensus = () => {
    const componentRef = useRef<HTMLTableElement>(null);
    const onBeforeGetContentResolve = useRef<Function | null>(null);
    const theme = useTheme();
    const [data, setData] = useState<any>([]);
    const [countKK, setCountKK] = useState({})
    const [countJenjang, setCountJenjang] = useState({})
    const [loading, setLoading] = useState<boolean>(false);
    const [showPrint, setShowPrint] = useState<boolean>(false)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [text, setText] = useState("teks lama membosankan");
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const toggleModal = (): void => {
        setShowModal(!showModal)
    }

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

    const handleDownload = (() => {
        setLoading(true)

        // fetch('https://sheetdb.io/api/v1/uijf2hx2kvi0k')
        //     .then((response) => {
        //         if (!response.ok) {
        //             throw new Error('Network response was not ok');
        //         }
        //         return response.json();
        //     })
        //     .then((data) => {
        //         const transformData = data.map((item: any) => {
        //             return {
        //                 NAMA: item.NAMA,
        //                 "JENIS KELAMIN": item["JENIS KELAMIN"],
        //                 JENJANG: item.JENJANG,
        //                 "STATUS PERNIKAHAN": item["STATUS PERNIKAHAN"],
        //                 KELOMPOK: item.KELOMPOK,
        //                 PRIORITY: parseInt(item.PRIORITY),
        //             }
        //         })
        //         setData(transformData);
        //         setFilteredData(transformData);
        //         setShowModal(true)
        //         setLoading(false);
        //     })
        //     .catch((error: any) => {
        //         setLoading(false);
        //         Alert(error)
        //     });

        const transformData = DataSensus.map((item: any) => {
            return {
                NAMA: item.NAMA,
                "JENIS KELAMIN": item["JENIS KELAMIN"],
                JENJANG: item.JENJANG,
                "STATUS PERNIKAHAN": item["STATUS PERNIKAHAN"],
                KELOMPOK: item.KELOMPOK,
                PRIORITY: parseInt(item.PRIORITY),
            }
        })
        setTimeout(() => {
            setData(transformData);
            setLoading(false);
        }, 2000);
    });


    useEffect(() => {
        countTotalKK()
        categorizeData()
    }, []);

    const groupByKelompok = () => {
        return DataKK.reduce((acc, item) => {
            const kelompokKey = item.KELOMPOK || 'Tidak Diketahui'; // Menangani kasus di mana item.KELOMPOK mungkin undefined atau null
            if (!acc[kelompokKey]) {
                acc[kelompokKey] = [];
            }
            acc[kelompokKey].push(item);
            return acc;
        }, {} as Record<string, any[]>);
    };

    const countTotalKK = () => {
        const groupedData = groupByKelompok();
        const kelompokCounts = Object.keys(groupedData).reduce((acc: Record<string, number>, kelompok: string) => {
            acc[kelompok] = groupedData[kelompok].length ? groupedData[kelompok].length : 0;
            return acc;
        }, {});
        setCountKK(kelompokCounts);
    }

    const categorizeData = () => {
        const initialCategories = {
            balita_l: [],
            balita_p: [],
            caberawit_l: [],
            caberawit_p: [],
            praremaja_l: [],
            praremaja_p: [],
            remaja_l: [],
            remaja_p: [],
            pranikah_l: [],
            pranikah_p: [],
            menikah_l: [],
            menikah_p: [],
            janda: [],
            duda: []
        };

        const createGroupedData = () => ({
            kelompok1: JSON.parse(JSON.stringify(initialCategories)),
            kelompok2: JSON.parse(JSON.stringify(initialCategories)),
            kelompok3: JSON.parse(JSON.stringify(initialCategories)),
            kelompok4: JSON.parse(JSON.stringify(initialCategories)),
            kelompok5: JSON.parse(JSON.stringify(initialCategories))
        });

        const groupedData = createGroupedData();

        DataSensus.forEach(person => {
            const { KELOMPOK, JENJANG, "JENIS KELAMIN": JENIS_KELAMIN, "STATUS PERNIKAHAN": STATUS_PERNIKAHAN } = person;

            if (KELOMPOK && KELOMPOK.startsWith("Kelompok ")) {
                const groupNumber = parseInt(KELOMPOK.split(" ")[1]);
                if (groupNumber >= 1 && groupNumber <= 5) {
                    const groupKey = `kelompok${groupNumber}` as keyof typeof groupedData;
                    const categories = groupedData[groupKey];

                    if (JENJANG === "Balita") {
                        JENIS_KELAMIN === "Laki - Laki" ? categories.balita_l.push(person) : categories.balita_p.push(person);
                    } else if (JENJANG === "Cabe Rawit") {
                        JENIS_KELAMIN === "Laki - Laki" ? categories.caberawit_l.push(person) : categories.caberawit_p.push(person);
                    } else if (JENJANG === "Pra Remaja") {
                        JENIS_KELAMIN === "Laki - Laki" ? categories.praremaja_l.push(person) : categories.praremaja_p.push(person);
                    } else if (JENJANG === "Remaja") {
                        JENIS_KELAMIN === "Laki - Laki" ? categories.remaja_l.push(person) : categories.remaja_p.push(person);
                    } else if (JENJANG === "Pra Nikah" || (JENJANG === "Dewasa" && STATUS_PERNIKAHAN === "Belum Menikah")) {
                        JENIS_KELAMIN === "Laki - Laki" ? categories.pranikah_l.push(person) : categories.pranikah_p.push(person);
                    } else if ((JENJANG === "Lansia" && STATUS_PERNIKAHAN === "Menikah") || (JENJANG === "Dewasa" && STATUS_PERNIKAHAN === "Menikah")) {
                        JENIS_KELAMIN === "Laki - Laki" ? categories.menikah_l.push(person) : categories.menikah_p.push(person);
                    }

                    if (STATUS_PERNIKAHAN === "Janda") {
                        categories.janda.push(person);
                    } else if (STATUS_PERNIKAHAN === "Duda") {
                        categories.duda.push(person);
                    }
                }
            }
        });
        const totalBalita_lDesa = (['kelompok1', 'kelompok2', 'kelompok3', 'kelompok4', 'kelompok5'] as const)
            .reduce((sum, group) => sum + groupedData[group].balita_l.length, 0);
        const totalBalita_pDesa = (['kelompok1', 'kelompok2', 'kelompok3', 'kelompok4', 'kelompok5'] as const)
            .reduce((sum, group) => sum + groupedData[group].balita_p.length, 0);
        const totalCaberawit_lDesa = (['kelompok1', 'kelompok2', 'kelompok3', 'kelompok4', 'kelompok5'] as const)
            .reduce((sum, group) => sum + groupedData[group].caberawit_l.length, 0);
        const totalCaberawit_pDesa = (['kelompok1', 'kelompok2', 'kelompok3', 'kelompok4', 'kelompok5'] as const)
            .reduce((sum, group) => sum + groupedData[group].caberawit_p.length, 0);
        const totalPraremaja_lDesa = (['kelompok1', 'kelompok2', 'kelompok3', 'kelompok4', 'kelompok5'] as const)
            .reduce((sum, group) => sum + groupedData[group].praremaja_l.length, 0);
        const totalPraremaja_pDesa = (['kelompok1', 'kelompok2', 'kelompok3', 'kelompok4', 'kelompok5'] as const)
            .reduce((sum, group) => sum + groupedData[group].praremaja_p.length, 0);
        const totalRemaja_lDesa = (['kelompok1', 'kelompok2', 'kelompok3', 'kelompok4', 'kelompok5'] as const)
            .reduce((sum, group) => sum + groupedData[group].remaja_l.length, 0);
        const totalRemaja_pDesa = (['kelompok1', 'kelompok2', 'kelompok3', 'kelompok4', 'kelompok5'] as const)
            .reduce((sum, group) => sum + groupedData[group].remaja_p.length, 0);
        const totalPraNikah_lDesa = (['kelompok1', 'kelompok2', 'kelompok3', 'kelompok4', 'kelompok5'] as const)
            .reduce((sum, group) => sum + groupedData[group].pranikah_l.length, 0);
        const totalPraNikah_pDesa = (['kelompok1', 'kelompok2', 'kelompok3', 'kelompok4', 'kelompok5'] as const)
            .reduce((sum, group) => sum + groupedData[group].pranikah_p.length, 0);
        const totalMenikah_lDesa = (['kelompok1', 'kelompok2', 'kelompok3', 'kelompok4', 'kelompok5'] as const)
            .reduce((sum, group) => sum + groupedData[group].menikah_l.length, 0);
        const totalMenikah_pDesa = (['kelompok1', 'kelompok2', 'kelompok3', 'kelompok4', 'kelompok5'] as const)
            .reduce((sum, group) => sum + groupedData[group].menikah_p.length, 0);
        const totalDudaDesa = (['kelompok1', 'kelompok2', 'kelompok3', 'kelompok4', 'kelompok5'] as const)
            .reduce((sum, group) => sum + groupedData[group].duda.length, 0);
        const totalJandaDesa = (['kelompok1', 'kelompok2', 'kelompok3', 'kelompok4', 'kelompok5'] as const)
            .reduce((sum, group) => sum + groupedData[group].janda.length, 0);


        setCountJenjang({
            ...groupedData,
            // KELOMPOK 1
            totalLakiKelompok1: groupedData.kelompok1.balita_l.length + groupedData.kelompok1.caberawit_l.length + groupedData.kelompok1.praremaja_l.length + groupedData.kelompok1.remaja_l.length + groupedData.kelompok1.pranikah_l.length + groupedData.kelompok1.menikah_l.length + groupedData.kelompok1.duda.length,
            totalPerempuanKelompok1: groupedData.kelompok1.balita_p.length + groupedData.kelompok1.caberawit_p.length + groupedData.kelompok1.praremaja_p.length + groupedData.kelompok1.remaja_p.length + groupedData.kelompok1.pranikah_p.length + groupedData.kelompok1.menikah_p.length + groupedData.kelompok1.janda.length,
            totalKeseluruhanKelompok1: groupedData.kelompok1.balita_l.length + groupedData.kelompok1.caberawit_l.length + groupedData.kelompok1.praremaja_l.length + groupedData.kelompok1.remaja_l.length + groupedData.kelompok1.pranikah_l.length + groupedData.kelompok1.menikah_l.length + groupedData.kelompok1.duda.length + groupedData.kelompok1.balita_p.length + groupedData.kelompok1.caberawit_p.length + groupedData.kelompok1.praremaja_p.length + groupedData.kelompok1.remaja_p.length + groupedData.kelompok1.pranikah_p.length + groupedData.kelompok1.menikah_p.length + groupedData.kelompok1.janda.length,
            totalBalitaLKelompok1: groupedData.kelompok1.balita_l.length,
            totalBalitaPKelompok1: groupedData.kelompok1.balita_p.length,
            totalCabeRawitLKelompok1: groupedData.kelompok1.caberawit_l.length,
            totalCabeRawitPKelompok1: groupedData.kelompok1.caberawit_p.length,
            totalPraRemajaLKelompok1: groupedData.kelompok1.praremaja_l.length,
            totalPraRemajaPKelompok1: groupedData.kelompok1.praremaja_p.length,
            totalRemajaLKelompok1: groupedData.kelompok1.remaja_l.length,
            totalRemajaPKelompok1: groupedData.kelompok1.remaja_p.length,
            totalPraNikahLKelompok1: groupedData.kelompok1.pranikah_l.length,
            totalPraNikahPKelompok1: groupedData.kelompok1.pranikah_p.length,
            totalMenikahLKelompok1: groupedData.kelompok1.menikah_l.length,
            totalMenikahPKelompok1: groupedData.kelompok1.menikah_p.length,
            totalDudaKelompok1: groupedData.kelompok1.duda.length,
            totalJandaKelompok1: groupedData.kelompok1.janda.length,

            // KELOMPOK 2
            totalBalitaLKelompok2: groupedData.kelompok2.balita_l.length,
            totalBalitaPKelompok2: groupedData.kelompok2.balita_p.length,
            totalCabeRawitLKelompok2: groupedData.kelompok2.caberawit_l.length,
            totalCabeRawitPKelompok2: groupedData.kelompok2.caberawit_p.length,
            totalPraRemajaLKelompok2: groupedData.kelompok2.praremaja_l.length,
            totalPraRemajaPKelompok2: groupedData.kelompok2.praremaja_p.length,
            totalRemajaLKelompok2: groupedData.kelompok2.remaja_l.length,
            totalRemajaPKelompok2: groupedData.kelompok2.remaja_p.length,
            totalPraNikahLKelompok2: groupedData.kelompok2.pranikah_l.length,
            totalPraNikahPKelompok2: groupedData.kelompok2.pranikah_p.length,
            totalMenikahLKelompok2: groupedData.kelompok2.menikah_l.length,
            totalMenikahPKelompok2: groupedData.kelompok2.menikah_p.length,
            totalDudaKelompok2: groupedData.kelompok2.duda.length,
            totalJandaKelompok2: groupedData.kelompok2.janda.length,

            // KELOMPOK 3
            totalBalitaLKelompok3: groupedData.kelompok3.balita_l.length,
            totalBalitaPKelompok3: groupedData.kelompok3.balita_p.length,
            totalCabeRawitLKelompok3: groupedData.kelompok3.caberawit_l.length,
            totalCabeRawitPKelompok3: groupedData.kelompok3.caberawit_p.length,
            totalPraRemajaLKelompok3: groupedData.kelompok3.praremaja_l.length,
            totalPraRemajaPKelompok3: groupedData.kelompok3.praremaja_p.length,
            totalRemajaLKelompok3: groupedData.kelompok3.remaja_l.length,
            totalRemajaPKelompok3: groupedData.kelompok3.remaja_p.length,
            totalPraNikahLKelompok3: groupedData.kelompok3.pranikah_l.length,
            totalPraNikahPKelompok3: groupedData.kelompok3.pranikah_p.length,
            totalMenikahLKelompok3: groupedData.kelompok3.menikah_l.length,
            totalMenikahPKelompok3: groupedData.kelompok3.menikah_p.length,
            totalDudaKelompok3: groupedData.kelompok3.duda.length,
            totalJandaKelompok3: groupedData.kelompok3.janda.length,

            // KELOMPOK 4
            totalBalitaLKelompok4: groupedData.kelompok4.balita_l.length,
            totalBalitaPKelompok4: groupedData.kelompok4.balita_p.length,
            totalCabeRawitLKelompok4: groupedData.kelompok4.caberawit_l.length,
            totalCabeRawitPKelompok4: groupedData.kelompok4.caberawit_p.length,
            totalPraRemajaLKelompok4: groupedData.kelompok4.praremaja_l.length,
            totalPraRemajaPKelompok4: groupedData.kelompok4.praremaja_p.length,
            totalRemajaLKelompok4: groupedData.kelompok4.remaja_l.length,
            totalRemajaPKelompok4: groupedData.kelompok4.remaja_p.length,
            totalPraNikahLKelompok4: groupedData.kelompok4.pranikah_l.length,
            totalPraNikahPKelompok4: groupedData.kelompok4.pranikah_p.length,
            totalMenikahLKelompok4: groupedData.kelompok4.menikah_l.length,
            totalMenikahPKelompok4: groupedData.kelompok4.menikah_p.length,
            totalDudaKelompok4: groupedData.kelompok4.duda.length,
            totalJandaKelompok4: groupedData.kelompok4.janda.length,

            // KELOMPOK 5
            totalBalitaLKelompok5: groupedData.kelompok5.balita_l.length,
            totalBalitaPKelompok5: groupedData.kelompok5.balita_p.length,
            totalCabeRawitLKelompok5: groupedData.kelompok5.caberawit_l.length,
            totalCabeRawitPKelompok5: groupedData.kelompok5.caberawit_p.length,
            totalPraRemajaLKelompok5: groupedData.kelompok5.praremaja_l.length,
            totalPraRemajaPKelompok5: groupedData.kelompok5.praremaja_p.length,
            totalRemajaLKelompok5: groupedData.kelompok5.remaja_l.length,
            totalRemajaPKelompok5: groupedData.kelompok5.remaja_p.length,
            totalPraNikahLKelompok5: groupedData.kelompok5.pranikah_l.length,
            totalPraNikahPKelompok5: groupedData.kelompok5.pranikah_p.length,
            totalMenikahLKelompok5: groupedData.kelompok5.menikah_l.length,
            totalMenikahPKelompok5: groupedData.kelompok5.menikah_p.length,
            totalDudaKelompok5: groupedData.kelompok5.duda.length,
            totalJandaKelompok5: groupedData.kelompok5.janda.length,

            // DESA
            totalBalita_lDesa,
            totalBalita_pDesa,
            totalCaberawit_lDesa,
            totalCaberawit_pDesa,
            totalPraremaja_lDesa,
            totalPraremaja_pDesa,
            totalRemaja_lDesa,
            totalRemaja_pDesa,
            totalPraNikah_lDesa,
            totalPraNikah_pDesa,
            totalMenikah_lDesa,
            totalMenikah_pDesa,
            totalDudaDesa,
            totalJandaDesa
        });
    };

    return (
        <div>
            {data.length > 0 ?
                <>
                    <ReactToPrint
                        content={reactToPrintContent}
                        documentTitle="Absensi Desa"
                        onAfterPrint={handleAfterPrint}
                        onBeforeGetContent={handleOnBeforeGetContent}
                        onBeforePrint={handleBeforePrint}
                        removeAfterPrint
                        trigger={() => {
                            return showPrint ?
                                <div style={{ display: 'none' }}></div> :
                                <button
                                    onClick={toggleModal}
                                    className='floating-button'
                                    style={{
                                        position: 'fixed',
                                        bottom: '20px',
                                        right: '30px',
                                        backgroundColor: 'orange',
                                        width: isMobile ? 50 : 60,
                                        height: isMobile ? 50 : 60,
                                        borderRadius: 40,
                                        borderWidth: 0.5
                                    }}>
                                    <MdPrint size={isMobile ? 25 : 30} />
                                </button>
                        }}
                    />
                    <TableSensus
                        ref={componentRef}
                        jumlahJenjang={countJenjang}
                        jumlahKK={countKK}
                    />

                    {!showPrint &&
                        <button
                            onClick={toggleModal}
                            className='floating-button'
                            style={{
                                position: 'fixed',
                                bottom: isMobile ? '140px' : '160px',
                                right: '30px',
                                backgroundColor: 'orange',
                                width: isMobile ? 50 : 60,
                                height: isMobile ? 50 : 60,
                                borderRadius: 40,
                                borderWidth: 0.5
                            }}>
                            <Link to="/">
                                <IoIosHome size={isMobile ? 25 : 30} color='black' />
                            </Link>
                        </button>
                    }
                </> :
                <div style={{ height: window.innerHeight, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <button className="btn-connect" type="button" onClick={() => handleDownload()}>
                        <strong>CONNECT TO SERVER</strong>
                        <div id="container-stars">
                            <div id="stars"></div>
                        </div>
                        <div id="glow">
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                    </button>
                </div>
            }

            {loading && <div className="loading-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="loader">
                    <div data-glitch="Loading..." className="glitch">Loading...</div>
                </div>
            </div>}

        </div>

    );
};

export default TotalSensus;
