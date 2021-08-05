# VideoAPIApp
React Native application created as a technical test. It consumes data from a Video Database API and presents popular movies and TV Shows
It was created using create-react-native-app and written in *Typescript*.

As you can read in this description you can see how this app is created with the only goal in mind to be clean, well structured and highly scalable.
I took more care making sure that's the case, than supporting multiple platforms like TVOS, but those can easily be ported with how the application works. In fact it is so modular that the store, the API functions and the general components can be packaged in a common place to be used on any platform with React Native.

# Small documentation

This project is a sure way to demonstrate how I structure all my projects, be they for React Native of for the Web.
This pattern that I'm using revolves a lot around using hooks combined with redux and context.

## How the logic is structured:

The API methods are stored inside React Context and they can be called from any redux action. In order to track actions that do API calls 
and to give them a success, loading and error state, I have created a common useActivty hook and action that takes a unique ID and ActionType.

In order to maintain a clean structure, instead of the old ways of using dumb and smart components, I'm usually putting all the dispatch actions and selectors inside custom hooks. Those hooks can be simple or they can be quite complex, being able to call many actions and return heavily modified data from the store.

Usually the data returned from a hook looks like [{data - from a selector, loading, error - from useActivity}, handler - the handler can contain any function or number of functions that deal with the redux store or with the inner state of the particular custom hook]

## How the UI is structured:

To keep things simple and well structured I have created a bunch of general components called Layout and Typography that I then used all around the app for great consistency. Layout contains the basic components for a new Screen, a simple flex box and a Touchable item. Meanwhile the Typography components contains all the common typography elements with predefined styles. Everything is made to be scalable and consistent.

I also used StyledComponents and I separated most of the components in Component.tsx and Component.style.tsx for a better focus on UI work or logic, even though they are a laot of inline styles around the app where needed. I personally enjoy using styled-components on all my projects because it cleans the code a lot and opens the gates for some great CSS only logic, which is super fast and efficient.

### Video Player

Just wanted to point out that I wanted the video player to behave sort of like the YouTube app such that when you open the video it automatically rotates the screen and locks it in place while showing the controls. It took some small math exercises to make the seeker bar sync up and display the time correctly but it works pretty well as a video player.

Other than that, the main screens are all located inside the /screens folder and all of them are being managed by the Router.

# Usage video
https://user-images.githubusercontent.com/29049511/128422511-587cba34-d995-4b78-a3fc-b8cc62f0a953.MP4


I really hope you enjoyed this application as much as I enjoyed making it, I managed to only work on it for around 14 straight hours the last weekened and it felt like a damn hackathon haha! If you have any other questions regarding patterns or libraries or just ways of thinking I used to created this I'm more than happy to discuss further and obviously any sort of feedback is extremely welcome.

