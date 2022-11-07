const colors = require('colors');

const tweets = [
  {
    username: "dril",
    text: "Update from the good time line—Bacion is legal to eat at work thanks to President Banksy in the whitehouse, now known as the star wars house",
    displayName: "wint",
    postId: 2,
    retweets: 1200,
    likes: 8200,
    comments: 28,
  },
  {
    username: "Leemanish",
    displayName: "blake",
    text: "Sick of having to go to 2 different huts to buy pizza & sunglasses.",
    postId: 3,
    retweets: 2900,
    likes: 6300,
    comments: 210,
  },
  {
    username: "queer_queenie",
    displayName: "Queenie",
    text: "i hold a gender reveal party. all my relatives wait as i pull off the cake cover. the icing says \"gender is a spectrum\". it's too late, i have the powerpoint up",
    postId: 4,
    retweets: 16900,
    likes: 70600,
    comments: 730,
  },
  {
    username: "phranqueigh",
    displayName: "Frankie Zelnick",
    text: "How dare you call me mentally unstable, on this, the day of my cat's quinceanera.",
    postId: 5,
    retweets: 5000,
    likes: 9300,
    comments: 121,
  },
];

const getDisplayTweets = (tweet) => (`${colors.bold(tweet.displayName)}
@${tweet.username}

${tweet.text}

${colors.bold(tweet.retweets)} Retweets   ${colors.bold(tweet.likes)} Likes   ${colors.bold(tweet.comments)} Comments`)

const displayTweets = tweets.map(getDisplayTweets);
displayTweets.forEach((displayTweet) => console.log(displayTweet))
