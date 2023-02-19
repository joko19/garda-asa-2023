import Header from "../components/Header"

function Video() {
  return (
    <iframe className="h-screen" width="100%" height="100%" src="https://www.youtube.com/embed/hQbdWmuFyRA?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  )
}

export default Video