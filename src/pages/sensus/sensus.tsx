import { useEffect, useState } from 'react';
import { Document, Page, View, StyleSheet, } from '@react-pdf/renderer';
import SensusTable from '../../components/tableSensus';
import { DATA } from '../../data';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        // margin: 10,
        paddingHorizontal: 10,
        flexGrow: 1,
    }
});


const PDFGenerator = () => {
    const [fetchedData, setFetchedData] = useState([]);
    const [print, setPrint] = useState(false)

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('https://sheetdb.io/api/v1/uijf2hx2kvi0k');
    //             const data = await response.json();
    //             setFetchedData(data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    window.onbeforeprint = function (event) {
        
        setPrint(true)
        // Akan dipanggil sebelum fungsi window.print() dijalankan

        // Memeriksa apakah pencetakan telah dibatalkan
        window.onafterprint = function (event) {
            setPrint(false)
            // Akan dipanggil setelah fungsi window.print() selesai atau dibatalkan
            // setPrint(!print)
            // Memeriksa apakah pencetakan telah dibatalkan
            if (!event.defaultPrevented) {
                setPrint(false)
                console.log('Pencetakan dibatalkan.');
                // Lakukan tindakan yang sesuai jika pencetakan dibatalkan
            }
        };
    };

    const handlePrint = () => {
        setPrint(true)
        setTimeout(() => {
            window.print()
        }, 500)
    }
    
    return (
        <View style={{ paddingHorizontal: 20 }}>
            <Document>
                <Page size="A4" style={styles.page}>
                    {/* <View style={styles.section}> */}
                    <SensusTable data={DATA.sort((a, b) => a.NAMA.localeCompare(b.NAMA))} />
                    {/* </View> */}
                    <div style={{ textAlign:'right', marginRight:120,marginTop:100 }}>
                        <p style={{}}>Paraf,</p>
                        <p style={{ height: "80px" }} />
                        <p>H. Limantioko</p>
                    </div>
                </Page>
            </Document>
            {print === false &&
                <div style={{ position: 'fixed', bottom: 20, right: 20 }}>
                    <button style={{ borderRadius: '50%', padding: '10px', width: '50px', height: '50px', backgroundColor: '#007bff', color: '#fff' }} onClick={() => handlePrint()}>Cetak</button>
                </div>
            }

        </View >

    );
};

export default PDFGenerator;





