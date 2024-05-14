import React, { LegacyRef, forwardRef } from 'react';

interface TableProps {
    data: Array<any>;
    kelompok: string | undefined,
    ref: LegacyRef<HTMLTableElement> | undefined;
}

const CustomTable: React.FC<TableProps> = forwardRef(({ data, kelompok }, ref) => {
    return (
        // <table ref={ref} style={{ borderCollapse: 'collapse', margin: 'auto' }}>
        //     <thead>
        //         <tr style={{ backgroundColor: "#5C86FF", border: '1px solid black' }}>
        //             <th style={{ border: '1px solid black', padding: '8px', fontSize: '12px' }}>NAMA</th>
        //             <th style={{ border: '1px solid black', padding: '8px', fontSize: '12px' }}>MINGGU PERTAMA</th>
        //             <th style={{ border: '1px solid black', padding: '8px', fontSize: '12px' }}>MINGGU KEDUA</th>
        //             <th style={{ border: '1px solid black', padding: '8px', fontSize: '12px' }}>MINGGU KETIGA</th>
        //             <th style={{ border: '1px solid black', padding: '8px', fontSize: '12px' }}>MINGGU KEEMPAT</th>
        //             <th style={{ border: '1px solid black', padding: '8px', fontSize: '12px' }}>MINGGU KELIMA</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {data.length > 0 ? (
        //             data.map((item, index) => (
        //                 <tr key={index}>
        //                     <td style={{ border: '1px solid black', padding: '8px', fontSize: '12px' }}>{item["NAMA"]}</td>
        //                     <td style={{ border: '1px solid black', padding: '8px', fontSize: '12px' }}></td>
        //                     <td style={{ border: '1px solid black', padding: '8px', fontSize: '12px' }}></td>
        //                     <td style={{ border: '1px solid black', padding: '8px', fontSize: '12px' }}></td>
        //                     <td style={{ border: '1px solid black', padding: '8px', fontSize: '12px' }}></td>
        //                     <td style={{ border: '1px solid black', padding: '8px', fontSize: '12px' }}></td>
        //                 </tr>
        //             ))
        //         ) : (
        //             <tr>
        //                 <td colSpan={6} style={{ border: '1px solid black', padding: '8px' }}>Data kosong</td>
        //             </tr>
        //         )}
        //     </tbody>
        // </table>
        <div ref={ref}>

            <table style={{ borderCollapse: 'collapse', margin: 'auto' }}>
                <thead style={{}}>
                    <tr>
                        <th colSpan={11} style={{ textAlign: 'center', padding: '10px 0' }}>
                            <h3 style={{ margin: 0 }}>ABSENSI PRIA PENGAJIAN DESA KELAPA DUA</h3>
                            <h3 style={{ margin: 0 }}>KELOMPOK {kelompok}</h3>
                        </th>
                    </tr>
                    <tr style={{ border: '1px solid black', backgroundColor: 'orange' }}>
                        <th className='column' rowSpan={4}>Nama</th>
                        <th className='column' style={{ borderLeft: '1px solid black' }} colSpan={10}>MINGGU KE</th>
                    </tr>
                    <tr style={{ border: '1px solid black', backgroundColor: 'orange' }}>
                        <th className='column' style={{ borderLeft: '1px solid black', borderRight: '1px solid black' }} colSpan={2}>1</th>
                        <th className='column' style={{ borderRight: '1px solid black' }} colSpan={2}>2</th>
                        <th className='column' style={{ borderRight: '1px solid black' }} colSpan={2}>3</th>
                        <th className='column' style={{ borderRight: '1px solid black' }} colSpan={2}>4</th>
                        <th className='column' style={{ borderRight: '1px solid black' }} colSpan={2}>5</th>
                    </tr>
                    <tr style={{ border: '1px solid black', backgroundColor: 'orange' }}>
                        <th className='column' style={{ fontSize: 14, textAlign: 'left', borderLeft: '1px solid black', borderRight: '1px solid black' }} colSpan={2}>Tgl:</th>
                        <th className='column' style={{ fontSize: 14, textAlign: 'left', borderRight: '1px solid black' }} colSpan={2}>Tgl:</th>
                        <th className='column' style={{ fontSize: 14, textAlign: 'left', borderRight: '1px solid black' }} colSpan={2}>Tgl:</th>
                        <th className='column' style={{ fontSize: 14, textAlign: 'left', borderRight: '1px solid black' }} colSpan={2}>Tgl:</th>
                        <th className='column' style={{ fontSize: 14, textAlign: 'left', borderRight: '1px solid black' }} colSpan={2}>Tgl:</th>
                    </tr>
                    <tr style={{ border: '1px solid black', backgroundColor: 'orange' }}>
                        <th className='column' style={{ borderLeft: '1px solid black', borderRight: '1px solid black' }} >Jam</th>
                        <th className='column' style={{ fontSize: 14, borderRight: '1px solid black' }} >Paraf</th>
                        <th className='column' style={{ fontSize: 14, borderRight: '1px solid black' }} >Jam</th>
                        <th className='column' style={{ fontSize: 14, borderRight: '1px solid black' }} >Paraf</th>
                        <th className='column' style={{ fontSize: 14, borderRight: '1px solid black' }} >Jam</th>
                        <th className='column' style={{ fontSize: 14, borderRight: '1px solid black' }} >Paraf</th>
                        <th className='column' style={{ fontSize: 14, borderRight: '1px solid black' }} >Jam</th>
                        <th className='column' style={{ fontSize: 14, borderRight: '1px solid black' }} >Paraf</th>
                        <th className='column' style={{ fontSize: 14, borderRight: '1px solid black' }} >Jam</th>
                        <th className='column' style={{ fontSize: 14, borderRight: '1px solid black' }} >Paraf</th>
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
        </div>
    );
});

export default CustomTable;

