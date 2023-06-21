import "./VideoPitch.css"
const VideoPitch = () => {
    return (
        <>
        <div className="flex-center div-video">

            <iframe 
                width="700" 
                height="500" 
                src="https://www.youtube.com/embed/rZufpAzxj5o" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>

        </div>
     
 
        
        </>
    )
}


export default VideoPitch;