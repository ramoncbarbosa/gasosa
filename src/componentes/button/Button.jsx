export default function Button({undleClick}){
    return(
        <>
            <button className="bg-black rounded-lg w-40 h-8 mb-4 text-white" onClick={() => undleClick()}>Calcular</button>
        </>
    )
}