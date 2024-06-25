
export const getNextBadgeXp = (currentBadgeXp: number): number => {
    if (currentBadgeXp < 1000) {
        return 1000;
    }

    if (currentBadgeXp < 2000) {
        return 2000;
    }

    if (currentBadgeXp < 5000) {
        return 5000;
    }

    else {
        return 10000;
    }
}