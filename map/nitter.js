const colors = require('colors');

const tweets = [
  {
    username: 'dril',
    text: 'Update from the good time line—Bacion is legal to eat at work thanks to President Banksy in the whitehouse, now known as the star wars house',
    displayName: 'wint',
    postId: 2,
    likes: 3999,
    replies: 137
  },
  {
    username: 'Leemanish',
    displayName: 'blake',
    text: 'Sick of having to go to 2 different huts to buy pizza & sunglasses.',
    postId: 3,
    likes: 4736,
    replies: 15
  },
  {
    username: 'queer_queenie',
    displayName: 'Queenie',
    text: `i hold a gender reveal party. all my relatives wait as i pull off the cake cover. the icing says "gender is a spectrum". it's too late, i have the powerpoint up`,
    postId: 4,
    likes: 8349,
    replies: 132
  },
  {
    username: 'phranqueigh',
    displayName: 'Frankie Zelnick',
    text: "How dare you call me mentally unstable, on this, the day of my cat's quinceanera.",
    postId: 5,
    likes: 3612,
    replies: 16
  }
];

console.log(tweets)

const convertNumber = (number) => {
  if (number < 1000) {
    return number.toString();
  }

  return (Math.floor(number / 100) / 10).toString() + 'K'
}

const getDisplayTweets = (tweet) => (`${tweet.displayName.blue}
@${tweet.username}

${tweet.text}

💙 ${convertNumber(tweet.likes).bold}  🗨 ${convertNumber(tweet.replies).bold}  🔗 Copy Link`)

const displayTweets = tweets.map(getDisplayTweets);
displayTweets.forEach((displayTweet) => console.log(displayTweet + '\n'))
