function videoSlider() {
  return {
    videos: [
      {
        title: "Épisode 1: Titre de la vidéo",
        image: "assets/images/videos/video-1-thumbnail.png",
        link: "https://youtube.com/video1",
      },
      {
        title: "Épisode 2: Titre de la vidéo",
        image: "assets/images/videos/video-2-thumbnail.png",
        link: "https://youtube.com/video2",
      },
      {
        title: "Épisode 3: Titre de la vidéo",
        image: "assets/images/videos/video-1-thumbnail.png",
        link: "https://youtube.com/video3",
      },
      {
        title: "Épisode 4: Titre de la vidéo",
        image: "assets/images/videos/video-2-thumbnail.png",
        link: "https://youtube.com/video2",
      },
      {
        title: "Épisode 5: Titre de la vidéo",
        image: "assets/images/videos/video-1-thumbnail.png",
        link: "https://youtube.com/video3",
      },
      {
        title: "Épisode 6: Titre de la vidéo",
        image: "assets/images/videos/video-2-thumbnail.png",
        link: "https://youtube.com/video2",
      },
      {
        title: "Épisode 7: Titre de la vidéo",
        image: "assets/images/videos/video-1-thumbnail.png",
        link: "https://youtube.com/video3",
      },
    ],
    currentIndex: 0,

    get visibleVideos() {
      const totalVideos = this.videos.length;
      return [
        this.videos[this.currentIndex % totalVideos],
        this.videos[(this.currentIndex + 1) % totalVideos],
        this.videos[(this.currentIndex + 2) % totalVideos],
      ];
    },

    nextSlide() {
      if (this.currentIndex < this.videos.length - 1) {
        this.currentIndex++;
      }
    },

    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
  };
}

// function videoSlider() {
//   return {
//     currentSlide: 0,
//     videos: [
//       {
//         title: "Épisode 1: Titre de la vidéo",
//         image: "assets/images/videos/video-1-thumbnail.png",
//         link: "https://youtube.com/video1",
//       },
//       {
//         title: "Épisode 2: Titre de la vidéo",
//         image: "assets/images/videos/video-2-thumbnail.png",
//         link: "https://youtube.com/video2",
//       },
//       {
//         title: "Épisode 3: Titre de la vidéo",
//         image: "assets/images/videos/video-1-thumbnail.png",
//         link: "https://youtube.com/video3",
//       },
//     ],
//     nextSlide() {
//       this.currentSlide = (this.currentSlide + 1) % this.videos.length;
//     },
//     prevSlide() {
//       this.currentSlide =
//         (this.currentSlide - 1 + this.videos.length) % this.videos.length;
//     },
//   };
// }
