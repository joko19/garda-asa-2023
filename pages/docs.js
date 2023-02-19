import Header from "../components/HeaderFixed"

function Docs() {
  return (
    <>
      <Header />
      <main className="my-12 md:mx-72 mx:4">
        <div className="my-4">
          <h1 className="font-bold text-3xl">Dokumentasi</h1>
          <p>Cara Penggunaan NiceRoom</p>
        </div>
        <div className="my-4">
          NiceRoom tersedia dalam bentuk website yang responsive sehingga dapat diakses via Desktop maupun mobile. Selain itu, NiceRoom juga tersedia dalam bentuk aplikasi android, Sehingga pengguna dapat menggunakan NiceRoom lebih mudah tanpa harus membuka browser terlebih dahulu.
        </div>
        <div>
          <h1 className="font-bold text-3xl">Console</h1>
          <p>Python dapat dijalankan secara interaktif menggunakan console. Untuk menggunakan console, klik dropdown pada bagian tengah atas HomePage, lalu pilih Console</p>
          <img className="border-2 shadow rounded-lg m-1" src="/img/console_1.png" />
          <p>Ketika console sudah terbuka, pengguna bisa menuliskan kode python dan menjalankannya secara langsung.</p>
          <img className="border-2 shadow rounded-lg m-1" src="/img/console_2.png" />
        </div>
        <div className="my-12">
          <div className="font-bold text-3xl">Code Editor</div>
          <p>Di Halaman Homepage, pengguna bisa menuliskan kode program pada code editor yang tersedia</p>
          <img className="border-2 shadow rounded-lg m-1" src="/img/code_1.png" alt="code editor" />
          <p className="mt-6">Apabila penulisan kode program telah selesai, silahkan klik tombol running untuk menjalankan program</p>
          <img className="border-2 shadow rounded-lg m-1" src="/img/code_2.png" alt="code editor" />
        </div>
        <div className="my-12">
          <h1 className="font-bold text-3xl">Lesson</h1>
          <p>Fitur ini menyediakan materi pembelajaran berbasis learn by doing, pada setiap materi terdapat penjelasan, contoh kode program dan code editor yang siap digunakan untuk latihan pada halaman yang sama </p>
          <img className="border-2 shadow rounded-lg m-1 w-96" src="/img/lesson.jpeg" alt="code lesson" />
        </div>
      </main>
    </>
  )
}

export default Docs