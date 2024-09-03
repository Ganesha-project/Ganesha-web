import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchArticles = createAsyncThunk('articles/fetchArticles', async (itemsToShow) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/articles?populate=*&pagination[page]=1&pagination[pageSize]=${itemsToShow}`);
  const data = await response.json();
  return data;
});

export const fetchCategories = createAsyncThunk('articles/fetchCategories', async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/categories?populate=*`);
  const data = await response.json();
  return data;
});

const articleSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: [],
    categories: [],
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      });
  },
});

export default articleSlice.reducer;
