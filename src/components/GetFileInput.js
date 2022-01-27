function GetFileInput({ setLoadFromFileInput, loadFromFileInput, setBoradData, setIsLoadingFile }){
    return(
        <div>
            <div className="w-max mx-auto mt-5">
              <textarea
                onChange={e => {
                  setLoadFromFileInput(e.target.value);
                }}
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                rows="15"
                cols="25"
                placeholder="It should be a 9X9 array without header row values separated by a comma (,) and each row separated by a semicolone (;) example: 
                3,5,1,6,0,2,0,0,4; 
                0,0,7,5,0,9,6,0,0; 
                4,0,0,8,3,0,0,5,7; 
                9,4,0,0,0,7,0,3,2; 
                0,0,0,3,9,6,0,0,5; 
                0,7,3,0,8,0,1,0,0; 
                7,3,4,0,0,0,0,0,0; 
                8,0,0,7,0,0,4,2,9; 
                0,9,2,4,0,5,3,0,0;"
              ></textarea>
            </div>
            <div className="w-max mx-auto mt-3">
              <button 
              onClick={e => {
                if(loadFromFileInput){
                  const FIRows = loadFromFileInput.split(";");
                  let FIVals = [];
                  for(let i=0; i<9; i++){
                    FIVals.push(FIRows[i].split(",").map(function(item) {return parseInt(item, 10);}));
                  }
                  setBoradData(FIVals);
                  setIsLoadingFile(false);
                } else alert("Fill the box!");
              }}
              className="text-white bg-indigo-600 px-8 py-2 text-xl rounded-lg shadow-lg hover:bg-indigo-900 cursor-pointer">Load</button>
            </div>
            <div className="w-max mx-auto mt-3">
              <button 
              onClick={e => {setIsLoadingFile(false);}}
              className="text-white bg-red-600 px-8 py-2 text-xl rounded-lg shadow-lg hover:bg-red-900 cursor-pointer">Cancel</button>
            </div>
        </div>
    );
}

export default GetFileInput;