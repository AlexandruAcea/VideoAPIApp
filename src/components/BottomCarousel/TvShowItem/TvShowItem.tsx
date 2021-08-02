import React from 'react'
import { Layout } from '../../core'
import { Typography } from '../../core/Typography'
import { Background } from '../../TopCarousel/TopCarouselItem/TopCarouselItem.style'
import { TvShowItemBody } from './TvShowItem.style'

interface Props {
    title: string;
    image: string;
    isFirstItem: boolean;
    onPress: () => void;
}

export function TvShowItem({ title, image, isFirstItem, onPress }: Props) {
    const imageSource = { uri: `https://image.tmdb.org/t/p/w342/${image}` }

    return (
        <Layout.Touchable onPress={onPress} activeOpacity={1}>
            <TvShowItemBody isFirstItem={isFirstItem}>
                <Background
                    source={imageSource}
                    resizeMode="cover"
                    imageStyle={{borderRadius: 5}}
                />
                <Typography.Description
                    numberOfLines={1}
                    ellipsizeMode='tail'
                    color='white'>
                        {title}
                </Typography.Description>
            </TvShowItemBody>
        </Layout.Touchable>
    )
}
