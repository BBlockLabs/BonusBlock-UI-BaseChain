export interface Mission {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    xpPoints: number;
    campaignId: string;
    productId: string;
    // icon: string;
    // tags: string[];
    socials?: [{
        link?: string;
        type?: string;
        title?: string;
    }]
    data?: any;
}

// create mock data out of the interface
export const missions: Mission[] = [
    {
        id: '1',
        title: 'Mission 1',
        description: 'Mission 1 description',
        imageUrl: 'https://via.placeholder.com/150',
        xpPoints: 100,
        campaignId: '1',
        productId: '1',
        socials: [
            {
                link: 'https://twitter.com',
                type: 'twitter',
                title: 'Twitter'
            }
        ]
    },
    {
        id: '2',
        title: 'Mission 2',
        description: 'Mission 2 description',
        imageUrl: 'https://via.placeholder.com/150',
        xpPoints: 200,
        campaignId: '2',
        productId: '2',
        socials: [
            {
                link: 'https://twitter.com',
                type: 'twitter',
                title: 'Twitter'
            }
        ]
    },
    {
        id: '3',
        title: 'Mission 3',
        description: 'Mission 3 description',
        imageUrl: 'https://via.placeholder.com/150',
        xpPoints: 300,
        campaignId: '3',
        productId: '3',
        socials: [
            {
                link: 'https://twitter.com',
                type: 'twitter',
                title: 'Twitter'
            }
        ]
    },
    {
        id: '4',
        title: 'Mission 4',
        description: 'Mission 4 description',
        imageUrl: 'https://via.placeholder.com/150',
        xpPoints: 400,
        campaignId: '4',
        productId: '4',
        socials: [
            {
                link: 'https://twitter.com',
                type: 'twitter',
                title: 'Twitter'
            }
        ]
    },
    {
        id: '5',
        title: 'Mission 5',
        description: 'Mission 5 description',
        imageUrl: 'https://via.placeholder.com/150',
        xpPoints: 500,
        campaignId: '5',
        productId: '5',
        socials: [
            {
                link: 'https://twitter.com',
                type: 'twitter',
                title: 'Twitter'
            }
        ]
    },
    {
        id: '6',
        title: 'Mission 6',
        description: 'Mission 6 description',
        imageUrl: 'https://via.placeholder.com/150',
        xpPoints: 600,
        campaignId: '6',
        productId: '6',
        socials: [
            {
                link: 'https://twitter.com',
                type: 'twitter',
                title: 'Twitter'
            }
        ]
    },
];
