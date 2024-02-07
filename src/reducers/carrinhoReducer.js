export const ADD_PRODUTO = "ADD_PRODUTO";
export const REMOVE_PRODUTO = "REMOVE_PRODUTO";
export const UPDATE_QUANTIDADE = "UPDATE_QUANTIDADE";

export const carrinhoReducer = (state, action) => {
  switch(action.type) {
    case ADD_PRODUTO: 
      const novoProduto = action.payload
      const produto = state.findIndex((item) => item.id === novoProduto.id); // get id item
      if (produto === -1) { // state.findIndex returns -1 if the item does not exist
        // Creating new item in state
        novoProduto.quantidade = 1;
        return [...state, novoProduto];
      } else {
        // Update quantity if item exists
        return state.map((item, index) =>
          index === produto
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }

    case REMOVE_PRODUTO:
      const produtoId = action.payload;
      return state.filter((item) => item.id !== produtoId);

    case UPDATE_QUANTIDADE:
      const { produtoId: id, quantidade } = action.payload;
      return state.map((item) => 
        item.id === id ? { ...item, quantidade } : item
      );

    default:
      return state;
  }
}
