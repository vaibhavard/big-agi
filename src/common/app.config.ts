/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md               all over
 *  - package.json            app-slug and version
 *  - [public/manifest.json]  name, short_name, description, theme_color, background_color
 */
export const Brand = {
  Title: {
    Base: 'CoolAGI',
    Common: (process.env.NODE_ENV === 'development' ? '[DEV] ' : '') + 'CoolAGI',
  },
  Meta: {
    Description: 'An Opensource alternative to OpenAI GPT-4 Plus packed with a powerful code-interpreter and Free access to gpt-4 & gpt-4-vision',
    SiteName: 'CoolAGI | Limits? Tier? What is that? We provide unlimited and free access to llms.',
    ThemeColor: '#32383E',
    TwitterSite: '@enricoros',
  },
  URIs: {
    Home: 'https://github.com/nextgen-user/CoolAGI',
    // App: 'https://get.big-agi.com',
    CardImage: 'https://github.com/nextgen-user/freegpt4plus/assets/150797204/9b0e1232-4791-4d61-b949-16f9eb284c22',
    OpenRepo: 'https://github.com/nextgen-user/CoolAGI',
    OpenProject: 'https://github.com/users/enricoros/projects/4',
    SupportInvite: 'https://discord.com/invite/vNft3Un2',
    // Twitter: 'https://www.twitter.com/enricoros',
    PrivacyPolicy: 'https://big-agi.com/privacy',
  },
};
