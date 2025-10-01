import Image from "next/image";
import Link from "next/link";

const GridCategory = ({ category, products, gridCols}: any) => {
    const banners: any = {
        "women-clothing": { image: "/assets/images/no-image.png", text: "See more" },
        "kids": { image: "/assets/images/no-image.png", text: "Shop now" },
        "beauty": { image: "/assets/images/no-image.png", text: "See more" },
        "shoes": { image: "/assets/images/no-image.png", text: "Shop now" },
    };

    const banner = banners[category];

    if (banner) {
        return (
            <div className="flex flex-col bg-white border rounded p-2">
                <h3 className="font-bold my-2 uppercase">{category.replace("-", " ")}</h3>
                <div className="relative h-[420px]">
                    <Image
                        src={banner.image}
                        alt={category}
                        fill
                        className="object-cover rounded"
                    />
                    <div className="absolute bottom-2 left-2 bg-white bg-opacity-75 p-1 rounded">
                        <Link href={`/browse?category=${category}`}>
                            <h4 className="text-xs cursor-pointer hover:underline text-blue-500">{banner.text}</h4>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // Fallback to original product display if not a banner category
    const length = gridCols * gridCols;
    const selectedProducts = products.filter( (product: any) => ( category == product.category.slug)).slice(0, length);
    return (
        <div className="flex flex-col bg-white border rounded p-2">
                <h3 className="font-bold my-2 uppercase">{category.replace("-"," ")}</h3>
                <div className={`h-full grid grid-cols-${gridCols} gap-4 m-1  items-center`}>

                {selectedProducts.map((product: any) => (
                        <Link href={`/product/${product.slug}`} key={product._id}>
                            <div className={`relative  ${length > 1 ? 'h-[200px]' : 'h-[420px]'}`}>
                                <Image
                                    src={product.subProducts[0].images[0].url}
                                    alt={product.name}
                                    fill
                                    className="object-cover rounded"
                                />
                            </div>
                            {length > 1 && (<h4 className="text-xs mt-1">{product.name}</h4>)}
                        </Link>
                    ))}



                </div>
                {length > 1 ? (
                    <Link href={`/browse?category=${category}`}>
                        <h4 className="text-xs cursor-pointer hover:underline text-blue-500 my-2">See more</h4>
                    </Link>
                ) : (
                    <Link href={`/browse?category=${category}`}>
                        <h4 className="text-xs cursor-pointer hover:underline text-blue-500 my-2">Shop now</h4>
                    </Link>
                )}
        </div>
     );
}
 
export default GridCategory;
