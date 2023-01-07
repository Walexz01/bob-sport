export const sliceData = (filteredList,currentPage,pageSize)=>{
    const slicedCustomer = filteredList.slice(currentPage * pageSize - pageSize , currentPage * pageSize)
    return slicedCustomer;

}