import { slugify } from "@/app/helper/slugify";
import Link from "next/link";
import { TiHome } from "react-icons/ti";

const Breadcrumbs = ({ title, categories }) => {

    return (
        <div className="breadcrumbs text-sm">
            <ul>
                <li>
                    <Link href="/article"
                    >
                        <TiHome />
                    </Link>
                </li>
                {categories ? (
                    <li>
                        <Link href={`/articles/${slugify(categories.toLowerCase())}`}>
                            {categories}
                        </Link>
                    </li>
                ) : null}
                <li>
                    <p
                        className="text-mainColor dark:text-baseColor">
                        {title}
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default Breadcrumbs;
