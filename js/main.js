function videoSlider() {
  return {
    videos: [
      {
        title: "Une victoire paysanne et environnementale !",
        image: "https://img.youtube.com/vi/EIWlnsHsTB8/mqdefault.jpg",
        link: "https://www.youtube.com/watch?v=EIWlnsHsTB8",
      },
      {
        title: 'Bande annonce "Le temps d\'une lutte"',
        image: "https://img.youtube.com/vi/ZH--tN3v0Uk/mqdefault.jpg",
        link: "https://www.youtube.com/watch?v=ZH--tN3v0Uk",
      },
      {
        title: "Transmettre sa ferme",
        image: "https://img.youtube.com/vi/WIOt-sKcwRU/mqdefault.jpg",
        link: "https://www.youtube.com/watch?v=WIOt-sKcwRU",
      },
      {
        title:
          "Transhumance climatique - les abeilles au cœur du bouleversement",
        image: "https://img.youtube.com/vi/4H4AovBMhoc/mqdefault.jpg",
        link: "www.youtube.com/watch?v=4H4AovBMhoc",
      },
      {
        title: 'Bande annonce "Le champ du local"',
        image: "https://img.youtube.com/vi/OLqjSwXYILk/mqdefault.jpg",
        link: "https://www.youtube.com/watch?v=OLqjSwXYILk",
      },
      {
        title:
          "L'eau à la ferme : stratégies paysannes et changement climatique en Bretagne",
        image: "https://img.youtube.com/vi/JAijq39lEcw/mqdefault.jpg",
        link: "https://www.youtube.com/watch?v=JAijq39lEcw",
      },
    ],
    currentIndex: 0,
    dragStartX: null,
    dragging: false,

    get visibleVideos() {
      const totalVideos = this.videos.length;
      return [
        this.videos[this.currentIndex % totalVideos],
        this.videos[(this.currentIndex + 1) % totalVideos],
        this.videos[(this.currentIndex + 2) % totalVideos],
      ];
    },

    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.videos.length;
    },

    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.videos.length) % this.videos.length;
    },

    // Drag events
    onDragStart(e) {
      this.dragging = true;
      this.dragStartX =
        e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    },
    onDragMove(e) {
      if (!this.dragging) return;
      const currentX =
        e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
      const diff = currentX - this.dragStartX;
      if (Math.abs(diff) > 50) {
        // Sensitivity
        if (diff < 0) {
          this.nextSlide();
        } else {
          this.prevSlide();
        }
        this.dragging = false;
      }
    },
    onDragEnd() {
      this.dragging = false;
      this.dragStartX = null;
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
