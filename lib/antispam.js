
const usedCommandRecently = new Set();

const isFiltered = (from) => {
    return !!usedCommandRecently.has(from);
};

const addFilter = (from) => {
    usedCommandRecently.add(from);
    setTimeout(() => {
        return usedCommandRecently.delete(from);
    }, 1500);// slow commands cmd filtered
};
module.exports = {
    msgFilter: {
        isFiltered,
        addFilter
    }};