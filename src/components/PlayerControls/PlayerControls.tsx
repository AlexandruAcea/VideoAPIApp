import React, { Fragment, useEffect, useState } from 'react';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Layout } from '../core';
import { Typography } from '../core/Typography';
import { GoBack, PlayPause, SliderWrapper, Wrapper } from './PlayerControls.style';

interface Props {
	isPlaying: boolean;
	title: string;
	duration: number;
	currentTime: number;
	seekForward: () => void;
	seekBackward: () => void;
	togglePlayPause: () => void;
	goBack: () => void;
	seekToTime: (v: number) => void;
}

function isUnderTen(n: number) {
	return n < 10 ? `0${n}` : n;
}

function secondsToHms(d: number) {
	d = Number(d);
	const h = Math.floor(d / 3600);
	const m = Math.floor((d % 3600) / 60);
	const s = Math.floor((d % 3600) % 60);

	const hDisplay = h > 0 ? h + ':' : '';
	const mDisplay = m > 0 ? isUnderTen(m) + ':' : '00:';
	const sDisplay = s > 0 ? isUnderTen(s) : '00';
	return `${hDisplay}${mDisplay}${sDisplay}`;
}

function convertFromPercentageToTime(percetange: number, duration: number) {
	return percetange * duration;
}

export function PlayerControls({
	isPlaying,
	currentTime,
	duration,
	title,
	seekForward,
	seekBackward,
	togglePlayPause,
	goBack,
	seekToTime,
}: Props) {
	const [controlsVisible, setControlsVisible] = useState(true);

	// Made this to have the feature of being able to only change the
	// seeking when you let go of the slider while letting the user know
	// where the timer will be
	const [changingTime, setChangingTime] = useState(currentTime);

	const [currentSlidingValue, setCurrentSlidingValue] = useState(
		(currentTime / 10000) * duration
	);

	// Making sure to when the slider is sliding so we don't get weird glitches
	const [isSliding, setIsSliding] = useState(false);

	useEffect(() => {
		if (!isSliding && currentTime && duration) {
			setChangingTime(currentTime);
			setCurrentSlidingValue(currentTime / duration);
		}
	}, [currentTime, isSliding, duration]);

	function handleSlide(slideValue: number) {
		setChangingTime(convertFromPercentageToTime(slideValue, duration));
	}

	function handleSlideLetGo(slideValue: number) {
		seekToTime(convertFromPercentageToTime(slideValue, duration));
		setIsSliding(false);
	}

	return (
		<Wrapper visible={controlsVisible}>
			{controlsVisible && (
				<Fragment>
					<PlayPause>
						<Layout.Block
							direction="row"
							align="center"
							justify="space-between"
							width={300}
						>
							<Layout.Touchable onPress={seekBackward} style={{ marginRight: 10 }}>
								<MaterialIcon name="replay-10" size={30} color="#ffffff" />
							</Layout.Touchable>

							<Layout.Touchable onPress={togglePlayPause} style={{ marginRight: 10 }}>
								<Icon
									name={isPlaying ? 'pause' : 'play'}
									size={30}
									color="#ffffff"
								/>
							</Layout.Touchable>

							<Layout.Touchable onPress={seekForward} style={{ marginRight: 10 }}>
								<MaterialIcon name="forward-10" size={30} color="#ffffff" />
							</Layout.Touchable>
						</Layout.Block>
					</PlayPause>

					<GoBack>
						<Layout.Block direction="row" align="center" width={400}>
							<Layout.Touchable onPress={goBack} style={{ marginRight: 10 }}>
								<Icon name="chevron-back" size={30} color="#ffffff" />
							</Layout.Touchable>
							<Typography.Body color="white">{title}</Typography.Body>
						</Layout.Block>
					</GoBack>

					<SliderWrapper>
						<Typography.Description color="white">
							{secondsToHms(changingTime)}
						</Typography.Description>
						<Slider
							onSlidingStart={() => setIsSliding(true)}
							value={currentSlidingValue}
							minimumTrackTintColor="white"
							style={{ width: '80%' }}
							onValueChange={handleSlide}
							onSlidingComplete={handleSlideLetGo}
						/>
						<Typography.Description color="white">
							{secondsToHms(duration)}
						</Typography.Description>
					</SliderWrapper>
				</Fragment>
			)}

			<Wrapper>
				<Layout.Touchable
					style={{ width: '100%', height: '100%', zIndex: 1, backgroundColor: 'red' }}
					onPress={() => setControlsVisible(!controlsVisible)}
				/>
			</Wrapper>
		</Wrapper>
	);
}
