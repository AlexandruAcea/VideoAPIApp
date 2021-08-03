import React, { useEffect, useRef, useState } from 'react';
import Video, { OnLoadData, OnProgressData } from 'react-native-video';
import { Dimensions, StyleSheet, View } from 'react-native';
import { PlayerWrapper } from './PlayerScreen.style';
import Orientation from 'react-native-orientation-locker';
import { PlayerControls } from '../../components/PlayerControls/PlayerControls';
import { MovieItem } from '../../api/movies';
import { Nullable } from '../../store';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

interface Props {
	item: Nullable<MovieItem>;
	goBack: () => void;
}

export function PlayerScreen({ item, goBack }: Props) {
	const [paused, setPaused] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);

	useEffect(() => {
		// Setting orientation on render
		Orientation.lockToLandscape();

		// And setting it back to portrait on destroy
		return () => {
			Orientation.lockToPortrait();
		};
	}, []);

	const ref = useRef<Video>(null);

	const mockTrailer = {
		uri: 'https://rawgit.com/mediaelement/mediaelement-files/master/big_buck_bunny.mp4',
	};

	const styles = StyleSheet.create({
		backgroundVideo: {
			width: screenHeight,
			height: screenWidth,
		},
	});

	useEffect(() => {
		const videoRef = ref.current;

		return () => {
			setPaused(true);
			if (videoRef) videoRef.seek(0);
		};
	}, []);

	function togglePlayPause() {
		setPaused(!paused);
	}

	function onLoadEnd(data: OnLoadData) {
		setDuration(data.duration);
		setCurrentTime(data.currentTime);
	}

	function onProgress(data: OnProgressData) {
		setCurrentTime(data.currentTime);
	}

	function seekForward() {
		if (ref.current) {
			ref.current.seek(currentTime + 10);
			setCurrentTime(currentTime + 10);
		}
	}

	function seekBackward() {
		if (ref.current) {
			ref.current.seek(currentTime - 10);
			setCurrentTime(currentTime - 10);
		}
	}

	function seekToTime(value: number) {
		if (ref.current) ref.current.seek(value);
		setCurrentTime(value);
	}

	function onEnd() {
		setPaused(true);
	}

	return item ? (
		<PlayerWrapper>
			<Video
				fullscreen
				paused={paused}
				source={mockTrailer}
				ref={ref}
				playInBackground={false}
				fullscreenOrientation="landscape"
				style={styles.backgroundVideo}
				resizeMode="cover"
				onEnd={onEnd}
				onLoad={onLoadEnd}
				onProgress={onProgress}
			/>

			<PlayerControls
				seekToTime={seekToTime}
				currentTime={currentTime}
				duration={duration}
				title={item?.title}
				isPlaying={!paused}
				goBack={goBack}
				seekForward={seekForward}
				seekBackward={seekBackward}
				togglePlayPause={togglePlayPause}
			/>
		</PlayerWrapper>
	) : (
		<View />
	);
}
