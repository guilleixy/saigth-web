export default function Hero(){
    return(
        <header className="bg-hero-gradient">
            <div className="flex justify-between px-28 py-5">
                <nav>
                    <ul>
                        <li>inicio</li>
                        <li></li>
                    </ul>
                </nav>     
                <div>
                    por Guillermo Bernal
                </div>
            </div>

            <div className="h-screen w-full flex justify-center items-center">
                <h1 className="text-5xl">
                    <span className="bg-gradient-to-r from-purple-200 to-blue-100 text-transparent bg-clip-text">
                        sAIgth
                    </span>
                </h1>
            </div>          
            <div className="h-screen w-full flex justify-center items-center">
                (aquí irá el vídeo y todo eso)
            </div>  
        </header>

    )
}