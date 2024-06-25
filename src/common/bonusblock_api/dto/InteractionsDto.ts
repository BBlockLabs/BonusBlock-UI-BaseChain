export default class InteractionsDto {
    interactions: { [id: string]: number } = {};
    from: string = "";
    to: string = "";
    truncateTo: string = "";
}
