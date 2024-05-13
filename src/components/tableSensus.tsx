import React from 'react';
import { PDFViewer, Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

interface TableProps {
    data: Array<any>; // Anda dapat mengganti 'any' dengan tipe data yang lebih spesifik untuk data Anda
}

const CustomTable: React.FC<TableProps> = ({ data }) => {
    return (
        <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
            <thead >
                <tr style={{ backgroundColor: "orange" }}>
                    <th style={{ border: '1px solid black', padding: '8px',fontSize: '12px' }}>NAMA</th>
                    <th style={{ border: '1px solid black', padding: '8px',fontSize: '12px' }}>MINGGU PERTAMA</th>
                    <th style={{ border: '1px solid black', padding: '8px',fontSize: '12px' }}>MINGGU KEDUA</th>
                    <th style={{ border: '1px solid black', padding: '8px',fontSize: '12px' }}>MINGGU KETIGA</th>
                    <th style={{ border: '1px solid black', padding: '8px',fontSize: '12px' }}>MINGGU KEEMPAT</th>
                    <th style={{ border: '1px solid black', padding: '8px',fontSize: '12px' }}>MINGGU KELIMA</th>

                    {/* Tambahkan header kolom lebih sesuai kebutuhan */}
                </tr>
            </thead>
            <tbody>
                {data.length > 0 ? (
                    data.map((item, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid black', padding: '8px', fontSize: '12px' }}>{item["NAMA"]}</td>
                            <td style={{ border: '1px solid black', padding: '8px', fontSize: '12px' }}></td>
                            <td style={{ border: '1px solid black', padding: '8px', fontSize: '12px' }}></td>
                            <td style={{ border: '1px solid black', padding: '8px', fontSize: '12px' }}></td>
                            <td style={{ border: '1px solid black', padding: '8px', fontSize: '12px' }}></td>
                            <td style={{ border: '1px solid black', padding: '8px', fontSize: '12px' }}></td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={2} style={{ border: '1px solid black', padding: '8px' }}>Data kosong</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default CustomTable;


