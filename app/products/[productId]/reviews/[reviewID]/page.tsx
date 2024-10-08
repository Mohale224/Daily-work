import { notFound } from "next/navigation";

function getRandomInt (count: number){
    return Math.floor(Math.random() * count);
}

export default function ReviewDetail({
    params,
}: {
    params: {
        productId: string;
        reviewId: string;
    };
}) {
    if(parseInt(params.reviewId) > 1000) {
        notFound();
    }
    return (
    <h1>
        Review details are here {params.reviewId} for product {params.productId}
        </h1>
        );
      } 