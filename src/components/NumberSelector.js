function NumberSelector({ boradData, setting, setBoradData, setSetting }){
    return(
        <div className="w-max mx-auto mt-6 p-5 bg-indigo-200 rounded-lg text-white shadow-xl grid grid-cols-10 gap-2">
            { [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(
            number => 
                <div
                onClick={e => {
                    let newBoard = JSON.parse(JSON.stringify(boradData));
                    newBoard[setting[0]][setting[1]] = number;
                    setBoradData(newBoard);
                    setSetting(null);
                }} 
                key={number} className="text-center flex items-center justify-center bg-indigo-600 text-white h-12 w-10 rounded-lg shadow-lg hover:bg-indigo-900 transition cursor-pointer">
                { number!==0 ? number : "X" }
                </div>
            ) }
        </div>
    );
}

export default NumberSelector;