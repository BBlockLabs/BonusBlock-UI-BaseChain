import ProfilImage from '../assets/images/profile.jpg';

export type User = {
  id: string;
  name: string;
  invitedBy: string;
  rank: string;
  points: string;
  avatar: string;
};

export const mockLeaderboard = [
  {
    id: '1',
    name: 'BurntDisco',
    invitedBy: 'Neo827',
    rank: '12312',
    points: '34,986',
    avatar: ProfilImage
  },
  {
    id: '2',
    name: 'BurntDisco',
    invitedBy: 'Neo827',
    rank: '1',
    points: '34,986',
    avatar: ProfilImage
  },
  {
    id: '3',
    name: 'BurntDisco',
    invitedBy: 'Neo827',
    rank: '2',
    points: '34,986',
    avatar: ProfilImage
  },
  {
    id: '4',
    name: 'BurntDisco',
    invitedBy: 'Neo827',
    rank: '3',
    points: '34,986',
    avatar: ProfilImage
  },
  {
    id: '5',
    name: 'BurntDisco',
    invitedBy: 'Neo827',
    rank: '4',
    points: '34,986',
    avatar: ProfilImage
  },
  {
    id: '6',
    name: 'BurntDisco',
    invitedBy: 'Neo827',
    rank: '5',
    points: '34,986',
    avatar: ProfilImage
  },
  {
    id: '7',
    name: 'BurntDisco',
    invitedBy: 'Neo827',
    rank: '6',
    points: '34,986',
    avatar: ProfilImage
  },
  {
    id: '8',
    name: 'BurntDisco',
    invitedBy: 'Neo827',
    rank: '7',
    points: '34,986',
    avatar: ProfilImage
  },
  {
    id: '9',
    name: 'BurntDisco',
    invitedBy: 'Neo827',
    rank: '8',
    points: '34,986',
    avatar: ProfilImage
  },
  {
    id: '10',
    name: 'BurntDisco',
    invitedBy: 'Neo827',
    rank: '9',
    points: '34,986',
    avatar: ProfilImage
  },
];

export type RecentJoin = {
  id: string;
  name: string;
  invitedBy: string;
  time: string;
  avatar: string;
};

export const mockRecentJoins = [
  {
    id: '1',
    name: 'BurntDisco',
    invitedBy: 'Neo827',
    time: '5 minutes ago',
    avatar: ProfilImage
  },
  {
    id: '2',
    name: 'BurntDisco',
    invitedBy: 'Neo827',
    time: '5 minutes ago',
    avatar: ProfilImage
  },
  {
    id: '3',
    name: 'BurntDisco',
    invitedBy: 'Neo827',
    time: '5 minutes ago',
    avatar: ProfilImage
  },
  {
    id: '4',
    name: 'BurntDisco',
    invitedBy: 'Neo827',
    time: '5 minutes ago',
    avatar: ProfilImage
  },
  {
    id: '5',
    name: 'BurntDisco',
    invitedBy: 'Neo827',
    time: '5 minutes ago',
    avatar: ProfilImage
  },
  {
    id: '6',
    name: 'BurntDisco',
    invitedBy: 'Neo827',
    time: '5 minutes ago',
    avatar: ProfilImage
  },
  {
    id: '7',
    name: 'BurntDisco',
    invitedBy: 'Neo827',
    time: '5 minutes ago',
    avatar: ProfilImage
  },
  {
    id: '8',
    name: 'BurntDisco',
    invitedBy: 'Neo827',
    time: '5 minutes ago',
    avatar: ProfilImage
  },
  {
    id: '9',
    name: 'BurntDisco',
    invitedBy: 'Neo827',
    time: '5 minutes ago',
    avatar: ProfilImage
  },
  {
    id: '10',
    name: 'BurntDisco',
    invitedBy: 'Neo827',
    time: '5 minutes ago',
    avatar: ProfilImage
  },
];

export const mockBridgeData = [
    {
        id: '1',
        name: 'Bridge 1',
        chain: 'Ethereum',
        description: 'Copy description lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        steps: [
            'Step 1: Brief step description lorem ipsum dolor sit amet,',
            'Step 2: Brief step description lorem ipsum dolor sit amet,',
        ],
    },
    {
        id: '2',
        name: 'Bridge 2',
        chain: 'Ethereum',
        description: 'Copy description lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
        steps: [
            'Step 1: Brief step description lorem ipsum dolor sit amet,',
            'Step 2: Brief step description lorem ipsum dolor sit amet,',
        ],
    },
];
