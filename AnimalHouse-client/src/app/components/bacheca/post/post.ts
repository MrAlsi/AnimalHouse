export interface Post {
    _id: string,
    testo: string,
    img: string,
    user: string,
    mipiace: number,
    like: Array<string>
}