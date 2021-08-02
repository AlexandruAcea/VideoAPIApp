import React from 'react'
import { Layout } from '../../core'
import { Typography } from '../../core/Typography'
import { CategorySelectorItemBody } from './CategorySelectorItem.style'

interface Props {
    title: string;
    selected: boolean;
    onPress: () => void;
}

export function CategorySelectorItem({ title, selected, onPress }: Props) {
    return (
            <Layout.Touchable onPress={onPress}>
                <CategorySelectorItemBody selected={selected}>
                        <Typography.Description color={selected ? 'black' : 'white'}>
                            {title}
                        </Typography.Description>
                </CategorySelectorItemBody>
            </Layout.Touchable>
    )
}