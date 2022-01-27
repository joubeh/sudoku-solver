function getNextUnassigned(board){
    for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
            if(board[i][j] === 0) return [i, j];
        }
    }
    return null;
}

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

function backTracking(board){
    let next = getNextUnassigned(board);
    if(next === null) return board;
    for(let i=1; i<10; i++){
        if(itsOk(board, next, i)){
            board[next[0]][next[1]] = i;
            let tmpAns = backTracking(board);
            if(tmpAns !== false) return tmpAns;
            board[next[0]][next[1]] = 0;
        }
    }
    return false;
}

export default backTracking;