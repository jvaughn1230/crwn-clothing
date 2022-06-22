import { createSelector } from 'reselect';

import { CategoriesState } from './category.reducer';
import { CategoryMap } from './category.types';

const selectCategoryReducer = (state: { categories: CategoriesState; }): CategoriesState => state.categories;

export const SelectCategories = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
    [SelectCategories],
    (categories): CategoryMap => categories.reduce((acc, category)=>{
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {} as CategoryMap)
);

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.isLoading
);
