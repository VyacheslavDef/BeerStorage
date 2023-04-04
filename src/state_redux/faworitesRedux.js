const { createSlice } = require("@reduxjs/toolkit");

const getInitialState = () => [];

const fawArray = createSlice({
  name: "faworits",
  initialState: getInitialState(),
  reducers: {
    add(items, action) {
      const item = { id: action.payload };
      return [...items, item]
    },
    remove(items, action) {
      return items.filter((x) => x.id !== action.payload);
    },
  },
});

export const { add, remove } = fawArray.actions;

export default fawArray.reducer;
