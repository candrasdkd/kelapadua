import { useEffect, useState } from 'react';
import { Document, Page, View, StyleSheet, } from '@react-pdf/renderer';
import SensusTable from '../../components/tableSensus';
// import { DATA } from '../../data';

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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://sheetdb.io/api/v1/uijf2hx2kvi0k');
                const data = await response.json();
                setFetchedData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <View style={{ paddingHorizontal: 20 }}>
            <Document>
                <Page size="A4" style={styles.page}>
                    {/* <View style={styles.section}> */}
                    <div style={{ textAlign: 'center' }}>
                        <h2>ABSENSI KELAPA DUA</h2>
                    </div>
                    <SensusTable data={fetchedData} />
                    {/* </View> */}
                </Page>
            </Document>
            <div style={{ position: 'fixed', bottom: 20, right: 20 }}>
                <button style={{ borderRadius: '50%', padding: '10px', width: '50px', height: '50px', backgroundColor: '#007bff', color: '#fff' }} onClick={() => window.print()}>Cetak</button>
            </div>
        </View>

    );
};

export default PDFGenerator;


