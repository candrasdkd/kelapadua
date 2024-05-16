import { useCallback, useEffect, useRef, useState } from 'react';
import SensusTable from '../../components/tableSensus';
// import { DATA } from '../../data';
import ReactToPrint from 'react-to-print';
import { MdPrint } from "react-icons/md";
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Alert, Autocomplete, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { IoFilterSharp } from "react-icons/io5";
import { IoIosHome } from "react-icons/io";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const PDFGenerator = () => {
    const componentRef = useRef<HTMLTableElement>(null);
    const onBeforeGetContentResolve = useRef<Function | null>(null);
    const theme = useTheme();
    const [data, setData] = useState<any>([]);
    const [filteredData, setFilteredData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [showPrint, setShowPrint] = useState<boolean>(false)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [selectedKelompok, setSelectedKelompok] = useState({ id: 1, label: "Semua" });
    const [selectedJenjang, setSelectedJenjang] = useState({ id: 1, label: "Semua" });
    const [selectedJenisKelamin, setSelectedJenisKelamin] = useState({ id: 1, label: "Semua" });
    const [text, setText] = useState("teks lama membosankan");
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const emptyData = [
        { NAMA: "KOSONG", "JENIS KELAMIN": "", JENJANG: "", "STATUS PERNIKAHAN": "", KELOMPOK: "", PRIORITY: "" },
        { NAMA: "KOSONG", "JENIS KELAMIN": "", JENJANG: "", "STATUS PERNIKAHAN": "", KELOMPOK: "", PRIORITY: "" },
        { NAMA: "KOSONG", "JENIS KELAMIN": "", JENJANG: "", "STATUS PERNIKAHAN": "", KELOMPOK: "", PRIORITY: "" },
        { NAMA: "KOSONG", "JENIS KELAMIN": "", JENJANG: "", "STATUS PERNIKAHAN": "", KELOMPOK: "", PRIORITY: "" },
        { NAMA: "KOSONG", "JENIS KELAMIN": "", JENJANG: "", "STATUS PERNIKAHAN": "", KELOMPOK: "", PRIORITY: "" },
        { NAMA: "KOSONG", "JENIS KELAMIN": "", JENJANG: "", "STATUS PERNIKAHAN": "", KELOMPOK: "", PRIORITY: "" },
        { NAMA: "KOSONG", "JENIS KELAMIN": "", JENJANG: "", "STATUS PERNIKAHAN": "", KELOMPOK: "", PRIORITY: "" },
        // Tambahkan data kosong sesuai kebutuhan
    ];

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

        fetch('https://sheetdb.io/api/v1/uijf2hx2kvi0k')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                const transformData = data.map((item: any) => {
                    return {
                        NAMA: item.NAMA,
                        "JENIS KELAMIN": item["JENIS KELAMIN"],
                        JENJANG: item.JENJANG,
                        "STATUS PERNIKAHAN": item["STATUS PERNIKAHAN"],
                        KELOMPOK: item.KELOMPOK,
                        PRIORITY: parseInt(item.PRIORITY),
                    }
                })
                setData(transformData);
                setFilteredData(transformData);
                setShowModal(true)
                setLoading(false);
            })
            .catch((error: any) => {
                setLoading(false);
                Alert(error)
            });

        // const transformData = DATA.map((item: any) => {
        //     return {
        //         NAMA: item.NAMA,
        //         "JENIS KELAMIN": item["JENIS KELAMIN"],
        //         JENJANG: item.JENJANG,
        //         "STATUS PERNIKAHAN": item["STATUS PERNIKAHAN"],
        //         KELOMPOK: item.KELOMPOK,
        //         PRIORITY: parseInt(item.PRIORITY),
        //     }
        // })
        // setTimeout(() => {
        //     setData(transformData);
        //     setFilteredData(transformData);
        //     setLoading(false);
        // }, 2000);
    });

    const handleFilter = useCallback(() => {
        let filteredData = data.filter((item: any) => {
            return (
                (selectedKelompok?.label === "Semua" || item.KELOMPOK === selectedKelompok?.label) &&
                (
                    (selectedJenjang.label === "Semua" && item.JENJANG !== "Balita" && item.JENJANG !== "Cabe Rawit") ||
                    (selectedJenjang.label === "Muda/i" && (item.JENJANG === "Remaja" || item.JENJANG === "Pra Remaja" || item.JENJANG === "Pra Nikah")) ||
                    (selectedJenjang.label === "Bukan Muda/i" && (item.JENJANG === "Dewasa" || item.JENJANG === "Lansia"))
                ) &&
                (selectedJenisKelamin.label === "Semua" || item["JENIS KELAMIN"] === selectedJenisKelamin.label)
            );
        });

        filteredData.sort((a: any, b: any) => {
            // Prioritaskan berdasarkan PRIORITY
            if (a.PRIORITY !== b.PRIORITY) {
                return a.PRIORITY - b.PRIORITY;
            }
            // Prioritaskan lansia di atas dewasa
            if (a.JENJANG !== b.JENJANG) {
                if (a.JENJANG === "Lansia" && b.JENJANG !== "Lansia") {
                    return -1;
                } else if (a.JENJANG !== "Lansia" && b.JENJANG === "Lansia") {
                    return 1;
                }
            }
            // Prioritaskan status pernikahan
            if (a["STATUS PERNIKAHAN"] !== b["STATUS PERNIKAHAN"]) {
                if (a["STATUS PERNIKAHAN"] === "Menikah" || a["STATUS PERNIKAHAN"] === "Duda" || a["STATUS PERNIKAHAN"] === "Janda") {
                    return -1;
                } else {
                    return 1;
                }
            }
            // Jika status pernikahan dan jenjang sama, urutkan berdasarkan nama
            return a.NAMA.localeCompare(b.NAMA);
        });

        setFilteredData(filteredData);
    }, [data, selectedKelompok, selectedJenjang, selectedJenisKelamin]);

    useEffect(() => {
        handleFilter();
    }, [handleFilter]);

    return (
        <div>
            <Modal
                open={showModal}
                onClose={toggleModal}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: '70%', borderRadius: '16px', borderWidth: 0.5 }}>
                    <Typography variant="h6" gutterBottom textAlign={"center"} style={{ marginBottom: 20 }}>
                        FILTER DATA
                    </Typography>
                    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Autocomplete
                            disablePortal
                            value={selectedKelompok}
                            id="combo-box-demo"
                            options={[
                                { id: 1, label: "Semua" },
                                { id: 2, label: "Kelompok 1" },
                                { id: 3, label: "Kelompok 2" },
                                { id: 4, label: "Kelompok 3" },
                                { id: 5, label: "Kelompok 4" },
                                { id: 6, label: "Kelompok 5" },
                            ]}
                            sx={{ width: 300 }}
                            onChange={(event: any, newValue: any) => {
                                setSelectedKelompok(newValue);
                            }}
                            isOptionEqualToValue={(option, value) => option.label.toLowerCase() === value.label.toLowerCase()}
                            renderInput={(params) => <TextField {...params} label="Kelompok" />}
                        />
                        <Autocomplete
                            disablePortal
                            value={selectedJenjang}
                            id="combo-box-demo"
                            options={[
                                { id: 1, label: "Semua" },
                                { id: 2, label: "Muda/i" },
                                { id: 3, label: "Bukan Muda/i" },
                            ]}
                            sx={{ width: 300 }}
                            style={{ marginRight: isMobile ? 0 : 20, marginLeft: isMobile ? 0 : 20, marginTop: isMobile ? 20 : 0, marginBottom: isMobile ? 20 : 0 }}
                            onChange={(event: any, newValue: any) => {
                                setSelectedJenjang(newValue);
                            }}
                            isOptionEqualToValue={(option, value) => option.label.toLowerCase() === value.label.toLowerCase()}
                            renderInput={(params) => <TextField {...params} label="Jenjang" />}
                        />
                        <Autocomplete
                            disablePortal
                            value={selectedJenisKelamin}
                            id="combo-box-demo"
                            options={[
                                { id: 1, label: "Semua" },
                                { id: 2, label: "Perempuan" },
                                { id: 3, label: "Laki - Laki" },
                            ]}
                            sx={{ width: 300 }}
                            onChange={(event: any, newValue: any) => {
                                setSelectedJenisKelamin(newValue);
                            }}
                            isOptionEqualToValue={(option, value) => option.label.toLowerCase() === value.label.toLowerCase()}
                            renderInput={(params) => <TextField {...params} label="Jenis Kelamin" />}
                        />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: 30 }}>
                        <Button
                            variant="contained"
                            color="info"
                            style={{ width: isMobile ? '90%' : '50%', height: 45 }}
                            onClick={toggleModal}>
                            TUTUP
                        </Button>
                    </div>
                </Box>
            </Modal>

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
                    <SensusTable ref={componentRef} kelompok={selectedKelompok?.label.toUpperCase()} data={[...filteredData, ...emptyData]} />
                    {!showPrint &&
                        <button
                            onClick={toggleModal}
                            className='floating-button'
                            style={{
                                position: 'fixed',
                                bottom: isMobile ? '80px' : '90px',
                                right: '30px',
                                backgroundColor: 'orange',
                                width: isMobile ? 50 : 60,
                                height: isMobile ? 50 : 60,
                                borderRadius: 40,
                                borderWidth: 0.5
                            }}>
                            <IoFilterSharp size={isMobile ? 25 : 30} />
                        </button>
                    }
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

export default PDFGenerator;
