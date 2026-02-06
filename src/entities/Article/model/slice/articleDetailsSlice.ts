import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticleDetailsSchema } from "../types/articleDetailsSchema";
import { fetchArticleById } from "../services/fetchArticleById/fetchArtcileById";
import { Article } from "../types/article";

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const articleDetailsSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticleById.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(
      fetchArticleById.fulfilled,
      (state, action: PayloadAction<Article>) => {
        state.isLoading = false;
        state.data = action.payload;
      },
    );
    builder.addCase(
      fetchArticleById.rejected,
      (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      },
    );
  },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export default articleDetailsSlice.reducer;
