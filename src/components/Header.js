function getText(setIsLoadingFile, isLoadingFile, isSolved, isSolving){
    if(isSolving) return ""
    if(!isSolved && !isLoadingFile) return <div>Set the board by clicking on blocks or click <span onClick={e => {setIsLoadingFile(true);}} className="text-indigo-600 font-bold cursor-pointer">here</span> to load from file</div>
    if(!isSolved && isLoadingFile) return <div>Paste file content</div>
    return <div>Solved!</div>
}

function Header({ setIsLoadingFile, isLoadingFile, isSolved, isSolving }){
    return(
        <div>
            <div className="text-center text-3xl mt-8 text-gray-600">
                Sudoku solver
            </div>
            <div className="text-center text-xl mt-3 text-gray-600 w-max mx-auto">
                { getText(setIsLoadingFile, isLoadingFile, isSolved, isSolving) }
                <span className="text-lg text-red-600 font-mono">This app may fail on wrong input!</span>
            </div>
        </div>
    );
}

export default Header;