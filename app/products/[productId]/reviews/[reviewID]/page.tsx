import { stringify } from "querystring"

export default function ReviewDetail({params}:) {
    params: {
        productId: string
        reviewId: string


    }
    return <h1>
        Review {} for product {}
    </h1>
}