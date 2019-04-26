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
];

export default class App extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return <Player tracks={TRACKS} navigation={this.props.navigation} />
  }
}


