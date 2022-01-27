function AlgorithmSelector({ isSolved, setIsSolving, setAlgorithm }){
    return(
        <div>
            {
                isSolved ?
                    null
                    :
                    <div className="w-max mx-auto mt-5">
                        <button onClick={e => { setAlgorithm("backTracking"); setIsSolving(true); }} className="text-white bg-indigo-600 px-8 py-2 text-xl rounded-lg shadow-lg hover:bg-indigo-900 cursor-pointer mx-1">Back tracking</button>
                        <button onClick={e => { setAlgorithm("backTrackingWithMRV"); setIsSolving(true); }} className="text-white bg-indigo-600 px-8 py-2 text-xl rounded-lg shadow-lg hover:bg-indigo-900 cursor-pointer mx-1">Back tracking + MRV</button>
                    </div>
            }
        </div>
    );
}

export default AlgorithmSelector;