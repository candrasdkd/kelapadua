import React, { LegacyRef, forwardRef } from 'react';

interface TableProps {
    data: Array<any>;
    kelompok: string | undefined,
    ref: LegacyRef<HTMLTableElement> | undefined;
}

const TabelSensus: React.FC<TableProps> = forwardRef(({ data, kelompok }, ref) => {
    return (
        <div ref={ref}>
            <table style={{ borderCollapse: 'collapse', margin: 'auto' }}>
                <thead>
                    <tr>
                        <th colSpan={25} style={{ textAlign: 'center', padding: '10px 0' }}>
                            <h3 style={{ margin: 0 }}>DAFTAR SENSUS DESA KELAPA DUA</h3>
                            <h3 style={{ margin: 0 }}>BULAN {new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' }).toUpperCase()}</h3>
                        </th>
                    </tr>
                    <tr style={{ border: '1px solid black', }}>
                        <th style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#E2DFD0' }} rowSpan={3}>Kelompok</th>
                        <th style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FEB941' }} colSpan={10}>Belum Menikah</th>
                        <th style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#6DC5D1' }} colSpan={2} rowSpan={2}>Menikah</th>
                        <th style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#E2DFD0' }} colSpan={2} rowSpan={2}>Duda / Janda</th>
                        <th style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#E2DFD0' }} colSpan={2} rowSpan={2}>Jumlah</th>
                        <th style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#ACE1AF' }} rowSpan={3}>Total</th>
                        <th style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#E2DFD0' }} rowSpan={3}>
                            Jumlah <br /> KK
                        </th>
                        <th style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#E2DFD0' }} rowSpan={3}>Duafa</th>
                        <th style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#E2DFD0' }} colSpan={2} rowSpan={2}>Binaan</th>
                    </tr>
                    <tr style={{ border: '1px solid black' }}>
                        <th style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FEB941' }} colSpan={2}>Balita</th>
                        <th style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FEB941' }} colSpan={2}>Caberawit</th>
                        <th style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FEB941' }} colSpan={2}>Pra Remaja</th>
                        <th style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FEB941' }} colSpan={2}>Remaja</th>
                        <th style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FEB941' }} colSpan={2}>Pra Nikah</th>
                    </tr>
                    <tr style={{ border: '1px solid black' }}>
                        <th style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FEB941' }} >L</th>
                        <th style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FEB941' }} >P</th>
                        <th style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FEB941' }} >L</th>
                        <th style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FEB941' }} >P</th>
                        <th style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FEB941' }} >L</th>
                        <th style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FEB941' }} >P</th>
                        <th style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FEB941' }} >L</th>
                        <th style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FEB941' }} >P</th>
                        <th style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FEB941' }} >L</th>
                        <th style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FEB941' }} >P</th>
                        <th style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#6DC5D1' }} >L</th>
                        <th style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#6DC5D1' }} >P</th>
                        <th style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#E2DFD0' }} >L</th>
                        <th style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#E2DFD0' }} >P</th>
                        <th style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#E2DFD0' }} >L</th>
                        <th style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#E2DFD0' }} >P</th>
                        <th style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#E2DFD0' }} >L</th>
                        <th style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#E2DFD0' }} >P</th>

                    </tr>
                </thead>
                <tbody style={{ border: '1px solid black', }}>

                    <tr style={{ border: '1px solid black' }}>
                        <td style={{ fontSize: 14, border: '1px solid black', width: 100, height: 30, textAlign: 'center' }}>Kelompok 1</td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td rowSpan={2} style={{ border: '1px solid black', backgroundColor: '#ACE1AF', width: 50 }}></td>
                        <td rowSpan={2} style={{ border: '1px solid black', width: 50 }}></td>
                        <td rowSpan={10} style={{ border: '1px solid black', width: 50 }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                    </tr>
                    <tr style={{ border: '1px solid black', }}>
                        <td style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', textAlign: 'center', height: 25 }}>Jumlah</td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                    </tr>

                    <tr>
                        <td style={{ fontSize: 14, border: '1px solid black', width: 100, height: 30, textAlign: 'center' }}>Kelompok 2</td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td rowSpan={2} style={{ border: '1px solid black', backgroundColor: '#ACE1AF' }}></td>
                        <td rowSpan={2} style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                    </tr>
                    <tr>
                        <td style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', textAlign: 'center', height: 25 }}>Jumlah</td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                    </tr>

                    <tr>
                        <td style={{ fontSize: 14, border: '1px solid black', width: 100, height: 30, textAlign: 'center' }}>Kelompok 3</td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td rowSpan={2} style={{ border: '1px solid black', backgroundColor: '#ACE1AF' }}></td>
                        <td rowSpan={2} style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                    </tr>
                    <tr>
                        <td style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', textAlign: 'center', height: 25 }}>Jumlah</td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                    </tr>

                    <tr>
                        <td style={{ fontSize: 14, border: '1px solid black', width: 100, height: 30, textAlign: 'center' }}>Kelompok 4</td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td rowSpan={2} style={{ border: '1px solid black', backgroundColor: '#ACE1AF' }}></td>
                        <td rowSpan={2} style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                    </tr>
                    <tr>
                        <td style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', textAlign: 'center', height: 25 }}>Jumlah</td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                    </tr>

                    <tr>
                        <td style={{ fontSize: 14, border: '1px solid black', width: 100, height: 30, textAlign: 'center' }}>Kelompok 5</td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td rowSpan={2} style={{ border: '1px solid black', backgroundColor: '#ACE1AF' }}></td>
                        <td rowSpan={2} style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                        <td style={{ border: '1px solid black' }}></td>
                    </tr>
                    <tr>
                        <td style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', textAlign: 'center', height: 25 }}>Jumlah</td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                    </tr>

                    <tr>
                        <td style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#ACE1AF', textAlign: 'center', height: 25 }}>Jumlah L/P</td>
                        <td style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#ACE1AF' }}></td>
                        <td style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#ACE1AF' }}></td>
                        <td style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#ACE1AF' }}></td>
                        <td style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#ACE1AF' }}></td>
                        <td style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#ACE1AF' }}></td>
                        <td style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#ACE1AF' }}></td>
                        <td style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#ACE1AF' }}></td>
                        <td style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#ACE1AF' }}></td>
                        <td style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#ACE1AF' }}></td>
                        <td style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#ACE1AF' }}></td>
                        <td style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#ACE1AF' }}></td>
                        <td style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#ACE1AF' }}></td>
                        <td style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#ACE1AF' }}></td>
                        <td style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#ACE1AF' }}></td>
                        <td style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#ACE1AF' }}></td>
                        <td style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#ACE1AF' }}></td>
                        <td rowSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#ACE1AF' }}></td>
                        <td rowSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#ACE1AF' }}></td>
                        <td rowSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#ACE1AF' }}></td>
                        <td style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#ACE1AF' }}></td>
                        <td style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#ACE1AF' }}></td>
                    </tr>
                    <tr style={{ fontWeight: "bold" }}>
                        <td style={{ textAlign: 'center', fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', height: 25 }}>Total</td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                        <td colSpan={2} style={{ fontSize: 14, border: '1px solid black', backgroundColor: '#FDE49E', width: 80 }}></td>
                    </tr>
                </tbody>
            </table>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 50, paddingLeft: 50, paddingRight: 100 }}>
                <div style={{ border: '1px solid black', padding: 5 }}>
                    <p style={{ padding: 0, margin: 0, fontWeight: 'bold', textDecoration: 'underline', marginBottom: 20 }}>Keterangan</p>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div>
                            <p style={{ padding: 0, margin: 0, marginTop: 5, fontSize: 12 }}>Balita</p>
                            <p style={{ padding: 0, margin: 0, marginTop: 5, fontSize: 12 }}>Cabe Rawit</p>
                            <p style={{ padding: 0, margin: 0, marginTop: 5, fontSize: 12 }}>Pra Remaja</p>
                            <p style={{ padding: 0, margin: 0, marginTop: 5, fontSize: 12 }}>Remaja</p>
                            <p style={{ padding: 0, margin: 0, marginTop: 5, fontSize: 12 }}>Dewasa</p>
                            <p style={{ padding: 0, margin: 0, marginTop: 5, fontSize: 12 }}>L</p>
                            <p style={{ padding: 0, margin: 0, marginTop: 5, fontSize: 12 }}>P</p>
                        </div>
                        <div style={{ marginLeft: 20 }}>
                            <p style={{ padding: 0, margin: 0, marginTop: 5, fontSize: 12 }}>:</p>
                            <p style={{ padding: 0, margin: 0, marginTop: 5, fontSize: 12 }}>:</p>
                            <p style={{ padding: 0, margin: 0, marginTop: 5, fontSize: 12 }}>:</p>
                            <p style={{ padding: 0, margin: 0, marginTop: 5, fontSize: 12 }}>:</p>
                            <p style={{ padding: 0, margin: 0, marginTop: 5, fontSize: 12 }}>:</p>
                            <p style={{ padding: 0, margin: 0, marginTop: 5, fontSize: 12 }}>:</p>
                            <p style={{ padding: 0, margin: 0, marginTop: 5, fontSize: 12 }}>:</p>
                        </div>
                        <div style={{ marginLeft: 20 }}>
                            <p style={{ padding: 0, margin: 0, marginTop: 5, fontSize: 12 }}>0 - 5 Tahun (5 - 6 Tahun/PAUD)</p>
                            <p style={{ padding: 0, margin: 0, marginTop: 5, fontSize: 12 }}>6/7 - 12/13 Tahun (SD)</p>
                            <p style={{ padding: 0, margin: 0, marginTop: 5, fontSize: 12 }}>12/13 - 15/16 Tahun (SMP)</p>
                            <p style={{ padding: 0, margin: 0, marginTop: 5, fontSize: 12 }}>15/16 - 18/19 Tahun (SMA)</p>
                            <p style={{ padding: 0, margin: 0, marginTop: 5, fontSize: 12 }}>18/19 Tahun keatas (Belum Nikah)</p>
                            <p style={{ padding: 0, margin: 0, marginTop: 5, fontSize: 12 }}>Laki - laki</p>
                            <p style={{ padding: 0, margin: 0, marginTop: 5, fontSize: 12 }}>Perempuan</p>
                        </div>
                    </div>

                </div>
                <div >
                    <p>Depok, {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

                    <p style={{ padding: 0, margin: 0, marginTop: 100, textDecoration: 'underline' }}>H. Sulaiman</p>
                    <p style={{ padding: 0, margin: 0, marginTop: 10, fontWeight: 'bold' }}>KI Desa</p>
                </div>
            </div>
        </div >
    );
});

export default TabelSensus;

