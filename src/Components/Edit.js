const editItem = (id) => {
    let newEditItem = items.find((elem) => {
        return elem.id === id
    });
    console.log(newEditItem);
    setToggleSubmit(false);
    setInputData(newEditItem.name);
    setIsEditItem(id);
}
export default editItem;