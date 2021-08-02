import React, { useState } from 'react'
import { useTvShows } from '../../hooks';
import { Nullable } from '../../store';
import { Layout } from '../core/Layout'
import { CategorySelectorItem } from './CategorySelectorItem'

export function CategorySelector() {
    const categories = [
        { label: 'Popular', id: null },
        { label: 'Family', id: 10751 },
        { label: 'Documentary', id: 99 }
    ];

    const [selectedId, setSelectedId] = useState<Nullable<number>>(null);
    const [{}, fetchTvShows] = useTvShows();

    function handleSelectCategory(id: Nullable<number>) {
        if(id === null && selectedId) {
            setSelectedId(null);
            fetchTvShows();
            return;
        }

        if(id) {
            setSelectedId(id);
            fetchTvShows(id);
        }
    }

    return (
        <Layout.Block
            align='center'
            direction='row'
            style={{width: '100%', height: 20, paddingHorizontal: 35}}
        >
            {categories.map((category, index) =>
                <CategorySelectorItem
                    key={index}
                    title={category.label}
                    selected={selectedId === category.id}
                    onPress={() => handleSelectCategory(category.id)}
                />
            )}
        </Layout.Block>
    )
}
