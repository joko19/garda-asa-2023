import Header from "../components/HeaderFixed"

function Download() {

  const toDownload = () => {
    if (typeof window !== "undefined") {
      // browser code
      window.location.href = "https://github.com/joko19/NiceRoomApp/releases/download/v3.0/NiceRoom.apk"
    }
  }
  return (
    <div >
      <Header />
      <main className="py-12 text-center">
        <img src="/img/app.png" alt="application" className="w-32 mx-auto"/>
        <p className="text-gray-600 m-1 object-center">Available for android </p>
        <a className='px-3 py-2 cursor-pointer hover:shadow-xl bg-blue-700 text-white inline-block rounded font-bold  hover:border-b ' onClick={() => toDownload()}>
          Click to Download
        </a>
      </main>
    </div>
  )
}

export default Download