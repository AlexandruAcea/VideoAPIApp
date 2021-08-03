export enum Stacks {
	Main = 'Main',
}

export enum Routes {
	Home = 'HomeScreen',
	ViewMovie = 'ViewMovieScreen',
	Search = 'Search',
}

export type MainStackParams = {
	[Routes.Home]: undefined;
	[Routes.ViewMovie]: undefined;
	[Routes.Search]: undefined;
};
