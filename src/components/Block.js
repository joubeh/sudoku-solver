function Block({ number, idx, setSetting, isSolved }){
    return(
    <div 
        onClick={e => {
            if(!isSolved) setSetting(idx);
        }}
        className={`${!isSolved && "cursor-pointer"} text-center flex items-center justify-center bg-indigo-600 text-white h-12 w-10 rounded-lg shadow-lg hover:bg-indigo-900 transition`}>
        { number!==0 && number }
    </div>
    );
}

export default Block;