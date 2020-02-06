var add_balance = (total, currentTotal, per)=>{
    return total + currentTotal*per;
}

var last_balance = (total, total_use)=>{
    return total -total_use;
}

module.exports = {
    add_balance,
    last_balance
}