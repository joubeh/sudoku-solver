import GetFileInput from "./GetFileInput";
import Board from "./Board";

function IOScreen({ setIsSolving, isLoadingFile, setLoadFromFileInput, loadFromFileInput, setBoradData, setIsLoadingFile, boradData, setSetting, isSolved, setting, setAlgorithm }){
    return(
        <div>
            {
                isLoadingFile ?
                    <GetFileInput setLoadFromFileInput={setLoadFromFileInput} loadFromFileInput={loadFromFileInput} setBoradData={setBoradData} setIsLoadingFile={setIsLoadingFile} />
                    :
                    <Board setIsSolving={setIsSolving} boradData={boradData} setSetting={setSetting} isSolved={isSolved} setting={setting} setBoradData={setBoradData} setAlgorithm={setAlgorithm}/>   
            }
        </div>
    )
}

export default IOScreen;