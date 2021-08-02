import React, { useState } from 'react'
import {  StyleSheet, View } from 'react-native';
import { Layout } from '../../core/Layout';
import { Typography } from '../../core/Typography';
import { Background, InnerItem, TopCarouselItemBody } from './TopCarouselItem.style'

interface Props {
    title: string;
    description : string;
    poster: string;
    maxWidthText: number;
    onClick: () => void
}

export function TopCarouselItem({ title, poster, description, maxWidthText, onClick }: Props) {
    const imageSource = { uri: `https://image.tmdb.org/t/p/w342/${poster}` }

    const [viewMore, setViewMore] = useState(false);

    const styles = StyleSheet.create({
        title :{
            maxWidth: maxWidthText,
            color: 'white',
            paddingLeft: 10,
            marginTop: 5
        },

        description :{
            color: 'white',
            maxWidth: maxWidthText,
        },

        shadow: {
            backgroundColor: 'black',
            position: 'absolute',
            bottom: -50,
            height: 50,
            width: '100%',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: -50,
            },
            shadowOpacity: 1,
            shadowRadius: 35.00,

            elevation: 40,
            zIndex: 99
        }
      });

      function onSelectItemHandler() {
        setViewMore(!viewMore);
        onClick();
      }

    return (
        <Layout.Touchable
            activeOpacity={1}
            onPress={onSelectItemHandler}
        >
            <TopCarouselItemBody>
                    <Background
                        source={imageSource}
                        resizeMode="cover"
                        imageStyle={{borderRadius: 5}}
                    />
                    <InnerItem>
                        <Typography.Description
                            numberOfLines={3}
                            ellipsizeMode='tail'
                            style={styles.description}
                        >
                            {description}
                        </Typography.Description>
                    </InnerItem>
                    <View style={styles.shadow}/>
            </TopCarouselItemBody>

            <Typography.Body
                numberOfLines={1}
                ellipsizeMode='tail'
                style={styles.title}
            >
                {title}
            </Typography.Body>
        </Layout.Touchable>
    )
}