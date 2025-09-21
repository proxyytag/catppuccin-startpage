// User configuration for the startpage - update the palette, location, and your preferred tabs, categories, and links

// Define preferred palette for light and dark mode
// Available themes: latte, frappe, mocha, macchiato
const preferredLightTheme = latte;
const preferredDarkTheme = macchiato;

let palette = initThemeSystem(preferredLightTheme, preferredDarkTheme);

const default_configuration = {
  overrideStorage: true,
  temperature: {
    location: "Dublin",
    scale: "C",
  },
  clock: {
    format: "k:i p",
    icon_color: palette.maroon,
  },
  additionalClocks: [
    {
      label: "UA",
      timezone: "Europe/Kyiv",
      format: "h:i",
      icon_color: palette.peach,
    },
  ],
  search: {
    engines: {
      p: ["https://www.perplexity.ai/search/?q=", "PerplexityAI"],
      d: ["https://duckduckgo.com/?q=", "DuckDuckGo"],
      g: ["https://google.com/search?q=", "Google"],
    },
    default: "d",
  },
  keybindings: {
    "s": "search-bar",
  },
  disabled: [],
<<<<<<< HEAD:userconfig.js
  fastlink: "",
=======
  localIcons: true,
  localFonts: true,
  fastlink: "https://www.perplexity.ai",
>>>>>>> c7ab74cd2439ad8e78c8319a66639cb585b0e984:userconfig.example.js
  openLastVisitedTab: true,
   tabs: [
    {
<<<<<<< HEAD:userconfig.js
      name: "home",
      background_url: `src/img/banners/cbg-10.gif`,
=======
      name: "myself",
      background_url: "src/img/banners/banner_09.gif",
>>>>>>> c7ab74cd2439ad8e78c8319a66639cb585b0e984:userconfig.example.js
      categories: [
        {
          name: "",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.blue,
            },
<<<<<<< HEAD:userconfig.js
             {
=======
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "уп",
              url: "https://www.pravda.com.ua",
              icon: "news",
              icon_color: palette.green,
            },
            {
              name: "mil.in.ua",
              url: "https://mil.in.ua",
              icon: "badge-filled",
              icon_color: palette.peach,
            },
            {
              name: "куток",
              url: "https://kutok.io",
              icon: "border-radius",
              icon_color: palette.red,
            },
            {
              name: "ґрунт",
              url: "https://grnt.media",
              icon: "eye-bolt",
              icon_color: palette.blue,
            },
            {
              name: "village",
              url: "https://www.village.com.ua",
              icon: "home-2",
              icon_color: palette.mauve,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/banner_07.gif",
      categories: [
        {
          name: "development",
          links: [
            {
>>>>>>> c7ab74cd2439ad8e78c8319a66639cb585b0e984:userconfig.example.js
              name: "github",
              url: "https://github.com/proxas",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "docs",
              url: "https://docs.google.com/document/u/0/",
              icon: "file-text",
              icon_color: palette.blue,
            },
            {
<<<<<<< HEAD:userconfig.js
              name: "netlify",
              url: "https://app.netlify.com/",
              icon: "square-rotated",
=======
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "kaggle",
              url: "https://www.kaggle.com",
              icon: "brain",
              icon_color: palette.green,
            },
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.peach,
            },
            {
              name: "exercism",
              url: "https://exercism.org",
              icon: "code-minus",
              icon_color: palette.red,
            },
            {
              name: "aoc",
              url: "https://adventofcode.com",
              icon: "brand-linktree",
>>>>>>> c7ab74cd2439ad8e78c8319a66639cb585b0e984:userconfig.example.js
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "",
          links: [
            {
<<<<<<< HEAD:userconfig.js
=======
              name: "dou",
              url: "https://dou.ua",
              icon: "brand-prisma",
              icon_color: palette.green,
            },
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.peach,
            },
            {
              name: "uber engineering",
              url: "https://www.uber.com/en-GB/blog/london/engineering",
              icon: "brand-uber",
              icon_color: palette.red,
            },
            {
              name: "netflix tech blog",
              url: "https://netflixtechblog.com",
              icon: "brand-netflix",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/banner_08.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "telegram",
              url: "https://web.telegram.org",
              icon: "brand-telegram",
              icon_color: palette.green,
            },
            {
              name: "facebook",
              url: "https://www.facebook.com",
              icon: "brand-facebook",
              icon_color: palette.peach,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/r/unixporn",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "IGN",
              url: "https://www.ign.com/account/playlist/library",
              icon: "device-gamepad",
              icon_color: palette.green,
            },
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.peach,
            },
            {
              name: "epicgames",
              url: "https://store.epicgames.com",
              icon: "brand-fortnite",
              icon_color: palette.red,
            },
            {
              name: "nintendo",
              url: "https://store.nintendo.co.uk",
              icon: "device-nintendo",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "anilist",
              url: "https://anilist.co/home",
              icon: "brand-funimation",
              icon_color: palette.green,
            },
            {
>>>>>>> c7ab74cd2439ad8e78c8319a66639cb585b0e984:userconfig.example.js
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/",
              icon: "brand-reddit",
              icon_color: palette.peach,
            },
            {
              name: "twitter",
              url: "https://twitter.com",
              icon: "brand-twitter",
              icon_color: palette.sky,
            },
			{
              name: "bluesky",
              url: "https://bsky.app",
              icon: "brand-bluesky",
              icon_color: palette.sky,
            },
          ],
        },
        {
          name: "",
          links: [
                {
                  name: "XMA",
                  url: "https://www.xivmodarchive.com",
                  icon: "x",
                  icon_color: palette.maroon,
                },
                {
                  name: "heliosphere",
                  url: "https://heliosphere.app/",
                  icon: "dog",
                  icon_color: palette.yellow,
                },
                {
                  name: "archipelago",
                  url: "https://archipelago.gg/",
                  icon: "circle-dotted",
                  icon_color: palette.peach,
                }
          ]
        },
        {
          name: "",
          links: [
                {
                  name: "Fugi",
                  url: "https://reactive.fugi.tech/",
                  icon: "settings",
                  icon_color: palette.maroon,
                },
                {
                  name: "Voltaic",
                  url: "https://beta.voltaic.gg/",
                  icon: "letter-v",
                  icon_color: palette.yellow,
                },
                {
                  name: "sheets",
                  url: "https://docs.google.com/spreadsheets/u/0/",
                  icon: "brand-google",
                  icon_color: palette.peach,
                }
          ]
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_configuration, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
