import { HOME_URL, SUPPORT_URL, PAGE_URL, FEATURES_URL } from "@/config/routes";

const links = [
  { path: HOME_URL, label: 'Home' },
  { path: FEATURES_URL, label: 'Features' },
  {
    path: PAGE_URL,
    label: 'Pages',
    children: [
      { path: `${PAGE_URL}/bloggrid`, label: 'Blog Grid' },
      { path: `${FEATURES_URL}/blogsingle`, label: 'Blog Single' },
      { path: `${FEATURES_URL}/signin`, label: 'Sign In' },
      { path: `${FEATURES_URL}/signup`, label: 'Sign Up' },
       { path: `${FEATURES_URL}/404`, label: '404' },
    ]
  },
  { path: SUPPORT_URL, label: 'Support' },
];

export {
  links,
};