const CONFIG = {
  // profile setting (required)
  profile: {
    name: "LYH",
    image: "/myown.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "倔强青铜选手",
    bio: "stop learning, start dying",
    email: "1437891764@qq.com",
    linkedin: "liyonghui",
    github: "yonghuili1",
    instagram: "",
  },
  projects: [
    {
      name: `blog`,
      href: "https://github.com/yonghuili1/blog",
    },
  ],
  // blog setting (required)
  blog: {
    title: "LYH'S BLOG",
    description: "welcome to lyh's blog!",
    theme: "light", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://liyonghui.cn/",
  since: 2022, // If leave this empty, current year will be used.
  lang: "zh-CN", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || "G-8S66JX2F28",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || "LB_5D8vcCdOsjTdqnm2pCUvaSszAyiAXsfFzHBC-VkM",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "yonghuili1/blog",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
