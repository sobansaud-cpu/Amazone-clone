import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import MenuSideBar from "@/components/Header/MenuSidebar";
import Product from "@/models/Product";
import Category from "@/models/Category";
import db from "@/utils/db";
import Link from "next/link";

export default function Browse({ products }: any) {
    return (
        <>
            <Header title="Browse Products" />
            <main className="max-w-screen-2xl mx-auto bg-gray-100 min-h-screen p-4">
                <h1 className="text-2xl font-bold mb-6">All Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.map((product: any) => (
                        <Link key={product._id} href={`/product/${product.slug}`}>
                            <div className="bg-white p-4 rounded shadow hover:shadow-lg cursor-pointer">
                                <img 
                                    src={product.subProducts[0].images[0].url} 
                                    alt={product.name}
                                    className="w-full h-48 object-cover mb-2"
                                />
                                <h3 className="font-semibold">{product.name}</h3>
                                <p className="text-gray-600">{product.brand}</p>
                                <p className="text-red-500 font-bold">
                                    ${product.subProducts[0].sizes[0].price}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
            <Footer />
            <MenuSideBar />
        </>
    );
}

export const getServerSideProps = async () => {
    db.connectDb();
    const products = await Product.find()
        .populate({ path: "category", model: Category })
        .sort({ updatedAt: -1 })
        .lean();
    db.disconnectDb();
    return {
        props: {
            products: JSON.parse(JSON.stringify(products)),
        },
    };
};