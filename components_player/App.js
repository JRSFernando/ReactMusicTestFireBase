import React, { Component } from 'react';
import Player from './Player';

export const TRACKS = [
  {
    title: 'Stressed Out',
    artist: 'Twenty One Pilots',
    albumArtUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
    audioUrl: "http://timformation.net/music/Alternative/Twenty%20One%20Pilots%20-%20Stressed%20Out.mp3",
  },
  {
    title: 'Love Yourself',
    artist: 'Justin Bieber',
    albumArtUrl: "http://arrestedmotion.com/wp-content/uploads/2015/10/JB_Purpose-digital-deluxe-album-cover_lr.jpg",
    audioUrl: 'https://dl.musicbazz.ir/music/khareji/J/Justin%20Bieber/This%20Is%20Justin%20Bieber%20%282018%29%20Www.MusicBazz.Ir/05%20Love%20Yourself.mp3',
  },
  {
    title: 'Hotline Bling',
    artist: 'Drake',
    albumArtUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png',
    audioUrl: 'http://s2.faz-dl3.ir/ali/music/farv/album/billboard%20hot%20100%20april%202016/028.%20Drake%20-%20Hotline%20Bling.mp3',
  },
  {
    title: 'Strawberry Swing',
    artist: 'Coldplay',
    albumArtUrl: 'https://i.pinimg.com/736x/30/f9/c1/30f9c10a69c6833641fdd9ea1c7f9693.jpg',
    audioUrl: 'http://dl4.mid.az:81/endir.php?file=uploads/Sanya/coldplay_-_strawberry_swing_www.mid.az.mp3',
  },
  {
    title: 'One Headlight',
    artist: 'The Wallflowers',
    albumArtUrl: 'https://images-na.ssl-images-amazon.com/images/I/71cAAwy-r-L._SX355_.jpg',
    audioUrl: 'https://s-a7565b77.mp3engine.xyz/2166a999587d472fe8201/The%20Wallflowers%20-%20One%20Headlight.mp3',
  },
];

export default class App extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return <Player tracks={TRACKS} navigation={this.props.navigation} />
  }
}


