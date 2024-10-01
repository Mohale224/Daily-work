export default function ProductDetails({params}:{params:{productID:string}}) {
    return <h1>Product details are here {params.productID}</h1>;
}