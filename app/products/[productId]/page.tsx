import { Metadata } from "next";

type Props = {
    params:{
        productId:string
    }
}
export const generateMetadata = ({params}): Props): Promise<Metadata> => {
    const title = await new Promise(resolve => {
        setTimeout(() =>{
            resolve(`Iphone ${params.productId}`)
        },1000 )
    });

    return{
        title: `Product ${title}`,
    }
    
}

export default function ProductDetails({params}:{params:{productID:string}}) {
    return <h1>Details about product {params.productID}</h1>;
}