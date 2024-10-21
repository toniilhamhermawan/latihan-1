interface RowRiwayatProps {
    jenjang: string;
    sekolah: string;
    tahun: string;
  }
  
  function RowRiwayat(props: RowRiwayatProps) {
    return (
      <>
        <div className="justify-center text-center mx-4 mt-2 rounded-md border-2 border-blue-600 grid grid-rows-3 sm:grid-cols-3 sm:grid-rows-none">
          <div className="text-sm font-semibold">{props.jenjang}</div>
          <div className="text-sm">{props.sekolah}</div>
          <div className="text-sm">{props.tahun}</div>
        </div>
      </>
    );
  }
  
  interface RowPekerjaanProps {
    perusahaan: string;
    tahun: string;
    instansi: string;
    pekerjaan: string;
  }
  
  function RowPekerjaan(props: RowPekerjaanProps) {
    return (
      <>
        <div className="justify-center text-center mx-4 mt-2 rounded-md border-2 border-blue-600 grid grid-rows-4 sm:grid-cols-4 sm:grid-rows-none">
          <div className="text-sm font-semibold">{props.perusahaan}</div>
          <div className="text-sm">{props.tahun}</div>
          <div className="text-sm">{props.instansi}</div>
          <div className="text-sm">{props.pekerjaan}</div>
        </div>
      </>
    );
  }
  
  export default function RiwayatPendidikan() {
    return (
      <>
        <div>
          <div className="text-2xl mt-10 mx-auto text-center">
            Riwayat Pendidikan
          </div>
          <RowRiwayat jenjang="SD" sekolah="SDN Citarik" tahun="24525" />
          <RowRiwayat jenjang="SMP" sekolah="SMPN Negeri Citarik" tahun="24525" />
          <RowRiwayat jenjang="SMK" sekolah="SMK Terpadu Clk" tahun="24525" />
        </div>
        <div>
          <div className="text-2xl mt-10 mx-auto text-center">
            Riwayat Pekerjaan
          </div>
        </div>
        <RowPekerjaan
          perusahaan="PT. Jaya Makmur Sebtosa"
          tahun="2021 - Sekarang"
          instansi="Swasta"
          pekerjaan="Admin"
        />
        <RowPekerjaan
          perusahaan="CV. Digital Kreatif"
          tahun="2019 - 2020"
          instansi="Swasta"
          pekerjaan="Admin"
        />
        <RowPekerjaan
          perusahaan="Perusahaan Teknologi "
          tahun="2017 - 2019"
          instansi="Swasta"
          pekerjaan="Melayani"
        />
        <RowPekerjaan
          perusahaan="Sekolah Dasar Negeri XTC"
          tahun="2015 - 2017"
          instansi="Pendidikan"
          pekerjaan="Guru Kelas 4"
        />
      </>
    );
  }