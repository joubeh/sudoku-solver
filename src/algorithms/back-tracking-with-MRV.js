function itsOk(board, location, value){
    for(let i=0; i<9; i++){
        if(value === board[location[0]][i]) return false;
    }
    for(let i=0; i<9; i++){
        if(value === board[i][location[1]]) return false;
    }
    let starterRow = Math.floor(location[0]/3) * 3;
    let starterCol = Math.floor(location[1]/3) * 3;
    for(let i=starterRow; i<starterRow+3; i++){
        for(let j=starterCol; j<starterCol+3; j++){
            if(value === board[i][j]) return false;
        }
    }
    return true;
}

function getAvailableNumbers(board, location){
    let availableNumbers = [];
    for(let i=1; i<10; i++){
        if(itsOk(board, location, i)){
            availableNumbers.push(i);
        }
    }
    return availableNumbers;
}

function getNextUnassigned(board){
    let unassigneds = [];
    for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
            if(board[i][j] === 0){
                let availableNumbers = getAvailableNumbers(board, [i, j]);
                unassigneds.push({
                    location: [i, j],
                    availableNumbers: availableNumbers,
                    availableNumbersCount: availableNumbers.length
                })
            }
        }
    }
    return unassigneds.sort((a, b) => a.availableNumbersCount - b.availableNumbersCount);
}

function backTrackingWithMRV(board){
    let next = getNextUnassigned(board);
    if(next.length === 0) return board;
    if(next[0].availableNumbersCount === 0) return false;
    else {
        for(let i=0; i<next[0].availableNumbersCount; i++){
            board[next[0].location[0]][next[0].location[1]] = next[0].availableNumbers[i];
            let tmpAns = backTrackingWithMRV(board);
            if(tmpAns !== false) return tmpAns;
            board[next[0].location[0]][next[0].location[1]] = 0;
        }
    }
    return false;
}

export default backTrackingWithMRV;