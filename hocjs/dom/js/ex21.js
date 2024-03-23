var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    var offsetX = e.offsetX;
    var progressBarWidth = this.clientWidth;
    var rate = (offsetX * 100) / progressBarWidth;
    progress.style.width = `${rate}%`;
    positionSpace = offsetX;
    offsetWidth = offsetX;
    initialClientX = e.clientX;
    document.addEventListener("mousemove", handleDrag);

    //Xử lý update currentTime và nhạc tại vị trí bấm chuột xuống
    /*
    rate = currentTime * 100 / duration
    ==> currentTime = rate * duration / 100
    */
    var currentTime = (rate * audio.duration) / 100;
    currentTimeEl.innerText = getTime(currentTime);
    audio.currentTime = currentTime;
  }
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  if (e.which === 1) {
    document.addEventListener("mousemove", handleDrag);
    initialClientX = e.clientX;
  }
});

document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrag);
  offsetWidth = positionSpace;
});
var initialClientX = 0;
var offsetWidth = 0; //Khoảng cách ban đầu button so với progressBar
var positionSpace = 0; //Khoảng cách kéo thêm tại vị trí ban đầu tới vị trí mới
var handleDrag = function (e) {
  var clientX = e.clientX;

  positionSpace = offsetWidth + (clientX - initialClientX);
  var progressBarWidth = progressBar.clientWidth;
  var rate = (positionSpace * 100) / progressBarWidth;
  if (rate < 0) {
    rate = 0;
  }
  if (rate > 100) {
    rate = 100;
  }
  progress.style.width = `${rate}%`;
};

//Xây dựng trình phát nhạc
var audio = document.querySelector("audio");
var durationEl = progressBar.nextElementSibling;
var currentTimeEl = progressBar.previousElementSibling;
var playBtn = document.querySelector(".player .player-action i");
var getTime = function (seconds) {
  var mins = Math.floor(seconds / 60);
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};

//Lắng nghe sự kiện khi file mp3 được tải xong và trình duyệt lấy được thông tin
durationEl.innerText = getTime(audio.duration);
audio.addEventListener("loadeddata", function () {
  durationEl.innerText = getTime(audio.duration);
});

//Khi người dùng click vào nút play
playBtn.addEventListener("click", function () {
  //Nếu nhạc đang dừng --> Phát nhạc
  //Nếu nhạc đang chạy --> Dừng nhạc
  if (audio.paused) {
    audio.play();
    this.classList.remove("fa-play");
    this.classList.add("fa-pause");
  } else {
    audio.pause();
    this.classList.remove("fa-pause");
    this.classList.add("fa-play");
  }
});

//Khi nhạc đang phát
audio.addEventListener("timeupdate", function () {
  currentTimeEl.innerText = getTime(audio.currentTime);
  //Tính tỷ lệ phần trăm
  var rate = (audio.currentTime / audio.duration) * 100;
  progress.style.width = `${rate}%`;
});

//Xử lý chức năng Karaoke
console.log(lyrics);

var requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

var cancelAnimationFrame =
  window.cancelAnimationFrame || window.mozCancelAnimationFrame;

var requestId;

var karaokeInner = document.querySelector(".karaoke .karaoke-inner");

audio.addEventListener("play", function () {
  requestId = requestAnimationFrame(handleKaraoke);
});

audio.addEventListener("pause", function () {
  cancelAnimationFrame(requestId);
});
var currentIndex;
var handleKaraoke = function () {
  var currentTime = audio.currentTime * 1000; //Giây --> mili giây
  handleColorKaraoke(currentTime);
  var index = lyrics.findIndex(function (wordsItem) {
    var words = wordsItem.words;
    var firstWord = words[0];
    var lastWord = words[words.length - 1];
    return (
      currentTime >= firstWord.startTime && currentTime <= lastWord.endTime
    );
  });

  if (index !== -1 && currentIndex !== index) {
    if (index === 0) {
      karaokeInner.innerHTML = `
      <p>${getSentences(0)}</p>
      <p>${getSentences(1)}</p>
      `;
    } else {
      /*
        index = 1 --> Ẩn dòng đầu (0) --> Hiển thị index = 2
        index = 2 --> Ẩn dòng hai (1) --> Hiển thị index = 3
        index = 3 --> Ẩn dòng đầu (0) --> Hiển thị index = 4
        index = 4 --> Ẩn dòng hai (1) --> Hiển thị index = 5
      */
      setTimeout(function () {
        if (index % 2 !== 0) {
          nextSentence(karaokeInner.children[0], getSentences(index + 1));
        } else {
          nextSentence(karaokeInner.children[1], getSentences(index + 1));
        }
      }, 500);
    }

    currentIndex = index;
  }
  requestId = requestAnimationFrame(handleKaraoke);
};

//Hiển thị 2 câu dựa vào index
/*
Câu 1: index
Câu 2: index+1
*/
var getSentences = function (index) {
  //Bước 1: Tạo 1 mảng chứa các từ trong 1 câu
  var sentencesArr = lyrics[index].words.map(function (item) {
    return `<span class="words" data-start-time="${item.startTime}" data-end-time="${item.endTime}">${item.data}<span>${item.data}</span></span>`;
  });
  //Bước 2: Nối các từ trong 1 câu ==> Chuỗi
  var sentences = sentencesArr.join(" ");
  return sentences;
};

//Hiển thị câu tiếp theo
var nextSentence = function (element, sentence) {
  //element: Dòng sẽ ẩn
  //sentence: Câu tiếp theo sẽ hiển thị
  //Ẩn dòng mong muốn --> Chờ 500ms --> Thêm nội dung thay thế --> Hiển thị
  element.style.opacity = 0;
  element.style.transition = `opacity 0.3s ease-in-out`;
  setTimeout(function () {
    element.innerHTML = sentence;
    element.style.opacity = 1;
  }, 300);
};

//Xử lý chạy màu cho từng từ
var handleColorKaraoke = function (currentTime) {
  var wordsEl = karaokeInner.querySelectorAll(".words");
  if (wordsEl.length) {
    wordsEl.forEach(function (wordEl, index) {
      var startTime = wordEl.dataset.startTime;
      var endTime = wordEl.dataset.endTime;

      if (currentTime > startTime && currentTime < endTime) {
        //Tính phần trăm của vị trí hiện tại so với khoảng thời gian bắt đầu của từ
        var rate = ((currentTime - startTime) * 100) / (endTime - startTime);
        wordEl.children[0].style.width = `${rate}%`;
      }

      if (currentTime >= endTime) {
        wordEl.children[0].style.width = `100%`;
      }
    });
  }
};
