export interface SkeletonTypeVariants {
    variant : "title" | 'image' | "text" | "button"
    className? : string 
}


export interface ILoadable {
    error: null | string,
    loading: boolean
}
