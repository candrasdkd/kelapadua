import React, { LegacyRef, forwardRef } from 'react';

interface TableProps {
    data: Array<any>;
    ref: LegacyRef<HTMLTableElement> | undefined;
}

const CustomTable: React.FC<TableProps> = forwardRef(({ data }, ref) => {
    return (
        <table ref={ref} style={{ borderCollapse: 'collapse', margin: 'auto' }}>
            <thead>
                <tr style={{ backgroundColor: "#5C86FF", border: '1px solid black' }}>
                    <th style={{ border: '1px solid black', padding: '8px', fontSize: '12px' }}>NAMA</th>
                    <th style={{ border: '1px solid black', padding: '8px', fontSize: '12px' }}>MINGGU PERTAMA</th>
                    <th style={{ border: '1px solid black', padding: '8px', fontSize: '12px' }}>MINGGU KEDUA</th>
                    <th style={{ border: '1px solid black', padding: '8px', fontSize: '12px' }}>MINGGU KETIGA</th>
                    <th style={{ border: '1px solid black', padding: '8px', fontSize: '12px' }}>MINGGU KEEMPAT</th>
                    <th style={{ border: '1px solid black', padding: '8px', fontSize: '12px' }}>MINGGU KELIMA</th>
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
                        <td colSpan={6} style={{ border: '1px solid black', padding: '8px' }}>Data kosong</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
});

export default CustomTable;

