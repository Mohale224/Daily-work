import { Metadata} from "next";

type Props = {
    params: {
        productId: string;
    };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const title = await new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve(`iPhone ${params.productId}`);
        }, 100);  // The delay can be adjusted or removed as necessary
    });

    // Return the Metadata object after the async operation is resolved
    return {
        title,  // Using the resolved title from the promise
        description: `Details for product ID: ${params.productId}`,  // Optional: add description or other metadata
    };
};

export default function ProductDetails({ params }: Props) {
    return (
        <h1>
            Details about product {params.productId}
        </h1>
    );
}

