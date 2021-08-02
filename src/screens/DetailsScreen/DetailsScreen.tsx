import React, { useState } from 'react'

import Icon from 'react-native-vector-icons/Ionicons';
import { Layout } from '../../components/core'
import { Typography } from '../../components/core/Typography'
import { useItemToView } from '../../hooks'
import { useEffectOnce } from '../../store/utils';
import { BackgroundImage, DetailsWrapper, GoBack, ScrollWrapper, VotesWrapper } from './DetailsScreen.style';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParams, Routes } from '../../router';
import { PlayerScreen } from '../Player';

export type DetailScreenNavigationProps = StackNavigationProp<
    MainStackParams,
	Routes.ViewMovie
>;

interface Props {
	navigation: DetailScreenNavigationProps;
}

export function DetailsScreen({ navigation }: Props) {
    const [{ data: itemToView }] = useItemToView();
    const [showPlayer, setShowPlayer] = useState(false);

    useEffectOnce(() => {
        Icon.loadFont();
    })

    const imageSource = { uri: `https://image.tmdb.org/t/p/w342/${itemToView?.poster_path}` }

    function watchTrailer() {
        setShowPlayer(true);
    }

    function hidePlayer() {
        setShowPlayer(false);
    }

    // Thought it's more efficient to only render the player while removing the details from the DOM
    return showPlayer ? <PlayerScreen goBack={hidePlayer} item={itemToView}/>
            : <Layout.Block>
                <GoBack>
                    <Layout.Touchable onPress={() =>navigation.goBack()} style={{ marginRight: 10 }}>
                        <Layout.Block direction='row' align='center' justify='space-between' width={100}>
                            <Icon name='chevron-back' size={30} color='#ffffff'/>
                        </Layout.Block>
                    </Layout.Touchable>
                </GoBack>
                <BackgroundImage source={imageSource} />
                <ScrollWrapper>
                    <DetailsWrapper>
                        <Layout.Block direction='row' align='center' flex={1} justify='space-between'>
                            <Layout.Block direction='row' align='center' flex={1}>

                                {/* TITLE */}
                                <Typography.H4
                                    color='white'
                                    weight='bold'
                                    style={{ marginRight: 10 }}
                                >
                                        {itemToView?.title}
                                </Typography.H4>

                                {/* POPULARITY SCORE */}
                                <VotesWrapper>
                                    <Typography.Description color='black'>
                                        {itemToView?.vote_average}
                                    </Typography.Description>
                                </VotesWrapper>
                            </Layout.Block>

                            {/* View Trailer Button */}
                            <Layout.Touchable onPress={watchTrailer} style={{ marginRight: 10 }}>
                                <Layout.Block direction='row' align='center' justify='space-between' width={100}>
                                        <Icon name='play' size={15} color='#ffffff'/>
                                        <Typography.Body color='white'>
                                            Play trailer
                                        </Typography.Body>
                                </Layout.Block>
                            </Layout.Touchable>
                        </Layout.Block>

                        {/* DESCRIPTION */}
                        {/* Repeating this a few times just so that the scroll makes sense as the API
                            didn't offer more data to show! */}
                        <Typography.Description color='white' style={{ marginTop: 20 }}>
                                {itemToView?.overview}
                        </Typography.Description>
                        <Typography.Description color='white' style={{ marginTop: 20 }}>
                                {itemToView?.overview}
                        </Typography.Description>
                        <Typography.Description color='white' style={{ marginTop: 20 }}>
                                {itemToView?.overview}
                        </Typography.Description>
                        <Typography.Description color='white' style={{ marginTop: 20 }}>
                                {itemToView?.overview}
                        </Typography.Description>
                    </DetailsWrapper>
                 </ScrollWrapper>
            </Layout.Block>
}
