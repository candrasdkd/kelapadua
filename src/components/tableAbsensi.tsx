import React, { LegacyRef, forwardRef } from 'react';

interface TableProps {
    data: Array<any>;
    kelompok: string | undefined,
    ref: LegacyRef<HTMLTableElement> | undefined;
}

const TabelAbsensi: React.FC<TableProps> = forwardRef(({ data, kelompok }, ref) => {
    return (
        <div ref={ref}>
            <table style={{ borderCollapse: 'collapse', margin: 'auto' }}>
                <thead>
                    <tr>
                        <th colSpan={11} style={{ textAlign: 'center', padding: '10px 0' }}>
                            <h3 style={{ margin: 0 }}>ABSENSI PRIA PENGAJIAN DESA KELAPA DUA</h3>
                            <h3 style={{ margin: 0 }}>{kelompok}</h3>
                        </th>
                    </tr>
                    <tr>
                        <th colSpan={5} style={{ padding: '10px 0', textAlign: 'left' }}>
                            <h5 style={{ margin: 0 }}>BULAN :</h5>
                        </th>
                        <th colSpan={5} style={{ padding: '10px 0', textAlign: 'right' }}>
                            <h5 style={{ margin: 0 }}>TAHUN :</h5>
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
                        <th className='column' style={{ fontSize: 14, borderLeft: '1px solid black', borderRight: '1px solid black' }} >Jam</th>
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
                        data.map((item, index) => {
                            const extractFirstTwoWords = () => {
                                const words = item.NAMA.split(' ');
                                return words.slice(0, 2).join(' ');
                            };
                            return (
                                <tr key={index}>
                                    {item["JENIS KELAMIN"] === "Laki - Laki" ?
                                        <td style={{ border: '1px solid black', padding: '8px', fontSize: '12px', width: 150, color: item.NAMA === "KOSONG" ? 'white' : 'black' }}>
                                            {(item.JENJANG === "Dewasa" && item["STATUS PERNIKAHAN"] === "Menikah") || (item.JENJANG === "Dewasa" && item["STATUS PERNIKAHAN"] === "Duda") || item.JENJANG === "Lansia" ? `Bpk ${extractFirstTwoWords()}` : extractFirstTwoWords()}
                                        </td> :
                                        <td style={{ border: '1px solid black', padding: '8px', fontSize: '12px', width: 150, color: item.NAMA === "KOSONG" ? 'white' : 'black' }}>
                                            {(item.JENJANG === "Dewasa" && item["STATUS PERNIKAHAN"] === "Menikah") || (item.JENJANG === "Dewasa" && item["STATUS PERNIKAHAN"] === "Janda") || item.JENJANG === "Lansia" ? `Ibu ${extractFirstTwoWords()}` : extractFirstTwoWords()}
                                        </td>
                                    }
                                    <td style={{ border: '1px solid black', padding: '8px', fontSize: '12px', width: 35 }}></td>
                                    <td style={{ border: '1px solid black', padding: '8px', fontSize: '12px', width: 30 }}></td>
                                    <td style={{ border: '1px solid black', padding: '8px', fontSize: '12px', width: 35 }}></td>
                                    <td style={{ border: '1px solid black', padding: '8px', fontSize: '12px', width: 30 }}></td>
                                    <td style={{ border: '1px solid black', padding: '8px', fontSize: '12px', width: 35 }}></td>
                                    <td style={{ border: '1px solid black', padding: '8px', fontSize: '12px', width: 30 }}></td>
                                    <td style={{ border: '1px solid black', padding: '8px', fontSize: '12px', width: 35 }}></td>
                                    <td style={{ border: '1px solid black', padding: '8px', fontSize: '12px', width: 30 }}></td>
                                    <td style={{ border: '1px solid black', padding: '8px', fontSize: '12px', width: 35 }}></td>
                                    <td style={{ border: '1px solid black', padding: '8px', fontSize: '12px', width: 30 }}></td>
                                </tr>
                            )
                        })
                    ) : (
                        <tr>
                            <td colSpan={11} style={{ border: '1px solid black', padding: '8px' }}>Data kosong</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div>
                {/* <body>P</body> */}
            </div>
        </div>
    );
});

export default TabelAbsensi;

