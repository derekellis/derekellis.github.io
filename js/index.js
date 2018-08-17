{
  window.scroll(0, 0);
  const magicBox = document.getElementById('magic-box');
  const height = magicBox.clientHeight;
  const top = magicBox.getBoundingClientRect().top;
  magicBox.style.height = `${height}px`;
  const effect = {
    options: {
      shapeColors: ['#F2385A', '#F5A503', '#E9F1DF', '#4AD9D9', '#36B1BF'],
      totalShapes: 3
    },
    hide: {
      lettersAnimationOpts: {
        duration: () => anime.random(800, 1000),
        delay: () => anime.random(0, 80),
        easing: 'easeInOutExpo',
        opacity: 0,
        translateY: '300%',
        rotateZ: () => anime.random(-50, 50)
      },
      shapesAnimationOpts: {
        duration: 350,
        easing: 'easeOutExpo',
        translateX: t => [t.dataset.tx, anime.random(-25, 25)],
        translateY: t => [t.dataset.ty, anime.random(-25, 25)],
        scale: 1,
        rotate: 0,
        opacity: {
          value: 0,
          duration: 200,
          easing: 'linear'
        }
      }
    },
    show: {
      lettersAnimationOpts: {
        duration: 400,
        delay: (t, i) => i * 40,
        easing: 'easeInExpo',
        opacity: [0, 1],
        scale: [0, 1]
      },
      shapesAnimationOpts: {
        duration: 3500,
        delay: (t, i) => i * 40,
        easing: 'easeOutExpo',
        translateX: () => [0, anime.random(-200, 200)],
        translateY: () => [0, anime.random(-300, 300)],
        scale: t => {
          const s = randomBetween(1, 1.2);
          t.dataset.s = s;
          return [s, s];
        },
        rotate: () => anime.random(-45, 45),
        opacity: {
          value: [1, 0.3],
          duration: 900,
          delay: 300,
          easing: 'linear'
        }
      }
    }
  };

  const words = Array.from(document.querySelectorAll('.intro__word')).map(
    word => new Word(word, effect.options)
  );
  words.forEach(word => word.show(effect.show));
}
