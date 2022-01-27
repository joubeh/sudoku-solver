import Block from './Block';
import AlgorithmSelector from './AlgorithmSelector';
import NumberSelector from './NumberSelector';

function Board({ setIsSolving, boradData, setSetting, isSolved, setting, setBoradData, setAlgorithm }){
    return(
        <div>
            <div className="w-max mx-auto">
                { boradData.map((innerBoard, index) => 
                    <div key={index} className="grid grid-cols-9 gap-1 my-1">
                        { innerBoard.map((block, blockIndex) => <Block key={blockIndex} number={block} idx={[index, blockIndex]} setSetting={setSetting} isSolved={isSolved}/>) }
                    </div>
                ) }
            </div>
            {
                setting === null ?
                    <AlgorithmSelector isSolved={isSolved} setIsSolving={setIsSolving} setAlgorithm={setAlgorithm} />
                    :
                    <NumberSelector boradData={boradData} setting={setting} setBoradData={setBoradData} setSetting={setSetting} />
            }
        </div>
    );
}

export default Board;